// 1. Conversão de temperatura com validação
// Crie um programa que leia pelo prompt uma temperatura em Celsius e converta para Fahrenheit.
// Fórmula:
// F = C * 9 / 5 + 32
//
// Depois, o programa deve informar:
//  a temperatura em Fahrenheit;
//  se está frio, agradável ou quente.
// Critérios:
// F < 59 // frio
// F >= 59 && F <= 77 // agradável
// F > 77 // quente
//
// Desafio extra:
// Em todos os exercícios, use conversão de tipo com:
// +prompt("Digite um valor:"))

var prompt = require('prompt-sync')();

// Escreva seu código abaixo:
let Celsius = Number(prompt("Digite a temperatura em Celsius: "));
let Fahrenheit = (Celsius * 9 / 5) + 32;

if (Fahrenheit < 59) {
    console.log(`Está frio (${Fahrenheit.toFixed(1)}°F)! ❄️🧥 Se agasalhe bem! Sugestões: tome um chocolate quente ☕, assista a um bom filme debaixo das cobertas 🎬 ou coma uma sopa bem quentinha 🍜.`);
}else if(Fahrenheit >= 59 && Fahrenheit <=77){
     console.log(`Está agradável (${Fahrenheit.toFixed(1)}°F)! 🌤️🍃 O clima está ótimo! Sugestões: faça uma caminhada ao ar livre 🚶, leia um livro no parque 📖 ou tome um suco natural 🍹.`);
}else if (Fahrenheit > 77) {
    console.log(`Está quente (${Fahrenheit.toFixed(1)}°F)! ☀️🥵 Lembre-se de se hidratar e beber bastante água! Sugestões: tome um sorvete 🍦, dê um mergulho 🏊 ou ligue o ventilador 🌬️.`);
}