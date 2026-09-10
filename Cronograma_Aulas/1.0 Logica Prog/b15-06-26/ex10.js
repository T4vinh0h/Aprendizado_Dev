// Exercício 10 — Verificação de Habilitação para Dirigir
//
// Desenvolva um objeto denominado `motorista` contendo as propriedades:
//
// - nome
// - idade
// - possuiCarteira
//
// Implemente uma estrutura condicional `if` para verificar se o motorista está apto a dirigir.
//
// A condição deve seguir o seguinte critério:
//
// ```javascript
// motorista.idade >= 18 && motorista.possuiCarteira === true
// ```
//
// Exiba uma mensagem informativa indicando se o motorista pode ou não dirigir.

const motorista = {
    nome: "Pedro Lobato",
    idade: 28,
    possuiCarteira: true
}

if (motorista.idade >= 18 && motorista.possuiCarteira === true){
    console.log(`O motorista ${motorista.nome} tem permissão para dirigir!`);
} else {
    console.log(`O motorista ${motorista.nome} não tem permissão para dirigir!`);
}