// 14. Crie uma expressão lógica utilizando três operadores.

let idade = +(prompt(`Digite a sua idade:`));
let empregado = (prompt(`Está empregado (S/N)?`) === "S");
let nomeLimpo = (prompt(`Tem o nome limpo (S/N)?`) === "S");


let aprovadoCredito = (idade >= 18 && empregado && nomeLimpo);

if (aprovadoCredito) {
    console.log("Crédito aprovado!");
} else {
    console.log("Crédito recusado.");
}

