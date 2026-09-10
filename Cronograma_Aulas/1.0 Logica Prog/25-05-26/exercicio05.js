/*
## Exercício 5 — Verificador de ano bissexto

Crie um programa que determine se um ano é bissexto.

Regras:

* divisível por 4;
* não divisível por 100;
* OU divisível por 400.

Dica:
Utilize operadores lógicos `&&` e `||`.
*/

var  prompt  = require ( ' prompt-sync ' ) ( ) ; 

let ano = +(prompt(`Digite o ano desejado: `));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log(`O ano ${ano} é bissexto.`);
} else {
  console.log(`O ano ${ano} não é bissexto.`);
}


