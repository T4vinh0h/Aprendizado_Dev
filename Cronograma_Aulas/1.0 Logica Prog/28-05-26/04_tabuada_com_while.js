/*
4. Tabuada com while
Peça ao usuário um número e mostre a tabuada dele de 1 até 10 usando while.
Exemplo:
Digite um número: 7

7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
*/

let numero = parseInt(prompt("Digite um número:"));
let i = parseInt(prompt("Digite um número MULTIPLICADOR:"));;

while (i <= 10) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
}
