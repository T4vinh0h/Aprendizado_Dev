/*
13. Soma até digitar zero
Use do...while para pedir números ao usuário.
O programa deve somar todos os números digitados até que o usuário digite 0.
Exemplo:
Digite um número: 5
Digite um número: 3
Digite um número: 2
Digite um número: 0

Soma total: 10
*/

let soma = 0;
let numero;

do {
    numero = parseFloat(prompt("Digite um número:"));
    soma += numero;
} while (numero !== 0);

console.log("Soma total: " + soma);
