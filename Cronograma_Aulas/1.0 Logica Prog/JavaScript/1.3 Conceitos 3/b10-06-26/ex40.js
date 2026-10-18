// 40. Separando números pares e dobrando
// Crie o vetor:
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// Depois:
// Use filter() para criar um vetor apenas com números pares;
// Use map() para criar um vetor com o dobro dos números pares;
// Use forEach() para mostrar cada número dobrado.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosPares = numeros.filter(numero => numero % 2 === 0);
let numerosDobrados = numerosPares.map(numero => numero * 2);

console.log("Números dobrados:");
numerosDobrados.forEach(numero => {
    console.log(numero);
});
