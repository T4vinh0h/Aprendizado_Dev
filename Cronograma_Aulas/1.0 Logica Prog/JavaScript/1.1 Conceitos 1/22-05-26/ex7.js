// 7. Crie um programa que:
// * Pergunte um número inteiro
// * Mostre:
//   * antecessor
//   * sucessor

var prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número inteiro: '));
let antecessor = numero - 1;
let sucessor = numero + 1;
console.log(`O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}`);
