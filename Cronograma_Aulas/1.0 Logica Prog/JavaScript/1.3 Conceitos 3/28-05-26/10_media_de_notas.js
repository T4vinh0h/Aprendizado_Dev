/*
10. Média de notas
Peça ao usuário quantas notas deseja informar.
Depois, usando while, leia todas as notas com prompt, calcule a média e mostre o resultado.
Exemplo:
Quantas notas deseja informar? 3

Nota 1: 8
Nota 2: 7
Nota 3: 9

Média: 8
*/

let Notas = parseInt(prompt("Quantas notas deseja informar?"));
let i = 1;
let soma = 0;

while (i <= Notas) {
    let nota = parseFloat(prompt(`Nota ${i}:`));
    soma += nota;
    i++;
}

if (Notas > 0) {
    let media = soma / Notas;
    console.log(`Média: ${media}`);
} else {
    console.log("Nenhuma nota foi informada.");
}
