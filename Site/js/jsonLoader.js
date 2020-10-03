'use strict'

let loaded_JSON_files = []

// JSONLoader
// Loads, renders and outputs the content of a JSON file
//
// "file": Full path to the JSON file
//
// "template": Full path to a HTML file with placeholders
//
// "callback": A callback function that decides what to do with the "rendered" JSON,
//             the callback is called with the template file with replaced placeholders as a string as argument

function JSONLoader(file, template, callback) {
	let request = new XMLHttpRequest() // Opens a new XMLHttpRequest

	request.open('GET', file)
	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			// readyState 4 means that the request has received a response
			if (request.status === 200 || request.status === 0) {
				// HTTP code 200 means that the content was succesfully fetched
				let parsedJSON = JSON.parse(request.responseText) // The request receives the JSON as a string, which then is parsed into an object
				loaded_JSON_files.push(parsedJSON)
				renderTemplate(parsedJSON, template, callback) // Passes the parsed JSON to a new function that combines the JSON with the template
				// "template" and "callback" is "forwarded" to this function. See [1] at bottom of file.
			}
		}
	}
	request.send() // Sends the request, important to remember!
}

// renderTemplate
// Fetches the template file (HTML) and passes it to another function that combines the JSON and the template
// The parsed file is then passed as a string to the callback function "forwarded" from the JSONLoader function
//
// "content": The parsed JSON file as a JSON object
//
// "template": Full path to a HTML file with placeholders
//
// "callback": A callback function that decides what to do with the "rendered" JSON

function renderTemplate(content, template, callback) {
	let request = new XMLHttpRequest() // Same as the previous functions, could technically be moved to its' own function with the callback as a callback

	request.open('GET', template)
	request.onreadystatechange = () => {
		if (request.readyState === 4) {
			if (request.status === 200 || request.status === 0) {
				let parsedTemplate = parseTemplate(content, request.responseText)
				callback(parsedTemplate)
			}
		}
	}
	request.send()
}

// parseTemplate
// Takes in a parsed JSON object and a HTML file as a string with placeholders
// it then reads the placeholders and replaces them with the specified content from the JSON file.
// Returns a DOM object with the JSON content placed into the template
//
// "content": Parsed JSON file as a JSON object
//
// "template": HTML file as a string with placeholders

function parseTemplate(content, template) {
	let ptrn = new RegExp(/{{\s*([a-z.]+)\s*}}/, 'g') // A RegEx pattern that searches for the placeholder "tags" (see [2])
	let pairs = []
	let match

	// Using the exec() method of a  RegEx object returns after the first match
	// and moves the search index to the end of the match.
	// By using the method until it returns null we get all matches in the string.
	while ((match = ptrn.exec(template)) != null) {
		// Assigns the match object to the "match" variable and checks if it is null

		// Creates a new object with two values: the whole placeholder tag and the specified content
		// [0] of a match object is the string that matches the pattern
		// [1] of a match object is the group captured by parenteses in the pattern

		let mObj = new (function () {
			this.matchstring = match[0]

			// Here we build a string using the captured group (see [3]) appended to "content."
			// We then use eval() on the resulting string, which "executes" the string, which in this case
			// returns content from the JSON object.
			// (see [4])
			this.content = eval('content.' + match[1])
		})()
		pairs.push(mObj)
	}

	// We loop through all the objects we created and replace the matched placeholder tag with the content specified within the tag.
	// Since str.replace() returns a new string we assign it back to "template"
	for (let p of pairs) {
		template = template.replace(p.matchstring, p.content)
	}

	// Lastly we create a new div, puts the HTML string inside it and returns it.
	let d = document.createElement('div')
	d.innerHTML = template
	return template
}

// Here we select all the elements with the "data-fr-list" attribute.
// The "data-fr-list" attribute specifies a JSON file in the "Articles" folder wich should contain a list with
// the name of JSON files containing the articles. (see [5])
// We then get the value of said attribute, as well as the value from the "data-fr-template".
// If no template is specified we use the default template.
//
// We then fetch the list-file using XHR (XMLHttpRequest) and loop through all the article names.
// The loop calls JSONLoader on the article using the template, and appends it the the tag with the "data-fr-list" attribute.

