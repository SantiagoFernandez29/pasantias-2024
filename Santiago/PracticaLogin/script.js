const inputPass = document.getElementById("pass");
const eyeIcon = document.getElementById("eye");

eyeIcon.addEventListener("click",function(){

    if(inputPass.type === "password"){
        inputPass.type = "text";
        eyeIcon.classList.remove('bx-show-alt');
        eyeIcon.classList.add('bx-hide');
    } else {
        inputPass.type = "password";
        eyeIcon.classList.remove('bx-hide');
        eyeIcon.classList.add('bx-show-alt');
    }
})

const signUpButton = document.getElementById("btn");
const nameInput = document.getElementById("name");
const parrafo = document.getElementById("frase");

signUpButton.addEventListener("click", e =>{
    e.preventDefault();

    let contenidoPassword = inputPass.value;
    let contenidoNombre = nameInput.value;

    let entrar = false;
    let warning = "";

    if(contenidoNombre.length == 0){
        warning += 'Se debe rellenar el campo <em>username</em> <br>';
        entrar = true;
    }
    
    if(contenidoPassword.length == 0){
        inputPass.classList.add('inputIncorrecto');
        warning += 'Se debe rellenar el campo <em>password</em> <br>';
        entrar = true;
    }

    if(contenidoNombre.length != 0 && contenidoPassword.length != 0){
        parrafo.innerHTML = "";
    }

    if(entrar){
        parrafo.innerHTML = warning;
    }

})