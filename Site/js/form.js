window.onload = function(){  // Make the JS version of form visibile, also hides the noJS (HTML5 validated) form.
    document.getElementById("jsContactForm").style.visibility = "visible";
    document.getElementById("jsContactForm").style.display = "block";
    document.getElementById("nojsContactForm").style.display = "none";  // Removes the HTML5 validated form
}

function submitForm(){  // Message to user that the form was sent!
    window.alert("Hei "+document.getElementById("jsContactForm").user.value+".\nDin henvendelse til borghild er blitt sendt! \nBorghild vil sende svar til "+document.getElementById("jsContactForm").userEmail.value);
}

/* Function that validates the form inputs */
function validate(){ 
    // Retrieve all fields in the form
    var inquiry = document.getElementById("inquiry");
    var tittel = document.getElementById("jsContactForm").title;
    var navn = document.getElementById("jsContactForm").user;
    var epost = document.getElementById("jsContactForm").userEmail;
    var melding = document.getElementById("jsContactForm").userMessage;
    // Check each field for valid input, if invalid input return an error as a window.alert
    if (inquiry.value == ""){
        window.alert("Velg et alternativ for din melding"); 
        return false; 
    } else if (tittel.value == ""){
        window.alert("Skriv inn en tittel for din forespørsel!"); 
        tittel.focus(); // Refocus the input field if invalid input
        return false;
    } else if (navn.value == ""){
        window.alert("Skriv inn navnet ditt så borghild vet hvem som sender meldingen!"); 
        navn.focus(); // Refocus the input field if invalid input
        return false; 
    } else if (epost.value == "" || epost.value.includes("@")==false){  // Requires both some input and needs to include a "@"
        window.alert("Vennligst skriv inn en epost så borghild kan svare deg!"); 
        epost.focus(); // Refocus the input field if invalid input
        return false;
    } else if (melding.value == ""){
        window.alert("Fyll inn meldingen du ønsker å sende borghild."); 
        melding.focus(); // Refocus the input field if invalid input
        return false;
    }
}