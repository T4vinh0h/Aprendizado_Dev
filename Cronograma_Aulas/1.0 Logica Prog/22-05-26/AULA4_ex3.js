// pedir para o aluno digitar numero da sala, se for 1 (andar de baixo) 4 andar de cima, se for outro valor, sala desconhecida, se for sala 3 sala sendo reformada
var prompt = require('prompt-sync')();

const sala = Number(prompt("Digite o número da sala: "));

if(sala === 1){
    console.log("Sala no andar de baixo");
} else if(sala === 2){
    console.log("Sala no andar de baixo");
} else if(sala === 3){
    console.log("Sala sendo reformada");
} else if(sala === 4){
    console.log("Sala no andar de cima");
} else if(sala === 5){
    console.log("Sala no andar de cima");
} else {
    console.log("Sala desconhecida");
}