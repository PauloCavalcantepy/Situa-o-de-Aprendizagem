import { admin } from "./class.js";

let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let form = document.querySelector("#formularioLogin");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let adminValido = new admin();

    if (
        email.value.trim() === adminValido.email &&
        senha.value === adminValido.senha
    ) {
        location.href = "main.html";
    } else {
        alert("E-mail ou senha incorretos!");
        senha.value = "";
        senha.focus();
    }
});