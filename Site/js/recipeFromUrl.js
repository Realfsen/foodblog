'use strict'

// Gets the hash value of the URL (the text behind the #) and removes the first character (#)
let article = window.location.hash
article = article.substr(1, article.length)

// Loads the article with the filename gotten from the URL and puts it in the element with the "article_container" id
JSONLoader(
	'../Articles/' + article + '.json',
	'../templates/article.html',
	function (content) {
		let container = document.getElementById('article_container')
		container.innerHTML = content
	}
)
