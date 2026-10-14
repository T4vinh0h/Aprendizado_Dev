// Exercício 17 — Função com tabuada
// 
// Crie uma função chamada `mostrarTabuada`.
// A função deve receber um número como parâmetro e exibir a tabuada desse número de 1 a 10 usando `for`.
// Exemplo para o número 5:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50

function mostrarTabuada(num) {
    for (let i = 1; i <= 10 ; i++) {
        let resultado = num * i;
            console.log(`${num} X ${i} = ${resultado}`);
    }
}