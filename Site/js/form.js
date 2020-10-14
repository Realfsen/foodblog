document.onload = function(){  // Make the JS version of form visibile, it hides the noJS (HTML5 validated) form.
    document.getElementById(jsContactForm).style.visibility = "visible";
    document.getElementById(nojsContactForm).style.display = "none";
}

function submitForm(){
    window.alert("Hei "+document.getElementById("jsContactForm").user.value+"\nDin henvendelse til borghild er blitt sendt! \nBorghild vil sende svar til"+document.getElementById("jsContactForm").userEmail.value);
}

function validate(){
    var inquiry = document.getElementById("jsContactForm").inquiry;
    var tittel = document.getElementById("jsContactForm").title;
    var navn = document.getElementById("jsContactForm").user;
    var epost = document.getElementById("jsContactForm").userEmail;
    var melding = document.getElementById("jsContactForm").userMessage;
    // Need to fix inquiry validation
    /*if (inquiry.value == ""){
        window.alert("Velg et alternativ for din melding"); 
        return false; 
    } else*/ if (tittel.value == ""){
        window.alert("Skriv inn en tittel for din forespørsel!"); 
        tittel.focus(); 
        return false;
    } else if (navn.value == ""){
        window.alert("Skriv inn navnet ditt så borghild vet hvem som sender meldingen!"); 
        navn.focus(); 
        return false;
    } else if (epost.value == ""){
        window.alert("Vennligst skriv inn en epost så borghild kan svare deg!"); 
        epost.focus(); 
        return false;
    } else if (melding.value == ""){
        window.alert("Fyll inn meldingen du ønsker å sende borghild."); 
        melding.focus(); 
        return false;
    }
}