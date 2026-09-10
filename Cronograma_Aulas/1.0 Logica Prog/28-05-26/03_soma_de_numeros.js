/*
3. Soma de números
Peça ao usuário um número inteiro positivo. Use while para somar todos os números de 1 até esse número.
Exemplo:
Digite um número: 5
Resultado: 15

Pois:
1 + 2 + 3 + 4 + 5 = 15
*/

let numero = parseInt(prompt("Digite um número:"));
let soma = 0;
let i = 1;

while (i <= numero) {
    soma += i;
    i++;
}

console.log(`Resultado: ${soma}`);
