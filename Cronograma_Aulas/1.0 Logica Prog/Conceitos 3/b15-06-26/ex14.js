// Exercício 14 — Exibição de Dados de Objeto Aninhado
//
// Construa um objeto denominado `escola` contendo as propriedades:
//
// - nome
// - endereco
//
// A propriedade endereco deve ser um objeto contendo:
//
// - rua
// - numero
// - bairro
//
// Implemente a exibição de uma frase formatada conforme o padrão:
//
// ```text
// A escola Instituto Exemplo fica na Rua Central, número 500, bairro Centro.
// ```

const escola = {
    nome: "Instituto Butantan",
    endereco: {
        rua: "Rua Central",
        numero: 500,
        bairro: "Centro"
    }
};

console.log(`A escola ${escola.nome} fica na ${escola.endereco.rua}, número ${escola.endereco.numero}, bairro ${escola.endereco.bairro}.`);
