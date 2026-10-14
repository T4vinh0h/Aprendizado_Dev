// 7. Verificando existência com includes()
// Crie um vetor com nomes de frutas.
// Depois:
// Verifique se existe a fruta "banana";
// Se existir, mostre: "Banana está na lista"
// Caso contrário, mostre: "Banana não está na lista"

let frutas = ["maçã", "uva", "laranja", "banana", "melancia"];

if (frutas.includes("banana")) {
    console.log(`${frutas}`);
    console.log(`Temos banana!`);
} else {
    console.log(`${frutas}`);
    console.log(`Não temos banana!`);
}