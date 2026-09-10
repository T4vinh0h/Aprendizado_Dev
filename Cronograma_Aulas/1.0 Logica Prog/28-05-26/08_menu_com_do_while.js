/*
8. Menu com do...while
Crie um menu usando do...while com as opções:
1 - Somar
2 - Subtrair
3 - Sair

O programa deve continuar mostrando o menu até o usuário escolher a opção 3.
*/

let opcao;

do {
    opcao = parseInt(prompt("Escolha uma opção:\n1 - Somar\n2 - Subtrair\n3 - Sair"));
    
    if (opcao === 1) {
        console.log("Você escolheu Somar.");
    } else if (opcao === 2) {
        console.log("Você escolheu Subtrair.");
    } else if (opcao !== 3) {
        console.log("Opção inválida.");
    }
} while (opcao !== 3);

console.log("Saindo...");
