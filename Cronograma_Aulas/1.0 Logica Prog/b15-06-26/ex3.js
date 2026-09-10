// Exercício 3 — Modificação de Valores em Objeto
//
// Elabore um objeto denominado `produto` com as seguintes propriedades:
//
// - nome
// - preco
//
// Proceda com a alteração do valor da propriedade `preco` e, posteriormente,
// exiba o objeto atualizado no console.

const produto = {
    nome: "Notebook",
    preco: 5000
};
console.log(`Preço anterior do produto: ${produto.preco} `);
produto.preco = 1249,57
console.log(`Preço atual do produto: ${produto.preco}`);
