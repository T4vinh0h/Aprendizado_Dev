/*
7. Validação de senha
Crie uma variável chamada senhaCorreta com o valor "1234".
Use while para pedir ao usuário que digite a senha até acertar.
Exemplo:
Digite a senha: 1111
Senha incorreta.

Digite a senha: 1234
Acesso permitido.
*/

let senha = "1234";
let sistema = prompt("Digite a senha:");

while (sistema !== senha) {
    console.log("Senha incorreta.");
    sistema = prompt("Digite a senha:");
}

console.log("Acesso permitido.");
