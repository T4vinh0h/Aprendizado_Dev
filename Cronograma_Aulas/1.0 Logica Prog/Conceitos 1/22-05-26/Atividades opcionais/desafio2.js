// 2. Conversão de metros para centímetros, milímetros e quilômetros
// Peça ao usuário um valor em metros.
// O programa deve converter para:
//  centímetros;
//  milímetros;
//  quilômetros.
// Depois, verifique se o valor informado é:
//  menor que 1 metro;
//  igual a 1 metro;
//  maior que 1 metro.
// Use operadores como: <, >, ==, ===
//
// Desafio extra:
// Em todos os exercícios, use conversão de tipo com:
// Number(prompt("Digite um valor:"))

var prompt = require('prompt-sync')();

// Escreva seu código abaixo:
let Conversor  = +prompt(`Conversor de Metros`);
let metros = Conversor;
let centimetros = (metros * 100); 
let milimetros = (metros * 1000);
let quilometros = (metros / 1000);

    if (metros < 1) {
            console.log(`Conversor: ${centimetros}cm, ${milimetros} mm, ${quilometros}Km`);
            console.log("O valor informado é menor que 1 metro.");
        }else if( metros == 1){
            console.log(`Conversor: ${centimetros}cm, ${milimetros} mm, ${quilometros}Km`);
            console.log("O valor informado é igual a 1 metro.");
        }else{
            console.log(`Conversor: ${centimetros}cm, ${milimetros} mm, ${quilometros}Km`);
            console.log("O valor informado é maior que 1 metro.");
    } 

    
