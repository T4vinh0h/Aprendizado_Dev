// 3. Crie um programa que:
// * Pergunte dois números
// * Utilize `Number()`
// * Mostre a soma dos números

var prompt = require('prompt-sync')();

let num1 = Number(prompt('Digite o primeiro número: '));
let num2 = Number(prompt('Digite o segundo número: '));
let soma = num1 + num2;
console.log(`A soma dos números é: ${soma}`);
