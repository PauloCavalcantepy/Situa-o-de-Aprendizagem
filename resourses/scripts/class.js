export class admin {
   name = "admin";
   password = "admin123"
}

export class user{
    constructor(name, cpf, email, password){
    this.name = name
    this.cpf = Number(cpf);
    this.email = email;
    this.password =password;
    }
}