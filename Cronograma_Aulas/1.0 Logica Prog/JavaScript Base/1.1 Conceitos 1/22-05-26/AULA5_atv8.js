function verificarAcessoComWhile() {
    console.log("\n--- 8. Verificação de Acesso (com WHILE) ---");
    
    const idade = Number(prompt("Qual é a sua idade? "));
    let autorizacao;
    let inputValido = false;
    
    // WHILE para garantir uma entrada válida
    while (!inputValido) {
        autorizacao = prompt("Você possui autorização dos pais? (sim/não) ").toLocaleLowerCase();
        
        if (autorizacao === 'sim' || autorizacao === 'não') {
            inputValido = true;
        } else {
            console.log("Resposta inválida. Por favor, responda com 'sim' ou 'não'.");
        }
    }
    
    const maiorDeIdade = idade >= 18;
    const temAutorizacao = autorizacao === 'sim';
    
    // IF com Operadores Lógicos (AND e OR)
    if (maiorDeIdade || (!maiorDeIdade && temAutorizacao)) {
        console.log("Acesso Permitido.");
    } else {
        console.log("Acesso Negado.");
    }
}
// verificarAcessoComWhile();