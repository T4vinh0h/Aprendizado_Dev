// Exercício 4 — Adição de Propriedades a Objeto
//
// Desenvolva um objeto denominado `aluno` contendo as propriedades:
//
// - nome
// - nota
//
// Realize a adição da propriedade `curso` ao objeto existente.
//
// Conclua exibindo o objeto completo com todas as propriedades.

const aluno = {
    nome: "Caue",
    nota: [9.9,8,7.5]    
};
console.log(aluno);
aluno.curso = "Analise e Desenvolvimento de Sistemas";
console.log(aluno);

const aluno2 ={
    nome: "Otávio",
    nota: [8.2,6.0,9.9]
}
aluno2.curso = "Técnico em Desenvolvimento de Sistemas";
console.log(aluno);