
// 12. Lendo 5 números
// Crie um programa que peça ao usuário 5 números.
// Guarde todos os números em um array chamado numeros.
// No final, mostre:
// O array completo
// Quantos números foram digitados
// Use Number() para converter os valores digitados.

const prompt = require("prompt-sync")();
    let numeros = [];
for (let i = 1; i <= 3; i++) {
    let nmr = Number(prompt(`Digite o ${i}º numero: `));
    numeros.push(nmr);
}
console.log(numeros);
console.log(numeros.length);