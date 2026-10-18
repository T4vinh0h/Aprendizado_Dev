// 15. Crie um programa que:
// * Pergunte o nome do produto
// * Pergunte o preço
// * Pergunte o desconto
// * Calcule o preço final
// Fórmula: precoFinal = preco - desconto

var prompt = require('prompt-sync')();

let nomeProduto = prompt('Qual o nome do produto? ');
let preco = parseFloat(prompt('Digite o preço do produto: '));
let desconto = parseFloat(prompt('Digite o desconto do produto: '));
let precoFinal = preco - desconto;
console.log(`O produto ${nomeProduto} custa R$ ${preco.toFixed(2)}, com o desconto de R$ ${desconto.toFixed(2)} o preço final é R$ ${precoFinal.toFixed(2)}`);
