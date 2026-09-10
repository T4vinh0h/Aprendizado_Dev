/*
12. Número menor
Peça ao usuário 5 números usando while.
Ao final, mostre qual foi o menor número digitado.
Exemplo:
Digite o 1º número: 4
Digite o 2º número: 10
Digite o 3º número: 2
Digite o 4º número: 8
Digite o 5º número: 6

Menor número: 2
*/

let i = 1;
let menor = Infinity;

while (i <= 5) {
    let num = parseFloat(prompt(`Digite o ${i}º número:`));
    if (num < menor) {
        menor = num;
    }
    i++;
}

console.log("Menor número: " + menor);
