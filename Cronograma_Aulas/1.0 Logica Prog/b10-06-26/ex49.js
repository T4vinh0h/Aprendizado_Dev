// 49. Lista de tarefas completa
// Crie um vetor chamado tarefas.
// O programa deve:
// Adicionar tarefas no final;
// Adicionar tarefas no início;
// Remover a última tarefa;
// Remover a primeira tarefa;
// Verificar se uma tarefa existe;
// Mostrar a posição de uma tarefa;
// Copiar parte da lista com slice();
// Remover uma tarefa específica com splice();
// Mostrar todas as tarefas com forEach().

let tarefas = [];
tarefas.push("estudar", "trabalhar", "descansar");
tarefas.unshift("acordar");
tarefas.pop();
tarefas.shift();

console.log("Tarefa 'estudar' existe?", tarefas.includes("estudar"));
console.log("Posição de 'trabalhar':", tarefas.indexOf("trabalhar"));

let parteLista = tarefas.slice(0, 1);
console.log("Parte da lista:", parteLista);

tarefas.splice(0, 1);

console.log("Lista de tarefas:");
tarefas.forEach(tarefa => {
    console.log(tarefa);
});
