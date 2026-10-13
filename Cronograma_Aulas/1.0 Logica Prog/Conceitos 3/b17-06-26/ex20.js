// Exercício 20 — Função recebendo objeto
// 
// Crie uma função chamada `mostrarAluno`.
// A função deve receber um objeto `aluno` como parâmetro.
// O objeto deve possuir:
// * nome;
// * nota.
// A função deve exibir:
// Nome: Ana
// Nota: 8
// Exemplo de objeto:
// let aluno = {
//     nome: "Ana",
//     nota: 8
// };
let aluno = {
    nome: "Ana",
    nota: 8
}
    function mostrarAluno(aluno) {
        console.log(`${aluno.nome}:${aluno.nota}`);
    }
    mostrarAluno(aluno)


