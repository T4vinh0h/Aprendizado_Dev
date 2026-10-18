/*
9. Calculadora simples
Peça dois números ao usuário e depois peça uma operação:
+
-
*
/

Use operadores aritméticos para calcular o resultado.
Exemplo:
Digite o primeiro número: 10
Digite o segundo número: 5
Digite a operação: *

Resultado: 50
*/

let continuar = "s";

while (continuar === "s") {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let operacao = prompt("Digite a operação (+, -, *, /):");
    let resultado;

    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        resultado = num1 / num2;
    } else {
        resultado = "Operação inválida";
    }

    if (resultado !== "Operação inválida") {
        console.log("Resultado: " + resultado);
    } else {
        console.log(resultado);
    }
    
    continuar = prompt("Deseja realizar outra operação? (s/n)");
}
