(function() { // Use IIFE since head element essential to load, but only required to be loaded once per site. Read more: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    // Retrieve the head element
    var head = document.getElementById("pageHeader");
    // charSet not input by script as it needs to be defined by parser, cant be changed after HTML
    // https://stackoverflow.com/questions/12560027/set-charset-meta-tag-with-javascript

    // Define the viewport
    var viewPort = document.createElement("meta");
    viewPort.name = "viewport";
    viewPort.content = "width=device-width, initial-scale=1.0";
    head.appendChild(viewPort);

    // Adding some new fonts
    var fontPoppins = document.createElement("link");
    fontPoppins.href = "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
    fontPoppins.rel = "stylesheet";
    head.appendChild(fontPoppins);

    var fontPoppins2 = document.createElement("link");
    fontPoppins2.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";
    fontPoppins2.rel = "stylesheet";
    head.appendChild(fontPoppins2);


    // Favicons and compatability with a lot of devices!
    // Includes different favicon sizes, short-cut images, mac touchbar icons, windows start icon etc.
    // Favicons and input code generatored by http://www.realfavicongenerator.net based on "Kun_logo.png" found in /img.
    var faviconLink = document.createElement("link");
    faviconLink.rel = "apple-touch-icon";
    faviconLink.sizes = "180x180";
    faviconLink.href = "./img/favicons/apple-touch-icon.png";
    head.appendChild(faviconLink);
    var faviconLink2 = document.createElement("link");
    faviconLink2.rel = "icon";
    faviconLink2.type = "image/png";
    faviconLink2.sizes = "32x32";
    faviconLink2.href = "./img/favicons/favicon-32x32.png";
    head.appendChild(faviconLink2);
    var faviconLink3 = document.createElement("link");
    faviconLink3.rel = "icon";
    faviconLink3.type = "image/png";
    faviconLink3.sizes = "16x16";
    faviconLink3.href = "./img/favicons/favicon-16x16.png";
    head.appendChild(faviconLink3);
    var faviconLink4 = document.createElement("link");
    faviconLink4.rel = "manifest";
    faviconLink4.href = "./img/favicons/site.webmanifest";
    head.appendChild(faviconLink4);
    var faviconLink5 = document.createElement("link");
    faviconLink5.rel = "mask-icon";
    faviconLink5.href = "./img/favicons/safari-pinned-tab.svg";
    faviconLink5.color = "#5bbad5";
    head.appendChild(faviconLink5);
    var faviconLink6 = document.createElement("link");
    faviconLink6.rel = "shortcut icon";
    faviconLink6.href = "./img/favicons/favicon.ico";
    head.appendChild(faviconLink6);
    var faviconMeta1 = document.createElement("meta");
    faviconMeta1.name = "msapplication-TileColor";
    faviconMeta1.content = "#da532c";
    head.appendChild(faviconMeta1);
    var faviconMeta2 = document.createElement("meta");
    faviconMeta2.name = "msapplication-config";
    faviconMeta2.content = "./img/favicons/browserconfig.xml";
    head.appendChild(faviconMeta2);
    var faviconMeta3 = document.createElement("meta");
    faviconMeta3.name = "theme-color";
    faviconMeta3.content = "#ffffff";
    head.appendChild(faviconMeta3);
})()

/* Raw code from realfavicongenerator.net to be included in the head element.
<link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png">
<link rel="manifest" href="/img/favicons/site.webmanifest">
<link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="/img/favicons/favicon.ico">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-config" content="/img/favicons/browserconfig.xml">
<meta name="theme-color" content="#ffffff">
*/