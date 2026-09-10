var prompt = require('prompt-sync')();
// permitir acesso se for admin, e a senha 1333
const username = prompt("DIGITE SEU USUARIO NO SISTEMA :")
const password = prompt("DIGITE SUA SENHA: ")
if(username === "admin" && password === "133") {
    console.log("Acesso Liberado com sucesso!");
}else {
    console.log("Acesso negado parceiro...");
}