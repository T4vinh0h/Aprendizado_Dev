// 47. Gerenciador de números
// Crie um vetor com vários números.
// Depois:
// Crie um novo vetor com o dobro dos números usando map();
// Crie um novo vetor apenas com números maiores que 10 usando filter();
// Encontre o primeiro número maior que 20 usando find();
// Mostre todos os resultados.

let numeros = [5, 12, 8, 25, 3, 30, 15];
let dobro = numeros.map(numero => numero * 2);
let maioresQue10 = numeros.filter(numero => numero > 10);
let primeiroMaiorQue20 = numeros.find(numero => numero > 20);

console.log("Dobro dos números:", dobro);
console.log("Números maiores que 10:", maioresQue10);
console.log("Primeiro número maior que 20:", primeiroMaiorQue20);
