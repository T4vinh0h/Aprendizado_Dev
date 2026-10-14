// 38. Lista de compras
// Crie um vetor chamado compras.
// Depois:
// Adicione 5 itens usando push();
// Remova o último item usando pop();
// Adicione um item urgente no início usando unshift();
// Remova o primeiro item usando shift();
// Mostre a posição de "arroz" usando indexOf();
// Mostre a lista final.

let compras = [];
compras.push("batata", "arroz", "bergamota", "carne bovina.", "café");
compras.pop();
compras.unshift("água");
compras.shift();

console.log(`Posição de arroz: ${compras.indexOf("arroz")}`);
console.log(`Lista final: ${compras.join(", ")}`);
