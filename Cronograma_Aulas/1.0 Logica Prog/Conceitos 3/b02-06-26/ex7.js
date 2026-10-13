/*
7. Calculadora com repetição
Crie uma calculadora que funcione até o usuário escolher sair. Menu:
1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
5 - Potência
6 - Sair
Regras:
* Usar `do...while`.
* Usar `switch case`.
* Pedir dois números para cada operação.
* Na divisão, não permitir divisão por zero.
* Na potência, calcular usando `for`, sem usar `Math.pow()`. Exemplo:
Base: 2
Expoente: 4
Resultado: 16
*/

const prompt = require("prompt-sync")();

let opcao = 0;

do {
    console.log("\n--- Calculadora ---");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Potência");
    console.log("6 - Sair");
    opcao = Number(prompt("Escolha uma operação: "));

    if (opcao >= 1 && opcao <= 5) {
        let n1 = Number(prompt("Primeiro número: "));
        let n2 = Number(prompt("Segundo número: "));
        
        switch (opcao) {
            case 1:
                console.log("Resultado: " + (n1 + n2));
                break;
            case 2:
                console.log("Resultado: " + (n1 - n2));
                break;
            case 3:
                console.log("Resultado: " + (n1 * n2));
                break;
            case 4:
                if (n2 === 0) {
                    console.log("Erro: Não é possível dividir por zero.");
                } else {
                    console.log("Resultado: " + (n1 / n2));
                }
                break;
            case 5:
                let base = n1;
                let expoente = n2;
                let resultado = 1;
                
                if (expoente >= 0) {
                    for (let i = 0; i < expoente; i++) {
                        resultado *= base;
                    }
                    console.log("Resultado: " + resultado);
                } else {
                    for (let i = 0; i < -expoente; i++) {
                        resultado *= base;
                    }
                    console.log("Resultado: " + (1 / resultado));
                }
                break;
        }
    } else if (opcao !== 6) {
        console.log("Opção inválida!");
    }
    
} while (opcao !== 6);
console.log("Calculadora encerrada.");
