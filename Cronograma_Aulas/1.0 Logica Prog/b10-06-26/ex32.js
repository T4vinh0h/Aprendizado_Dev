// 32. Removendo vários elementos com splice()
// Crie o vetor:
// let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
// Use splice() para remover "Bruno", "Carlos" e "Daniela".
// Resultado esperado:
// ["Ana", "Eduardo"]

let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
nomes.splice(1, 3);

console.log(nomes);
