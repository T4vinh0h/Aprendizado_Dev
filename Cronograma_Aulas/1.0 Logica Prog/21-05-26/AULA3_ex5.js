//permitir acesso do usuario se acertar a senha 1569
var prompt = require('prompt-sync')();

const senha = prompt("Digite a senha: ");

if (senha === "1569") {
    console.log("Acesso permitido! Bem-vindo!");
} else {
    console.log("Acesso negado! Senha incorreta!");
}