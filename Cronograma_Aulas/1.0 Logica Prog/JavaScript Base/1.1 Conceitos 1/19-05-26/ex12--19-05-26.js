// # Exercício 12 — Desafio Booleano

// Crie um sistema que armazene:
// * se o usuário é maior de idade
// * se possui carteira de motorista
// * se possui veículo
// Exiba todas as informações.

const prompt = require('prompt-sync')();

const idade = Number(prompt('Digite sua idade: '));
const maiorDeIdade = idade >= 18;
const possuiCarteira = prompt('Possui carteira de motorista? (s/n): ') === 's';
const possuiVeiculo = prompt('Possui veículo? (s/n): ') === 's';

console.log(`Maior de idade: ${maiorDeIdade}`);
console.log(`Possui carteira de motorista: ${possuiCarteira}`);
console.log(`Possui veículo: ${possuiVeiculo}`);