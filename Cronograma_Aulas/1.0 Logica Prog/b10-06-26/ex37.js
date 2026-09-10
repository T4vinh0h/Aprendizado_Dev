// 37. Lista de chamada
// Crie um vetor chamado presentes com nomes de alunos.
// Depois:
// Adicione um aluno no final com push();
// Adicione um aluno no início com unshift();
// Remova o último aluno com pop();
// Verifique se "Ana" está presente usando includes();
// Mostre todos os alunos com forEach().

let presentes = ["Bruno", "Carlos", "Daniela"];
presentes.push("Eduardo");
presentes.unshift("Ana");
presentes.pop();

console.log(`Ana está presente? ${presentes.includes("Ana")}`);

console.log("Lista de presentes:");
presentes.forEach(aluno => {
    console.log(aluno);
});
