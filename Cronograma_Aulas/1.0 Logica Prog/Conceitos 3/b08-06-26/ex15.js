// 15. Sistema simples de lista de tarefas
// Crie um programa que simule uma lista de tarefas.
// O programa deve:
// Criar um array vazio chamado tarefasAdicionar 3 tarefas usando push()Mostrar todas as tarefas cadastradasRemover a última tarefa usando pop()Mostrar a tarefa removidaMostrar a lista atualizada
// Exemplo de tarefas:
// "Estudar JavaScript"
// "Fazer exercícios"
// "Revisar arrays"
const prompt = require("prompt-sync")();

console.log(`\n========-------------------------------========`);
console.log(`\n=====--------| Cadastrar Tarefas |--------=====`);
let tarefas = [];
for (let i = 0; i <= 2; i++) {
        let tarefasAdd = (prompt(`Digite a ${i}º tarefa: `)); 
        // Exemplo de tarefas:
        // "Estudar JavaScript"
        // "Fazer exercícios"
        // "Revisar arrays"
        tarefas.push(tarefasAdd);
    }
console.log(`\n========-------------------------------========`);
console.log(`\n=====-------| Tarefas Registradas |-------=====`);
    for (let i = 0; i <= 2; i++) {
        console.log(`Tarefa ${i}: ${tarefas[i]}`);
    }
console.log(`\n========-------------------------------========`);
