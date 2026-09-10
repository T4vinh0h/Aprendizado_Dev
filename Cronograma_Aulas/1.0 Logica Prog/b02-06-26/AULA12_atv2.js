// Criar objeto de um cachorro
 var prompt = require('prompt-sync')(); // Não é necessário para este código

const Dog = {
    // --- PROPRIEDADES ---
    raça: "S.R.D",
    nome: "Toddy",
    genero: "Macho",
    coloracaoPelugem: "Preto com Marrom",
    mesesVida: 0.10,
    Nascimento: "10/12/2024", 
    vacinaCompleta: false,
    castracao: true,

    // --- MÉTODOS ---
    
    // Método 1: Validação de Saúde (corrigido o ponto e vírgula)
    validarSaude: function () {
        if (this.vacinaCompleta === true) {
            return "Cachorro saudável!";
        } else {
            return "Cachorro precisa de cuidados.";
        }
    }, // É necessário uma vírgula após a definição do método

    // Método 2: Validação de Idade (CORRIGIDO: Syntax 'functio()' e lógica)
    validarIdade: function () {
        // CORREÇÃO 2: Comparação lógica e retorno
        if (this.mesesVida >= 12) { // Consideramos > 12 meses como adulto/mais velho
            return "Cachorro é Adulto/Idoso.";
        } else if (this.mesesVida > 0) {
            return "Cachorro é Filhote.";
        } else {
            return "Idade Inválida.";
        }
    }, // É necessário uma vírgula após a definição do método

    // Método 3: Aumentar Idade (CORRIGIDO: Referência à propriedade correta)
    aumentarIdade: function () {
        // Não existe 'this.idade', usamos 'this.mesesVida'
        this.mesesVida++; 
        console.log(`\nA idade de ${this.nome} foi atualizada para ${this.mesesVida} meses.`);
        return this.mesesVida;
    },
    
    // Método de Atualização da Vacina (Transferido o comando para dentro de um método)
    completarVacina: function() {
        this.vacinaCompleta = true;
        console.log(`${this.nome} recebeu a vacina completa.`);
    }
}; 

// --- EXECUÇÃO E TESTES ---

console.log("--- OBJETO INICIAL ---");
console.log(Dog);
console.log(`Validação de Saúde Inicial: ${Dog.validarSaude()}`); // Deve ser "precisa de cuidados"
console.log(`Validação de Idade Inicial: ${Dog.validarIdade()}`);


console.log("\n--- TESTANDO ALTERAÇÕES E MÉTODOS ---");

// Testando o erro no código original (Dog.vacinaCompleta = true estava solto)
Dog.completarVacina(); 
console.log(`Validação de Saúde PÓS-VACINA: ${Dog.validarSaude()}`); // Deve ser "saudável"

// Simulando o aumento de idade
Dog.aumentarIdade(); // 11 meses
Dog.aumentarIdade(); // 12 meses
Dog.aumentarIdade(); // 13 meses

console.log(`Idade Atual: ${Dog.mesesVida} meses.`);
console.log(`Validação de Idade Final: ${Dog.validarIdade()}`); // Deve mudar para "Adulto/Idoso"

console.log("\n--- INFORMAÇÕES FINAIS ---");
console.log(Dog); // Mostra o objeto com todas as propriedades atualizadas
console.log(`Castração: ${Dog.castracao ? "Sim" : "Não"}`);