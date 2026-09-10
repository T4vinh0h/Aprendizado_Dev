// Cálculo de Jantar com Gorjeta
var prompt = require('prompt-sync')();
// Peça o valor total de um jantar. Em seguida, pergunte se o atendimento foi "bom" ou
// "ruim". Se a resposta for "bom", adicione 10% sobre o valor do jantar como gorjeta.
// No final, exiba o valor total da conta (jantar + gorjeta, se houver).
// 1. Pedir o valor total do jantar
let valorJantar = Number(prompt("Digite o valor total do jantar (em R$):"));

// 2. Pedir a avaliação do atendimento
let avaliacao = prompt("O atendimento foi bom ou ruim? Digite 'bom' ou 'ruim'.").toLowerCase().trim();

// 3. Inicializar a gorjeta como zero
let gorjeta = 0;

// 4. Calcular a gorjeta se o atendimento foi "bom"
if (avaliacao === "bom") {
    gorjeta = valorJantar * 0.1;
}

// 5. Calcular o valor total
let total = valorJantar + gorjeta;

// 6. Exibir o resultado final