(function() {
    console.log("Navbar generation script initiated")
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
    centeredDiv.className = "centeredNavBarElements"

    // Input the link to "Oppskrifter", appended to centeredDiv
    var RecipeButton = document.createElement("a");
    var RecipeButtonText = document.createTextNode("Oppskrifter");
    RecipeButton.className = "NavBarBtn";
    RecipeButton.href = "recipe_list.html";
    RecipeButton.appendChild(RecipeButtonText);
    centeredDiv.appendChild(RecipeButton);

    // Input the link to "baketips", appended to centeredDiv
    var TechniqueButton = document.createElement("a");
    var TechniqueButtonText = document.createTextNode("Baketips");
    TechniqueButton.className = "NavBarBtn";
    TechniqueButton.href = "baking101.html";
    TechniqueButton.appendChild(TechniqueButtonText);
    centeredDiv.appendChild(TechniqueButton);

    // Input the link to "Kontakt Oss", appended to centeredDiv
    var ContactButton = document.createElement("a");
    var ContactButtonText = document.createTextNode("Kontakt oss");
    ContactButton.className = "NavBarBtn";
    ContactButton.href = "contact.html";
    ContactButton.appendChild(ContactButtonText);
    centeredDiv.appendChild(ContactButton);
    navBar.appendChild(centeredDiv);

    // Append the navigation bar to the front of the <body>
    document.body.insertBefore(navBar, document.body.childNodes[0]);
})()

window.onload = function(){
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
}