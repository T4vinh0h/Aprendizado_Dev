// Exercício 12 — Simulação de Operações Bancárias
//
// Elabore um objeto denominado `conta` contendo as propriedades:
//
// - titular
// - saldo
//
// Execute as seguintes operações:
//
// 1. Adicione um valor ao saldo, simulando um depósito
// 2. Subtraia um valor do saldo, simulando um saque
// 3. Exiba o saldo final após as operações
//
// **Restrição:** Não utilize funções para esta implementação.

const conta = {
   titular: "Pedro Lobato",
   saldo: 1200.00
}

conta.saldo += 500;
conta.saldo -= 200;

console.log(`O saldo final da conta de ${conta.titular} é de R$ ${conta.saldo}`);
