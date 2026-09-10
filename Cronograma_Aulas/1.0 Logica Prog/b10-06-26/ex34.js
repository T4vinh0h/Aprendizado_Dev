// 34. Adicionando vários elementos com splice()
// Crie o vetor:
// let numeros = [1, 4, 5];
// Use splice() para adicionar os números 2 e 3 na posição correta.
// Resultado esperado:
// [1, 2, 3, 4, 5]

let numeros = [1, 4, 5];
numeros.splice(1, 0, 2, 3);

console.log(numeros);
