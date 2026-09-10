// 17. Aplicando aumento em preços
// Crie o vetor:
// let precos = [10, 20, 30, 40];
// Use map() para criar um novo vetor com aumento de 10% em cada preço.
// Resultado esperado:
// [11, 22, 33, 44]

let precos = [10, 20, 30, 40];
let aumento10 = precos.map(preco => preco * 1.1);

console.log(aumento10);
