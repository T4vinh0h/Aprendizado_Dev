// 8.Acrescente elementos na array até o a array ficar com 10 elementos
var prompt = require('prompt-sync')();
let carrinho = [];
let compra
for (let i = 0; i < 10; i++) {
    compra = prompt("Digite um item ou 'fim' para parar: ");
    if (compra === "fim") {
        break; 
    } else {
        carrinho.push(compra); 
    }
}
console.log("Itens no carrinho:", carrinho);