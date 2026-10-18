/*
6. Sistema de votação
Crie um programa para uma votação simples. Candidatos:
1 - Ana
2 - Bruno
3 - Carla
4 - Nulo
5 - Branco
O programa deve perguntar quantos eleitores irão votar. Para cada eleitor, pedir o voto.
Ao final, mostrar:
* Total de votos da Ana
* Total de votos do Bruno
* Total de votos da Carla
* Total de votos nulos
* Total de votos brancos
* Candidato vencedor
Regras:
* Usar `for`.
* Usar `switch case`.
* Se o voto for inválido, pedir novamente usando `while`. * Se houver empate entre candidatos, mostrar:
Houve empate.
*/

const prompt = require("prompt-sync")();

let votosAna = 0;
let votosBruno = 0;
let votosCarla = 0;
let votosNulo = 0;
let votosBranco = 0;

let numEleitores = Number(prompt("Quantos eleitores irão votar? "));

for (let i = 1; i <= numEleitores; i++) {
    let votoValido = false;
    
    while (!votoValido) {
        console.log("\nEleitor " + i + " - Opções de voto:");
        console.log("1 - Ana\n2 - Bruno\n3 - Carla\n4 - Nulo\n5 - Branco");
        let voto = Number(prompt("Voto: "));
        
        switch (voto) {
            case 1:
                votosAna++;
                votoValido = true;
                break;
            case 2:
                votosBruno++;
                votoValido = true;
                break;
            case 3:
                votosCarla++;
                votoValido = true;
                break;
            case 4:
                votosNulo++;
                votoValido = true;
                break;
            case 5:
                votosBranco++;
                votoValido = true;
                break;
            default:
                console.log("Voto inválido. Tente novamente.");
        }
    }
}

console.log("\n--- Resultado da Votação ---");
console.log("Total de votos da Ana: " + votosAna);
console.log("Total de votos do Bruno: " + votosBruno);
console.log("Total de votos da Carla: " + votosCarla);
console.log("Total de votos nulos: " + votosNulo);
console.log("Total de votos brancos: " + votosBranco);

let maxVotos = votosAna;
let vencedor = "Ana";
let empate = false;

if (votosBruno > maxVotos) {
    maxVotos = votosBruno;
    vencedor = "Bruno";
    empate = false;
} else if (votosBruno === maxVotos) {
    empate = true;
}

if (votosCarla > maxVotos) {
    maxVotos = votosCarla;
    vencedor = "Carla";
    empate = false;
} else if (votosCarla === maxVotos) {
    empate = true;
}

if (empate) {
    console.log("Houve empate.");
} else {
    console.log("Candidato vencedor: " + vencedor);
}
