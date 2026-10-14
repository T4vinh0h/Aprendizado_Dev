// Exercício 19 — Iteração sobre Propriedades com `for...in`
//
// Desenvolva um objeto denominado `computador` contendo as propriedades:
//
// - marca
// - processador
// - memoria
// - armazenamento
//
// Implemente a utilização do laço `for...in` para exibir o nome de cada propriedade
// e seu respectivo valor.
//
// **Exemplo de saída esperada:**
//
// ```text
// marca: Dell
// processador: Intel i5
// memoria: 8GB
// armazenamento: 256GB SSD
// ```

const computador = {
    marca: "Dell",
    processador: "Intel i5",
    memoria: "8GB",
    armazenamento: "256GB SSD"
};

for (let propriedade in computador) {
    console.log(`${propriedade}: ${computador[propriedade]}`);
}
