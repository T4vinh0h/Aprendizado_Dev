// Exercício 11 — Cálculo de Valor Total em Estoque
//
// Construa um objeto denominado `produto` com as propriedades:
//
// - nome
// - preco
// - quantidade
//
// Implemente o cálculo do valor total criando uma variável `total` que receba:
//
// ```javascript
// produto.preco * produto.quantidade
// ```
//
// Exiba o nome do produto e o valor total em estoque.

const produto = {
    nome: "Notebook",
    preco: 2000,
    qtd: 10
}
const total = produto.preco * produto.qtd;

console.log(`O produto ${produto.nome} tem um valor total de R$ ${total} em estoque.`);
