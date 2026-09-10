// calcular a media de 3 numeros
var prompt = require('prompt-sync')();
const n1 = Number(prompt(`Digite o primeiro numero: `));
const n2 = Number(prompt(`Digite o segundo numero: `));
const n3 = Number(prompt(`Digite o terceiro numero: `));
const n4 = Number(prompt(`Digite o quarto numero: `));

function media(n1,n2,n3){
    return (n1 + n2 + n3) / 3
}console.log(`Resultado da média: ${media});
