// 24. Encontrando uma fruta pelo nome
// Crie o vetor:
// let frutas = ["maçã", "banana", "uva", "laranja"];
// Use find() para encontrar a fruta "uva".
// Resultado esperado:
// "uva"

let frutas = ["maçã", "banana", "uva", "laranja"];
let frutaEncontrada = frutas.find(frutas => frutas === "uva");

console.log(frutaEncontrada);
