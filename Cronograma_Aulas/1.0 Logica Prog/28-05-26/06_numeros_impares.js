/*
6. Números ímpares
Peça ao usuário um número e mostre todos os números ímpares de 1 até esse número usando while.
Exemplo:
Digite um número: 9

1
3
5
7
9
*/

let numero = parseInt(prompt("Digite um número:"));
let i = parseInt(prompt("Digite um número:"));

while (i <= numero) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
