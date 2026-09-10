// Exercício 23 — Exibindo apenas aprovados
// 
// Crie uma função chamada `mostrarAprovados`.
// A função deve receber um array de objetos.
// Cada objeto deve possuir:
// * nome;
// * nota.
// A função deve exibir apenas os alunos com nota maior ou igual a 7.
let alunos = [
    { nome: "Yuri", nota: 8.9 },
    { nome: "Bruno Lemke", nota: 6.2 },
    { nome: "João Francisco", nota: 7.8 },
    { nome: "Emilly", nota: 7 },
    { nome: "Francine", nota: 5.9 },
    { nome: "Otávio", nota: 8.9 },
    { nome: "Gabriel", nota: 6.5 }
];
    function mostrarAprovados(alunos) {
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].nota >= 7) {
                console.log(` O aluno(a) ${alunos[i].nome}, possui ${alunos[i].nota} pontos de aproveitamento!`);
            }
        }
    }
mostrarAprovados(alunos);