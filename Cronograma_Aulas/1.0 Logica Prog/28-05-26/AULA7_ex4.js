// Simulador de Idade ao Longo dos Anos (com ano de nascimento fixo em 2006)
// Usa var prompt = require('prompt-sync')(); for; let;
// Pergunta "qual ano voce procura?" e mostra idades anteriores com console.log.
var prompt = require('prompt-sync')();
let anoProcurado = parseInt(prompt("Qual ano voce procura? "));
// Assumindo ano de nascimento fixo em 2006 (baseado no exemplo ${i - 2006})
let anoNasc = 2006;
console.log("\nIdades ao longo dos anos:");
for (let i = anoNasc; i <= anoProcurado; i++) {
    let idade = i - anoNasc;
    console.log(`Em ${i} a idade é ${idade}`);
}