let containers = document.querySelectorAll('[data-fr-list]')
for (let c of containers) {
	let alist = c.getAttribute('data-fr-list')
	let template = c.getAttribute('data-fr-template')
	template = template === null ? 'default' : template
	let r = new XMLHttpRequest()

	r.open('GET', '../Articles/' + alist.trim() + '.json')
	r.onreadystatechange = function () {
		if (r.readyState === 4) {
			if (r.status === 200 || r.status === 0) {
				let list = JSON.parse(r.responseText)
				for (let a of list.articles) {
					JSONLoader(
						'../Articles/' + a,
						'../templates/' + template.trim() + '.html',
						function (content) {
							let div = document.createElement('div')
							div.id = a.substr(0, a.length - 5) // Sets the ID of the article element to the name of the article JSON file (without the ".json" extension)
							div.classList.add('loaded-article')
							div.innerHTML = content
							c.appendChild(div)
						}
					)
				}
			}
		}
	}
	r.send()
}

// Finds all the elements with the "data-fr-article" attribute.
// The "data-fr-attribute" specifies a single article to load
//
// Calls JSONLoader with the article name and uses the specified template (or the default template)
// Then appends the article to the element.

let article_containers = document.querySelectorAll('[data-fr-article]')
for (let a of article_containers) {
	let article_name = a.getAttribute('data-fr-article')
	let template = a.getAttribute('data-fr-template')
	template = template === null ? 'default' : template

	JSONLoader(
		'../Articles/' + article_name.trim() + '.json',
		'../templates/' + template.trim() + '.html',
		function (content) {
			a.innerHTML = content
		}
	)
}

function goBack() {
	window.history.back()
}

// FOOTNOTES
//
// [1]:
//      The reason we have to use callbacks instead of return values is because XHR is asynchronus.
//      That means that the request is sent and then the code immediately continues without waiting for a response.
//      The callback function is called when the a response is recieved.
//
// [2]:
//      Regular Expressions (RegEx or just regex) is used to match a string to a pattern instead of a specific string.
//      In this case the pattern /{{\s*([a-z.]+)\s*}}/ means:
//          '{{': the string "{{"
//          '\s*': then 0 or more spaces
//          '(': then starts a capture group
//          '[a-z.]+': then one or more of the lower-case letters a to z or a dot
//          ')': then ends the capture group, this means that it "extracts" a string with only lower-case letters and dots, no spaces
//          '\s*': then 0 or more spaces again
//          '}}': and lastly the string "}}"
//      For example, this pattern would match {{ body.header.title }}, but not {{ body title }}
//      See the regex in action with better explanation here: https://regex101.com/r/fO6Ctn/1
//
// [3]:
//      When using regex, a capture group (part of the pattern surrounded py parentheses) "selects" a
//      part of the pattern and returns the mathing part as a part of the match. In this case the capture group
//      captures the text within the placeholder tag. The captured pattern consists of lowercase characters and dots,
//      which is how we acces content in a JSON object. By using eval on the string "content.body.title" we essentially call the expression content.body.title,
//      which accesses the "title" value in the "body" object in the JSON object stored in the "content" variable.
//
//      The captured group in the example from [2] would return "header.title"
//
// [4]:
//      The eval() function takes in a string and runs it as if it was code. It is usually discouraged to use it as malicious users
//      fairly easily could inject malicious code, but since JS is client-side and it does not do any form of authentication it does not pose a threat.
//
// [5]:
//      HTML5 introduces the ability to create user-defined attributes by adding data- to the front of the attribute name.
//
//      The "data-fr-list" attribute has the name of a JSON file in the "Article" directory.
//      The file should contain an object "articles" with a list with the filename (including extension) to all articles that list should include
//      Suggestion to use:
//          "articles.json" could include all the articles
//          "fatured.json" could include the fatured articles on the front page
//
//      The "data-fr-template" specifies the name of which template file to use. The template files are HTML files in the "templates" directory.
//      It is extremely important to specify template so that the script knows what data to render, and HOW to render it.
//      The templates are regular HTML files, but where content from the JSON files should go a template tag with the "path" to the values should be used.
//
//      The "data-fr-article" attribute is like "data-fr-list" it specifies a single article to include, "data-fr-template" must still be used.
//
//      Example of use:
//
//      article_name.json:
//          {
//              "body": {
//                  "text": "Hello World"
//              }
//          }
//
//      articles.json:
//      {
//          "articles":[
//              "article_name.json"
//          ]
//      }
//
//      template.html:
//      <div class="article">
//          <p> Content: {{ body.text }} </p>
//      </div>
//
//      index.html:
//      <html>
//          <body>
//              <div data-fr-list="articles" data-fr-template="template"></div>
//              <script src="JS/jsonload.js></script>
//          </body>
//      <html>
//
//      After loading index.html would look like this:
//
//      <html>
//          <body>
//              <div data-fr-list="articles" data-fr-template="template">
//                  <div class="loaded_article>
//                      <div>
//                          <div class="article">
//                              <p> Content: Hello World</p>
//                          </div>
//                      <div>
//                  </div>
//              </div>
//          </body>
//      </html>
