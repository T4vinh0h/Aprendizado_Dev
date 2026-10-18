// 19. Filtrando números pares
// Crie o vetor:
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// Use filter() para criar um novo vetor apenas com os números pares.
// Resultado esperado:
// [2, 4, 6, 8]

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let Pares = numeros.filter(numero => numero % 2 === 0);

console.log(Pares);
