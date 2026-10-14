// Exercício 4: Contagem regressiva
// Peça um número ao usuário usando prompt e mostre uma contagem regressiva até 0 usando for.
var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número:"));

    if (isNaN(numero)) {
        console.log(`Digite um número válido`);
    
    } else {
        for (let i = numero; i >= 0 ; i--) {
            console.log(`contagem Regressiva: ${i}`);
    }
}