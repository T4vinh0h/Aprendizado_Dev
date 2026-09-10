var prompt = require('prompt-sync')();
 const idade = Number(prompt("Qual sua idade :"))

          if (idade < 3){
        console.log("Bebê Lactante");
    }else if (idade < 12){
        console.log("Criança");
    }else if (idade < 18){
        console.log("Adolescente");
    }else if (idade < 59){
        console.log("Adulto");
    }else{
        console.log("Idoso");
    }
