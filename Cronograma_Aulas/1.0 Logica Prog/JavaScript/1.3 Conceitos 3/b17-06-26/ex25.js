// Exercício 25 — Função anônima com parâmetros
// 
// Crie uma função anônima armazenada em uma variável chamada `multiplicar`.
// A função deve receber dois números como parâmetros e retornar a multiplicação deles.
// Exemplo:
// console.log(multiplicar(4, 5));
// Resultado esperado:
// 20

const multiplicar = function(n1, n2) { 
    return n1 * n2
}
console.log(` O resultado: ${multiplicar(4, 5)}`);
