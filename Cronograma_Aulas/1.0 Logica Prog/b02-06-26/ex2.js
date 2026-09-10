/*
2. Caixa eletrônico com menu
Crie um programa que simule um caixa eletrônico. O programa deve começar com saldo de R$ 1000. Exibir um menu usando `do...while`:
1 - Consultar saldo
2 - Depositar
3 - Sacar
4 - Sair
Regras:
* O usuário pode repetir as operações até escolher sair. 
* No depósito, não permitir valor menor ou igual a zero. 
* No saque, verificar se há saldo suficiente.
* Se o saque for maior que o saldo, mostrar mensagem de erro. 
* Usar `switch case` para tratar as opções.
*/

const prompt = require("prompt-sync")();

let saldo = 1000;
let opcao = 0;

do {
    console.log("\n--- Caixa Eletrônico ---");
    console.log("1 - Consultar saldo");
    console.log("2 - Depositar");
    console.log("3 - Sacar");
    console.log("4 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            console.log("Saldo atual: R$ " + saldo.toFixed(2));
            break;
        case 2:
            let deposito = Number(prompt("Valor do depósito: "));
            if (deposito <= 0) {
                console.log("Erro: Valor de depósito inválido.");
            } else {
                saldo += deposito;
                console.log("Depósito realizado com sucesso.");
            }
            break;
        case 3:
            let saque = Number(prompt("Valor do saque: "));
            if (saque > saldo) {
                console.log("Erro: Saldo insuficiente.");
            } else if (saque <= 0) {
                console.log("Erro: Valor de saque inválido.");
            } else {
                saldo -= saque;
                console.log("Saque realizado com sucesso.");
            }
            break;
        case 4:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 4);
