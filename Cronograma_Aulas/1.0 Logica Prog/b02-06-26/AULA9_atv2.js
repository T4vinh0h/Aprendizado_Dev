// somar 4 valores
var prompt = require('prompt-sync')();
const n1 = Number(prompt(`Digite o primeiro numero: `));
const n2 = Number(prompt(`Digite o segundo numero: `));
const n3 = Number(prompt(`Digite o terceiro numero: `));
const n4 = Number(prompt(`Digite o quarto numero: `));

function soma(n1,n2,n3,n4){
    return n1 + n2 + n3 + n4
}console.log(soma(n1, n2, n3, n4));