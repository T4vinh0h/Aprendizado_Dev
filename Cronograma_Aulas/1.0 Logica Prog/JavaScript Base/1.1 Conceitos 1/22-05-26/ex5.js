// 5. Crie um programa que:
// * Pergunte a largura e a altura de um retângulo
// * Calcule a área
// Fórmula: area = largura * altura

var prompt = require('prompt-sync')();

let largura = Number(prompt('Digite a largura do retângulo: '));
let altura = Number(prompt('Digite a altura do retângulo: '));
let area = largura * altura;
console.log(`A área do retângulo é: ${area}`);
