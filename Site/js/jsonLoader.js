/**
 * JSONLoader v2.0 by Andreas Langnes
 * Main function with helpers, inspired by the
 * original JSONLoader by Sebastian Ellefsen.
 * Loads, renders and outputs the content of a JSON file
 * @param {string} file full path to the JSON file
 * @param {string} template full path to the HTML file with placeholder tags
 * @param {function} callback changes the content of HTML tags
 */

async function JSONLoader(file, template, callback) {
	// These almost identical function calls uses the async/await keywords
	// to get the data in the order we need it
	// They then convert the data to their respective needed formats, JSON and plaintext HTML
	let json = await getFile(file)
		.then((data) => {
			return data.json()
		})
		.catch((err) => console.error('Loading went wrong: ' + err))
	let temp = await getFile(template)
		.then((data) => {
			return data.text()
		})
		.catch((err) => console.error('Loading went wrong: ' + err))

	// "returns" the parsed template in the callback function
	let parsedTemplate = parseTemplate(json, temp)
	callback(parsedTemplate)
}

/**
 * getFile
 * A function that fetches the file
 * @param {string} file
 */
function getFile(file) {
	let returnedFile = fetch(file)
	return returnedFile
}

/**
 * parseTemplate
 * Takes the JSON response we got in JSONLoader together with a template and
 * replaces the placeholders in the template with the content in the JSON file
 * @param {JSON} content
 * @param {HTML} template
 */
function parseTemplate(content, template) {
	// Makes a RegEx-pattern which recognizes template tags
	const ptrn = new RegExp(/{{\s*([a-z.]+)\s*}}/, 'g')
	let pairs = []
	let match

	// Continues to fill the pairs-list until no matches
	// between template-tags and json object are found
	while ((match = ptrn.exec(template)) !== null) {
		// Creates an object with templateString as the string
		// gotten from the HTML template and the content as the
		// content from the json object
		// example:
		// { templateString: "{{ name }}", content: "sjokoladekake" }
		let matchedData = {
			templateString: match[0],
			content: eval('content.' + match[1]),
		}
		let matchedObject = new Object(matchedData)
		pairs.push(matchedObject)
	}

	// Replaces the templateString with the content for all the
	// elements in the pairs-array in the template file
	for (let p of pairs) {
		// If the template-string is for displaying ingredients, it's instead
		// rendered as an ul
		if (p.templateString === '{{ ingredients }}') {
			var ul = document.createElement('ul')
			for (let i of content.ingredients) {
				let li = document.createElement('li')
				li.textContent = i.amount + ' ' + i.name
				ul.appendChild(li)
			}
			template = template.replace(p.templateString, ul.outerHTML)
		} else if (p.templateString === '{{ steps }}') {
			var ol = document.createElement('ol')
			for (let i of content.steps) {
				let li = document.createElement('li')
				li.textContent = i
				ol.appendChild(li)
			}
			template = template.replace(p.templateString, ol.outerHTML)
		} else {
			template = template.replace(p.templateString, p.content)
		}
	}

	// Creates a div to put the template in
	let div = document.createElement('div')
	div.innerHTML += template
	// Returns the finished div
	return div
}

/**
 * loadCardList
 * This function gets the divs from the page and pastes a list of cards,
 * gotten from the list-file in each folder. Then prints out all the elements
 * as handy cards
 */
async function loadCardList() {
	let containers = document.querySelectorAll('[data-card-list]')
	for (let c of containers) {
		// Checks whether it's recipes or techniques and gets template
		let type = c.getAttribute('data-card-list')
		let template = c.getAttribute('data-template')
		template = template === null ? 'default' : template
		type = type === null ? 'default' : type
		// Gets the json "master"-list over recipes/techniques
		let file = c.getAttribute('data-file')
		let list = await getFile(type + '/' + file + '.json')
			.then((data) => {
				return data.json()
			})
			.catch((err) => {
				console.error('Something went wrong: ' + err)
			})
		// Uses JSONLoader to render each element in the "master"-list
		for (let l of list.list) {
			JSONLoader(
				type + '/' + l,
				'templates/' + template + '.html',
				(content) => {
					c.appendChild(content)
				}
			)
		}
	}
}
loadCardList()
