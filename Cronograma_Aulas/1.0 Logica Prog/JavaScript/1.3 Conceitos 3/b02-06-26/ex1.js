/*
1. Sistema de média com recuperação
Crie um programa que leia o nome de um aluno e 4 notas.
O programa deve calcular a média e mostrar:
* Nome do aluno
* Média final
* Situação do aluno
Regras:
  usar apenas os recursos:
* Variáveis
* `prompt-sync`
* `if`
* `else`
* `switch case`
* `for`
* `while`
* `do...while`
* Operadores matemáƟcos e lógicos
  Não usar:
* Arrays;
* Funções personalizadas;
* Objetos;
* Métodos avançados;

| Média | Situação |
| ----------- | ----------- |
| 7 ou mais | Aprovado |
| 5 até 6.9 | Recuperação |
| Menor que 5 | Reprovado |
Caso o aluno fique em recuperação, o programa deve pedir uma nota de recuperação. A nova média deve ser calculada assim:
novaMedia = (media + recuperacao) / 2;
Se a nova média for maior ou igual a 6, mostrar:
Aprovado após recuperação
Senão, mostrar:
Reprovado após recuperação
*/

var prompt = require('prompt-sync')();

let continuar;
do{
    let nome = prompt(`Digite o nome do Aluno(a): `);
    let acumulador = 0
    for (let i = 1; i <= 4 ; i++) {
        let nota = Number(prompt(`Digite a ${i}º nota de ${nome}: `));
        acumulador += nota // acumulador = acumulador + nota
        console.log(` Nota Geral: ${acumulador}`);    
    }
    let situacao;
    let media = acumulador/4;
    switch (true) {
        case (media > 7): {
                console.log(`${nome}, está Aprovado`);
            }break;

        case (media <= 7 && media >= 5): {
                console.log(`${nome}, está em Recuperação`);
            }break;

        default:
            situacao = `${nome}, está Reprovado`;
        break;
    }
    console.log("\n--- Resultado Parcial ---");
    console.log(`Nome do Aluno: ${nome}`);
    console.log(`Média Final: ${media.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
    
    if (situacao === media <= 7 && media >= 5) {
        console.log("\nO aluno tem direito à recuperação.");
    }

}while (continuar === 's' || continuar === 'S');
