// Google Apps Script URL where form data will be sent
const scriptURL = 'https://script.google.com/macros/s/AKfycbwDvvpajczM2UCDMunI_rGk5_UibeBbZyhduQDw_g3RaMlwSDM1No_gox8fGnJrQ-I4gQ/exec';

// Selecting the form and message element from the HTML
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

// Adding an event listener for form submission
form.addEventListener('submit', e => {
    e.preventDefault(); // Preventing default form submission behavior
    
    // Sending form data to Google Apps Script URL using Fetch API
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // Handling success response
            msg.innerHTML = "Thank You For Subscribing !!"; // Displaying success message
            setTimeout(function(){
                msg.innerHTML = ""; // Clearing the message after 5 seconds
            }, 5000);
            form.reset(); // Resetting the form
        })
        .catch(error => console.error('Error!', error.message)); // Handling error
});
