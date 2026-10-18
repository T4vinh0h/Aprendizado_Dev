// 48. Sistema de produtos
// Crie o vetor:
// let produtos = ["mouse", "teclado", "monitor", "fone", "webcam"];
// Depois:
// Verifique se "monitor" existe usando includes();
// Mostre a posição de "fone" usando indexOf();
// Copie os três primeiros produtos usando slice();
// Remova "teclado" usando splice();
// Mostre o vetor final.

let produtos = ["mouse", "teclado", "monitor", "fone", "webcam"];

console.log("Monitor existe?", produtos.includes("monitor"));
console.log("Posição de fone:", produtos.indexOf("fone"));

let primeirosProdutos = produtos.slice(0, 3);
console.log("Três primeiros produtos:", primeirosProdutos);

produtos.splice(1, 1);
console.log("Vetor final:", produtos);
