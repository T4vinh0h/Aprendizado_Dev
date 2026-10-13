/*
8. Análise de números digitados
Crie um programa que pergunte quantos números o usuário deseja informar. Depois, leia todos os números.
Ao final, mostre:
* Quantidade de números positivos
* Quantidade de números negativos
* Quantidade de zeros
* Quantidade de pares
* Quantidade de ímpares
* Maior número digitado
* Menor número digitado
* Soma total
* Média geral
Regras:
* Usar `for`.
* Não usar arrays.
* O primeiro número digitado pode ser usado para iniciar o maior e o menor. * Validar para que a quantidade de números seja maior que zero.
*/

const prompt = require("prompt-sync")();

let qtd = 0;
while (qtd <= 0) {
    qtd = Number(prompt("Quantos números deseja informar? "));
}

let qtdPositivos = 0;
let qtdNegativos = 0;
let qtdZeros = 0;
let qtdPares = 0;
let qtdImpares = 0;
let somaTotal = 0;
let maior, menor;

for (let i = 1; i <= qtd; i++) {
    let num = Number(prompt("Número " + i + ": "));
    
    if (i === 1) {
        maior = num;
        menor = num;
    } else {
        if (num > maior) maior = num;
        if (num < menor) menor = num;
    }
    
    if (num > 0) qtdPositivos++;
    else if (num < 0) qtdNegativos++;
    else qtdZeros++;
    
    if (num % 2 === 0) qtdPares++;
    else qtdImpares++;
    
    somaTotal += num;
}

let media = somaTotal / qtd;

console.log("\n--- Análise dos números ---");
console.log("Positivos: " + qtdPositivos);
console.log("Negativos: " + qtdNegativos);
console.log("Zeros: " + qtdZeros);
console.log("Pares: " + qtdPares);
console.log("Ímpares: " + qtdImpares);
console.log("Maior número: " + maior);
console.log("Menor número: " + menor);
console.log("Soma total: " + somaTotal);
console.log("Média geral: " + media.toFixed(2));
