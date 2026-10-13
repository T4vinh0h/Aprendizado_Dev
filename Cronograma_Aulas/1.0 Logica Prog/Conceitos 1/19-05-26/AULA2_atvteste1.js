// pedir ${nome} e ${idade}, depois de inserido mostre "ola (nome), sua idade é: (idade)"
var prompt = require('prompt-sync')();

const nome = prompt("Digite seu nome: ");
const idade = prompt("Digite sua idade: ");

console.log(`Olá ${nome}, sua idade é: ${idade}`);