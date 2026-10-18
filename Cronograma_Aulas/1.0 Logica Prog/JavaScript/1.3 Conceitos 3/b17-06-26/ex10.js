// Exercício 10 — Comparando console.log e return
// 
// Crie duas funções:
// * `mostrarQuadrado(numero)`;
// * `calcularQuadrado(numero)`.
// A função `mostrarQuadrado` deve apenas exibir o quadrado do número no console.
// A função `calcularQuadrado` deve retornar o quadrado do número.
// Depois, teste as duas funções.

function mostrarQuadrado(n1) {
    console.log(`O quadrado é: ${n1 * n1}`);
}
mostrarQuadrado(2);
// ----------------------------------------
function calcularQuadrado(n2) {
    return n2 * n2;
}
console.log(calcularQuadrado(2));
