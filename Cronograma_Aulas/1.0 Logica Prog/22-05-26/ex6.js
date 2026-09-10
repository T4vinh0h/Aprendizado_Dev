// 6. Crie um programa que:
// * Pergunte o nome do aluno
// * Pergunte a nota 1
// * Pergunte a nota 2
// * Calcule a média
// Utilize `parseFloat()`.

var prompt = require('prompt-sync')();

let nome = prompt('Qual o nome do aluno? ');
let nota1 = parseFloat(prompt('Digite a nota 1: '));
let nota2 = parseFloat(prompt('Digite a nota 2: '));
let media = (nota1 + nota2) / 2;
console.log(`A média do aluno ${nome} é: ${media}`);
