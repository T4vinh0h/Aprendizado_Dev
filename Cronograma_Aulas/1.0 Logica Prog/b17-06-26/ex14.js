// Exercício 14 — Média e situação do aluno
// 
// Crie duas funções:
// * `calcularMedia(n1, n2)`;
// * `verificarSituacao(media)`.
// A primeira função deve retornar a média de duas notas.
// A segunda função deve receber a média e retornar:
// * "Aprovado" se a média for maior ou igual a 7;
// * "Reprovado" caso contrário.
// Depois, teste o código com um aluno.

function calcularMedia(n1, n2) {
    return (n1 + n2) / 2; 
}

function verificarSituacao(media) {
    if (media >= 7) {
        return (`Aprovado com Média: ${media}`); 
    } else {
        return (`Reprovado com Média: ${media}`);
    }
}
let resultado = verificarSituacao(calcularMedia(8, 6));
    console.log(resultado);