// Exercício 6: Números pares até um valor informado
// Peça ao usuário um número e mostre todos os números pares de 0 até esse número usando for.
var prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número:"));

    if (numero % 2 !== 0) {
        console.log(`Erro: Utilize apenas números pares.`);
    } else {
        for (let i = 0; i <= numero; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    }
    
