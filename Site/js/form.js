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
    // Check each field for valid input, if invalid input change placeholder and border of input field.
    // Check a dropdown box has been selected
    // If not selected add placeholder and * to label that ask user to fill in field. 
    if (inquiry.value == ""){
        inquiry.focus();
        return false; 
    // Check tittel field
    } else if (tittel.value == ""){
        tittel.placeholder = "Vennligst fyll ut dette feltet.";
        if (document.getElementById("contactTitleLabel").innerHTML.includes("*")) {
        
        } else { 
            document.getElementById("contactTitleLabel").innerHTML += "*";
        }
        tittel.focus(); // Refocus the input field if invalid input
        return false;
    // Check name field
    } else if (navn.value == ""){
        navn.placeholder = "Vennligst fyll ut dette feltet.";
        if (document.getElementById("userNameLabel").innerHTML.includes("*")) {
        
        } else { 
            document.getElementById("userNameLabel").innerHTML += "*";
        }
        navn.focus(); // Refocus the input field if invalid input
        return false; 
    // Check email field
    } else if (epost.value == "" || epost.value.includes("@")==false){  // Requires both some input and needs to include a "@"
        epost.placeholder = "Vennligst fyll ut dette feltet."; // Uses HTML5 validation message if text but no @
        if (document.getElementById("emailLabel").innerHTML.includes("*")) {
        } else { 
            document.getElementById("emailLabel").innerHTML += "*";
        }
        epost.focus(); // Refocus the input field if invalid input
        return false;
    // Check message text field
    } else if (melding.value == ""){
        melding.placeholder = "Vennligst fyll ut dette feltet.";
        if (document.getElementById("inquiryTextLabel").innerHTML.includes("*")) {
        } else { 
            document.getElementById("inquiryTextLabel").innerHTML += "*";
        }

        melding.focus(); // Refocus the input field if invalid input
        return false;
    } else {
        submitForm()
    }
}