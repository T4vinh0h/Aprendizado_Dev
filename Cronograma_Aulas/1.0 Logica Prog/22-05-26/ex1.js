// 1. Crie um programa que:
// * Pergunte o nome do usuário
// * Mostre uma mensagem de boas-vindas

var prompt = require('prompt-sync')();

let nome = prompt('Qual o seu nome? ');
console.log(`Seja bem-vindo(a), ${nome}!`);
