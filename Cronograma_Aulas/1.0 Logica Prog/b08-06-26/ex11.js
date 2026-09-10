// 11. Lendo nomes com prompt
// Usando prompt-sync, crie um programa que peça o nome de 3 pessoas.
// Cada nome deve ser armazenado em um array usando push().
// No final, mostre o array completo.
// Base:
// const prompt = require("prompt-sync")();

// let nomes = [];

// let nome = prompt("Digite um nome: ");
// nomes.push(nome);

const prompt = require("prompt-sync")();
    let nomes = [];
for (let i = 1; i <= 3; i++) {
    let nome = prompt(`Digite o ${i}º nome: `);
    nomes.push(nome);
}
console.log(nomes);