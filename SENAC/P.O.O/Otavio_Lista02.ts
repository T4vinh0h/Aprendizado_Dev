// ========================================
// Lista de Exercícios 02 – JavaScript
// POO – Pilar da Abstração
// ========================================

// ========================================
// Exercício 11 – Cadastro de Funcionário
// ========================================
// Crie uma classe chamada Funcionario.
// Ela deverá possuir:
// • nome
// • cargo
// • salário
// Crie um método chamado mostrarFuncionario() que exiba todas as
// informações.
// Crie três funcionários diferentes.
class Funcionario {
    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    mostrarFuncionario(): void {
        console.log(`Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario}`);
    }
}

const func1 = new Funcionario("João Silva", "Desenvolvedor", 5000);
const func2 = new Funcionario("Maria Santos", "Analista", 4500);
const func3 = new Funcionario("Pedro Oliveira", "Gerente", 7000);
console.log('=== Exercício 11 - Cadastro de Funcionário ===');
func1.mostrarFuncionario();
func2.mostrarFuncionario();
func3.mostrarFuncionario();

// ========================================
// Exercício 12 – Conversor de Temperatura
// ========================================
// Crie uma classe chamada Temperatura.
// Ela deverá receber uma temperatura em graus Celsius.
// Crie dois métodos:
// • converterParaFahrenheit()
// • converterParaKelvin()
// Mostre os resultados no console.
class Temperatura {
    celsius: number;

    constructor(celsius: number) {
        this.celsius = celsius;
    }

    converterParaFahrenheit(): number {
        return (this.celsius * 9/5) + 32;
    }

    converterParaKelvin(): number {
        return this.celsius + 273.15;
    }
}

const temp = new Temperatura(25);
console.log('\n=== Exercício 12 - Conversor de Temperatura ===');
console.log(`Temperatura em Celsius: ${temp.celsius}°C`);
console.log(`Temperatura em Fahrenheit: ${temp.converterParaFahrenheit()}°F`);
console.log(`Temperatura em Kelvin: ${temp.converterParaKelvin()}K`);

// ========================================
// Exercício 13 – Calculadora de IMC
// ========================================
// Crie uma classe chamada Pessoa.
// Ela deverá possuir:
// • nome
// • peso
// • altura
// Crie um método chamado calcularIMC().
// Utilize a fórmula:
// IMC = peso / (altura * altura)
// Depois informe:
// • Abaixo do peso
// • Peso normal
// • Sobrepeso
// • Obesidade
class PessoaIMC {
    nome: string;
    peso: number;
    altura: number;

    constructor(nome: string, peso: number, altura: number) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(): void {
        const imc = this.peso / (this.altura * this.altura);
        let situacao: string;

        if (imc < 18.5) {
            situacao = "Abaixo do peso";
        } else if (imc < 25) {
            situacao = "Peso normal";
        } else if (imc < 30) {
            situacao = "Sobrepeso";
        } else {
            situacao = "Obesidade";
        }

        console.log(`${this.nome} - IMC: ${imc.toFixed(2)} - ${situacao}`);
    }
}

const pessoaIMC1 = new PessoaIMC("Carlos", 70, 1.75);
const pessoaIMC2 = new PessoaIMC("Ana", 55, 1.60);
const pessoaIMC3 = new PessoaIMC("Roberto", 95, 1.80);
console.log('\n=== Exercício 13 - Calculadora de IMC ===');
pessoaIMC1.calcularIMC();
pessoaIMC2.calcularIMC();
pessoaIMC3.calcularIMC();

// ========================================
// Exercício 14 – Cadastro de Filmes
// ========================================
// Crie uma classe chamada Filme.
// Ela deverá possuir:
// • nome
// • gênero
// • duração
// Crie um método chamado assistir(), que mostre:
// Você está assistindo o filme Avatar.
// Crie três filmes diferentes.
class Filme {
    nome: string;
    genero: string;
    duracao: number;

    constructor(nome: string, genero: string, duracao: number) {
        this.nome = nome;
        this.genero = genero;
        this.duracao = duracao;
    }

    assistir(): void {
        console.log(`Você está assistindo o filme ${this.nome}.`);
    }
}

const filme1 = new Filme("Avatar", "Ficção Científica", 162);
const filme2 = new Filme("O Poderoso Chefão", "Drama", 175);
const filme3 = new Filme("Vingadores", "Ação", 143);
console.log('\n=== Exercício 14 - Cadastro de Filmes ===');
filme1.assistir();
filme2.assistir();
filme3.assistir();

// ========================================
// Exercício 15 – Calculadora de Desconto
// ========================================
// Crie uma classe chamada Compra.
// Ela deverá possuir:
// • produto
// • valor
// Crie um método chamado aplicarDesconto(percentual).
// O método deverá calcular o novo valor do produto após aplicar o desconto.
class Compra {
    produto: string;
    valor: number;

