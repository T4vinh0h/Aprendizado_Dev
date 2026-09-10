//pedir ao usuario digitar 2 numeros e dever escolher qual operação mat. deve ser realizado. o programa deve solicitar a operação desejada (+, -, *, /).
var prompt = require('prompt-sync')();

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const operacao = prompt("Escolha a operação ▶ ➕ ➖ ✖️ ➗: ");

if(operacao === "+"){
    console.log(`Resultado: ${num1 + num2}`);
} else if(operacao === "-"){
    console.log(`Resultado: ${num1 - num2}`);
} else if(operacao === "*"){
    console.log(`Resultado: ${num1 * num2}`);
} else if(operacao === "/"){
    console.log(num2);
    
    if(num2 === 0){
        console.log("Erro: Não é possível dividir por zero!");
    } else {
        console.log(`Resultado: ${num1 / num2}`);
    }
} else {
    console.log("Operação inválida! Use apenas: +, -, * ou /");
}
