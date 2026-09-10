/*
15. Jogo de adivinhação
Crie uma variável chamada numeroSecreto com um valor entre 1 e 10.
Use do...while para pedir ao usuário que tente adivinhar o número.
O programa deve continuar até o usuário acertar.
Exemplo:
Digite um número entre 1 e 10: 4
Errou. Tente novamente.

Digite um número entre 1 e 10: 7
Parabéns! Você acertou.
*/

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;

do {
    palpite = parseInt(prompt("Digite um número entre 1 e 10:"));
    
    if (palpite !== numeroSecreto) {
        console.log("Errou. Tente novamente.");
    }
} while (palpite !== numeroSecreto);

console.log("Parabéns! Você acertou.");
