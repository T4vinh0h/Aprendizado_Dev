// 45. Comparando slice() e splice()
// Crie dois vetores iguais:
// let lista1 = [1, 2, 3, 4, 5];
// let lista2 = [1, 2, 3, 4, 5];
// Depois:
// Use slice(1, 4) em lista1;
// Use splice(1, 3) em lista2;
// Mostre lista1;
// Mostre o resultado do slice();
// Mostre lista2;
// Mostre o resultado do splice().
// Explique em comentário a diferença entre os dois métodos.

let lista1 = [1, 2, 3, 4, 5];
let lista2 = [1, 2, 3, 4, 5];

let resultadoSlice = lista1.slice(1, 4);
let resultadoSplice = lista2.splice(1, 3);

console.log("lista1 após slice():", lista1);
console.log("Resultado do slice():", resultadoSlice);
console.log("lista2 após splice():", lista2);
console.log("Resultado do splice():", resultadoSplice);

// slice() NÃO altera o vetor original, apenas cria uma cópia dos elementos
// splice() ALTERA o vetor original, removendo elementos e retornando os removidos
