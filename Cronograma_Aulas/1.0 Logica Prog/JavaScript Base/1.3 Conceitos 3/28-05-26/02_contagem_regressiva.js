/*
2. Contagem regressiva
Peça ao usuário um número usando prompt e faça uma contagem regressiva até 0 usando while.
Exemplo:
Digite um número: 5
5
4
3
2
1
0
*/

let numero = parseInt(prompt("Digite um número:"));
while (numero >= 0) {
    console.log(numero);
    numero--;
}
