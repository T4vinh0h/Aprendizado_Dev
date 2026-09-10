// ============================================
// 1. O QUE É UMA VARIÁVEL?
// ============================================
// Variável é uma "caixinha com etiqueta" que guarda um valor na memória.
// Você dá um nome (etiqueta) e um valor pra guardar dentro.

let idade = 20;
// "idade" = nome da caixinha
// "="     = "guarde isso aqui dentro"
// "20"    = valor guardado


// ============================================
// 2. AS 3 FORMAS DE CRIAR UMA VARIÁVEL (as "etiquetas")
// ============================================

// --- const ---
// Cria uma variável de valor FIXO. Depois de criada, NUNCA pode mudar o valor.
const pi = 3.14;
// pi = 3.15;  // ❌ ERRO! const não deixa reatribuir

// --- let ---
// Cria uma variável que PODE mudar de valor depois.
let nota = 8;
nota = 9; // ✅ funciona, "let" permite atualizar

// --- var ---
// Forma antiga de criar variável (antes de 2015). Também pode mudar de valor,
// mas tem comportamentos estranhos (não respeita bem os blocos {}) e por isso
// hoje em dia EVITA-SE usar var. Só existe pra manter compatibilidade com
// código antigo.
var cidade = "Pelotas";
cidade = "Porto Alegre"; // funciona, mas prefira "let" pra isso

// RESUMO DAS ETIQUETAS:
// const → valor fixo, não muda nunca (USE SEMPRE QUE POSSÍVEL)
// let   → valor pode mudar (use quando sabe que vai atualizar)
// var   → forma antiga, evite usar


// ============================================
// 3. TIPOS DE VALOR (o que pode ir dentro da caixinha)
// ============================================
const nome = "Otavio";     // string  → texto, sempre entre aspas
const numero = 33;         // number  → qualquer número, inteiro ou decimal
const aprovado = true;     // boolean → só true ou false

// Pra descobrir o tipo de qualquer variável, usa o "typeof":
console.log(typeof nome);      // "string"
console.log(typeof numero);    // "number"
console.log(typeof aprovado);  // "boolean"


// ============================================
// 4. CONSOLE.LOG — DUAS FORMAS DE JUNTAR TEXTO COM VARIÁVEL
// ============================================

const a = "1";
const b = "2";

// --- Forma 1: concatenação com "+" ---
// Gruda os textos um do lado do outro. Cuidado: com números vira string
// se um dos lados já for texto!
console.log(a + " " + b);       // "1 2"
console.log("2" + "2");         // "22"   (textos grudados, NÃO é soma)
console.log(2 + 2);             // 4      (aqui são números de verdade, soma)
console.log("Gau" + "cho");     // "Gaucho"

// --- Forma 2: template literals (crase `` + ${} ) ---
// Forma mais moderna e mais fácil de ler. Usa crase ` no lugar de aspas,
// e ${variavel} pra "encaixar" o valor dentro do texto.
const exemplo = "mundo";
console.log(`Olá ${exemplo}!`);  // "Olá mundo!"

// Comparando as duas formas fazendo a mesma coisa:
const soma1 = 5 + 3;
console.log("O resultado é: " + soma1);   // concatenação
console.log(`O resultado é: ${soma1}`);   // template literal (mais limpo)


// ============================================
// 5. CÁLCULOS SIMPLES (operadores matemáticos)
// ============================================
const x = 200;
const y = 54;

const soma = x + y;          // +  soma
const subtracao = x - y;     // -  subtração
const multiplicacao = x * y; // *  multiplicação
const divisao = x / y;       // /  divisão

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);


// ============================================
// 6. ERROS COMUNS DE SINTAXE (baseado no seu código original)
// ============================================

// ❌ ERRADO — faltando ponto e vírgula
// const X = 200
// const Y = 54
// Funciona na maioria dos casos porque o JS "adivinha" onde termina a linha,
// mas é considerado má prática e pode causar bugs difíceis de achar.

// ✅ CERTO — sempre terminar com ponto e vírgula
const X1 = 200;
const Y1 = 54;


// ❌ ERRADO — variável repetida (isso trava o código com erro!)
// const X = 200;
// const X = 9;   // SyntaxError: Identifier 'X' has already been declared

// ✅ CERTO — nomes diferentes pra cada conjunto de dados
const X2 = 9;
const Y2 = 10;
const A2 = 2;


// ❌ ERRADO — usar acento no nome da variável (funciona, mas não é recomendado)
// const Otávio = 10;

// ✅ CERTO — evitar acentos nos nomes
const Otavio = 10;
const Oivato = 20;
console.log(Otavio + Oivato);  // 30 (soma de verdade, pois são números)
console.log(Otavio / Oivato);  // 0.5
console.log(Otavio - Oivato);  // -10
console.log(Oivato - Otavio);  // 10

// ============================================
// 7. EXEMPLO COMPLETO CORRIGIDO (juntando tudo que vimos)
// ============================================
const x3 = 9;
const y3 = 10;
const a3 = 2;

const soma3 = x3 + y3 + a3;
console.log(`Resultado da soma: ${soma3}`);

const media3 = (x3 + y3 + a3) / 3;
console.log(`Resultado da média: ${media3}`);

const multiplicacao3 = x3 * y3 * a3;
console.log(`Resultado da multiplicação: ${multiplicacao3}`);