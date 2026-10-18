// Exercício 15 — Array de Objetos
//
// Elabore um array denominado `produtos` contendo 3 objetos.
//
// Cada objeto deve representar um produto com as propriedades:
//
// - nome
// - preco
//
// Implemente a exibição do nome de todos os produtos utilizando `console.log()`.

const produtos = [
    {
        nome: "Notebook",
        preco: 3500
    },
    {
        nome: "Smartphone",
        preco: 2000
    },
    {
        nome: "Tablet",
        preco: 1500
    }
];

produtos.forEach(produto => {
    console.log(produto.nome);
});
