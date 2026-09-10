/*
14. Verificar número positivo
Use do...while para pedir ao usuário um número positivo.
Enquanto ele digitar um número negativo ou zero, o programa deve pedir novamente.
Exemplo:
Digite um número positivo: -3
Número inválido.

Digite um número positivo: 0
Número inválido.

Digite um número positivo: 5
Número válido.
*/

let numero;

do {
    numero = parseFloat(prompt("Digite um número positivo:"));
    
    if (numero <= 0) {
        console.log("Número inválido.");
    }
} while (numero <= 0);

console.log("Número válido.");
