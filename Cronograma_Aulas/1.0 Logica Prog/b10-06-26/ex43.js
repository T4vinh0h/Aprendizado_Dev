// 43. Recortando uma lista
// Crie o vetor:
// let alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda"];
// Depois:
// Use slice() para criar um vetor com os três primeiros alunos;
// Use slice() para criar um vetor com os três últimos alunos;
// Mostre o vetor original;
// Mostre os dois novos vetores.

let alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda"];
let primeirosAlunos = alunos.slice(0, 3);
let ultimosAlunos = alunos.slice(-3);

console.log("Vetor original:", alunos);
console.log("Três primeiros alunos:", primeirosAlunos);
console.log("Três últimos alunos:", ultimosAlunos);
