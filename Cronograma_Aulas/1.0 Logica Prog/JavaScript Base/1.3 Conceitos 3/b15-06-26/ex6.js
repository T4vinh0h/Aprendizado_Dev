// Exercício 6 — Verificação de Existência de Propriedade
//
// Elabore um objeto denominado `livro` contendo as propriedades:
//
// - titulo
// - ano
//
// Implemente a verificação da existência da propriedade `autor` no objeto.
//
// Utilize o seguinte operador:
//
// ```javascript
// "autor" in livro
// ```
//
// Exiba o resultado da verificação no console.

const livro = {
   titulo: "Escola de Rock",
   ano: 2023
};
console.log(livro);
    livro.autor = "Richard Linklater";

console.log(`/n============--------livro atualizado--------============`);
console.log(`livro: ${livro.titulo}`);
console.log(`ano: ${livro.ano}`);
console.log(`autor: ${livro.autor}`);


const book = {
    titulo: "logica de programação com algoritmos em JavaScript",
    ano: 2022 
};
console.log(book);
    book.autor = "Edécio"
        console.log(`/n============--------livro atualizado--------============`);
        console.log(`livro: ${livro.titulo}`);
        console.log(`ano: ${livro.ano}`);
        console.log(`autor: ${livro.autor}`);
  