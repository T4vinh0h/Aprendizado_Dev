// Exercício 20: Contador personalizado
// Peça ao usuário três informações: número inicial; número final; valor do intervalo.
// Depois, mostre a contagem usando for.
var prompt = require('prompt-sync')();


let inicial = parseInt(prompt("Digite o número inicial:"));
let final = parseInt(prompt("Digite o número final:"));
let intervalo = parseInt(prompt("Digite o intervalo:"));

for (let i = inicial; i <= final; i += intervalo) {
  console.log(i);
}
