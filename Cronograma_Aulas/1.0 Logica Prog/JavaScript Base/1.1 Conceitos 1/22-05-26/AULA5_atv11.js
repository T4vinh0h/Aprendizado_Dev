function validarPromocao() {
    console.log("\n--- 11. Validação de Promoção (apenas IF/ELSE) ---");
    
    const valorCompra = Number(prompt("Valor total da compra (R$): "));
    const isVIP = prompt("O cliente é membro VIP? (sim/não) ").toLocaleLowerCase();
    
    let desconto = 0;
    
    // IF, ELSE IF, ELSE com Operadores Lógicos (AND)
    if (isVIP === 'sim') {
        if (valorCompra > 500) {
            desconto = 0.15; // 15%
            console.log("VIP + Compra Alta: 15% de desconto aplicado.");
        } else {
            desconto = 0.05; // 5%
            console.log("VIP: 5% de desconto aplicado.");
        }
    } else {
        console.log("Cliente não-VIP: Nenhum desconto aplicado.");
    }
    
    const valorDesconto = valorCompra * desconto;
    const valorFinal = valorCompra - valorDesconto;
    
    console.log(`Desconto aplicado: R$ ${valorDesconto.toFixed(2)}`);
    console.log(`Valor Total a Pagar: R$ ${valorFinal.toFixed(2)}`);
}
// validarPromocao();