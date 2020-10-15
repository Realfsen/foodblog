let cards = []
let sorted = false

function getCards() {
	let container = document.getElementById('container')
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

function nameSort() {
	getCards()
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
	printCards()
}

function printCards() {
	let container = document.getElementById('container')
	for (let i = 0; i <= cards.length - 1; i++) {
		console.log(cards[i])
		container.appendChild(cards[i].html)
	}
	cards = []
}
