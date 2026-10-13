// Exercício 19 — Função que calcula média de array
// 
// Crie uma função chamada `calcularMediaNotas`.
// A função deve receber um array de notas.
// Dentro da função:
// 1. Crie uma variável para somar as notas.
// 2. Use um laço `for` para percorrer o array.
// 3. Calcule a média.
// 4. Retorne o resultado.
// Exemplo:
// let notas = [8, 7, 9];
// console.log(calcularMediaNotas(notas));
// Resultado esperado:
// 8

function calcularMediaNotas(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length ; i++) {
       soma = soma + notas[i]   
    }
    let media = soma / notas.length;
    return(media);
}

let notas = [8, 7, 9, 4 , 2, 5, 10];
let resultadoDaFuncao = calcularMediaNotas(notas); 
    console.log(`A média das "${notas.length}" notas (${notas}) é:  ${resultadoDaFuncao}`);

