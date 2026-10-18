// 36. Guardando os elementos removidos
// Crie o vetor:
// let produtos = ["mouse", "teclado", "monitor", "fone"];
// Use splice() para remover "teclado" e "monitor".
// Depois:
// Guarde os elementos removidos em uma variável;
// Mostre o vetor atualizado;
// Mostre os elementos removidos.
// Resultado esperado:
// ["mouse", "fone"]
// ["teclado", "monitor"]

let produtos = ["mouse", "teclado", "monitor", "fone"];
let produtosRemovidos = produtos.splice(1, 2);

console.log("Vetor atualizado:", produtos);
console.log("Elementos removidos:", produtosRemovidos);
