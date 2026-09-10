/*
  2. Calculadora de IMC com classificação
  Peça peso e altura. Calcule o IMC e classifique: abaixo do peso, normal, sobrepeso, obesidade grau I, II ou III.
*/
var prompt = require('prompt-sync')(); 

console.log(`\n====================================================`);
console.log(`        🍎 SISTEMA DE AVALIAÇÃO NUTRICIONAL        `);
console.log(`====================================================\n`);

let peso; 
while (true) {
  peso = +(prompt(`Digite seu peso (Kg): `)); 
  if (!isNaN(peso) && peso > 0 && peso <= 500) {
    console.log(`✅ Peso registrado com sucesso!\n`);
    break; 
  } else {
    console.log(`❌ ERRO: Por favor, digite um peso numérico válido (entre 0.1 e 500 Kg)!`);
  }
}

let altura;
while (true) {
  altura = +(prompt(`Digite sua altura (metros): `));
  if (!isNaN(altura) && altura > 0 && altura <= 2.43) {
    console.log(`✅ Altura registrada com sucesso!\n`);
    break; 
  } else {
    console.log(`❌ ERRO: Por favor, digite uma altura numérica válida (entre 0.1 e 2.43 metros)!`);
  }
}

let imc = peso / (altura * altura);

console.log(`\n----------------------------------------------------`);
console.log(`                 📋 FICHA DO PACIENTE               `);
console.log(`----------------------------------------------------`);
console.log(`Peso: ${peso.toFixed(2)} Kg`);
console.log(`Altura: ${altura.toFixed(2)} m`);
console.log(`IMC calculado: ${imc.toFixed(2)}`);

switch (true) {
  case (imc < 18.5):
    console.log(`Classificação: Abaixo do peso`);
    console.log(`----------------------------------------------------`);
    console.log(`💡 Recomendação Nutricional:`);
    console.log(`Aumente o consumo de alimentos saudáveis e densos em nutrientes.`);
    console.log(`Inclua gorduras boas (abacate, castanhas, azeite) e carboidratos complexos.`);
    console.log(`Consulte um nutricionista para um plano adequado de superávit calórico.`);
    break;
  case (imc >= 18.5 && imc < 25.0):
    console.log(`Classificação: Peso normal (Saudável)`);
    console.log(`----------------------------------------------------`);
    console.log(`💡 Recomendação Nutricional:`);
    console.log(`Excelente! Seu peso está na faixa ideal para a sua altura.`);
    console.log(`Mantenha uma alimentação equilibrada e colorida rica em nutrientes.`);
    console.log(`Continue praticando atividades físicas regularmente e beba bastante água.`);
    break;
  case (imc >= 25.0 && imc < 30.0):
    console.log(`Classificação: Sobrepeso`);
    console.log(`----------------------------------------------------`);
    console.log(`💡 Recomendação Nutricional:`);
    console.log(`Atenção ao excesso de peso leve. Tente reduzir alimentos ultraprocessados.`);
    console.log(`Foque em aumentar a ingestão diária de fibras e vegetais folhosos.`);
    console.log(`Considere incluir mais exercícios aeróbicos e de força na sua rotina.`);
    break;
  case (imc >= 30.0 && imc < 35.0):
    console.log(`Classificação: Obesidade Grau I`);
    console.log(`----------------------------------------------------`);
    console.log(`💡 Recomendação Nutricional:`);
    console.log(`Alerta de saúde. Procure priorizar comida natural (descasque mais, embale menos).`);
    console.log(`Ajuste o tamanho das porções nas refeições e inicie exercícios físicos leves.`);
    console.log(`Recomendamos agendar uma consulta com um nutricionista para um plano guiado.`);
    break;
  case (imc >= 35.0 && imc < 40.0):
    console.log(`Classificação: Obesidade Grau II`);
    console.log(`----------------------------------------------------`);
    console.log(`💡 Recomendação Nutricional:`);
    console.log(`Risco aumentado para a saúde. Reduza o consumo de açúcares, sódio e frituras.`);
    console.log(`Pratique atividades de baixo impacto (como hidroginástica ou caminhada curta) para proteger as articulações.`);
    console.log(`É altamente recomendável buscar apoio profissional médico e nutricional.`);
    break;
  case (imc >= 40.0):
    console.log(`Classificação: Obesidade Grau III (Mórbida)`);
    console.log(`----------------------------------------------------`);
    console.log(`💡 Recomendação Nutricional:`);
    console.log(`Condição de saúde com alto risco de complicações.`);
    console.log(`Não realize dietas altamente restritivas sem o suporte de especialistas.`);
    console.log(`Busque acompanhamento multidisciplinar (nutricional, médico e psicológico) para reabilitação.`);
    break;
  default:
    console.log(`Não foi possível classificar seu IMC.`);
    break;
}

console.log(`----------------------------------------------------\n`);
