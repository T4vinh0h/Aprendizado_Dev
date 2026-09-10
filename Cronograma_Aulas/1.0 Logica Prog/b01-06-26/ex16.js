// Exercício 16: Média de notas
// Peça ao usuário quantas notas deseja informar.
// Depois, usando for, leia todas as notas com prompt, calcule a média e mostre o resultado.
var prompt = require('prompt-sync')();

let quantidade = parseInt(prompt("Quantas notas deseja informar? "));
let soma = 0;

for (let i = 1; i <= quantidade; i++) {
   let nota = parseFloat(prompt(`Nota ${i}: `));
   soma += nota;
}

let media = soma / quantidade;
console.log(`Média: ${media}`);
