//validar se valor esta entre 10 e 30
var prompt = require('prompt-sync')();

const valor = Number(prompt("Qual seu valor :"))
if(valor >= 10 && valor <=30){
    console.log(valor, "tamo junto");
}else{
    console.log("Errou!");
}
