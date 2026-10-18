// Permitir login de usuario: SE Login E senha estejam corretos simultaneamente
var prompt = require('prompt-sync')();
// Loop para permitir tentativas de login
while (true) {
    const email = (prompt('📧 Insira aqui sua caixa de entrada: '));
    const senha = (prompt('🔐 Insira aqui sua senha: '));

    if (senha === "senha123" && email === "user@example.com" ){
    console.log(`✅Acesso concedido!✅`);
    break;
    
}else{
    console.log(`❌Acesso Negado!❌`);
    }
}