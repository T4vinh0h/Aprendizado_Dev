/*
## Exercício 4 — Sistema de desconto progressivo

Uma loja possui descontos diferentes:

* Compras acima de R$100:
  * 10% de desconto
* Compras acima de R$500:
  * 20% de desconto
* Compras acima de R$1000:
  * 30% de desconto

Calcule o valor final da compra.

Exiba:
* valor original;
* percentual de desconto;
* valor final.
*/


var prompt = require(' prompt-sync ')();

let produto = prompt("Digite o nome do produto: ");
let valor = +(prompt("Digite o valor da compra (R$): "));
let desconto = 0;


if (valor > 1000) {
  desconto = 30;
} else if (valor > 500) {
  desconto = 20;
} else if (valor > 100) {
  desconto = 10;
}

let valorDesconto = (valor * desconto) / 100;
let valorFinal = valor - valorDesconto;

console.log(`Produto: ${produto}`);
console.log(`Valor original: R$ ${valor.toFixed(2)}`);
console.log(`Percentual de desconto: ${desconto}%`);
console.log(`Valor final com desconto: R$ ${valorFinal.toFixed(2)}`);