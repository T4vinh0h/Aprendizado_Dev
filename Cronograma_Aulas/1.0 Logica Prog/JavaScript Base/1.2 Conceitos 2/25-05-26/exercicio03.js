/*
## Exercício 3 — Sistema de notas completo

Calcule a média de um aluno e classifique.

Regras:

* Média maior ou igual a 9:
  * "Excelente"
* Média entre 7 e 8.9:
  * "Aprovado"
* Média entre 5 e 6.9:
  * "Recuperação"
* Média menor que 5:
  * "Reprovado"

Além disso:

* se frequência for menor que 75%, o aluno será "Reprovado por falta" independentemente da média.
*/
 
var  prompt  = require ( ' prompt-sync ' ) ( ) ; 

let frequencia = +(prompt("Digite a frequência do aluno (%): "));
let media = +(prompt("Digite a média do aluno: "));
if (frequencia < 75) {
  console.log("Reprovado por falta");
} else if (media >= 9) {
  console.log("Excelente");
} else if (media >= 7 && media <= 8.9) {
  console.log("Aprovado");
} else if (media >= 5 && media <= 6.9) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}