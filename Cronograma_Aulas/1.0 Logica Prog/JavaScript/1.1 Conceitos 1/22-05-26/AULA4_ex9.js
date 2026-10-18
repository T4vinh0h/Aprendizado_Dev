// se valor for maior que 100 ou possuir cupom, mostrar tem desconto!
var prompt = require('prompt-sync')();

const valor = Number(prompt("Qual seu valor :"));
const cupom = Number(prompt("Tem cupom:(sim ou nao)"));

if (valor >= 100 || cupom === "sim"){
    console.log("Tem desconto");
}else {
    console.log("Não tem desconto lobatinho.");
}
