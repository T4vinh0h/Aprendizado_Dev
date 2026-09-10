//2. Calculadora de Área de um Retângulo
var prompt = require('prompt-sync')();
// Peça ao usuário para inserir a largura e a altura de um retângulo. Calcule a área e exiba o resultado. Se a largura ou a altura 
// for menor ou igual a zero, exiba a mensagem: "Os valores devem ser positivos.".

let largura = Number(prompt("📐Digite a largura do retângulo: ")); //let- declara a variável reatribuivel; prompt "Exibe a mensagem"
let altura =  Number(prompt("📏Digite a altura do retângulo: "));
   if (altura <= 0 || largura <=0){
     console.log(`❌ERRO: Os valores para o calculo do retângulo, devem ser positivos!❌`);
  }else{// se(if) o calculo da área NÃO for negativo, cai na opção: "Se não(else)" vai para o próximo passo.
const area = largura * altura; 
     console.log(prompt(`A áreado seu retangulo equivale a: ${area} m²`));
  }