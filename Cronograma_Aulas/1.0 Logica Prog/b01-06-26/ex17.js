// Exercício 17: Maior número
// Peça ao usuário 5 números usando for.
// Ao final, mostre qual foi o maior número digitado.
var prompt = require('prompt-sync')();

let maior = -Infinity;

for (let i = 1; i <= 5; i++) {
   let numero = parseInt(prompt(`Digite o ${i}º número: `));
   
   if (numero > maior) {
      maior = numero;
   }
}

console.log(`Maior número: ${maior}`);