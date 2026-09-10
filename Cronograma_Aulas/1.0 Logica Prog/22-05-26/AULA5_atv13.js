var prompt = require('prompt-sync')();

function calcularNotaFinalComWhile() {
    console.log("\n--- 13. Cálculo de Nota Final (ERRO DE OPERADOR LÓGICO) ---");
    
    // Vetor (Array) para armazenar as notas
    let notas = [];
    let contador = 0;
    
    // WHILE para garantir a leitura de 3 notas
    while (contador < 3) {
        // CORREÇÃO: Removendo o erro de sintaxe anterior para que o código execute
        let nota = Number(prompt(`Digite a nota ${contador + 1} (0 a 10): `)); 
        
        // Operador Lógico AND para validação
        if (nota >= 0 && nota <= 10) {
            notas.push(nota); // Adiciona a nota no final do array
            contador++;
        } else {
            console.log("Nota inválida. Digite um valor entre 0 e 10.");
        }
    }
    
    // Cálculo da média usando FOR (para demonstrar a iteração)
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    
    const media = soma / notas.length;
    
    // IF, ELSE IF, ELSE
    if (media < 5) {
        console.log(`Média: ${media.toFixed(2)}. Situação: Reprovado`);
    } 
    // ERRO DE OPERADOR LÓGICO AQUI: Usando OR (||) em vez de AND (&&) ou o comparador simples (<= 7).
    // O correto seria: else if (media >= 5 && media <= 7) ou apenas else if (media <= 7)
    // Este erro fará com que, se a média for MAIOR que 5 (por exemplo, 9 ou 10), 
    // a condição seja TRUE porque a média é MAIOR que 5 OU é menor ou igual a 7 (o que é irrelevante).
    // Se a média for 9, 9 >= 5 é TRUE, a condição inteira é TRUE, e o aluno entra em Recuperação.
    else if (media >= 5 || media <= 7) { 
        console.log(`Média: ${media.toFixed(2)}. Situação: Recuperação`); 
    } 
    else { // media > 7
        console.log(`Média: ${media.toFixed(2)}. Situação: Aprovado`);
    }
}
// calcularNotaFinalComWhile();