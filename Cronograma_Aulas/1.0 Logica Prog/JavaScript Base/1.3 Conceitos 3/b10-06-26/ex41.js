// 41. Manipulando uma fila
// Crie o vetor:
// let fila = ["Ana", "Bruno", "Carlos"];
// Depois:
// Adicione "Daniela" no final da fila;
// Adicione "Prioridade" no início da fila;
// Remova o primeiro da fila;
// Mostre quem foi atendido;
// Mostre como ficou a fila.

let fila = ["Ana", "Bruno", "Carlos"];
fila.push("Daniela");
fila.unshift("Prioridade");
let atendido = fila.shift();

console.log("Quem foi atendido:", atendido);
console.log("Fila atualizada:", fila);
