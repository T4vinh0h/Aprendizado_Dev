// Exercício 20 — Soma de Valores de Objeto com `for...in`
//
// Construa o seguinte objeto:
//
// ```javascript
// const vendas = {
//     janeiro: 1000,
//     fevereiro: 1500,
//     marco: 2000
// };
// ```
//
// Implemente a utilização do laço `for...in` para calcular o total de vendas.
//
// Exiba o resultado conforme o formato:
//
// ```text
// Total de vendas: 4500
// ```

const vendas = {
    janeiro: 1000,
    fevereiro: 1500,
    marco: 2000
};

let total = 0;
for (let mes in vendas) {
    total += vendas[mes];
}

console.log(`Total de vendas: ${total}`);
