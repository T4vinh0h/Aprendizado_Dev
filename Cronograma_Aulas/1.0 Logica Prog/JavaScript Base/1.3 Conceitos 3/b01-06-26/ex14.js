// Exercício 14: Multiplicação acumulada
// Peça ao usuário um número inteiro positivo -ros de 1 até esse número.
var prompt = require('prompt-sync')();


let numero = parseInt(prompt("Digite um número:"));
let produto = 1;

for (let i = 1; i <= numero; i++) {
  produto *= i;
}

console.log(`Produto: ${produto}`);
