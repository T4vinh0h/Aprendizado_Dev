//pedir para usuario escolher entre (salada de frutas, pao de queijo ou sorvete de chocolate kitkat), ao selecionar, deve mostrar o valor do produto (nao adicione nada diferente)
var prompt = require('prompt-sync')();

let continuar = true;

while(continuar){
    console.log("\n=== CATÁLOGO ===");
    console.log("1 - Salada de frutas - R$ 12,00");
    console.log("2 - Pão de queijo - R$ 8,00");
    console.log("3 - Sorvete de chocolate kitkat - R$ 15,00");
    console.log("4 - Sair");

    const produto = Number(prompt("Escolha um produto: "));

    if(produto === 4){
        console.log("Ok, nos vemos mais tarde lobatinho!");
        break;
    }

    let valor = 0;
    
    if(produto === 1) valor = 12;
    else if(produto === 2) valor = 8;
    else if(produto === 3) valor = 15;
    else {
        console.log("Produto não encontrado");
        continue;
    }

    let pagarValido = false;
    while(!pagarValido){
        const pagar = prompt("Deseja pagar? (sim/nao): ").toLowerCase();

        if(pagar === "sim"){
            pagarValido = true;
            const saldo = Number(prompt("Informe seu saldo: R$ "));
            
            if(saldo >= valor){
                console.log("Obrigado e saboreie sua comida!");
                continuar = false;
            } else {
                console.log("Que pena, saldo insuficiente!");
                continuar = false;
            }
        } else if(pagar === "nao"){
            pagarValido = true;
        } else {
            console.log("Resposta inválida! Digite apenas 'sim' ou 'nao'.");
        }
    }
}