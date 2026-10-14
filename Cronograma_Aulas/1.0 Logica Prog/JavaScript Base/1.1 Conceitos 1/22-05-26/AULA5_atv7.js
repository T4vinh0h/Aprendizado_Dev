function calcularMediaAluno() {
    console.log("\n--- 7. Cálculo de Média e Situação do Aluno ---");
    
    const nota1 = Number(prompt("Digite a primeira nota (0 a 10): "));
    const nota2 = Number(prompt("Digite a segunda nota (0 a 10): "));
    
    const media = (nota1 + nota2) / 2;
    let situacao = "";
    
    // Validação de notas (operador lógico AND)
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        console.log("Erro: As notas devem estar entre 0 e 10.");
        return;
    }

    // IF, ELSE IF, ELSE
    if (media >= 9) {
        situacao = "Excelente!";
    } else if (media >= 6) {
        situacao = "Aprovado!";
    } else {
        situacao = "Reprovado!";
    }
    
    console.log(`Média Final: ${media.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
}
// calcularMediaAluno();