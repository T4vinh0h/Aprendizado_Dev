/*
5. Jogo de adivinhação com tentativas
Crie um jogo em que o programa tenha um número secreto fixo. Exemplo:
let secreto = 37;
O usuário deve tentar adivinhar o número.
Regras:
* O usuário tem no máximo 7 tentativas.
* A cada tentativa, informar se o número digitado é maior ou menor que o número secreto.
* Se acertar, mostrar em qual tentativa acertou.
* Se errar todas, mostrar o número secreto no final.
* Usar `for` e `if`.
Exemplo de saída:
Tentativa 1: Digite um número:
O número secreto é maior.
Tentativa 2: Digite um número:
O número secreto é menor.
*/

const prompt = require("prompt-sync")();

let secreto = 37;
let acertou = false;

for (let tentativa = 1; tentativa <= 7; tentativa++) {
    let palpite = Number(prompt("Tentativa " + tentativa + ": Digite um número: "));
    
    if (palpite === secreto) {
        console.log("Parabéns! Você acertou na tentativa " + tentativa + ".");
        acertou = true;
        break;
    } else if (palpite < secreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }
}

if (!acertou) {
    console.log("Você esgotou as tentativas. O número secreto era " + secreto + ".");
}
