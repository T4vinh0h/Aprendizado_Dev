// 9. Crie um programa que:
// * Pergunte a temperatura em Celsius
// * Converta para Fahrenheit
// Fórmula: fahrenheit = (celsius * 9/5) + 32

var prompt = require('prompt-sync')();

let celsius = parseFloat(prompt('Digite a temperatura em Celsius: '));
let fahrenheit = (celsius * 9/5) + 32;
console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`);
