// Exercício 10: Tabuada simples
// Peça ao usuário um número e mostre a tabuada desse número de 1 até 10 usando for.

var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
   console.log(`${numero} x ${i} =  ${numero * i}`);

}

