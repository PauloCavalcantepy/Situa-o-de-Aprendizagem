export class admin {
    constructor() {
        this.email = "admin@gmail.com";
        this.senha = "123456";
    }
}
export class users {
    constructor(name, cpf, email, password){
    this.name = name
    this.cpf = String(cpf);
    this.email = email;
    this.password = password;
    }
}

export class Cadastro {

    salvarMorador(morador) {

        let moradores = JSON.parse(localStorage.getItem("moradores")) || [];

     
        let existe = moradores.some(usuario =>
            usuario.cpf === morador.cpf ||
            usuario.email === morador.email
        );

        if (existe) {
            alert("CPF ou e-mail já cadastrado!");
            return false;
        }

    
        let novoMorador = {
            name: morador.name,
            cpf: String(morador.cpf),
            email: morador.email,
            telefone: morador.telefone
        };

        moradores.push(novoMorador);

        localStorage.setItem("moradores", JSON.stringify(moradores));

        alert("Morador cadastrado com sucesso!");
        return true;
    }

}
