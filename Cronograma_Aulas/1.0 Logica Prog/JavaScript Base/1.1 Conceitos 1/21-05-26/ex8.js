// 8. Utilize o operador `&&` para verificar duas condições ao mesmo tempo.

let idade = +(prompt(`Digite sua idade:`));
let possuiCarteira = (prompt(`Possui carteira de motorista (S/N)?`));
if (idade >= 18) {
    console.log(`Vc é Maior de Idade, pode tirar CNH...`);
    if (possuiCarteira == "S") {
        console.log(`OK`);
    } else if (possuiCarteira == "N") {
        console.log(`Aprende Logo, Tchau!`);
    } else {
        console.log(`Digite Apenas S ou N`);
    }
} else {
    console.log(`Menor de Idade, não pode tirar CNH!`);
}

