/*
document.onload = function(){
    var headerElem = document.getElementById("pageHeader");
    var footerElem = document.getElementById("pageFooter");

    var contentHeader = "<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="stylesheet" href="css/style.css"></link>"
    var contentFooter = "<div><div class="footerLeft"><img id="footerLogo" src="img/Kun_logo.png" alt="Bestemor Borghilds Bakebonanza logo"><p>Bestemor borghild <br> Bestemor Borghilds Bakebonanza 2020</p></div><div class="footerRight"><h3>Trenger du hjelp?</h3><p>Vi svarer gjerne på spørsmålene dine. </p><a class="emailLink" href="mailto:borghild@bestemorborghild.no"> Send oss en melding.</a></div></div>"

    headerElem.innerHTML = contentHeader
    footerElem.innerHTML = contentFooter
} */


document.onload = function(){{
    console.log("Function initiated");
    var foot = document.createElement("footer");
    document.body.appendChild(foot);


    var innerDivL = document.createElement("div")
    innerDivL.className = "footerLeft"
    var innerImgL = document.createElement("img")
    innerImgL.src = "img/Kun_logo.png"
    innerImgL.alt = "Bestemor Borghilds Bakebonanza logo"
    innerImgL.id = "footerLogo"
    innerDivL.appendChild(innerImgL)
    var innerPL = document.createElement("p")
    var innerTextL = document.createTextNode("Bestemor borghild \n Bestemor Borghilds Bakebonanza 2020")
    innerPL.appendChild(innerTextL)
    innerDivL.appendChild(innerPL)
    foot.appendChild(innerDivL)

    var innerDivR = document.createElement("div")
    innerDivR.className = "footerRight"
    var innerTextR = document.createElement("p")
    var innerTextContent = document.createTextNode("Trenger du hjelp?\nVi svarer gjerne på spørsmålene dine.")
    innerTextR.appendChild(innerTextContent)
    innerDivR.appendChild(innerTextR)
    var innerLink = document.createElement("a")
    var innerLinkText = document.createTextNode("Send oss en melding.")
    innerLink.className = "emailLink"
    innerLink.href = "mailto:borghild@bestormorborghild.no"
    innerLink.appendChild(innerLinkText)
    innerDivR.appendChild(innerLink)

    targ.innerHTML = innerDivL
    targ.appendChild(innerDivL)
    targ.appendChild(innerDivR)
    console.log(targ)
} }

/*
function footerLoader(){
    console.log("Initiated")
    var targ = document.getElementById("footerDefault")
    var outerDiv = document.createElement("div")
    var innerDivL = document.createElement("div")
    innerDivL.className = "footerLeft"
    var innerImgL = document.createElement("img")
    var innerTextL = document.createTextNode("Bestemor borghild \n Bestemor Borghilds Bakebonanza 2020")
    innerImgL.src = "img/Kun_logo.png"
    innerImgL.alt = "Bestemor Borghilds Bakebonanza logo"
    innerImgL.id = "footerLogo"
    innerDivL.appendChild(innerImgL)
    innerDivL.appendChild(innerTextL)
    outerDiv.appendChild(innerDivL)

    var innerDivR = document.createElement("div")
    innerDivR.className = "footerRight"
    var innerTextR = document.createElement("p")
    var innerTextContent = document.createTextNode("Trenger du hjelp?\nVi svarer gjerne på spørsmålene dine.")
    innerTextR.appendChild(innerTextContent)
    var innerLink = document.createElement("a")
    var innerLinkText = document.createTextNode("Send oss en melding.")
    innerLink.className = "emailLink"
    innerLink.href = "mailto:borghild@bestormorborghild.no"
    innerLink.appendChild(innerLinkText)
    innerDivR.appendChild(innerTextR)
    innerDivR.appendChild(innerLink)

    outerDiv.appendChild(innerDivL)
    outerDiv.appendChild(innerDivR)
    console.log(outerDiv)
    targ.appendChild(outerDiv)
} */
console.log("JS loaded")
/*
    <div><div class="footerLeft"><img id="footerLogo" src="img/Kun_logo.png" alt="Bestemor Borghilds Bakebonanza logo"><p>Bestemor borghild <br> Bestemor Borghilds Bakebonanza 2020</p></div><div class="footerRight"><h3>Trenger du hjelp?</h3><p>Vi svarer gjerne på spørsmålene dine. </p><a class="emailLink" href="mailto:borghild@bestemorborghild.no"> Send oss en melding.</a></div></div>
*/