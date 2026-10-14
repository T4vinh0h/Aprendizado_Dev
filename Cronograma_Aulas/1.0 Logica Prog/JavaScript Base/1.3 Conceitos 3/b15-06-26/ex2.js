// Exercício 2 — Acesso a Propriedades de Objeto
//
// Construa um objeto denominado `carro` contendo as propriedades:
//
// - marca
// - modelo
// - ano
//
// Implemente a exibição dos dados utilizando:
//
// - A propriedade marca através da notação por ponto
// - A propriedade modelo através da notação por colchetes
//
// **Exemplo de implementação:**
//
// ```javascript
// console.log(carro.marca);
// console.log(carro["modelo"]);
// ```

const carro = {
    marca:"Renault", 
    modelo:"Kwid", 
    ano:2012
}
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);