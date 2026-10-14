// ========================================
// Classe e Objeto
// ========================================

// Exemplo de uma Classe em TypeScript
class ProdutoExemplo{
    nome: string; //Atributo
    preco: number; //Atributo

    constructor (nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }
}

const p1 = new ProdutoExemplo("Mouse", 15.90);
const p2 = new ProdutoExemplo("Teclado", 25.90);

console.log(p1.nome);
console.log(p2.nome);

// ========================================
// Métodos / Funções
// ========================================

//Tipo de retorno nulo
//O tipo void pode ser usado para indicar que uma função não retorna nenhum valor.
function printOláMundo():void{
    console.log("Olá Mundo!");
}
let a = printOláMundo();

//Parâmetros
//Os Parâmetros de função são tipados com uma sintaxe semelhante á das declarações de variáveis
function multiplicacao(a: number, b:number): number{
    return a * b;
}
const resultadoMultiplicacao = multiplicacao(5,3);
console.log(resultadoMultiplicacao);

//Parâmetros opcionais
//Por padrão, o TypeScript assume que todos os parâmetros são obrigatórios,
//mas eles podem ser explicitamente marcados
function adicionar(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
}
let x = adicionar(1,2,3);
console.log(x);
let y = adicionar(1,2);
console.log(y);