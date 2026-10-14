var prompt = require('prompt-sync')();

let operacao
while (true) {
     operacao = prompt('Escolha entre ➕ ➖ ✖️ ➗ ou "sair" para encerrar: ');
    
    // Verifica se o usuário quer sair (exatamente "sair")
    if ( operacao === 'sair') {
        console.log('Programa encerrado.');
        break; // Sai do laço
    }

    const num1 = Number(prompt('Digite o primeiro número: '));
    const num2 = Number(prompt('Digite o segundo número: '));

    
    if  (operacao === '+') {
        console.log(`Resultado: ${num1 + num2}`);
        continue;
    } else if (operacao === '-') {
        console.log(`Resultado: ${num1 - num2}`);
        continue;
    } else if (operacao === '*') {
        console.log(`Resultado: ${num1 * num2}`);
        continue;
    } else if (operacao === '/') {
        if (num2 === 0) {
            console.log('Erro: Não é possível dividir por zero!');
        } else {
            console.log(`Resultado: ${num1 / num2}`);
            continue;
        }
    } else {
        console.log('Operação inválida! Use apenas: +, -, * ou /');
    }
}