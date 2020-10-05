// Gets the hash value of the URL (the text behind the #) and removes the first character (#)
let content = window.location.hash
content = content.substr(1, content.length)

// console.log(window.location.hash)

// Loads the article with the filename gotten from the URL and puts it in the element with the "article_container" id
// JSONLoader('recipes/cake.json', 'templates/card.html', (content) => {
// 	let container = document.getElementById('content_container')
// 	container.innerHTML = content
// })
