// 12. Crie um programa que:
// * Pergunte um número
// * Mostre o dobro e a metade do número

var prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Digite um número: '));
let dobro = numero * 2;
let metade = numero / 2;
console.log(`O dobro de ${numero} é ${dobro} e a metade é ${metade}`);
