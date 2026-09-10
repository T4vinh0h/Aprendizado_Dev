/*
## Exercício 1 — Sistema de acesso bancário

Crie um sistema que valide acesso a uma conta bancária.

Regras:

* Usuário correto: "cliente"
* Senha correta: "banco123"
* Se os dois estiverem corretos:
  * verificar saldo;
  * se saldo for maior que 0, mostrar "Acesso liberado";
  * caso contrário, "Conta sem saldo".
* Caso login esteja incorreto:
  * mostrar "Usuário ou senha inválidos".
*/

let usuario = "cliente";
const senha = 'banco123';
let saldo = 1168.92
  
  if (usuario === 'cliente' && senha === 'banco123') {
    if (saldo > 0) {
      console.log(`Acesso Concedido`);
    }else{
      console.log(`Conta sem saldo`);
    }
  } else {
    console.log(`Credenciais Incorretas: Usuário ou senha inválidos...`);
  }
