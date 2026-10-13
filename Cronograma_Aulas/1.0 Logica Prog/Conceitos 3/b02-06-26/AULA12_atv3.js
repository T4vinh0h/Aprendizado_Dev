// Criar objeto:lampada, funções de ligar/desligar e validar se ja esta ligada ou não.
// var prompt = require('prompt-sync')(); // Não é necessário para este código

const Lampada = {
    // --- PROPRIEDADE ---
    // Propriedade para rastrear o estado: 'true' para ligada, 'false' para desligada
    estaLigada: false,
    
    // --- MÉTODOS ---
    
    // 1. Método para verificar e retornar o estado atual
    validarEstado: function () {
        if (this.estaLigada) {
            return "A lâmpada está ligada (ON).";
        } else {
            return "A lâmpada está desligada (OFF).";
        }
    },

    // 2. Função de LIGAR
    ligar: function () {
        if (this.estaLigada) {
            console.log("A lâmpada JÁ ESTÁ ligada. Nenhuma ação necessária.");
        } else {
            this.estaLigada = true; // Altera a propriedade para true
            console.log("LÂMPADA LIGADA.");
        }
    },

    // 3. Função de DESLIGAR
    desligar: function () {
        if (!this.estaLigada) { // O operador ! (NOT) verifica se é false
            console.log("A lâmpada JÁ ESTÁ desligada. Nenhuma ação necessária.");
        } else {
            this.estaLigada = false; // Altera a propriedade para false
            console.log("LÂMPADA DESLIGADA.");
        }
    }
};

// --- EXECUÇÃO E TESTES ---

console.log("--- TESTE INICIAL ---");
console.log(`Estado Inicial: ${Lampada.validarEstado()}`); // Deve estar desligada (OFF)

console.log("\n--- AÇÕES ---");

// 1. Ligar a lâmpada
Lampada.ligar(); 
console.log(`Estado Pós-Ligada: ${Lampada.validarEstado()}`); // Deve estar ligada (ON)

// 2. Tentar ligar novamente (deve mostrar a mensagem de aviso)
Lampada.ligar(); 

// 3. Desligar a lâmpada
Lampada.desligar(); 
console.log(`Estado Pós-Desligada: ${Lampada.validarEstado()}`); // Deve estar desligada (OFF)

// 4. Tentar desligar novamente (deve mostrar a mensagem de aviso)
Lampada.desligar();

let lampada ={
ligada == true 
ligar: function(){
    if(this.ligada == false) {
        return this.ligada = true
    }else{
    return `Ja esta ligada`
}
}
desligar: function () {
    if (this.ligada == true) {
        return this.ligada = false
    }else{
        return `Ja esta desligada`
    }
        
    console.log(lampada);
    console.log('===
    console.log();
    console.log();
    
}