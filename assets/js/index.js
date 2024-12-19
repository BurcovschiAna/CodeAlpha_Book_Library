const logIn = document.querySelector("#log-in");
const createAccount = document.querySelector("#create-account");
const logInForm = document.querySelector("#log-in-form");
const createAccountForm = document.querySelector("#create-account-form");
const seePassword = document.querySelectorAll(".see-password");
const createEmail = document.querySelector("#create-email");
const createUsername = document.querySelector("#create-username");
const createPasswordInput = document.querySelector("#create-password");
const logPasswordInput = document.querySelector("#log-password");
const createInput = document.querySelector("#create-input");
const invalidEmail = document.querySelector("#invalid-email");
const invalidUsername = document.querySelector("#invalid-username");
const invalidPassword = document.querySelector("#invalid-password");


logIn.addEventListener("click", logInFunction);
createAccount.addEventListener("click", logInFunction);
createInput.addEventListener("click", logInFormFunction);
seePassword.forEach(icon => {
    icon.addEventListener("click", function (){
      seePasswordFunction(this.nextElementSibling, this.firstChild) 
    });
});


function checkIfValid(username, password, email) {
    const emailPattern = /^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/; 
    let isValid = true;
    if (!emailPattern.test(email) || email.length === "") {
        invalidEmail.classList.remove("d-none");
        invalidEmail.innerHTML = "Invalid Email";
        invalidEmail.classList.add("d-block");
        createEmail.classList.add("border-danger");
        isValid = false;
    } else {
        createEmail.classList.remove("border-danger");
        invalidEmail.classList.add("d-none");
    }

  
    if (password.length < 8 || password.length > 20 || password === "") {
        invalidPassword.classList.remove("d-none");
        invalidPassword.innerHTML = "Password must be between 8 and 20 characters.";
        invalidPassword.classList.add("text-danger");
        createPasswordInput.classList.add("border-danger");
        isValid = false; 
    } else {
        invalidPassword.classList.add("d-none");
        createPasswordInput.classList.remove("border-danger");
    }

    
    if (username === "" || username.length > 50) {
        invalidUsername.classList.remove("d-none");
        createUsername.classList.add("border-danger");
        console.log(username.length);
        
        isValid = false; 
    } else{
        createUsername.classList.remove("border-danger");
        invalidUsername.classList.add("d-none");
    }
       
        console.log(isValid);
        
    return isValid
}


function logInFormFunction(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!checkIfValid(createUsername.value, createPasswordInput.value, createEmail.value)) {
        console.log("nu");
        return;
    } else{
    console.log("da");
    // var modal = new bootstrap.Modal(document.getElementById('success-modal'));
    // modal.show();
    logInForm.classList.remove("d-none");
    createAccountForm.classList.add("d-none");
    }    
}

function logInFunction() {
    logInForm.classList.toggle("d-none");
    createAccountForm.classList.toggle("d-none")
}

function seePasswordFunction(input, icon){

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
let ceva = "../"