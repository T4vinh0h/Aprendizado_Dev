// 46. Gerenciador de nomes
// Crie um programa com um vetor chamado nomes.
// O programa deve:
// Adicionar 3 nomes usando push();
// Adicionar 1 nome no início usando unshift();
// Remover o último nome usando pop();
// Remover o primeiro nome usando shift();
// Mostrar todos os nomes com forEach().

let nomes = [];
nomes.push("Ana", "Bruno", "Carlos");
nomes.unshift("Zara");
nomes.pop();
nomes.shift();

console.log("Lista de nomes:");
nomes.forEach(nome => {
    console.log(nome);
});
