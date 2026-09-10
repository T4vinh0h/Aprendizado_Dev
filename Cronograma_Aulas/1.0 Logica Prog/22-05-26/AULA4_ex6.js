//se usuario digitar 2 ou 8, mostrar ok! se nao,mostra Baah, ai nao TouchEvent. ta errado.
var prompt = require('prompt-sync')();
const n1 = Number(prompt("Digite um Numero: "))

if (n1 === 2 || n1 === 8){
    console.log("OK!"); 
}else {
    console.log("Bah, ai não tchê... Ta errado!");
}