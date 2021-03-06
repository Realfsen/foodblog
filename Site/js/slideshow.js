const bilder = ['img/slide_1.jpg', 'img/slide_2.jpg', 'img/slide_3.jpg']

let imgTag = document.querySelector('#imgTag')
let index = 0

/**
 * slide
 * Changes the picture by changing the source of the <img>-tag
 * Makes sure the index also always points to an image
 */
function slide() {
	index = (index + 1) % bilder.length
	imgTag.src = bilder[index]
}

// One slide forward
function forward() {
	clearInterval(inter_vall)
	slide()
}

// One slide backwards
function backward() {
	clearInterval(inter_vall)
	if (index == 0) {
		index = bilder.length - 1
	} else {
		index--
	}
	imgTag.src = bilder[index]
}

let images = []
/**
 * preload
 * Saves images in an array so the HTML elements will be loaded before needed
 * @param {array} bilder array of strings with image paths
 */
function preload(bilder) {
	// Loops through the array and adds the images to the new array for preloading
	for (let i = 0; i < bilder.length; i++) {
		images[i] = new Image()
		images[i].src = bilder[i]
	}
}

// Runs the preload function and creates an interval varable, to easily create intervals in the future.
preload(bilder)
let inter_vall = setInterval(slide, 5000)
