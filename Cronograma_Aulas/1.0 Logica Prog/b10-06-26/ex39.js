// 39. Trabalhando com notas
// Crie o vetor:
// let notas = [4, 6, 7, 8, 9, 5];
// Depois:
// Use filter() para criar um vetor com notas aprovadas;
// Use find() para encontrar a primeira nota abaixo de 6;
// Use map() para criar um vetor com 1 ponto extra em cada nota;
// Mostre todos os resultados.

let notas = [4, 6, 7, 8, 9, 5];
let notaAprovada = notas.filter(nota => nota >= 7);
let notaRuim = notas.find(nota => nota < 6);
let notaExtra = notas.map(nota => nota + 1);

console.log(`Notas aprovadas: ${notasAprovadas}`);
console.log(`Primeira nota abaixo de 6:", ${notaRuim}`);
console.log(`Notas com ponto extra:", ${notaExtra}`);
