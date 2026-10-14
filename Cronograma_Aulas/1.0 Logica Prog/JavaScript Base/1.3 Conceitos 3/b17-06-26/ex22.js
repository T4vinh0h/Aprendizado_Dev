// Exercício 22 — Array de objetos com função
// 
// Crie uma função chamada `listarAlunos`.
// A função deve receber um array de objetos.
// Cada objeto deve possuir:
// * nome;
// * nota.
// A função deve percorrer o array e exibir o nome e a nota de cada aluno.
// Exemplo:
// let alunos = [
//     { nome: "Ana", nota: 8 },
//     { nome: "Bruno", nota: 6 },
//     { nome: "Carla", nota: 9 }
// ];
// listarAlunos(alunos);
let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 9 }
];
function listarAlunos(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        console.log(` O aluno(a) ${alunos[i].nome}, possui ${alunos[i].nota} pontos de aproveitamento!`);
    }
}

listarAlunos(alunos);
