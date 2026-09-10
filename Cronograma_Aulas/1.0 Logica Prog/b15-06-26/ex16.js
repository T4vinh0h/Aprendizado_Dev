// Exercício 16 — Iteração sobre Array de Objetos
//
// Desenvolva um array denominado `alunos` contendo 3 objetos.
//
// Cada objeto aluno deve possuir as propriedades:
//
// - nome
// - nota
//
// Implemente a utilização de um laço `for` para exibir o nome e a nota de cada aluno.

const alunos = [
    {
        nome: "João",
        nota: 8
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
    console.log(`Aluno: ${alunos[i].nome} - Nota: ${alunos[i].nota}`);
}
