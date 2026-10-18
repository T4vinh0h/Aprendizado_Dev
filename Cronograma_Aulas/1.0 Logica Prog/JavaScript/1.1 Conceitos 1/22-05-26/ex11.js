// 11. Crie um programa que:
// * Pergunte o peso
// * Pergunte a altura
// * Calcule o IMC
// Fórmula: imc = peso / (altura * altura)

var prompt = require('prompt-sync')();

let peso = parseFloat(prompt('Digite o peso (kg): '));
let altura = parseFloat(prompt('Digite a altura (m): '));
let imc = peso / (altura * altura);
console.log(`O IMC calculado é: ${imc.toFixed(2)}`);
