import { admin } from "./class.js";
import { users } from "./class.js";

let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let adminValido = new admin();

    if (
        email.value === adminValido.email &&
        senha.value === adminValido.senha
    ) {
        console.log("Admin");
        alert("Deu certo!");
    } else {
        alert("E-mail ou senha incorretos!");
    }
});