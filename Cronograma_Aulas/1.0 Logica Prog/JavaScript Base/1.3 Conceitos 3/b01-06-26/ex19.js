// Exercício 19: Números entre dois valores
// Peça ao usuário dois números: número inicial; número final.
// Depois, mostre todos os números entre eles usando for.
var prompt = require('prompt-sync')();


let inicial = parseInt(prompt("Digite o número inicial:"));
let final = parseInt(prompt("Digite o número final:"));

for (let i = inicial; i <= final; i++) {
  console.log(i);
}
