/*
11. Desafio extra
Crie um sistema de menu para uma escola.
Menu principal:
1 - Cadastrar aluno
2 - Calcular média
3 - Ver situação
4 - Sair
Regras:
* Usar `do...while`.
* Usar `switch case`.
* Não usar arrays.
* Guardar apenas um aluno por vez.
* O programa deve permitir cadastrar nome, nota 1, nota 2 e nota 3.
* A média só pode ser calculada se o aluno tiver sido cadastrado.
* A situação só pode ser exibida depois da média calculada.
Situações:
| Média | Situação |
| ----------- | ----------- |
| 7 ou mais | Aprovado |
| 5 até 6.9 | Recuperação |
| Menor que 5 | Reprovado |
*/

const prompt = require("prompt-sync")();

let opcao = 0;

let nomeAluno = "";
let n1 = 0, n2 = 0, n3 = 0;
let media = -1; // -1 indica não calculada
let cadastrado = false;

do {
    console.log("\n--- Sistema Escolar ---");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Calcular média");
    console.log("3 - Ver situação");
    console.log("4 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));
    
    switch (opcao) {
        case 1:
            nomeAluno = prompt("Nome do aluno: ");
            n1 = Number(prompt("Nota 1: "));
            n2 = Number(prompt("Nota 2: "));
            n3 = Number(prompt("Nota 3: "));
            cadastrado = true;
            media = -1; // Reseta a média se cadastrar novo
            console.log("Aluno cadastrado com sucesso.");
            break;
            
        case 2:
            if (!cadastrado) {
                console.log("Erro: Nenhum aluno cadastrado.");
            } else {
                media = (n1 + n2 + n3) / 3;
                console.log("Média calculada com sucesso.");
            }
            break;
            
        case 3:
            if (!cadastrado) {
                console.log("Erro: Nenhum aluno cadastrado.");
            } else if (media === -1) {
                console.log("Erro: Calcule a média primeiro (Opção 2).");
            } else {
                console.log("\nAluno: " + nomeAluno);
                console.log("Média: " + media.toFixed(2));
                
                if (media >= 7) {
                    console.log("Situação: Aprovado");
                } else if (media >= 5 && media < 7) {
                    console.log("Situação: Recuperação");
                } else {
                    console.log("Situação: Reprovado");
                }
            }
            break;
            
        case 4:
            console.log("Saindo do sistema...");
            break;
            
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 4);
