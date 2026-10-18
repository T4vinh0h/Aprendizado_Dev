// Fazer um sistema que peça ao usuario 2 valores
// e peça qual operação ele deseja realizar
// porem o sistema so deve parar se o usuario
// digitar uma operação errada.
// Refatorar esse código usando funções
var prompt = require('prompt-sync')();

export function somar(a, b) {
    return `A soma é: ${a + b}`;
}

export function subtrair(a, b) {
    return `A subtração é: ${a - b}`;
}

export function multip(a, b) {
    return `A multiplicação é: ${a * b}`;
}

export function dividir(a, b) {
    if (b == 0) {
        return `Operação Incorreta`;
    } else {
        return `A divisão é: ${a / b}`;
    }
}
