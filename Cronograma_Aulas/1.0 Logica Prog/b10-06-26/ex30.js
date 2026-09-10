// 30. Testando se slice() altera o original
// Crie o vetor:
// let numeros = [1, 2, 3, 4, 5];
// Use slice(1, 4) para criar um novo vetor.
// Depois, mostre:
// O vetor original;
// O novo vetor criado.
// Explique em comentário se o vetor original foi alterado ou não.

let numeros = [1, 2, 3, 4, 5];
let novoVetor = numeros.slice(1, 4);

console.log("Vetor original:", numeros);
console.log("Novo vetor criado:", novoVetor);

// O vetor numeros não foi alterado. slice() apenas criou uma cópia dos elementos da gaveta(array) 1-4.
