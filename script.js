function submission() {
    saveLocalStorage();
    window.location.href = 'profile.html'; // Redirect to profile/dashboard page
    return false; // Prevent form submission to allow validation
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function saveLocalStorage() {
    localStorage.setItem("fname", document.getElementById('fname').value);
    localStorage.setItem("lname", document.getElementById('lname').value);
    localStorage.setItem("email", document.getElementById('email').value);
    localStorage.setItem("sex", document.getElementById('sex').value);
    localStorage.setItem("reason", document.getElementById('reason').value);
}