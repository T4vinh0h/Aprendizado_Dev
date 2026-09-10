// 10. Sistema de compra com desconto e frete
// Peça ao usuário:
//  valor da compra;
//  distância da entrega em quilômetros;
//  se possui cupom: "sim" ou "nao".
// Regras:
//  Se a compra for maior ou igual a R$ 200, o cliente recebe desconto.
//  Se possuir cupom, também recebe desconto.
//  Se a distância for maior que 50 km, o frete é caro.
//  Se a compra for maior que R$ 300 e a distância for menor ou igual a 20 km, o frete é grátis.
// Condições sugeridas:
// valorCompra >= 200 || cupom === "sim"
// distancia > 50
// valorCompra > 300 && distancia <= 20
//
// O programa deve mostrar:
//  se tem desconto;
//  se o frete é caro;
//  se o frete é grátis;
//  valor final aproximado da compra com desconto, se houver.
//
// Desafio extra:
// Em todos os exercícios, use conversão de tipo com:
// Number(prompt("Digite um valor:"))

var prompt = require('prompt-sync')();

// Escreva seu código abaixo:
