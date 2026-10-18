// Exercício 15 — Função com laço for
// 
// Crie uma função chamada `contarAte`.
// A função deve receber um número como parâmetro e exibir os números de 1 até esse número usando `for`.
// Exemplo:
// contarAte(5);
// Resultado esperado:
// 1
// 2
// 3
// 4
// 5

function contarAte(numero) {
    for (let i = 1; i <= numero ; i++) {
       console.log( `${i}`);
    }
}
contarAte(5);