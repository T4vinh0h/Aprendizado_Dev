// 14. Percorrendo notas com for
// Crie um array com 4 notas.
// Use um laço for para mostrar cada nota no console.
// Exemplo:
// let notas = [8, 7, 9, 10];

// for (let i = 0; i < notas.length; i++) {
//   console.log(notas[i]);
// }

// Depois, altere o programa para mostrar também o índice de cada nota.
// Exemplo de saída:
// Índice 0: nota 8
// Índice 1: nota 7
// Índice 2: nota 9
// Índice 3: nota 10
const prompt = require("prompt-sync")();

console.log(`\n------------------------`);
let notas = [];
    for (let i = 0; i <= 3; i++) {
        let num = Number(prompt(`Digite a ${i}º nota: `));
        notas.push(num);
    }
    for (let i = 0; i <= 3; i++) {
        console.log(`Indice ${i}: ${notas[i]}`);
    }
    console.log(`\n------------------------`);
