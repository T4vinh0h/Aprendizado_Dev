// 44. Editando uma lista com splice()
// Crie o vetor:
// let tarefas = ["estudar", "lavar roupa", "trabalhar", "descansar"];
// Depois:
// Remova "lavar roupa" usando splice();
// Adicione "fazer exercício" na mesma posição;
// Mostre o vetor atualizado.
// Resultado esperado:
// ["estudar", "fazer exercício", "trabalhar", "descansar"]

let tarefas = ["estudar", "lavar roupa", "trabalhar", "descansar"];
tarefas.splice(1, 1, "fazer exercício");

console.log(tarefas);
