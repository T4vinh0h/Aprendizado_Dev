/*
## Exercício 9 — Simulador de caixa eletrônico

Crie um programa de saque bancário.

Regras:

* saldo suficiente;
* saque múltiplo de 10;
* saque mínimo de R$20;
* saque máximo de R$1000.

Exiba:
* "Saque realizado"
* ou o motivo do erro.
*/
var prompt = require('prompt-sync')();

let saldo = 1000.00; 
console.log(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`);

let saque = +(prompt("Qual o valor que você deseja sacar? R$ "));


if (saque < 20) {
  console.log("Erro: O valor mínimo para saque é de R$ 20,00.");
} else if (saque > 1000) {
  console.log("Erro: O valor máximo para saque é de R$ 1000,00.");
} else if (saque % 10 !== 0) {
  console.log("Erro: O valor do saque precisa ser múltiplo de 10.");
} else if (saque > saldo) {
  console.log("Erro: Saldo insuficiente.");
} else {
  saldo -= saque;
  console.log("Saque realizado");
  console.log(`Saldo restante: R$ ${saldo.toFixed(2)}`);
}
