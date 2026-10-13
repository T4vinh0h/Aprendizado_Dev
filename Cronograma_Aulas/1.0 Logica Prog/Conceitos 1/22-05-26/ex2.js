// 2. Crie um programa que:
// * Pergunte a idade do usuário
// * Utilize `parseInt()`
// * Mostre a idade no console

var prompt = require('prompt-sync')();

let idadeStr = prompt('Qual a sua idade? ');
let idade = parseInt(idadeStr);
console.log(`A idade digitada foi: ${idade}`);
