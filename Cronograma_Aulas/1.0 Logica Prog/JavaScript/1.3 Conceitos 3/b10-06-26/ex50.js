// 50. Desafio final — Sistema de notas
// Crie o vetor:
// let notas = [5, 7, 8, 4, 10, 6, 3, 9];
// Faça as seguintes operações:
// Adicione uma nova nota no final usando push();
// Adicione uma nova nota no início usando unshift();
// Remova a última nota usando pop();
// Remova a primeira nota usando shift();
// Verifique se existe nota 10 usando includes();
// Mostre a posição da nota 4 usando indexOf();
// Crie um novo vetor com todas as notas acrescidas de 1 ponto usando map();
// Crie um vetor apenas com notas aprovadas usando filter();
// Encontre a primeira nota abaixo de 5 usando find();
// Copie as três primeiras notas usando slice();
// Remova uma nota específica usando splice();
// Mostre todos os resultados no console.

let notas = [5, 7, 8, 4, 10, 6, 3, 9];

notas.push(8);
notas.unshift(2);
notas.pop();
notas.shift();

console.log("Existe nota 10?", notas.includes(10));
console.log("Posição da nota 4:", notas.indexOf(4));

let notasComPontoExtra = notas.map(nota => nota + 1);
console.log("Notas com ponto extra:", notasComPontoExtra);

let notasAprovadas = notas.filter(nota => nota >= 7);
console.log("Notas aprovadas:", notasAprovadas);

let primeiraNotaAbaixo5 = notas.find(nota => nota < 5);
console.log("Primeira nota abaixo de 5:", primeiraNotaAbaixo5);

let primeirasNotas = notas.slice(0, 3);
console.log("Três primeiras notas:", primeirasNotas);

notas.splice(2, 1);
console.log("Vetor após remover nota específica:", notas);
