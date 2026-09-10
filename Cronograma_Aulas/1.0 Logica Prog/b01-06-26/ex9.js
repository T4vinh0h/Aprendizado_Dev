// Exercício 9: Contar números positivos
// Peça ao usuário 6 números usando for.
// Ao final, mostre quantos números positivos foram digitados.

var prompt = require('prompt-sync')();
 
let positivos = 0;

    for (let i = 1; i <= 6; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`));
            if (numero >= 1) {
                positivos++;
            }
    }
console.log(`Quantidade de positivos: ${positivos}`);


