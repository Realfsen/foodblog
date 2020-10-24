window.onload = function(){
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
    foot.appendChild(innerDivR)
}