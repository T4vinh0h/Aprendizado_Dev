// 14. Crie um programa que:
// * Pergunte três números
// * Calcule a média dos valores
// Utilize `Number()`.

var prompt = require('prompt-sync')();

let num1 = Number(prompt('Digite o primeiro número: '));
let num2 = Number(prompt('Digite o segundo número: '));
let num3 = Number(prompt('Digite o terceiro número: '));
let media = (num1 + num2 + num3) / 3;
console.log(`A média dos três números é: ${media}`);
