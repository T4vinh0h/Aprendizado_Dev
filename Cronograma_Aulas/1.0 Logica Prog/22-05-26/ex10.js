// 10. Crie um programa que:
// * Pergunte o preço de um produto
// * Pergunte a quantidade
// * Mostre o valor total da compra

var prompt = require('prompt-sync')();

let preco = parseFloat(prompt('Digite o preço do produto: '));
let quantidade = parseInt(prompt('Digite a quantidade do produto: '));
let total = preco * quantidade;
console.log(`O valor total da compra é: ${total}`);