    constructor(produto: string, valor: number) {
        this.produto = produto;
        this.valor = valor;
    }

    aplicarDesconto(percentual: number): void {
        const desconto = this.valor * (percentual / 100);
        const novoValor = this.valor - desconto;
        console.log(`Produto: ${this.produto}`);
        console.log(`Valor original: R$${this.valor}`);
        console.log(`Desconto: ${percentual}%`);
        console.log(`Novo valor: R$${novoValor}`);
    }
}

const compra1 = new Compra("Notebook", 3000);
console.log('\n=== Exercício 15 - Calculadora de Desconto ===');
compra1.aplicarDesconto(10);

// ========================================
// Exercício 16 – Elevador
// ========================================
// Crie uma classe chamada Elevador.
// Ela deverá possuir:
// • andarAtual
// Crie os métodos:
// • subir()
// • descer()
// O elevador não poderá subir acima do décimo andar nem descer abaixo do
// térreo.
// Execute algumas ações, exemplo.:
// elevador.subir();
// elevador.subir();
// elevador.subir();
// elevador.descer();
// elevador.descer();
// elevador.descer();
class Elevador {
    andarAtual: number;

    constructor() {
        this.andarAtual = 0;
    }

    subir(): void {
        if (this.andarAtual < 10) {
            this.andarAtual++;
            console.log(`Subindo... Andar atual: ${this.andarAtual}`);
        } else {
            console.log("Não é possível subir acima do décimo andar.");
        }
    }

    descer(): void {
        if (this.andarAtual > 0) {
            this.andarAtual--;
            console.log(`Descendo... Andar atual: ${this.andarAtual}`);
        } else {
            console.log("Não é possível descer abaixo do térreo.");
        }
    }
}

const elevador = new Elevador();
console.log('\n=== Exercício 16 - Elevador ===');
elevador.subir();
elevador.subir();
elevador.subir();
elevador.descer();
elevador.descer();
elevador.descer();

// ========================================
// Exercício 17 – Cronômetro
// ========================================
// Crie uma classe chamada Cronometro.
// Ela deverá possuir:
// • segundos
// Crie um método chamado iniciar().
// Utilize um laço de repetição para mostrar os segundos de 1 até o valor
// informado.
class Cronometro {
    segundos: number;

    constructor(segundos: number) {
        this.segundos = segundos;
    }

    iniciar(): void {
        console.log(`Iniciando cronômetro de ${this.segundos} segundos:`);
        for (let i = 1; i <= this.segundos; i++) {
            console.log(i);
        }
    }
}

const cronometro = new Cronometro(5);
console.log('\n=== Exercício 17 - Cronômetro ===');
cronometro.iniciar();

// ========================================
// Exercício 18 – Caixa Eletrônico
// ========================================
// Crie uma classe chamada CaixaEletronico.
// Ela deverá possuir:
// • saldo
// Crie os métodos:
// • depositar()
// • sacar()
// • consultarSaldo()
// Impeça que o saldo fique negativo.
class CaixaEletronico {
    saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        } else {
            console.log(`Saque de R$${valor} não permitido. Saldo insuficiente: R$${this.saldo}`);
        }
    }

    consultarSaldo(): void {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

const caixa = new CaixaEletronico(1000);
console.log('\n=== Exercício 18 - Caixa Eletrônico ===');
caixa.consultarSaldo();
caixa.depositar(500);
caixa.sacar(200);
caixa.sacar(2000);

// ========================================
// Exercício 19 – Cadastro de Produtos
// ========================================
// Crie uma classe chamada Mercado.
// Ela deverá possuir um atributo chamado produtos.
// Crie um método chamado listarProdutos().
// Utilize um vetor contendo pelo menos cinco produtos e apresente todos
// utilizando um laço de repetição.
class Mercado {
    produtos: string[];

    constructor() {
        this.produtos = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"];
    }

    listarProdutos(): void {
        console.log("Lista de Produtos:");
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`${i + 1}. ${this.produtos[i]}`);
        }
    }
}

const mercado = new Mercado();
console.log('\n=== Exercício 19 - Cadastro de Produtos ===');
mercado.listarProdutos();

// ========================================
// Exercício 20 – Jogo de Adivinhação
// ========================================
// Crie uma classe chamada Jogo.
// Ela deverá possuir:
// • numeroSecreto
// Crie um método chamado jogar(numero).
// Se o número for igual ao número secreto:
// Parabéns! Você acertou.
// Caso contrário:
// Tente novamente.
class Jogo {
    numeroSecreto: number;

    constructor(numeroSecreto: number) {
        this.numeroSecreto = numeroSecreto;
    }

