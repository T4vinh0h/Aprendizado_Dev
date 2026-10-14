// Exercício 8 — Objeto Aluno com Cálculo de Média
//
// Construa um objeto denominado `aluno` contendo as propriedades:
//
// - nome
// - nota1
// - nota2
//
// Realize o cálculo da média das duas notas, armazenando o resultado em uma variável separada.
//
// Exiba as seguintes informações:
//
// - Nome do aluno
// - Nota 1
// - Nota 2
// - Média calculada

const aluno = {
    nome: "João",
    nota1: 8,
    nota2: 9
};
const media = (aluno.nota1 + aluno.nota2) / 2;
console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Nota 1: ${aluno.nota1}`);
console.log(`Nota 2: ${aluno.nota2}`);
console.log(`Média calculada: ${media}`);

const aluno2 = {
    nome:"Otávio",
    nota1: 6,
    nota2: 10
}
const media2 = (aluno2.nota1 + aluno2.nota2) / 2;
console.log(`Nome do aluno: ${aluno2.nome}`);
console.log(`Nota 1: ${aluno2.nota1}`);
console.log(`Nota 2: ${aluno2.nota2}`);
console.log(`Média calculada: ${media2}`);
