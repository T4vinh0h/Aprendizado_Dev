// Exercício 13: Soma dos números pares
// Peça ao usuário um número inteiro positivo.
// Usando for, some apenas os números pares de 0 até o número digitado.
var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número:"));
let soma = 0;

for (let i = 0; i <= numero; i++) {
  if (i % 2 == 0) {
    soma += i;
  }
}

console.log(`Soma dos pares: ${soma}`);
