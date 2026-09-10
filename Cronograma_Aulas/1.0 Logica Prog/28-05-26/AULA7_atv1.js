var prompt = require('prompt-sync')();

let tab = prompt('Tabuada (APENAS números): ');

console.log(`\n-- Tabuada do ${tab} --`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${tab} x ${i} = ${tab * i}`);
}