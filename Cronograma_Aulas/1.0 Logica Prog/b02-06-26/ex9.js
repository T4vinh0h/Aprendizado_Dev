/*
9. Controle de estoque
Crie um programa para controlar o estoque de um produto. O programa começa com:
let estoque = 50;
Menu:
1 - Entrada de produto
2 - Saída de produto
3 - Consultar estoque
4 - Sair
Regras:
* Usar `do...while`.
* Usar `switch case`.
* Na entrada, somar a quantidade ao estoque.
* Na saída, verificar se há produtos suficientes.
* Não permitir quantidade menor ou igual a zero.
* Se o estoque ficar abaixo de 10 unidades, mostrar:
Atenção: estoque baixo.
*/

const prompt = require("prompt-sync")();

let estoque = 50;
let opcao = 0;

do {
    console.log("\n--- Controle de Estoque ---");
    console.log("1 - Entrada de produto");
    console.log("2 - Saída de produto");
    console.log("3 - Consultar estoque");
    console.log("4 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));
    
    switch (opcao) {
        case 1:
            let entrada = Number(prompt("Quantidade para entrada: "));
            if (entrada <= 0) {
                console.log("Erro: Quantidade inválida.");
            } else {
                estoque += entrada;
                console.log("Entrada registrada. Novo estoque: " + estoque);
            }
            break;
        case 2:
            let saida = Number(prompt("Quantidade para saída: "));
            if (saida <= 0) {
                console.log("Erro: Quantidade inválida.");
            } else if (saida > estoque) {
                console.log("Erro: Produtos insuficientes no estoque.");
            } else {
                estoque -= saida;
                console.log("Saída registrada. Novo estoque: " + estoque);
                if (estoque < 10) {
                    console.log("Atenção: estoque baixo.");
                }
            }
            break;
        case 3:
            console.log("Estoque atual: " + estoque);
            break;
        case 4:
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 4);
