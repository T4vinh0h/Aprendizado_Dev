// 11. Crie uma expressão lógica verificando se um aluno foi aprovado.

let nota = +(prompt(`Digite a nota do aluno:`));
let frequencia = +(prompt(`Digite a frequência do aluno (%):`));
let media = 7;
let frequenciaMinima = 75;
const aprovado = (nota >= media && frequencia >= frequenciaMinima);
if (aprovado) {
    console.log(`Aprovado!`);
} else {
    console.log(`Reprovado!`);

    if (nota < media) {
        console.log(`Motivo: Nota inferior à média (${media}).`);
    }
    if (frequencia < frequenciaMinima) {
        console.log(`Motivo: Frequência inferior ao mínimo exigido (${frequenciaMinima}%).`);
    }
}