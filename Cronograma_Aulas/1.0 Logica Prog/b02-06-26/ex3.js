/*
3. Tabuada personalizada com intervalo
Crie um programa que peça:
* Um número para gerar a tabuada
* Um valor inicial
* Um valor final
Exemplo:
Número: 5
Início: 3
Fim: 8
Saída esperada:
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
Regras:
* Usar `for`.
* Se o valor inicial for maior que o final, mostrar a tabuada em ordem decrescente. * Exemplo: de 10 até 1.
*/

const prompt = require("prompt-sync")();

let numero = Number(prompt("Número para tabuada: "));
let inicio = Number(prompt("Início: "));
let fim = Number(prompt("Fim: "));

if (inicio <= fim) {
    for (let i = inicio; i <= fim; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
} else {
    for (let i = inicio; i >= fim; i--) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
