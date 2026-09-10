var prompt = require('prompt-sync')();
// Mostrar a quantidade de tentativas de tentativas (erros) o usuario usou ate acertar a senha
let senha
let i = 0;

while (senha != 123){
 senha = Number(prompt('🔐 Insira aqui sua senha: '));
 i++;
}if (i < 100){
    console.log(`Acesso concedido meu truta! Realizou ${i} tentantivas}`);
}else{
console.log(`Bah meu! ${i} tentantivas é sacanagem!`);
}