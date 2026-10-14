// 13. Crie um programa que:
// * Pergunte quantos anos a pessoa trabalha
// * Pergunte o salário
// * Mostre as informações formatadas
// Utilize:
// * `parseInt()`
// * `parseFloat()`

var prompt = require('prompt-sync')();

let anosDeTrabalho = parseInt(prompt('Há quantos anos você trabalha? '));
let salario = parseFloat(prompt('Qual o seu salário? '));
console.log(`Você trabalha há ${anosDeTrabalho} anos e recebe um salário de R$ ${salario.toFixed(2)}`);
