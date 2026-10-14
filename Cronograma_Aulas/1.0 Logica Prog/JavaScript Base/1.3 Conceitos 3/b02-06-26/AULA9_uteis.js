var prompt = require('prompt-sync')();
console.log(`Math.ceil`, Math.ceil(1.001));
console.log(`Math.floor`, Math.floor(3.001));
console.log(`Math.floor`, Math.floor(3.001));
console.log(`Math.round`, Math.round(3.5));
const valor = 10/3
console.log(`valor: ${valor.toFixed(2)}`);
console.log("Math.pow", 2**3)
 console.log("Math.pow", (25)) 
// (faz a raiz quadrada de um num)

const cor = prompt(`Digite o nome de uma cor:`).toLocaleLowerCase(); 

if (cor === `azul`) {
    console.log("Azul");
} else {
    console.log("é isso...");
}