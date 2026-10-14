// 4. Crie um programa que:
// * Pergunte um número decimal
// * Utilize `parseFloat()`
// * Mostre o valor digitado

var prompt = require('prompt-sync')();

let decimalStr = prompt('Digite um número decimal: ');
let decimal = parseFloat(decimalStr);
console.log(`O valor digitado foi: ${decimal}`);
