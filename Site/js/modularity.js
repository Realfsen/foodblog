;(function () {
	// NAVIGATION BAR ADDED BELOW HERE
	// Create target and insert the div element on top of the body
	let navBar = document.createElement('div')
	navBar.className = 'NavigationBar'

	// Input the Logo and includes link to the front/index page
	let IconButton = document.createElement('a')
	IconButton.id = 'NavbarIcon'
	IconButton.href = 'index.html'
	let imgLink = document.createElement('img')
	imgLink.src = 'img/Kun_logo_hvit.png'
	IconButton.appendChild(imgLink)
	navBar.appendChild(IconButton)

	// Create the centeredDiv element
	let centeredDiv = document.createElement('div')
	centeredDiv.className = 'headercentered'

	// Input the link to "Oppskrifter", appended to centeredDiv
	let RecipeButton = document.createElement('a')
	let RecipeButtonText = document.createTextNode('OPPSKRIFTER')
	RecipeButton.className = 'NavBarBtn'
	RecipeButton.id = 'recipeBtn'
	RecipeButton.href = 'recipe_list.html'
	RecipeButton.id = 'NavBarRecipes'
	// Event listeners to format element on mouseover/mouseout in the navigation bar.
	RecipeButton.addEventListener('mouseover', function () {
		this.style.borderBottom = '0.2vw solid #4D3142'
	})
	RecipeButton.addEventListener('mouseout', function () {
		this.style.borderBottom = '0 solid transparent'
	})
	RecipeButton.addEventListener('mouseout', persistantActiveNavigationBar)
	RecipeButton.appendChild(RecipeButtonText)
	centeredDiv.appendChild(RecipeButton)

	// Input the link to "baketips", appended to centeredDiv
	let TechniqueButton = document.createElement('a')
	let TechniqueButtonText = document.createTextNode('BAKETIPS')
	TechniqueButton.className = 'NavBarBtn'
	TechniqueButton.href = 'baking101.html'
	TechniqueButton.id = 'NavBarTechnique'
	// Event listeners to format element on mouseover in the navigation bar.
	TechniqueButton.addEventListener('mouseover', function () {
		this.style.borderBottom = '0.2vw solid #4D3142'
	})
	TechniqueButton.addEventListener('mouseout', function () {
		this.style.borderBottom = '0 solid transparent'
	})
	TechniqueButton.addEventListener('mouseout', persistantActiveNavigationBar)
	TechniqueButton.appendChild(TechniqueButtonText)
	centeredDiv.appendChild(TechniqueButton)

	// Input the link to "Kontakt Oss", appended to centeredDiv
	let ContactButton = document.createElement('a')
	let ContactButtonText = document.createTextNode('KONTAKT OSS')
	ContactButton.className = 'NavBarBtn'
	ContactButton.href = 'contact.html'
	ContactButton.id = 'NavBarContact'
	// Event listeners to format element on mouseover/mouseout in the navigation bar.
	ContactButton.addEventListener('mouseover', function () {
		this.style.borderBottom = '0.2vw solid #4D3142'
	})
	ContactButton.addEventListener('mouseout', function () {
		this.style.borderBottom = '0 solid transparent'
	})
	ContactButton.addEventListener('mouseout', persistantActiveNavigationBar)
	ContactButton.appendChild(ContactButtonText)
	centeredDiv.appendChild(ContactButton)
	navBar.appendChild(centeredDiv)

	// Append the navigation bar to the front of the <body>
	document.body.insertBefore(navBar, document.body.childNodes[0])

	// FOOTER ADDED BELOW HERE
	// Create target and insert the footer element on the bottom of the body
	let foot = document.createElement('footer')
	document.body.appendChild(foot)

	// Make the left part of the footer
	// Left footer logo
	let innerDivL = document.createElement('div')
	innerDivL.className = 'footerLeft'
	let innerImgL = document.createElement('img')
	innerImgL.src = 'img/Kun_logo.png'
	innerImgL.alt = 'Bestemor Borghilds Bakebonanza logo'
	innerImgL.id = 'footerLogo'
	innerDivL.appendChild(innerImgL)
	// Left footer text
	let innerPL = document.createElement('p')
	innerPL.innerHTML += 'BESTEMOR BORGHILD'
	innerPL.appendChild(document.createElement('br'))
	innerPL.appendChild(document.createElement('br'))
	innerPL.innerHTML += 'Bestemor Borghilds Bakebonanza 2020'
	innerDivL.appendChild(innerPL)
	foot.appendChild(innerDivL)

	// Make the right part of the footer
	// Right footer Text
	let innerDivR = document.createElement('div')
	innerDivR.className = 'footerRight'
	let innerTextR = document.createElement('p')
	innerTextR.innerHTML += 'Trenger du hjelp?'.bold()
	innerTextR.appendChild(document.createElement('br'))
	innerTextR.innerHTML += 'Vi svarer gjerne på spørsmålene dine.'
	innerDivR.appendChild(innerTextR)
	// Right footer email link and link to contact.html
	let mailIcon = document.createElement('img')
	mailIcon.src = 'img/lilla_konvolutt.PNG'
	mailIcon.alt = 'epostbilde'
	mailIcon.className = 'footerEmailIcon'
	let innerLink = document.createElement('a')
	innerLink.appendChild(mailIcon)
	let innerLinkText = document.createTextNode('Send oss en melding')
	// innerLink.className = 'emailLink'
	innerLink.id = 'footerEmailLink'
	innerLink.href = 'contact.html'
	innerLink.appendChild(innerLinkText)
	innerDivR.appendChild(innerLink)
	foot.appendChild(innerDivR)

	// Function run to add bar beneath the currently active page in the navigation bar on page load.
	persistantActiveNavigationBar()
})()

function persistantActiveNavigationBar() {
	// Coloring active site in navigation bar.
	// Retrieve the full URL of the current page.
	let fullURL = window.location.href 
	stringPositionStart = fullURL.lastIndexOf('/Site/') + 6 // Finds the place in the URL (starting from the back) where "/Site" is and return the index. +6 means we start after the /Site/
	stringPositionEnd = fullURL.lastIndexOf('.html') // Find the ".html" in the URL
	let subPage = fullURL.slice(stringPositionStart, stringPositionEnd) // Select the current "subPage"
	let activeBarStyling = '0.2vw solid #4D3142' // Bar styling added here to make it quicker to change values
	// Check what page we are on and retrieve the correct element based on the URL
	if (subPage.toLowerCase() === 'contact') {
		// For "kontakt oss"
		let currentElement = document.getElementById('NavBarContact')
		currentElement.style.borderBottom = activeBarStyling
	} else if (subPage.toLowerCase() === 'baking101') {
		// For "Baketips"
		let currentElement = document.getElementById('NavBarTechnique')
		currentElement.style.borderBottom = activeBarStyling
	} else if (subPage.toLowerCase() === 'recipe_list') {
		// For "Oppskrifter"
		let currentElement = document.getElementById('NavBarRecipes')
		currentElement.style.borderBottom = activeBarStyling
	} else {
	}
}
