// 10. Utilize o operador `!` para inverter um valor lógico.

let chovendo = (prompt(`Está chovendo (S/N)?`) === "S");

if (!chovendo) {
    console.log(`Não está chovendo! Podemos sair de casa...`);
    let IrParque = (prompt(`Quer ir ao parque (S/N)?`));
    if (IrParque == "S") {
        console.log(`OK`);
    } else if (IrParque == "N") {
        console.log(`Fique em casa assistindo TV, Tchau!`);
    } else {
        console.log(`Digite Apenas S ou N`);
    }
} else {
    console.log(`Está chovendo! Fique em casa para não se molhar.`);
}
