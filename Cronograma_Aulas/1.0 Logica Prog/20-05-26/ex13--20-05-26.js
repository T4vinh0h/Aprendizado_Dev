// 13. Verificar número par ou ímpar
// Crie um programa que utilize % para verificar se um número é par ou ímpar.
// Dica:
// número % 2
// Exemplo:
// let numero = 11;


let n1 = +prompt(`Digite um numero:`);
const par = n1 % 2 === 0;
const impar = n1 % 2 !== 0;

if (par) {
	console.log(`O número ${n1} é par.`);
} else {
	console.log(`O número ${n1} é ímpar.`);
}