    jogar(numero: number): void {
        if (numero === this.numeroSecreto) {
            console.log("Parabéns! Você acertou.");
        } else {
            console.log("Tente novamente.");
        }
    }
}

const jogo = new Jogo(7);
console.log('\n=== Exercício 20 - Jogo de Adivinhação ===');
jogo.jogar(5);
jogo.jogar(7);

// ========================================
// Exercício 21 – Sistema de Biblioteca ★★
// ========================================
// Crie uma classe chamada Biblioteca.
// Ela deverá possuir:
// • nome
// • quantidadeLivros
// Crie os métodos:
// • emprestarLivro()
// • devolverLivro()
// • mostrarQuantidade()
// Regras:
// • Não permitir empréstimo quando não houver livros.
// • Sempre mostrar a quantidade atual.
class Biblioteca {
    nome: string;
    quantidadeLivros: number;

    constructor(nome: string, quantidadeLivros: number) {
        this.nome = nome;
        this.quantidadeLivros = quantidadeLivros;
    }

    emprestarLivro(): void {
        if (this.quantidadeLivros > 0) {
            this.quantidadeLivros--;
            console.log(`Livro emprestado. Quantidade atual: ${this.quantidadeLivros}`);
        } else {
            console.log("Não é possível emprestar. Não há livros disponíveis.");
        }
    }

    devolverLivro(): void {
        this.quantidadeLivros++;
        console.log(`Livro devolvido. Quantidade atual: ${this.quantidadeLivros}`);
    }

    mostrarQuantidade(): void {
        console.log(`Quantidade de livros na biblioteca ${this.nome}: ${this.quantidadeLivros}`);
    }
}

const biblioteca = new Biblioteca("Biblioteca Central", 5);
console.log('\n=== Exercício 21 - Sistema de Biblioteca ===');
biblioteca.mostrarQuantidade();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro();
biblioteca.emprestarLivro();
biblioteca.devolverLivro();

// ========================================
// Exercício 22 – Estacionamento ★★★
// ========================================
// Crie uma classe chamada Estacionamento.
// Ela deverá possuir:
// • vagasTotais
// • vagasOcupadas
// Crie os métodos:
// • entrarCarro()
// • sairCarro()
// • mostrarStatus()
// Regras:
// • Não permitir entrada quando estiver lotado.
// • Não permitir saída quando não houver veículos.
class Estacionamento {
    vagasTotais: number;
    vagasOcupadas: number;

    constructor(vagasTotais: number) {
        this.vagasTotais = vagasTotais;
        this.vagasOcupadas = 0;
    }

    entrarCarro(): void {
        if (this.vagasOcupadas < this.vagasTotais) {
            this.vagasOcupadas++;
            console.log(`Carro entrou. Vagas ocupadas: ${this.vagasOcupadas}/${this.vagasTotais}`);
        } else {
            console.log("Estacionamento lotado. Não é possível entrar.");
        }
    }

    sairCarro(): void {
        if (this.vagasOcupadas > 0) {
            this.vagasOcupadas--;
            console.log(`Carro saiu. Vagas ocupadas: ${this.vagasOcupadas}/${this.vagasTotais}`);
        } else {
            console.log("Não há veículos no estacionamento.");
        }
    }

    mostrarStatus(): void {
        console.log(`Status: ${this.vagasOcupadas}/${this.vagasTotais} vagas ocupadas`);
    }
}

const estacionamento = new Estacionamento(3);
console.log('\n=== Exercício 22 - Estacionamento ===');
estacionamento.mostrarStatus();
estacionamento.entrarCarro();
estacionamento.entrarCarro();
estacionamento.entrarCarro();
estacionamento.entrarCarro();
estacionamento.sairCarro();
estacionamento.sairCarro();
estacionamento.sairCarro();
estacionamento.sairCarro();

// ========================================
// Exercício 23 – Sistema de Votação ★★★
// ========================================
// Crie uma classe chamada Eleicao.
// Ela deverá possuir:
// • votosCandidato1
// • votosCandidato2
// • votosBrancos
// Crie os métodos:
// • votar()
// • resultado()
// Utilize um laço para simular 20 votos.
// Ao final, mostre:
// • votos de cada candidato
// • votos em branco
// • vencedor da eleição
class Eleicao {
    votosCandidato1: number;
    votosCandidato2: number;
    votosBrancos: number;

    constructor() {
        this.votosCandidato1 = 0;
        this.votosCandidato2 = 0;
        this.votosBrancos = 0;
    }

    votar(opcao: number): void {
        if (opcao === 1) {
            this.votosCandidato1++;
        } else if (opcao === 2) {
            this.votosCandidato2++;
        } else {
            this.votosBrancos++;
        }
    }

