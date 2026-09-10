
// # Exercício 14 — Sistema Escolar
 
// Crie variáveis para armazenar:
 
// * nome do aluno
// * nota1
// * nota2
// * média
// * situação (true ou false)
 
// Exiba todas as informações.
 
// ---
const prompt = require('prompt-sync')();

const nome = prompt('Digite o nome do aluno: ');
const nota1 = parseFloat(prompt('Digite a nota 1: '));
const nota2 = parseFloat(prompt('Digite a nota 2: '));
const media = (nota1 + nota2) / 2;
const situacao = media >= 6;

console.log(`Nome: ${nome}`);
console.log(`Nota 1: ${nota1}`);
console.log(`Nota 2: ${nota2}`);
console.log(`Média: ${media}`);
console.log(`Situação (aprovado true / reprovado false): ${situacao}`);
 