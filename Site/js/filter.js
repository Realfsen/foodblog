let cards = []
let sorted = false

/**
 * getCards
 * gets all the HTML elements with the .card-container class
 * pushes all of them into the cards-array and removes them from the page
 * @param {string} who string that decides which list to sort
 */
function getCards(who) {
	if (who === 'bb') {
		var container = document.querySelector('#bb-cards')
		var name = '#bb-cards '
	} else if (who === 'user') {
		var container = document.querySelector('#usr-cards')
		var name = '#usr-cards '
	} else if (who === 'tech') {
		var container = document.querySelector('.card-container')
		var name = ''
	}
	let count = container.childElementCount
	for (let i = 0; i < count; i++) {
		let cardObj = {
			name: document.querySelector(name + '.card-name').textContent,
			html: container.firstChild,
		}
		cards.push(cardObj)
		container.removeChild(container.firstChild)
	}
}

/**
 * nameSort
 * sorts the cards-array by the name property
 * @param {string} who string that decides which list to sort
 */
function nameSort(who) {
	// Gets the cards first
	getCards(who)
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
	console.log(cards)
	// Then adds the sorted cards to the page
	printCards(who)
}

/**
 * printCards
 * prints out all the cards in the .card-container-element
 * @param {string} who string that decides which list to sort
 */
function printCards(who) {
	if (who === 'bb') {
		var container = document.querySelector('#bb-cards')
	} else if (who === 'user') {
		var container = document.querySelector('#usr-cards')
	} else if (who === 'tech') {
		var container = document.querySelector('.card-container')
	}
	for (let i = 0; i <= cards.length - 1; i++) {
		// console.log(cards[i])
		container.appendChild(cards[i].html)
	}
	cards = []
}

/**
 * toggleContent
 * shows and hides the recipes from the respective content creators
 * @param {string} who either 'bb' or 'user' depending on which button was pressed
 */
function toggleContent(who) {
	const bbDiv = document.querySelector('.borghildsoppskrifter')
	const usrDiv = document.querySelector('.brukernesoppskrifter')
	const emptyDiv = document.querySelector('.tommeoppskrifter')
	if (who === 'bb') {
		const knapp = document.querySelector('#borghildknapp')
		if (bbDiv.style.display === 'none') {
			bbDiv.style.display = 'block'
			knapp.classList.add('selected')
		} else {
			bbDiv.style.display = 'none'
			knapp.classList.remove('selected')
		}
	} else if (who === 'user') {
		const knapp = document.querySelector('#brukereknapp')
		if (usrDiv.style.display === 'none') {
			console.log('show')
			usrDiv.style.display = 'block'
			knapp.classList.add('selected')
		} else {
			console.log('hide')
			usrDiv.style.display = 'none'
			knapp.classList.remove('selected')
		}
	}
	if (bbDiv.style.display === 'none' && usrDiv.style.display === 'none') {
		console.log('show')
		emptyDiv.style.display = 'block'
	} else {
		console.log('hide')
		emptyDiv.style.display = 'none'
	}
}
