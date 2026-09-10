// Exercício 9 — Verificação de Aprovação de Aluno
//
// Elabore um objeto denominado `aluno` com as propriedades:
//
// - nome
// - nota
//
// Implemente uma estrutura condicional `if` para verificar a aprovação do aluno.
//
// Utilize o seguinte critério:
//
// ```javascript
// nota >= 7
// ```
//
// Se a nota for maior ou igual a 7, exiba:
//
// ```text
// Aprovado
// ```
//
// Caso contrário, exiba:
//
// ```text
// Reprovado
// ```

const aluno = {
    nome: "Otávio",
    nota: 9.9
};

if (aluno.nota >= 7) {
    console.log(`O aluno(a): ${aluno.nome}, foi Aprovado com: "${aluno.nota}" pontos de aproveitamento.`);
} else {
    console.log(`O aluno(a): ${aluno.nome}, foi Reprovado, sua nota foi: "${aluno.nota}"`);
}