    resultado(): void {
        console.log(`Votos Candidato 1: ${this.votosCandidato1}`);
        console.log(`Votos Candidato 2: ${this.votosCandidato2}`);
        console.log(`Votos em Branco: ${this.votosBrancos}`);

        if (this.votosCandidato1 > this.votosCandidato2) {
            console.log("Vencedor: Candidato 1");
        } else if (this.votosCandidato2 > this.votosCandidato1) {
            console.log("Vencedor: Candidato 2");
        } else {
            console.log("Empate!");
        }
    }
}

const eleicao = new Eleicao();
console.log('\n=== Exercício 23 - Sistema de Votação ===');
// Simulando 20 votos
for (let i = 0; i < 20; i++) {
    const voto = Math.floor(Math.random() * 3) + 1; // 1, 2 ou 3
    eleicao.votar(voto);
}
eleicao.resultado();

// ========================================
// Exercício 24 – Controle de Estoque Completo ★★★★
// ========================================
// Crie uma classe chamada Estoque.
// Ela deverá possuir:
// • nomeProduto
// • quantidade
// Crie os métodos:
// • entradaProduto()
// • saidaProduto()
// • consultar()
// Utilize um menu com um laço de repetição para simular várias operações.
// Regras:
// • Nunca permitir quantidade negativa.
// • Mostrar a quantidade atual após cada operação.
class Estoque {
    nomeProduto: string;
    quantidade: number;

    constructor(nomeProduto: string, quantidade: number) {
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
    }

    entradaProduto(qtd: number): void {
        this.quantidade += qtd;
        console.log(`Entrada de ${qtd} unidades. Quantidade atual: ${this.quantidade}`);
    }

    saidaProduto(qtd: number): void {
        if (this.quantidade >= qtd) {
            this.quantidade -= qtd;
            console.log(`Saída de ${qtd} unidades. Quantidade atual: ${this.quantidade}`);
        } else {
            console.log(`Não é possível retirar ${qtd} unidades. Quantidade insuficiente: ${this.quantidade}`);
        }
    }

    consultar(): void {
        console.log(`Produto: ${this.nomeProduto}, Quantidade: ${this.quantidade}`);
    }
}

const estoque = new Estoque("Camiseta", 50);
console.log('\n=== Exercício 24 - Controle de Estoque Completo ===');
estoque.consultar();
estoque.entradaProduto(20);
estoque.saidaProduto(30);
estoque.saidaProduto(50);
estoque.saidaProduto(10);

// ========================================
// Exercício 25 – Sistema de Cadastro de Alunos ★★★★★
// ========================================
// Crie uma classe chamada Escola.
// Ela deverá possuir um vetor contendo objetos da classe Aluno.
// A classe Aluno deverá possuir:
// • nome
// • nota1
// • nota2
// Crie os métodos:
// • adicionarAluno()
// • listarAlunos()
// • calcularMedia()
// • mostrarAprovados()
// • mostrarReprovados()
// Utilize um laço de repetição para percorrer todos os alunos cadastrados.
// Ao final, apresente:
// • Nome de cada aluno
// • Média
// • Situação (Aprovado/Reprovado)
class AlunoEscola {
    nome: string;
    nota1: number;
    nota2: number;

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    getSituacao(): string {
        return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado";
    }
}

class Escola {
    alunos: AlunoEscola[];

    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno: AlunoEscola): void {
        this.alunos.push(aluno);
        console.log(`Aluno ${aluno.nome} adicionado.`);
    }

    listarAlunos(): void {
        console.log("\nLista de Alunos:");
        for (const aluno of this.alunos) {
            console.log(`Nome: ${aluno.nome}, Média: ${aluno.calcularMedia().toFixed(2)}, Situação: ${aluno.getSituacao()}`);
        }
    }

    mostrarAprovados(): void {
        console.log("\nAlunos Aprovados:");
        for (const aluno of this.alunos) {
            if (aluno.getSituacao() === "Aprovado") {
                console.log(`${aluno.nome} - Média: ${aluno.calcularMedia().toFixed(2)}`);
            }
        }
    }

    mostrarReprovados(): void {
        console.log("\nAlunos Reprovados:");
        for (const aluno of this.alunos) {
            if (aluno.getSituacao() === "Reprovado") {
                console.log(`${aluno.nome} - Média: ${aluno.calcularMedia().toFixed(2)}`);
            }
        }
    }
}

const escola = new Escola();
console.log('\n=== Exercício 25 - Sistema de Cadastro de Alunos ===');
escola.adicionarAluno(new AlunoEscola("João", 8, 7));
escola.adicionarAluno(new AlunoEscola("Maria", 6, 5));
escola.adicionarAluno(new AlunoEscola("Pedro", 9, 8));
escola.adicionarAluno(new AlunoEscola("Ana", 4, 5));
escola.adicionarAluno(new AlunoEscola("Carlos", 7, 7));
escola.listarAlunos();
escola.mostrarAprovados();
escola.mostrarReprovados();