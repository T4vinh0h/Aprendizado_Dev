// 12. Verifique se uma pessoa pode entrar em um evento.

let idade = 17;
let acompanhante = true;


let podeEntrar = (idade >= 18 || acompanhante);

if (podeEntrar) {
    console.log("Pode entrar no evento.");
} else {
    console.log("Não pode entrar no evento.");
}
