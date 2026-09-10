// 21. Filtrando palavras curtas
// Crie o vetor:
// let palavras = ["sol", "computador", "lua", "javascript", "casa"];
// Use filter() para criar um novo vetor apenas com palavras que tenham até 4 letras.
// Resultado esperado:
// ["sol", "lua", "casa"]

let palavras = ["sol", "computador", "lua", "javascript", "casa"];
let letras_4 = palavras.filter(palavras => palavras.length <= 4);

console.log(letras_4);
