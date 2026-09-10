// Array de 10 elementos
// Acrescente elementos na array até o a array ficar com 10
// elementos. (usando while ou for).
var prompt = require('prompt-sync')(); 
let array = []
let item
for(let i = 0;  i < 10; i++) {
    item = prompt(`Armazene até 10 elementos:`)
    array.push(item)
} console.log("item:", array);

