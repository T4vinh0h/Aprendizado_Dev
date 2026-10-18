/*
4. Controle de vendas de uma loja
Crie um programa que peça quantos produtos foram vendidos no dia. Para cada produto, leia:
* Nome do produto
* Preço unitário
* Quantidade vendida
O programa deve calcular:
* Total vendido por produto
* Total geral da loja
* Quantidade total de itens vendidos
Ao final, mostrar:
Total de itens vendidos:
Total arrecadado:
Regras:
* Usar `for`.
* Se o preço ou a quantidade forem inválidos, pedir novamente usando `while`. * Não usar arrays.
*/

const prompt = require("prompt-sync")();

let numProdutos = Number(prompt("Quantos produtos foram vendidos hoje? "));
let totalGeral = 0;
let totalItens = 0;

for (let i = 1; i <= numProdutos; i++) {
    console.log("\nProduto " + i + ":");
    let nome = prompt("Nome do produto: ");
    
    let preco = 0;
    while (preco <= 0) {
        preco = Number(prompt("Preço unitário: "));
        if (preco <= 0) console.log("Preço inválido, digite novamente.");
    }
    
    let quantidade = 0;
    while (quantidade <= 0) {
        quantidade = Number(prompt("Quantidade vendida: "));
        if (quantidade <= 0) console.log("Quantidade inválida, digite novamente.");
    }
    
    let totalProduto = preco * quantidade;
    console.log("Total vendido de " + nome + ": R$ " + totalProduto.toFixed(2));
    
    totalGeral += totalProduto;
    totalItens += quantidade;
}

console.log("\nTotal de itens vendidos: " + totalItens);
console.log("Total arrecadado: R$ " + totalGeral.toFixed(2));
