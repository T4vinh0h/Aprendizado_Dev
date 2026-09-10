// 10. Encontrando a posição de um produto
// Crie um vetor com produtos:
// let produtos = ["mouse", "teclado", "monitor", "fone"];
// Depois:
// Peça ao usuário o nome de um produto;
// Use indexOf() para descobrir a posição;
// Se a posição for -1, mostre "Produto não encontrado";
// Caso contrário, mostre "Produto encontrado na posição X".

var prompt = require ('prompt-sync') () ; 

let produtos = ["mouse", "teclado", "monitor", "fone"];
let pedirProd = (prompt(`Digite o produto: `));

if (produtos.indexOf(pedirProd) == -1) {
    console.log(`Produto Não Encontrado`);
} else {
    console.log(`Produto Encontrado: ${pedirProd}`);
}