// Gets the hash value of the URL (the text behind the #) and removes the first character (#)
let content = window.location.hash
content = content.substr(1, content.length).toLowerCase()

console.log(content)

content = content.split('-')
console.log(content)

// let template = window.location.pathname
// template = template.substr(6, template.length)
// template = template.replace('.html', '')

// console.log(template)

// Loads the article with the filename gotten from the URL and puts it in the element with the "article_container" id
JSONLoader(
	content[0] + 's/' + content[1] + '.json',
	'templates/' + content[0] + '.html',
	(content) => {
		let container = document.getElementById('content_container')
		container.appendChild(content)
	}
)
