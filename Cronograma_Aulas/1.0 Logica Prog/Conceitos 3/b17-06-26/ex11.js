// Exercício 11 — Função com if
// 
// Crie uma função chamada `verificarAprovacao`.
// A função deve receber uma nota como parâmetro.
// Se a nota for maior ou igual a 7, a função deve retornar:
// Aprovado
// Caso contrário, deve retornar:
// Reprovado
// Exemplo:
// console.log(verificarAprovacao(8));
// console.log(verificarAprovacao(5));

function verificarAprovacao(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com aproveitamento de: ${nota} pontos!`);
    } else {
        console.log(`Reprovado, nota: ${nota}.`);
    }
}
verificarAprovacao(8);
verificarAprovacao(2);