// adicionar atributo numero, e colocar fuction que mude o numero deixando o usuario digitar
var prompt = require('prompt-sync')();

let telefone = {
numero: "53984652732",
    tocar: function() {
        return "trim trim!"
    },
    trocarNumero: function(numeroTelefone){
        this.numero = numeroTelefone
    }
};
const numeroTel = prompt("Digite seu novo Numero: ")
telefone.trocarNumero(numeroTel)
console.log(telefone);
console.log(telefone.tocar());