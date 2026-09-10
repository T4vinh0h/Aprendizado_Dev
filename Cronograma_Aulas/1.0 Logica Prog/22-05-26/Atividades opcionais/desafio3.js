// 3. Sistema de aprovação com nota e frequência
// Peça ao usuário:
//  nota final;
//  frequência em porcentagem.
// O aluno será aprovado se:
// nota >= 7 && frequencia >= 75
//
// Será reprovado por nota se:
// nota < 7
//
// Será reprovado por frequência se:
// frequencia < 75
//
// O programa deve mostrar:
//  se o aluno foi aprovado;
//  se foi reprovado por nota;
//  se foi reprovado por frequência;
//  se foi reprovado pelos dois motivos.
//
// Desafio extra:
// Em todos os exercícios, use conversão de tipo com:
// Number(prompt("Digite um valor:"))

var prompt = require('prompt-sync')();

// Escreva seu código abaixo:

// 200 letivos /1 ano (75% de 200)
// 30 provas e avalições que valem 10 pontos cada (6/10 minimo para cada)...
// deve conter while ou switch case
let nota;
let frequencia;

while (true) {
    nota = Number(prompt("Digite a nota final (0 a 10): "));
    if (!isNaN.nota && nota >= 0 && nota <= 10) {
        console.log(`Nota Registrada!`);
        break
    } else {
        console.log(`Informações Incoerrentes, verifique e tente novamente...`);
        console.log(`Digite uma nota numerica DE 1-10`);
    }
}

while (true) {
    frequencia = Number(prompt("Digite a frequência em porcentagem (0 a 100): "));
    if ((!isNaN.frequencia && frequencia >= 0 && frequencia <= 200)) {
        break
    } else {
        console.log(`Informações Incoerrentes, verifique e tente novamente...`);
        console.log(`Digite uma nota numerica DE 1-10`);
    }
}

switch (true) {
    case (nota >= 7 && frequencia >= 150):
        console.log("Resultado: O aluno foi APROVADO!");
        break;
    case (nota < 7 && frequencia < 150):
        console.log("Resultado: O aluno foi REPROVADO por ambos os motivos (nota baixa e frequência baixa).");
        break;
    case (nota < 7):
        console.log("Resultado: O aluno foi REPROVADO por nota.");
        break;
    case (frequencia < 150):
        console.log("Resultado: O aluno foi REPROVADO por frequência.");
        break;
}