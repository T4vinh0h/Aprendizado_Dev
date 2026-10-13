import { dividir, multip, somar, subtrair } from "./refatorando";

const n1 = +prompt("Digite um valor: ");
const n2 = +prompt("Digite outro valor: ");
let operacao;

while (true) {
    operacao = prompt("Escolha uma operação + - / *: ");

    if (operacao == "+") {
        console.log(somar(n1, n2));
    } else if (operacao == "-") {
        console.log(subtrair(n1, n2));
    } else if (operacao == "*") {
        console.log(multip(n1, n2));
    } else if (operacao == "/") {
         console.log(dividir(n1, n2));
        if (n2 == 0) break; // encerra se for divisão por zero
    } else {
        console.log("Operação incorreta!");
        break;
    }
}