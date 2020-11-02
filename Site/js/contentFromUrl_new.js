// Gets the hash value of the URL (the text behind the #) and removes the first character (#)
let content = window.location.hash
content = content.substr(1, content.length)

// Splits content in type[1] and name[2]
content = content.split('_')

// Loads the article with the filename gotten from the URL and puts it in the element with the "article_container" id
JSONLoader(
	content[0] + 's/' + content[1] + '.json',
	'templates/' + content[0] + '.html',
	(result) => {
		let container = document.getElementById('content_container')
		container.appendChild(result)
	}
)
