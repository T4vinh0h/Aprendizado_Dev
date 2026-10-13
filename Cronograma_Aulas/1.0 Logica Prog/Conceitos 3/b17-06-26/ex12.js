// Exercício 12 — Função com if, else if e else
// 
// Crie uma função chamada `verificarSituacao`.
// A função deve receber uma média como parâmetro e retornar:
// * "Aprovado" se a média for maior ou igual a 7;
// * "Recuperação" se a média for maior ou igual a 5 e menor que 7;
// * "Reprovado" se a média for menor que 5.

function verificarSituacao(media) {
    if (media >= 7) {
        return ("aprovado");
    } else if (media >= 5 && media < 7) {
        return ("recuperação");
    } else {
        return ("reprovado");
    }
}