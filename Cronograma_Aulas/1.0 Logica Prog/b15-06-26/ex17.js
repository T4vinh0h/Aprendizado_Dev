// Exercício 17 — Filtragem de Alunos Aprovados
//
// Construa um array de objetos denominado `alunos`.
//
// Cada objeto aluno deve conter as propriedades:
//
// - nome
// - nota
//
// Implemente a utilização de um laço `for` combinado com uma estrutura `if`
// para exibir exclusivamente os alunos com nota maior ou igual a 7.

const alunos = [
    {
        nome: "João",
        nota: 3
    },
    {
        nome: "Maria",
        nota: 9
    },
    {
        nome: "Pedro",
        nota: 7
    }
];

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 7) {
        console.log(`Aluno: ${alunos[i].nome} - Nota: ${alunos[i].nota}`);
    }
}
