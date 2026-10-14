// Exercício 5 — Remoção de Propriedades de Objeto
//
// Construa um objeto denominado `funcionario` com as propriedades:
//
// - nome
// - cargo
// - salario
//
// Execute a remoção da propriedade `salario` utilizando o operador `delete`.
//
// Apresente o estado do objeto antes e após a remoção da propriedade.

const funcionario = {
    nome:"Otávio",
    cargo:"Dev",
    salario: 1200
}
console.log(funcionario);
delete funcionario.salario;
console.log(funcionario);