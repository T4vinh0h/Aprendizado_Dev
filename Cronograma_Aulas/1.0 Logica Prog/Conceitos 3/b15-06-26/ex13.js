// Exercício 13 — Objeto com Estrutura Aninhada
//
// Desenvolva um objeto denominado `cliente`.
//
// Implemente um objeto aninhado denominado `endereco` dentro do objeto cliente.
//
// A estrutura deve seguir o seguinte padrão:
//
// ```javascript
// const cliente = {
//     nome: "Maria",
//     endereco: {
//         rua: "Rua A",
//         numero: 100,
//         cidade: "Pelotas"
//     }
// };
// ```
//
// Realize a exibição apenas da propriedade rua do cliente.

const cliente = {
    nome: "Maria",
    endereco: {
        rua: "Rua A",
        numero: 100,
        cidade: "Pelotas"
    }
};

console.log(cliente.endereco.rua);
