// 23. Encontrando a primeira nota abaixo da média
// Crie o vetor:
// let notas = [8, 7, 6, 4, 9];
// Use find() para encontrar a primeira nota menor que 6.
// Resultado esperado:
// 4

let notas = [8, 7, 6, 4, 9];
let menor_6 = notas.find(notas => notas < 6);

console.log(menor_6);
