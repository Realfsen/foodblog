let cards = []
let sorted = false

/**
 * getCards
 * gets all the HTML elements with the .card-container class
 * pushes all of them into the cards-array and removes them from the page
 */
function getCards() {
	let container = document.querySelector('.card-container')
	console.log(container.firstChild)
	console.log(document.querySelector('.card-name'))
	for (let i = 0; i < container.childElementCount + 2; i++) {
		let cardObj = {
			name: document.querySelector('.card-name').textContent,
			html: container.firstChild,
		}
		container.removeChild(container.firstChild)
		cards.push(cardObj)
	}
	console.log(cards)
}

/**
 * nameSort
 * sorts the cards-array by the name property
 */
function nameSort() {
	// Gets the cards first
	getCards()
	// If unsorted, sort by name descending
	if (!sorted) {
		cards.sort((a, b) => {
			if (a.name < b.name) {
				return -1
			}
			if (a.name > b.name) {
				return 1
			}
			return 0
		})
		sorted = true
	} else {
		// If sorted, sort by name ascending
		cards.sort((a, b) => {
			if (a.name < b.name) {
				return 1
			}
			if (a.name > b.name) {
				return -1
			}
			return 0
		})
		sorted = false
	}
	// Then adds the sorted cards to the page
	printCards()
}

/**
 * printCards
 * prints out all the cards in the .card-container-element
 */
function printCards() {
	let container = document.querySelector('.card-container')
	for (let i = 0; i <= cards.length - 1; i++) {
		console.log(cards[i])
		container.appendChild(cards[i].html)
	}
	cards = []
}
