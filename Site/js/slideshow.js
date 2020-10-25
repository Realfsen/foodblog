const bilder = []

let imgTag = document.querySelector('#imgTag')
let index = 0

//Changes the picture by changing the source of the <img>-tag
//Makes sure the index also always points to an image
function slide() {
	index = (index + 1) % bilder.length
	imgTag.src = bilder[index]
}

//One slide forward
function forward() {
	clearInterval(inter_vall)
	slide()
}

//One slide backwards
function backward() {
	clearInterval(inter_vall)
	if (index == 0) {
		index = bilder.length - 1
	} else {
		index--
	}
	imgTag.src = bilder[index]
}

//Saves images in an array so they won't be removed from RAM
let images = []
function preload(bilder) {
	//Loops through the array and adds the images to the new array for preloading
	for (let i = 0; i < bilder.length; i++) {
		images[i] = new Image()
		images[i].src = bilder[i]
	}
}

//Runs the preload function and creates an interval varable, to easily create intervals in the future.
preload(bilder)
let inter_vall = setInterval(slide, 5000)
