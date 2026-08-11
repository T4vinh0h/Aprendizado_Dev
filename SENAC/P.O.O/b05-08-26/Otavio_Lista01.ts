// ========================================
// Lista de Exercícios 01 – Typescript
// POO – Pilar da Abstração
// ========================================

// ========================================
// Exercício 1 – Criando sua primeira Classe
// ========================================
// Crie uma classe chamada Pessoa.
// Ela deve possuir:
// • atributo nome
// • método apresentar(), que mostra no console:
// Ex: Olá! Meu nome é João.
// Depois crie um objeto da classe e execute o método.
class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    apresentar(): void {
        console.log(`Olá! Meu nome é ${this.nome}.`);
    }
}

const pessoa1 = new Pessoa("João");
console.log('=== Exercício 1 - Criando sua primeira Classe ===');
pessoa1.apresentar();

// ========================================
// Exercício 2 – Trabalhando com dois objetos
// ========================================
// Crie uma classe chamada Aluno.
// Ela deverá possuir:
// • nome
// • idade
// Depois crie dois objetos diferentes.
// Mostre as informações de ambos utilizando um método chamado mostrarDados().
class Aluno {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDados(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

const aluno1 = new Aluno("Maria", 20);
const aluno2 = new Aluno("Pedro", 22);
console.log('\n=== Exercício 2 - Trabalhando com dois objetos ===');
aluno1.mostrarDados();
aluno2.mostrarDados();

// ========================================
// Exercício 3 – Utilizando Construtor
// ========================================
// Crie uma classe Livro.
// O construtor deve receber:
// • título
// • autor
// Depois mostre as informações utilizando um método.
class Livro {
    titulo: string;
    autor: string;
    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }
    mostrarInformacoes(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
console.log('\n=== Exercício 3 - Utilizando Construtor ===');
livro1.mostrarInformacoes();

// ========================================
// Exercício 4 – Calculando com Métodos
// ========================================
// Crie uma classe Calculadora.
// Ela deve possuir um método chamado somar(numero1, numero2).
// Mostre o resultado da soma.
class Calculadora {
    somar(numero1: number, numero2: number): number {
        return numero1 + numero2;
    }
}

const calc = new Calculadora();
const resultado = calc.somar(5, 3);
console.log('\n=== Exercício 4 - Calculando com Métodos ===');
console.log(`Resultado da soma: ${resultado}`);

// ========================================
// Exercício 5 – Utilizando Condição
// ========================================
// Crie uma classe Produto.
// Ela deve possuir:
// • nome
// • quantidade
// Crie um método chamado verificarEstoque().
// Se a quantidade for maior que zero, mostrar:
// Produto disponível
// Caso contrário:
// Produto indisponível
class Produto {
    nome: string;
    quantidade: number;
    constructor(nome: string, quantidade: number) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
    verificarEstoque(): void {
        if (this.quantidade > 0) {
            console.log("Produto disponível");
        } else {
            console.log("Produto indisponível");
        }
    }
}

const produto1 = new Produto("Notebook", 5);
const produto2 = new Produto("Celular", 0);
console.log('\n=== Exercício 5 - Utilizando Condição ===');
produto1.verificarEstoque();
produto2.verificarEstoque();

// ========================================
// Exercício 6 – Utilizando Laço de Repetição
// ========================================
// Crie uma classe chamada Contador.
// Faça um método chamado contar().
// Ele deverá mostrar os números de 1 até 10 utilizando for.
class Contador {
    contar(): void {
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }
}

const contador = new Contador();
console.log('\n=== Exercício 6 - Utilizando Laço de Repetição ===');
contador.contar();

// ========================================
// Exercício 7 – Média do Aluno
// ========================================
// Crie uma classe chamada Boletim.
// Ela deverá receber:
// • nome
// • nota1
// • nota2
// Crie um método para calcular a média.
// Se a média for maior ou igual a 7:
// Aprovado
// Caso contrário:
// Reprovado
class Boletim {
    nome: string;
    nota1: number;
    nota2: number;
    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    calcularMedia(): void {
        const media = (this.nota1 + this.nota2) / 2;
        if (media >= 7) {
            console.log(`${this.nome} - Aprovado (Média: ${media})`);
        } else {
            console.log(`${this.nome} - Reprovado (Média: ${media})`);
        }
    }
}

const boletim1 = new Boletim("Ana", 8, 7);
const boletim2 = new Boletim("Carlos", 5, 6);
console.log('\n=== Exercício 7 - Média do Aluno ===');
boletim1.calcularMedia();
boletim2.calcularMedia();

// ========================================
// Exercício 8 – Tabuada
// ========================================
// Crie uma classe chamada Tabuada.
// Ela deve receber um número.
// Crie um método que mostre a tabuada utilizando um laço for.
class Tabuada {
    numero: number;
    constructor(numero: number) {
        this.numero = numero;
    }
    mostrarTabuada(): void {
        console.log(`Tabuada do ${this.numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${this.numero} x ${i} = ${this.numero * i}`);
        }
    }
}

const tabuada = new Tabuada(7);
console.log('\n=== Exercício 8 - Tabuada ===');
tabuada.mostrarTabuada();

// ========================================
// Exercício 9 – Cadastro de Carros
// ========================================
// Crie uma classe chamada Carro.
// Ela deve possuir:
// • marca
// • modelo
// • ano
// Crie três objetos diferentes.
// Mostre as informações utilizando um método.
class Carro {
    marca: string;
    modelo: string;
    ano: number;
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    mostrarInformacoes(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2020);
const carro2 = new Carro("Honda", "Civic", 2021);
const carro3 = new Carro("Chevrolet", "Onix", 2022);
console.log('\n=== Exercício 9 - Cadastro de Carros ===');
carro1.mostrarInformacoes();
carro2.mostrarInformacoes();
carro3.mostrarInformacoes();

// ========================================
// Exercício 10 – Sistema de Conta Bancária
// ========================================
// Crie uma classe chamada ContaBancaria.
// Ela deve possuir:
// • titular
// • saldo
// Crie dois métodos:
// • depositar(valor)
// • sacar(valor)
// No saque, só permitir caso exista saldo suficiente.
class ContaBancaria {
    titular: string;
    saldo: number;
    constructor(titular: string, saldo: number) {
        this.titular = titular;
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
}

const conta1 = new ContaBancaria("João Silva", 1000);
console.log('\n=== Exercício 10 - Sistema de Conta Bancária ===');
conta1.depositar(500);
conta1.sacar(200);
conta1.sacar(2000);


