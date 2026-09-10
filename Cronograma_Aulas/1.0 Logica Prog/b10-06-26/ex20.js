// 20. Filtrando notas aprovadas
// Crie o vetor:
// let notas = [4, 7, 8, 5, 10, 6];
// Use filter() para criar um novo vetor apenas com notas maiores ou iguais a 7.
// Resultado esperado:
// [7, 8, 10]

let notas = [4, 7, 8, 5, 10, 6];
let notasMaiores = notas.filter(notas => notas >= 7);

console.log(notasMaiores);
