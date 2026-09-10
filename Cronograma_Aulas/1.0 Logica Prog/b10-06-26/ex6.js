// 6. Removendo do início com shift()
// Crie um vetor chamado cores com 4 cores.
// Depois:
// Remova a primeira cor usando shift();
// Guarde a cor removida em uma variável;
// Mostre a cor removida;
// Mostre o vetor atualizado.

let cores = ["azul", "verde", "amarelo", "vermelho"];
let corRemovida = cores.shift();

console.log(`Cor removida: ${corRemovida}`);
console.log(`Vetor atualizado: ${cores}`);
