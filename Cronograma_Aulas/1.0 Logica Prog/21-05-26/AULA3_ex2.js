var prompt = require('prompt-sync')();
const nivelAcesso = prompt("Digite qual seu nivel de acesso: ")
if (nivelAcesso != "Gerente") {
    console.log("Acesso Negado")
 }else { console.log("Olá, bem-vindo de volta, estavamos esperando por voce!")
  }
