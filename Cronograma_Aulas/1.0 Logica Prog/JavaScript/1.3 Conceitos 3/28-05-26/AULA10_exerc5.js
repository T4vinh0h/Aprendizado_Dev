// O fim da array
// Acrescente elementos na array até o usuário escrever fim.
var prompt = require('prompt-sync')(); 
let lista = []; // Array vazio inicial

let entrada;
while (true) {
    entrada = prompt("Digite um elemento (ou 'fim' para parar): ").trim(); 

    if (entrada.toLowerCase() === "fim") {
        break; 
    }

    if (entrada !== "") { // Ignora quando tem mensagem  vazia
        lista.push(entrada); 
        console.log(`Adicionado: "${entrada}"`); 
    }
}

console.log("Lista final:", lista);