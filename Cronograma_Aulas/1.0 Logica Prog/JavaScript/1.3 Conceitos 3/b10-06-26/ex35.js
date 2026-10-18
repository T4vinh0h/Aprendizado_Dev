// 35. Substituindo elemento com splice()
// Crie o vetor:
// let cores = ["azul", "verde", "amarelo"];
// Use splice() para substituir "verde" por "vermelho".
// Resultado esperado:
// ["azul", "vermelho", "amarelo"]

let cores = ["azul", "verde", "amarelo"];
cores.splice(1, 1, "vermelho");

console.log(cores);
