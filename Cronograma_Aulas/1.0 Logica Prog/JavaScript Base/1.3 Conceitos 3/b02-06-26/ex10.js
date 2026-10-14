/*
10. Simulador de financiamento simples
Crie um programa que simule o pagamento de uma compra parcelada. O usuário deve informar:
* Valor total da compra
* Quantidade de parcelas
* Taxa de juros mensal em porcentagem
O programa deve mostrar o valor de cada parcela mês a mês.
Regra de cálculo:
A cada mês, o valor da parcela recebe juros simples sobre o valor base da parcela. Exemplo:
Valor da compra: 1000
Parcelas: 5
Juros: 2
Cálculo:
valorBase = 1000 / 5;
Para cada mês:
parcelaComJuros = valorBase + (valorBase * juros / 100 * mes);
Saída esperada:
Parcela 1: R$ 204.00
Parcela 2: R$ 208.00
Parcela 3: R$ 212.00
Parcela 4: R$ 216.00
Parcela 5: R$ 220.00
Ao final, mostrar:
* Total pago
* Total de juros pagos
* Valor original da compra
Regras:
* Usar `for`.
* Validar se valor, parcelas e juros são válidos. * Não usar arrays.
*/

const prompt = require("prompt-sync")();

let valorTotal = 0;
while (valorTotal <= 0) {
    valorTotal = Number(prompt("Valor total da compra: "));
}

let parcelas = 0;
while (parcelas <= 0) {
    parcelas = Number(prompt("Quantidade de parcelas: "));
}

let juros = -1;
while (juros < 0) {
    juros = Number(prompt("Taxa de juros mensal (%): "));
}

let valorBase = valorTotal / parcelas;
let totalPago = 0;
let totalJuros = 0;

console.log("\n--- Parcelamento ---");
for (let mes = 1; mes <= parcelas; mes++) {
    let parcelaComJuros = valorBase + (valorBase * juros / 100 * mes);
    console.log("Parcela " + mes + ": R$ " + parcelaComJuros.toFixed(2));
    
    totalPago += parcelaComJuros;
}

totalJuros = totalPago - valorTotal;

console.log("\n--- Resumo ---");
console.log("Valor original da compra: R$ " + valorTotal.toFixed(2));
console.log("Total pago: R$ " + totalPago.toFixed(2));
console.log("Total de juros pagos: R$ " + totalJuros.toFixed(2));
