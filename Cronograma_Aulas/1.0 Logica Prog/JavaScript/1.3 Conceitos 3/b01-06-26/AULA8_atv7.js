// 7.Acrescente elementos na array até o usuário escrever fim
let coisas = ["armario",87, "mesa", 3, "projetor"]
for(let i = 0; i < coisas.length; i++){
    console.log(coisas[i]);
}
var prompt = require('prompt-sync')();

let carrinho = [];
let compra;
while (true) {
    compra = prompt("Digite um item ou 'fim' para parar: ");
    if (compra === "fim") {
        break;
    } else {
        carrinho.push(compra);
    }
}
console.log("Itens no carrinho: ", carrinho);