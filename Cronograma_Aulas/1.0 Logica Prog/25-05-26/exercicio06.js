/*
## Exercício 6 — Sistema de classificação etária

Crie um programa que classifique pessoas por faixa etária.

Regras:

* 0 a 12 → "Criança"
* 13 a 17 → "Adolescente"
* 18 a 59 → "Adulto"
* 60 ou mais → "Idoso"

Além disso:

* se idade for negativa:
  * "Idade inválida"
*/

var prompt = require(' prompt-sync ')();

let idade = +(prompt(`Digite a sua idade: `));

if (idade <= 12) {
  console.log(`Criança`);
} else if (idade >= 13 || idade <= 17) {
  console.log(`Adolescente`);
} else if (idade >= 18 || idade <= 59) {
  console.log(`Adulto`);
} else {
  console.log(`Idoso`);
}

