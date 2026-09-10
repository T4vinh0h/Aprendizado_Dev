/*
5. Números pares
Peça ao usuário um número e mostre todos os números pares de 0 até esse número usando while.
Exemplo:
Digite um número: 10

0
2
4
6
8
10
*/

let numero = parseInt(prompt("Digite um número:"));
let i = 0;

while (i <= numero) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
