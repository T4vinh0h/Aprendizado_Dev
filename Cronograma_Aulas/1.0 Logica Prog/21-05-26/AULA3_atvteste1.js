var prompt = require('prompt-sync')();

const usuario = prompt("Digite seu nome: ");

if (usuario === "Roberto") {
    console.log("Bom te ver de novo, estavamos esperando você Roberto!");
} else {
    console.log("Desconhecido");
}
  //valide o nome Roberto (usuario) se nao for, retorne um Desconhecido e se for, retorne bom te ver de novo, estavamos esperando voce Roberto!