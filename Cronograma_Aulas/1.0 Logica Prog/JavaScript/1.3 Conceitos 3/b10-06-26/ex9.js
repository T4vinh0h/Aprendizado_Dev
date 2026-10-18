// 9. Sistema simples de busca
// Crie um vetor com nomes de alunos:
// let alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
// Depois:
// Peça ao usuário o nome de um aluno;
// Use includes() para verificar se o aluno está na lista;
// Mostre uma mensagem informando se o aluno foi encontrado ou não.

var prompt = require ('prompt-sync') () ; 

let alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
let pedirNomes = (prompt(`Digite o nome: `));

if (alunos.includes(pedirNomes)) {
    console.log(` Encontrado: ${alunos}`);
} else {
    console.log("Erro: Aluno não existe!");   
}