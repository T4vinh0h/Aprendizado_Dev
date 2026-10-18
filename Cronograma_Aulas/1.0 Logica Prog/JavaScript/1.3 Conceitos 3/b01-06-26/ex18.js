// Exercício 18: Menor número
// Peça ao usuário 5 números usando for.
// Ao final, mostre qual foi o menor número digitado.
var prompt = require('prompt-sync')();

let menor = Infinity;

for (let i = 1; i <= 5; i++) {
   let numero = parseInt(prompt(`Digite o ${i}º número: `));
   if (numero < menor) {
      menor = numero;
   }
}
console.log(`Menor número: ${menor}`);
