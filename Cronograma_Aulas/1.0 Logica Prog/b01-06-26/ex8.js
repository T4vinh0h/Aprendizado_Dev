// Exercício 8: Verificar pares e ímpares
// Peça ao usuário 10 números usando for.
// Ao final, mostre quantos números pares e quantos números ímpares foram digitados.
var prompt = require('prompt-sync')();

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  
  if (numero % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`Pares: ${pares}`);
console.log(`Ímpares: ${impares}`);
