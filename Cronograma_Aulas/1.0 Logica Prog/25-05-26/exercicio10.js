/*
## Exercício 10 — Sistema completo de login com níveis

Crie um sistema com níveis de acesso.

Regras:

### Usuários:
admin
gerente
cliente

### Senha correta:
"1234"

### Respostas:
* admin: "Acesso total"
* gerente: "Acesso intermediário"
* cliente: "Acesso básico"
* senha incorreta: "Senha inválida"
* usuário inexistente: "Usuário não encontrado"

Utilize:
* if
* else if
* operadores lógicos
* blocos { }
* condições aninhadas.
*/
var prompt = require('prompt-sync')();

let usuario = prompt("Qual o usuário? ").toLowerCase();
let senha = prompt("Qual a senha? ");

if (usuario === "admin" || usuario === "gerente" || usuario === "cliente") {
    
    if (senha === "1234") {
        if (usuario === "admin") {
            console.log("Acesso total");
        } else if (usuario === "gerente") {
            console.log("Acesso intermediário");
        } else {
            console.log("Acesso básico");
        }
    } else {
        console.log("Senha inválida");
    }
} else {
    console.log("Usuário não encontrado");
}