// Exercício 22: Mini desafio final
// Crie um programa que peça um número ao usuário e mostre:
// - a tabuada desse número de 1 até 10;
// - a soma dos resultados da tabuada;
// - uma mensagem ao final.
var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));
let soma = 0;

for (let i = 1; i <= 10; i++) {
   console.log(`${numero} x ${i} = ${numero * i}`);
   soma += numero * i;
}

console.log(`\nSoma dos resultados: ${soma}`);
console.log(`Fim do programa`);
