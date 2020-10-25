(function() {
    // NAVIGATION BAR ADDED BELOW HERE
    // Create target and insert the div element on top of the body
    var navBar = document.createElement("div");
    navBar.className = "NavigationBar";

    // Input the Logo and includes link to the front/index page
    var IconButton = document.createElement("a");
    IconButton.id = "NavbarIcon";
    IconButton.href = "index.html";
    var imgLink = document.createElement("img");
    imgLink.src = "img/Kun_logo_hvit.png";
    IconButton.appendChild(imgLink);
    navBar.appendChild(IconButton);

    // Create the centeredDiv element
    var centeredDiv = document.createElement("div");
    centeredDiv.className = "centeredNavBarElements";

    // Input the link to "Oppskrifter", appended to centeredDiv
    var RecipeButton = document.createElement("a");
    var RecipeButtonText = document.createTextNode("Oppskrifter");
    RecipeButton.className = "NavBarBtn";
    RecipeButton.href = "recipe_list.html";
    RecipeButton.id = "NavBarRecipes";
    // Event listeners to format element on mouseover in the navigation bar.
    RecipeButton.addEventListener('mouseover', function(){this.style.borderBottom = "0.2vw solid #4D3142"});
    RecipeButton.addEventListener('mouseout', function(){this.style.borderBottom = "0 solid transparent"});
    RecipeButton.addEventListener('mouseout', persistantActiveNavigationBar);
    RecipeButton.appendChild(RecipeButtonText);
    centeredDiv.appendChild(RecipeButton);

    // Input the link to "baketips", appended to centeredDiv
    var TechniqueButton = document.createElement("a");
    var TechniqueButtonText = document.createTextNode("Baketips");
    TechniqueButton.className = "NavBarBtn";
    TechniqueButton.href = "baking101.html";
    TechniqueButton.id = "NavBarTechnique";
    // Event listeners to format element on mouseover in the navigation bar.
    TechniqueButton.addEventListener('mouseover', function(){this.style.borderBottom = "0.2vw solid #4D3142"});
    TechniqueButton.addEventListener('mouseout', function(){this.style.borderBottom = "0 solid transparent"});
    TechniqueButton.addEventListener('mouseout', persistantActiveNavigationBar);
    TechniqueButton.appendChild(TechniqueButtonText);
    centeredDiv.appendChild(TechniqueButton);

    // Input the link to "Kontakt Oss", appended to centeredDiv
    var ContactButton = document.createElement("a");
    var ContactButtonText = document.createTextNode("Kontakt oss");
    ContactButton.className = "NavBarBtn";
    ContactButton.href = "contact.html";
    ContactButton.id = "NavBarContact";
    // Event listeners to format element on mouseover in the navigation bar.
    ContactButton.addEventListener('mouseover', function(){this.style.borderBottom = "0.2vw solid #4D3142"});
    ContactButton.addEventListener('mouseout', function(){this.style.borderBottom = "0 solid transparent"});
    ContactButton.addEventListener('mouseout', persistantActiveNavigationBar);
    ContactButton.appendChild(ContactButtonText);
    centeredDiv.appendChild(ContactButton);
    navBar.appendChild(centeredDiv);

    // Append the navigation bar to the front of the <body>
    document.body.insertBefore(navBar, document.body.childNodes[0]);
  
    // FOOTER ADDED BELOW HERE
    console.log("Footer generation script initiated")
    var foot = document.createElement("footer");
    document.body.appendChild(foot);

    var innerDivL = document.createElement("div");
    innerDivL.className = "footerLeft";
    var innerImgL = document.createElement("img");
    innerImgL.src = "img/Kun_logo.png";
    innerImgL.alt = "Bestemor Borghilds Bakebonanza logo";
    innerImgL.id = "footerLogo";
    innerDivL.appendChild(innerImgL);
    var innerPL = document.createElement("p");
    var innerTextL = document.createTextNode("Bestemor borghild \n Bestemor Borghilds Bakebonanza 2020");
    innerPL.appendChild(innerTextL);
    innerDivL.appendChild(innerPL);
    foot.appendChild(innerDivL);

    var innerDivR = document.createElement("div");
    innerDivR.className = "footerRight";
    var innerTextR = document.createElement("p");
    var innerTextContent = document.createTextNode("Trenger du hjelp?\nVi svarer gjerne på spørsmålene dine.");
    innerTextR.appendChild(innerTextContent);
    innerDivR.appendChild(innerTextR);
    var innerLink = document.createElement("a");
    var innerLinkText = document.createTextNode("Send oss en melding.");
    innerLink.className = "emailLink";
    innerLink.href = "contact.html";
    innerLink.appendChild(innerLinkText);
    innerDivR.appendChild(innerLink);
    foot.appendChild(innerDivR);

    // Function run to add bar beneath the currently active page in the navigation bar.
    persistantActiveNavigationBar()
})()

function persistantActiveNavigationBar(){
    // Coloring active site in navigation bar.
    var fullURL = window.location.href;
    stringPositionStart = fullURL.lastIndexOf('/Site/')+6; // Finds the place in the URL (starting from the back) where "/Site" is and return the index. +6 means we start after the /Site/
    stringPositionEnd = fullURL.lastIndexOf('.html'); // Find the ".html" in the URL 
    var subPage = fullURL.slice(stringPositionStart, stringPositionEnd);
    var activeBarStyling = "0.2vw solid #4D3142"; // Just to make it quicker to change values
    // Check what page we are on and retrieve the correct element based on the URL
    if (subPage.toLowerCase()==="contact"){ // For "kontakt oss"
        var currentElement = document.getElementById("NavBarContact");
            console.log(currentElement)
            currentElement.style.borderBottom = activeBarStyling;
    } else if (subPage.toLowerCase()==="baking101") { // For "Baketips"
            console.log(currentElement)
            var currentElement = document.getElementById("NavBarTechnique");
            currentElement.style.borderBottom = activeBarStyling;
    } else if (subPage.toLowerCase()==="recipe_list"){ // For "Oppskrifter"
            console.log(currentElement)
            var currentElement = document.getElementById("NavBarRecipes");
            currentElement.style.borderBottom = activeBarStyling;
    } else {}
}