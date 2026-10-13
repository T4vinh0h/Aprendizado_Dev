// - Tabuada de um número
// Peça ao usuário para inserir um número e exiba a tabuada desse número de 1 a 10, utilizando
// FOR.
var prompt = require('prompt-sync')();

var tabuada = prompt(`⌨Digite um valor (1️⃣  ▶️  🔟) e veja as multiplicações: `);

for (let i = 1; i <= 10; i++) {
 console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}