// 33. Adicionando elemento no meio com splice()
// Crie o vetor:
// let numeros = [1, 2, 4, 5];
// Use splice() para adicionar o número 3 na posição correta.
// Resultado esperado:
// [1, 2, 3, 4, 5]

let numeros = [1, 2, 4, 5];
numeros.splice(2, 0, 3);

console.log(numeros);
