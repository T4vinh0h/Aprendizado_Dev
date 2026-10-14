// 8. Crie um programa que:
// * Pergunte o salário do funcionário
// * Pergunte o bônus
// * Mostre o salário final
// Utilize `parseFloat()`.

var prompt = require('prompt-sync')();

let salario = parseFloat(prompt('Digite o salário do funcionário: '));
let bonus = parseFloat(prompt('Digite o bônus do funcionário: '));
let salarioFinal = salario + bonus;
console.log(`O salário final é: ${salarioFinal}`);
