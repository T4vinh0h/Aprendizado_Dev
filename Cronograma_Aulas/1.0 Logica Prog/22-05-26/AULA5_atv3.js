// Conversão de Temperatura: Fahrenheit para Celsius
var prompt = require('prompt-sync')();
// Peça ao usuário uma temperatura em Fahrenheit e converta-a para Celsius.Se o
// valor inserido for muito extremo (maior que 1000 ou menor que -1000), exiba um
// alerta de "Valor irreal!".
 let tempFahrenheit = Number(prompt(`Insira a temperatura em fahrenheit: `));
   if (tempFahrenheit > 1000 || tempFahrenheit < -1000){
      console.log(`🚫ERRO: Valor inconsistente!🚫`);
 } else{
 let tempCelsius = (tempFahrenheit - 32) * 5 / 9;
      console.log(`Temperatura convertida em Celsius: 🌡️  ${tempCelsius}°C `);
 }