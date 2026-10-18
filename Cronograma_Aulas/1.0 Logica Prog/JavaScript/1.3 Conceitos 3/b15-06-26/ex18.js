// Exercício 18 — Cálculo de Média Geral da Turma
//
// Elabore um array denominado `alunos` contendo 4 objetos.
//
// Cada objeto deve possuir as propriedades:
//
// - nome
// - nota
//
// Implemente a utilização de um laço `for` para realizar a soma de todas as notas.
//
// Calcule e exiba a média geral da turma.

const alunos = [
    {
        nome: "Caue",
        nota: 10
    },
    {
        nome: "Lobato",
        nota: 5
    },
    {
        nome: "Pedro",
        nota: 9
    },
    {
        nome: "Otavio",
        nota: 0
    }
];

let soma = 0;
for (let i = 0; i < alunos.length; i++) {
    soma += alunos[i].nota;
}

const media = soma / alunos.length;
console.log(`A média geral da turma é: ${media}`);
