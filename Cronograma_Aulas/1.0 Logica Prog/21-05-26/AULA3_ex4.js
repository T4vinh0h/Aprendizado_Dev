// valide o numero que for digitado pelo usuario, sera positivo ou negativo, utilize: if; else; console.log;prompt-syn; const;
var prompt = require('prompt-sync')();
const numero = Number(prompt("Digite um número: "));
console.log(numero);

if (numero > 0) {
    console.log(`${numero} é positivo`);
} else if (numero < 0) {
    console.log(`${numero} é negativo`);
} else {
    console.log(`${numero} é zero`);
}