/*
## Exercício 8 — Sistema de acesso a evento

Um evento possui regras especiais:

* Menores de idade entram apenas acompanhados;
* Maiores de idade entram normalmente;
* Pessoas sem ingresso não entram.

Exiba a situação do participante.
*/


var prompt = require('prompt-sync')();

let ingresso = prompt("Você possui ingresso? (sim/não): ").toLowerCase() === "sim";
let idade = +(prompt("Qual é a sua idade? "));
let acompanhante = prompt("Você está acompanhado de um responsável? (sim/não): ").toLowerCase() === "sim";

if (!ingresso) {
  console.log("Entrada negada: Sem ingresso.");
} else {
  if (idade >= 18) {
    console.log("Entrada permitida.");
  } else if (acompanhante) {
    console.log("Entrada permitida (menor acompanhado).");
  } else {
    console.log("Entrada negada: Menor de idade desacompanhado.");
  }
}