import { admin } from "./class.js";

let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let form = document.querySelector("#formularioLogin");

function verificarLogin(emailDigitado, senhaDigitada) {

    // Verifica administrador
    let adminValido = new admin();

    if (
        emailDigitado === adminValido.email &&
        senhaDigitada === adminValido.senha
    ) {
        return "admin";
    }

    // Busca os usuários cadastrados
    let moradores = JSON.parse(
        localStorage.getItem("moradores")
    ) || [];

    let usuarioEncontrado = moradores.find(usuario =>
        usuario.email === emailDigitado &&
        usuario.password === senhaDigitada
    );

    if (usuarioEncontrado) {
        return "user";
    }

    return null;
}

// Evento do formulário
form.addEventListener("submit", (e) => {

    e.preventDefault();

    let resultado = verificarLogin(
        email.value.trim(),
        senha.value
    );

    if (resultado === "admin") {

        location.href = "main.html";

    } else if (resultado === "user") {

        location.href = "users.html";

    } else {

        alert("E-mail ou senha incorretos!");

        senha.value = "";
        senha.focus();
    }

});