// Exercício 7: Números ímpares até um valor informado
// Peça ao usuário um número e mostre todos os números ímpares de 1 até esse número usando for.

var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número:"));

    if (numero % 2 === 0) {
        console.log(`Erro: Utilize apenas números ímpares.`);
    } else {
        for (let i = 1; i <= numero; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
