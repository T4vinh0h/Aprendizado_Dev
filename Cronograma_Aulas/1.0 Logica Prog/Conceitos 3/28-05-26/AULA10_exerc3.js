// Subindo uma escada
// Imagine que você está subindo uma escada. Cada degrau 
// tem uma altura fixa de 30 cm. 
// Escreva um programa que solicite ao usuário inserir
// a altura total da escada em centímetros e calcule 
// quantos degraus são necessários para alcançar o topo.
var prompt = require('prompt-sync')();

let alturaDegrau = 30;
let alturaTotal = Number(prompt(`Insira a altura total da escada em centímetros: `));
let numeroDegraus;

    if (isNaN(alturaTotal) || alturaTotal <= 29) {
  console.log(`🚫 Operação Inválida, insira um valor maior que 30cm 🚫`);
  } else{
    numeroDegraus = Math.ceil(alturaTotal / alturaDegrau);
  }console.log(`Você vai precisar de ${numeroDegraus} degrau(s) para alcançar o topo! 🪜`);