// crie um programa que leia se os numeros digitados sao positivos ou negativos e some os numeros, se forem possivtivos
var prompt = require('prompt-sync')();
function somar(nu1, nu2) {
    return nu1 + nu2;
}
// console.log(somar(nu1, nu2));

// function somar(nu1, nu2) {
//     return nu1 + nu2; 
// }somar(6,5)

function validamentoByLobato (nu1,nu2) {
    if(nu1 <= 0 || nu2 <= 0){
    return "Voce errou, é proibido numero negativo ou nulo!";
    }else{
    return somar(nu1, nu2);
}}
 let condicao = 0
 let soma = 0
 
while (typeof condicao == 'number') {
    let n1 = Number(prompt("Digite um numero: "));
    let n2 = Number(prompt("Digite um numero: "));
    condicao  = validamentoByLobato(n1, n2)
    soma += condicao
    console.log(soma);
    
}
// }