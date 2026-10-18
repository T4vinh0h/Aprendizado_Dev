// Exercício 7 — Objeto Livro com Formatação de Saída
//
// Desenvolva um objeto denominado `livro` com as propriedades:
//
// - titulo
// - autor
// - ano
// - quantidadePaginas
//
// Implemente a exibição de uma frase formatada conforme o padrão:
//
// ```text
// O livro Dom Casmurro foi escrito por Machado de Assis e possui 256 páginas.
// ```

const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
    quantidadePaginas: 256
};
console.log(`/n============--------livro atualizado--------============`);
console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} e possui ${livro.quantidadePaginas} páginas.`);
console.log(livro);

const bookDev = {
    titulo: "logica de programação com algoritmos em JavaScript",
    autor: "Edécio",
    ano: 2022,
    qtdpag:  267
};
console.log(`/n============--------livro atualizado--------============`);
console.log(`O livro ${bookDev.titulo} foi escrito por ${bookDev.autor} e possui ${bookDev.qtdpag} páginas.`);
console.log(bookDev);