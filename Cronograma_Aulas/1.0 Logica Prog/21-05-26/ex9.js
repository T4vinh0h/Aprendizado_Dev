// 9. Utilize o operador `||` para verificar se pelo menos uma condição é verdadeira.

let feriado = (prompt(`Hoje é feriado (S/N)?`) === "S");
let domingo = (prompt(`Hoje é domingo (S/N)?`) === "S");
if (feriado || domingo) {
    console.log(`Hoje é dia de descanso...`);
    let querViajar = (prompt(`Você vai viajar (S/N)?`));
    if (querViajar == "S") {
        console.log(`OK`);
    } else if (querViajar == "N") {
        console.log(`Aproveite o descanso em casa, Tchau!`);
    } else {
        console.log(`Digite Apenas S ou N`);
    }
} else {
    console.log(`Dia de semana comum, não é dia de descanso!`);
}