// Exercício 21: Jogo de perguntas
// Crie um programa que faça 5 perguntas de matemática ao usuário usando for.
// Para cada resposta correta, o usuário ganha 1 ponto.
var prompt = require('prompt-sync')();


let pontos = 0;

// Pergunta 1
let resposta1 = parseInt(prompt("Quanto é 2 + 2?"));
if (resposta1 === 4) {
  pontos++;
}

// Pergunta 2
let resposta2 = parseInt(prompt("Quanto é 5 * 3?"));
if (resposta2 === 15) {
  pontos++;
}

// Pergunta 3
let resposta3 = parseInt(prompt("Quanto é 10 - 4?"));
if (resposta3 === 6) {
  pontos++;
}

// Pergunta 4
let resposta4 = parseInt(prompt("Quanto é 20 / 5?"));
if (resposta4 === 4) {
  pontos++;
}

// Pergunta 5
let resposta5 = parseInt(prompt("Quanto é 7 + 8?"));
if (resposta5 === 15) {
  pontos++;
}

console.log("Você acertou " + pontos + " de 5 perguntas.");
