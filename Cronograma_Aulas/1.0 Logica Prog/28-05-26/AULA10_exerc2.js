// Repetindo uma mensagem
// Peça ao usuário para inserir um número N e repita a
// mensagem 'Olá!' N vezes.
var prompt = require('prompt-sync')();

function comprimentarPlayer(nickname) {
    return `Olá ${nickname}`;
}
    // comprimentarPlayer("XenomorfoDaFavela2849")

    let numero = prompt(`Quantas vezes quer ser cumprimentado? `)
    for (let i = 1; i <= numero; i++) {
        console.log(`${comprimentarPlayer("XenomorfoDaFavela2849")}`);

     }
  
