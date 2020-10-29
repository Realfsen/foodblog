
//legge til passende tittel for de ulike oppskriftene/teknikkene
document.getElementsByClassName('card').onload = titlesForJson()

function titlesForJson() {
    let fullURL = window.location.href
    stringPositionStart = fullURL.lastIndexOf('_') + 1 // Finds the place in the URL (starting from the back) where "_" is and return the index. +1 means we start after the _
    stringPositionEnd = fullURL.lastIndexOf('') // Find the "" in the URL (no standard ending)
    let fullTittel = fullURL.slice(stringPositionStart, stringPositionEnd)
    let lengde = fullTittel.length;

    //for å ordentlig tekst i tittelen
    var i = 0;
    let tittel = '';
    for (i; i < lengde; i++) {
        //for delen som kan være unicode
        var unicodetekst = (fullTittel.slice(i, i+6));
        
        //for æ (%C3%A6)
        if (unicodetekst == ('%C3%A6')) { 
            tittel = tittel + 'æ'
            i = i + 5;
        }
        // for é (%C3%A9)
        else if ((unicodetekst) == ('%C3%A9')) { 
            tittel = tittel + 'é'
            i = i + 5;
        }
        //for ø (%C3%B8)
        else if ((unicodetekst) == ('%C3%B8')) { 
            tittel = tittel + 'ø'
            i = i + 5;
        }
        //for å (%C3%A5)
        else if ((unicodetekst) == ('%C3%A5')) { 
            tittel = tittel + 'å'
            i = i + 5;
        }
        //for mellomrom
        else if (((fullTittel[i]+fullTittel[i+1]+fullTittel[i+2]) == ('%20'))) {
            tittel = tittel + ' '
            i = i + 2;
        }
        else {
            tittel += fullTittel[i];
        }
    }
    //legger til tittelen som tittel på siden
    document.title = tittel + " - Bestemor Borghild"; 
}