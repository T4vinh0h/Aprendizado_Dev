/*
## Exercício 2 — Sistema de triagem hospitalar

Classifique um paciente de acordo com temperatura e oxigenação.

Regras:

* Temperatura maior ou igual a 39 OU oxigenação menor que 90:
  * "Emergência"
* Temperatura entre 37 e 38.9:
  * "Observação"
* Caso contrário:
  * "Estável"
*/
 
var  prompt  = require ( ' prompt-sync ' ) ( ) ; 

let oxigenação = +(prompt(`Digite a OXIGENAÇÃO DO PACIENTE: `));
let temperatura = +(prompt(`Digite a TEMPERATURA DO PACIENTE: `));


if (temperatura >= 39.0 || oxigenação < 90) {
  console.log(`Emergência`);
} else if (temperatura >= 37 && temperatura <= 38.9) {
  console.log(`Observação`);
} else {
  console.log(`Estável`);
}

