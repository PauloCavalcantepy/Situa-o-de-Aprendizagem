import { Cadastro } from "./class.js";

let nome = document.querySelector("#nomeCadastro");
let email = document.querySelector("#emailCadastro");
let senha = document.querySelector("#passwordCadastro");
let cpf = document.querySelector("#cpfCadastro");
let telefone = document.querySelector("#telefoneCadastro");
let form = document.querySelector("#formularioCadastro");

let cadastro = new Cadastro();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Cria o objeto com os dados do morador
    let novoMorador = {
        name: nome.value.trim(),
        email: email.value.trim(),
        password: senha.value,
        cpf: cpf.value,
        telefone: telefone.value.trim()
    };

    // Salva o morador
    let salvo = cadastro.salvarMorador(novoMorador);

    if (salvo) {
        form.reset();
    }
});

