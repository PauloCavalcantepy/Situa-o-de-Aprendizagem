
import { admin } from "./class.js";

let emailAdm = document.querySelector("#email");
let senhaAdm = document.querySelector("#senha");
let formADM = document.querySelector("#formularioLogin");

formADM.addEventListener("submit", (e) => {
    e.preventDefault();

    let adminValido = new admin();

    if (
        emailAdm.value.trim() === adminValido.email &&
        senhaAdm.value === adminValido.senha
    ) {
        location.href = "main.html";
    } else {
        alert("E-mail ou senha incorretos!");
        senhaAdm.value = "";
        senhaAdm.focus();
    }
});
