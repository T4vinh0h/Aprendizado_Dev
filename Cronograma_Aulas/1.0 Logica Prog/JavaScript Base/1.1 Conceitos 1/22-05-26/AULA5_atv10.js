function sistemaLoginComWhile() {
    console.log("\n--- 10. Sistema de Login Simples (com WHILE) ---");
    
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";
    let tentativas = 0;
    const maxTentativas = 3;
    let loginSucesso = false;
    
    // WHILE para repetir as tentativas de login
    while (tentativas < maxTentativas && !loginSucesso) {
        console.log(`\nTentativa ${tentativas + 1} de ${maxTentativas}:`);
        
        const usuario = prompt("Nome de usuário: ");
        const senha = prompt("Senha: ");
        
        // IF com Operadores Lógicos (AND)
        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            loginSucesso = true;
            console.log("\nAcesso Permitido! Bem-vindo.");
        } else {
            tentativas++;
            console.log("Falha no login. Credenciais incorretas.");
        }
    }
    
    if (!loginSucesso) {
        console.log("\nAcesso Negado. Você excedeu o número de tentativas.");
    }
}
// sistemaLoginComWhile();