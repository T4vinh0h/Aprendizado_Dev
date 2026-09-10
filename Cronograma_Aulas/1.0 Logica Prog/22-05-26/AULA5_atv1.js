//1. Conversão de Horas para Segundos - 
// Peça ao usuário um número de horas e converta esse valor para segundos. Exiba o resultado no final. 
// Se o número de horas inserido for negativo, mostre uma mensagem de erro.
var prompt = require('prompt-sync')();

   let horas = Number(prompt("⏲️ Digite as horas para conversão em Segundos: ")); //Perguntar as horas (1 prompt apenas)
   if (horas <= 0) { // JavaScript pergunta se a variavel (horas) é menor que 0.
    console.log("Erro: número invalido para conversão!🚫"); // resposta do "SE for menor"... resposta
  }else{ // se(if) horas NÃO for negativo, cai na opção: Se não(else) converte para a nova variavel.
   let segundos = horas * 3600; //varaivel nova: segundos; "=": multiplica o valor de horas por 3600 (segundos)
   console.log(`✅ Resultado convertido: ${segundos} Segundos`);//Exibe a mensagem com a conversão em ${...}
  }
