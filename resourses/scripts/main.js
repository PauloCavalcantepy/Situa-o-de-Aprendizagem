import { users, Cadastro } from "./class.js";

let formulario = document.getElementById("formularioCadastro");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let nome = document.getElementById("nomeCadastro").value.trim();
    let cpf = document.getElementById("cpfCadastro").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefoneCadastro").value.trim();
    let senha = document.getElementById("passwordCadastro").value;

    let morador = new users(nome, cpf, email, telefone, senha);
    let cadastro = new Cadastro();

    let salvou = cadastro.salvarMorador(morador);

    if (salvou) {
        formulario.reset();
        window.location.href = "index.html";
    } else {
        alert("Não foi possível salvar o cadastro. Verifique os dados.");
    }
});