/*
## Exercício 7 — Sistema de financiamento

Um banco aprova financiamento apenas se:

* salário maior que R$3000;
* nome limpo;
* e idade entre 18 e 65 anos.
*/
var prompt = require('prompt-sync')();

let salario = +(prompt("Qual é o seu salário (R$)? "));
let nomeLimpo = prompt("Você tem o nome limpo? (sim/não): ").toLowerCase() === "sim";
let idade = +(prompt("Qual é a sua idade? "));

if (salario > 3000 && nomeLimpo === true && idade >= 18 && idade <= 65) {
  console.log("Financiamento aprovado");
} else {
  console.log("Financiamento negado");
}
