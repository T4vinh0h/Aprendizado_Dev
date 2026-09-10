function alertaTemperaturaComErro() {
    console.log("\n--- 9. Alerta de Temperatura ---");
    
    const temperatura = Number(prompt("Digite a temperatura ambiente em Celsius: "));
    
    if (temperatura < 10) {
        console.log("Muito frio!");
    } else if (temperatura >= 10 || temperatura <= 25) { 
        console.log("Clima agradável.");
    } 
    else { 
        console.log("Muito calor!");
    }
}
