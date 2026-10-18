// Exercício 15: Fatorial
// Peça ao usuário um número inteiro positivo e calcule o fatorial usando for.
var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));
let fatorial = 1;
let sequencia = ""; 

for (let i = numero; i >= 1; i--) {
   fatorial *= i;
   if (i === numero) {
       sequencia += `${i}`; 
   } else {
       sequencia += ` x ${i}`; 
   }
}


console.log(`\n${numero}! = ${fatorial}`);
console.log(`Pois:\n${sequencia} = ${fatorial}`);
