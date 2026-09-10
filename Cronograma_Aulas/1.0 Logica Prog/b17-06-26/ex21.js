// Exercício 21 — Função com objeto e condição
// 
// Crie uma função chamada `verificarAluno`.
// A função deve receber um objeto `aluno` com:
// * nome;
// * nota.
// Se a nota for maior ou igual a 7, exiba:
// Ana está aprovada.
// Caso contrário, exiba:
// Ana está reprovada.
let aluno = {
    nome:"Caue",
    nota: 10
}
function verificarAluno(aluno) {
    if (aluno.nota >= 7) {
        console.log(`O aluno ${aluno.nome} tem ${aluno.nota} de aproveitamento!`);
    } else {
        console.log(`${aluno.nome} está Reprovado!`); 
    }
}

verificarAluno(aluno);