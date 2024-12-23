// Selecting DOM elements for later use
const logIn = document.querySelector("#log-in-form-display");
const createAccount = document.querySelector("#create-account");
const logInForm = document.querySelector("#log-in-form");
const createAccountForm = document.querySelector("#create-account-form");
const seePassword = document.querySelectorAll(".see-password");

// Selecting input fields for validation
const createEmail = document.querySelector("#create-email");
const createUsername = document.querySelector("#create-username");
const createPassword = document.querySelector("#create-password");
const createInput = document.querySelector("#create-input");
const invalidCreateEmail = document.querySelector("#invalid-email");
const invalidCreateUsername = document.querySelector("#invalid-username");
const invalidCreatePassword = document.querySelector("#invalid-password");

const logInLink = document.querySelector("#log-in");
const logUsername = document.querySelector("#log-username");
const logPassword = document.querySelector("#log-password");
const invalidLogusername = document.querySelector("#invalid-username-log");
const invalidLogPassword = document.querySelector("#invalid-password-log");

// Regular expression for validating email format
const emailPattern = /^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/; 

// Event listeners for form interactions
logIn.addEventListener("click", displayForm);
createAccount.addEventListener("click", displayForm);
createInput.addEventListener("click", createAccountValidation);

// Toggle password visibility on icon click
seePassword.forEach(icon => {
    icon.addEventListener("click", function (){
        seePasswordFunction(this.nextElementSibling, this.firstChild) 
    });
});

// Validate login form
logInLink.addEventListener("click", logInValidation);

// Function to check if account creation inputs are valid
function checkIfValidCreateAccount(username, password, email) {
    let isValid = true;
    // Validate email format
    if (!emailPattern.test(email) || email.length === "") {
        invalidCreateEmail.classList.remove("d-none");
        invalidCreateEmail.innerHTML = "Invalid Email";
        invalidCreateEmail.classList.add("d-block");
        createEmail.classList.add("border-danger");
        isValid = false;
    } else {
        createEmail.classList.remove("border-danger");
        invalidCreateEmail.classList.add("d-none");
    }

    // Validate password length
    if (password.length < 8 || password.length > 20 || password === "") {
        invalidCreatePassword.classList.remove("d-none");
        invalidCreatePassword.innerHTML = "Password must be between 8 and 20 characters.";
        invalidCreatePassword.classList.add("text-danger");
        createPassword.classList.add("border-danger");
        isValid = false; 
    } else {
        invalidCreatePassword.classList.add("d-none");
        createPassword.classList.remove("border-danger");
    }

    // Validate username length
    if (username === "" || username.length > 50) {
        invalidCreateUsername.classList.remove("d-none");
        createUsername.classList.add("border-danger");
        isValid = false; 
    } else {
        createUsername.classList.remove("border-danger");
        invalidCreateUsername.classList.add("d-none");
    }
    
    return isValid;
}

// Function to validate account creation and show modal on success
function createAccountValidation(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!checkIfValidCreateAccount(createUsername.value, createPassword.value, createEmail.value)) {
        return;
    } else {
        var modal = new bootstrap.Modal(document.getElementById('success-modal'));
        modal.show();
        // Clear input fields after successful registration
        createEmail.value = "";
        createUsername.value = "";
        createPassword.value = "";
        logInForm.classList.remove("d-none");
        createAccountForm.classList.add("d-none");
    }    
}

// Function to toggle between login and account creation forms
function displayForm() {
    logInForm.classList.toggle("d-none");
    createAccountForm.classList.toggle("d-none");
}

// Function to toggle password visibility
function seePasswordFunction(input, icon) {
    if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    } else {
        input.setAttribute('type', 'password'); 
        icon.classList.add("bi-eye-slash");
        icon.classList.remove("bi-eye");
    }
}

// Function to check if login inputs are valid
function checkIfValidLogIn(username, password) {
    let isValid = true;
    // Validate password length
    if (password.length < 8 || password.length > 20 || password === "") {
        invalidLogPassword.classList.remove("d-none");
        invalidLogPassword.classList.add("text-danger");
        logPassword.classList.add("border-danger");
        isValid = false; 
    } else {
        invalidLogPassword.classList.add("d-none");
        logPassword.classList.remove("border-danger");
    }
    // Validate username length
    if (username === "" || username.length > 50) {
        invalidLogusername.classList.remove("d-none");
        logUsername.classList.add("border-danger");
        isValid = false; 
    } else {
        logUsername.classList.remove("border-danger");
        invalidLogusername.classList.add("d-none");
    }        
    return isValid;
}

// Function to validate login form on submission
function logInValidation(event) {
    if (!checkIfValidLogIn(logUsername.value, logPassword.value)) {
        event.preventDefault();
        event.stopPropagation();
        return;
    } 
}