// Exercício 11: Tabuada com soma dos resultados
// Peça ao usuário um número e mostre a tabuada desse número de 1 até 10.
// Ao final, mostre também a soma dos resultados da tabuada.
var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número:"));
let soma = 0; // Mantemos a caixinha da soma aqui fora

for (let i = 1; i <= 10; i++) {
   console.log(`${numero} x ${i} = ${numero * i}`);
   soma += numero * i;
}
console.log(`\nSoma dos resultados: ${soma}`);
