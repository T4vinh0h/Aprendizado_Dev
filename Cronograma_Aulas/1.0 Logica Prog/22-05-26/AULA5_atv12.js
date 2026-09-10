function calcularAreaTriangulo() {
    console.log("\n--- 12. Cálculo da Área de um Triângulo (ERRO INTENCIONAL) ---");
    let base = 0
    let altura = 0; 
    while (true) {
        const base = Number(prompt("Digite a base do triângulo (maior que zero): "));
        
        if (base >= 0) {
            console.log("Valores inválidos! A base deve ser positiva.");
        } else {
            
            break; 
        }
    }
    
    while (altura <= 0) {
        altura = prompt("Digite a altura do triângulo (maior que zero): ");
        if (altura <= 0) {
            console.log("Valores inválidos! A altura deve ser positiva.");
        }
    }
    const area = (baseFinal * altura) / 2;
    
    console.log(`A área do triângulo (cálculo incorreto) é: ${area.toFixed(2)}`);
}
// calcularAreaTrianguloComErro();