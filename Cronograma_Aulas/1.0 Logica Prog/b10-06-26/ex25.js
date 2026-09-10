// 25. Encontrando a primeira palavra grande
// Crie o vetor:
// let palavras = ["casa", "sol", "computador", "lua"];
// Use find() para encontrar a primeira palavra com mais de 5 letras.
// Resultado esperado:
// "computador"

let palavras = ["casa", "sol", "computador", "lua"];
let letra_5 = palavras.find(palavras => palavras.length > 5);

console.log(letra_5);
