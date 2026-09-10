// Somando valores de um vetor
// Crie um vetor com 5 números e mostre no console a soma
// total desses valores.
var prompt = require('prompt-sync')();

let num = ["23", "454", "1021", "912", "7"];

// Converte as strings para números e calcula a soma
let soma = 0;
for (let i = 0; i < num.length; i++) {
    soma += parseInt(num[i]);
}
console.log("Soma total:", soma);