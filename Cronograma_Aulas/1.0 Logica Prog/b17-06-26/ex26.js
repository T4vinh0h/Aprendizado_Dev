// Exercício 26 — Arrow function simples
// 
// Crie uma arrow function chamada `subtrair`.
// Ela deve receber dois números como parâmetros e retornar a subtração entre eles.
// Exemplo:
// console.log(subtrair(10, 4));
// Resultado esperado:
// 6

const subtrair = (n1, n2) => { 
  const resultado = n1 - n2;
  return resultado;
};
console.log(`Resultado da subtração: ${subtrair(3,10)}`);
