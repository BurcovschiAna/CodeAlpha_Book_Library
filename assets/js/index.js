const logIn = document.querySelector("#log-in");
const createAcount = document.querySelector("#create-acount");
const logInForm = document.querySelector("#log-in-form");
const createAcountForm = document.querySelector("#create-acount-form");
const seePassword = document.querySelectorAll(".see-pasword");
const CreatePasswordInput = document.querySelector("#create-password");
const LogPasswordInput = document.querySelector("#log-password");

logIn.addEventListener("click", logInFunction);
createAcount.addEventListener("click", logInFunction);

seePassword.forEach(icon => {
    icon.addEventListener("click", function (){
      seePasswordFunction(this.nextElementSibling, this.firstChild) 
    });
});



function logInFunction() {
    logInForm.classList.toggle("d-none");
    createAcountForm.classList.toggle("d-none")
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