// Conversão de Real para Dólar
var prompt = require('prompt-sync')();
// Peça ao usuário um valor em reais e a cotação atual do dólar. Calcule o valor
// correspondente em dólares e exiba o resultado. Se o valor da cotação for menor ou
// igual a zero, mostre a mensagem: "Cotação inválida!".

// Conversão de Real para Dólar
var prompt = require('prompt-sync')();

// Leitura dos valores usando Number()
let reais = Number(prompt("💵Valor em Reais (R$): "));
let cotacao = Number(prompt("Cotação do Dólar ($):💲 "));

// Verifica a validade da cotação (deve ser maior que zero)
if (cotacao > 0) {
    // Cálculo
    let dolares = reais / cotacao;
    
    // Exibe o resultado na mesma linha (sem \n)
    console.log(`💵R$ ${reais} equivalem a 💲${dolares} Dólares.`);
} else {
    // Mensagem de erro simplificada e com emoji (sem \n)
    console.log(`❌ ERRO: Cotação inválida! O valor da cotação deve ser positivo. ❌`);
}