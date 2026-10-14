// 42. Sistema de busca em vetor
// Crie o vetor:
// let usuarios = ["ana", "bruno", "carla", "daniel"];
// Depois:
// Peça ao usuário um nome;
// Use includes() para verificar se existe;
// Use indexOf() para mostrar a posição;
// Se não existir, adicione o usuário ao vetor usando push().

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let usuarios = ["ana", "bruno", "carla", "daniel"];

rl.question("Digite um nome de usuário: ", (nome) => {
    if (usuarios.includes(nome)) {
        console.log(`Usuário ${nome} existe na posição ${usuarios.indexOf(nome)}`);
    } else {
        usuarios.push(nome);
        console.log(`Usuário ${nome} não existia. Foi adicionado ao vetor.`);
        console.log("Vetor atualizado:", usuarios);
    }
    rl.close();
});
