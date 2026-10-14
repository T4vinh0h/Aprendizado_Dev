// Exercício 12: Soma de 1 até N
// Peça ao usuário um número inteiro positivo e calcule a soma de todos os números de 1 até esse número usando for.
var prompt = require('prompt-sync')();


let numero = parseInt(prompt("Digite um número:"));
let soma = 0;

for (let i = 1; i <= numero; i++) {
  soma += i;
}

console.log(`Soma: ${soma}`);
