// Pedir pra usuario digitar 2 numeros, coloque 4 console.log´s, devem mostrar div. mult. subt. adic. é: 
var prompt = require('prompt-sync')();

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));

const divisao = num1 / num2;
const multiplicacao = num1 * num2;
const subtracao = num1 - num2;
const adicao = num1 + num2;

console.log(`Divisão é: ${divisao}`);
console.log(`Multiplicação é: ${multiplicacao}`);
console.log(`Subtração é: ${subtracao}`);
console.log(`Adição é: ${adicao}`);