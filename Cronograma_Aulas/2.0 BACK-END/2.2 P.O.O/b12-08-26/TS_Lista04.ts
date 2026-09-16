// ============================================
// LISTA DE EXERCÍCIOS 04 - POO (ABSTRAÇÃO + ENCAPSULAMENTO) EM TYPESCRIPT
// ============================================

// ============================================
// NÍVEL 1: FUNDAMENTOS DE ABSTRAÇÃO E ENCAPSULAMENTO BÁSICO
// ============================================

// Exercício 1: Modelando uma Lâmpada
// Crie uma classe Lampada.
// Atributos: ligada (boolean, privado).
// Métodos:
// - ligar(): altera ligada para true.
// - desligar(): altera ligada para false.
// - isLigada(): método getter público que retorna o estado atual da lâmpada.
class Lampada {
    private ligada: boolean;

    constructor() {
        this.ligada = false;
    }

    ligar(): void {
        this.ligada = true;
    }

    desligar(): void {
        this.ligada = false;
    }

    isLigada(): boolean {
        return this.ligada;
    }
}

// Teste Exercício 1
console.log("Exercicio 1 - Lampada");
const lampada = new Lampada();
console.log("Ligada:", lampada.isLigada());
lampada.ligar();
console.log("Ligada:", lampada.isLigada());
lampada.desligar();
console.log("Ligada:", lampada.isLigada());
console.log();

// Exercício 2: Contador Simples
// Crie uma classe Contador.
// Atributos: valor (number, privado, iniciado em 0).
// Métodos:
// - incrementar(): adiciona +1 ao valor.
// - decrementar(): subtrai -1 do valor (não deve permitir que o valor fique menor que 0).
// - getValor(): retorna o valor atual.
class Contador04 {
    private valor: number;

    constructor() {
        this.valor = 0;
    }

    incrementar(): void {
        this.valor++;
    }

    decrementar(): void {
        if (this.valor > 0) {
            this.valor--;
        }
    }

    getValor(): number {
        return this.valor;
    }
}

// Teste Exercício 2
console.log("Exercicio 2 - Contador");
const contador04 = new Contador04();
contador04.incrementar();
contador04.incrementar();
console.log("Valor:", contador04.getValor());
contador04.decrementar();
console.log("Valor:", contador04.getValor());
contador04.decrementar();
contador04.decrementar();
console.log("Valor:", contador04.getValor());
console.log();

// Exercício 3: Encapsulamento de Produto
// Crie uma classe Produto.
// Atributos: nome (string, público), preco (number, privado).
// Getters e Setters:
// - Crie o get preco(): number.
// - Crie o set preco(novoPreco: number): o setter deve garantir que o preço não seja igual ou inferior a 0.
//   Caso seja, exiba uma mensagem no console e não altere o valor.
class ProdutoLoja04 {
    public nome: string;
    private _preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this._preco = preco;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(novoPreco: number) {
        if (novoPreco <= 0) {
            console.log("Preco deve ser maior que zero. Valor nao alterado.");
            return;
        }
        this._preco = novoPreco;
    }
}

// Teste Exercício 3
console.log("Exercicio 3 - Produto");
const produto = new ProdutoLoja04("Notebook", 2000);
console.log(produto.nome + ": R$" + produto.preco);
produto.preco = 2500;
console.log(produto.nome + ": R$" + produto.preco);
produto.preco = -100;
console.log(produto.nome + ": R$" + produto.preco);
console.log();

// Exercício 4: Retângulo e Área (Atributos Leitura/Escrita)
// Crie uma classe Retangulo.
// Atributos: largura (number, privado) e altura (number, privado).
// Construtor: deve receber largura e altura iniciais.
// Getters e Setters: crie para ambos os atributos garantindo que não sejam valores negativos ou zero.
// Métodos: calcularArea() (retorna largura * altura) e calcularPerimetro() (retorna 2 * (largura + altura)).
class Retangulo {
    private _largura: number;
    private _altura: number;

    constructor(largura: number, altura: number) {
        this._largura = largura;
        this._altura = altura;
    }

    get largura(): number {
        return this._largura;
    }

    set largura(valor: number) {
        if (valor <= 0) {
            console.log("Largura deve ser maior que zero.");
            return;
        }
        this._largura = valor;
    }

    get altura(): number {
        return this._altura;
    }

    set altura(valor: number) {
        if (valor <= 0) {
            console.log("Altura deve ser maior que zero.");
            return;
        }
        this._altura = valor;
    }

    calcularArea(): number {
        return this._largura * this._altura;
    }

    calcularPerimetro(): number {
        return 2 * (this._largura + this._altura);
    }
}

// Teste Exercício 4
console.log("Exercicio 4 - Retangulo");
const retangulo = new Retangulo(5, 3);
console.log("Area:", retangulo.calcularArea());
console.log("Perimetro:", retangulo.calcularPerimetro());
console.log();

// Exercício 5: Cartão de Aluno (Uso do readonly)
// Crie uma classe CartaoEstudante.
// Atributos: matricula (string, pública e readonly), nome (string, privada), saldoAlimentacao (number, privada).
// Regras:
// - A matrícula é definida no construtor e nunca mais alterada.
// - Implemente getter e setter para nome.
// - Crie um método adicionarSaldo(valor: number) que impede acréscimo de valores zerados ou negativos.
class CartaoEstudante {
    public readonly matricula: string;
    private _nome: string;
    private saldoAlimentacao: number;

    constructor(matricula: string, nome: string, saldoInicial: number) {
        this.matricula = matricula;
        this._nome = nome;
        this.saldoAlimentacao = saldoInicial;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    adicionarSaldo(valor: number): void {
        if (valor <= 0) {
            console.log("Valor deve ser positivo.");
            return;
        }
        this.saldoAlimentacao += valor;
        console.log("Saldo adicionado: R$" + valor + ". Novo saldo: R$" + this.saldoAlimentacao);
    }

    getSaldo(): number {
        return this.saldoAlimentacao;
    }
}

// Teste Exercício 5
console.log("Exercicio 5 - Cartao Estudante");
const cartao = new CartaoEstudante("2024001", "Joao Silva", 100);
console.log("Matricula:", cartao.matricula, "Nome:", cartao.nome);
cartao.adicionarSaldo(50);
cartao.adicionarSaldo(-10);
console.log();

// Exercício 6: Termostato e Conversão de Temperatura
// Crie uma classe Termostato.
// Atributos: temperaturaCelsius (number, privado).
// Getters e Setters: crie getter/setter para temperatura que converte automaticamente entre Celsius e Fahrenheit.
// Métodos: getTemperaturaFahrenheit(): number (retorna a temperatura em Fahrenheit).
class Termostato {
    private _temperaturaCelsius: number;

    constructor(temperatura: number) {
        this._temperaturaCelsius = temperatura;
    }

    get temperatura(): number {
        return this._temperaturaCelsius;
    }

    set temperatura(valor: number) {
        if (valor < -50 || valor > 100) {
            console.log("Temperatura deve estar entre -50C e 100C.");
            return;
        }
        this._temperaturaCelsius = valor;
    }

    getTemperaturaFahrenheit(): number {
        return this._temperaturaCelsius * 1.8 + 32;
    }
}

// Teste Exercício 6
console.log("Exercicio 6 - Termostato");
const termostato = new Termostato(25);
console.log("Celsius:", termostato.temperatura);
console.log("Fahrenheit:", termostato.getTemperaturaFahrenheit().toFixed(1));
termostato.temperatura = 30;
console.log("Nova temperatura:", termostato.temperatura);
console.log();

// ============================================
// NÍVEL 2: VALIDAÇÕES, MÉTODOS INTERNOS E TRATAMENTO DE ERROS
// ============================================

// Exercício 7: Conta Bancária com throw new Error
// Crie uma classe ContaBancaria.
// Atributos: titular (string, público), saldo (number, privado).
// Métodos:
// - depositar(valor): se valor <= 0, lance throw new Error("Valor de depósito deve ser positivo").
// - sacar(valor): se valor <= 0, lance throw new Error("Valor de saque deve ser positivo").
//   Se valor > saldo, lance throw new Error("Saldo insuficiente").
class ContaBancaria04 {
    public titular: string;
    private saldo: number;

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    getSaldo(): number {
        return this.saldo;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("Valor de depósito deve ser positivo");
        }
        this.saldo += valor;
        console.log("Deposito de R$" + valor + " realizado. Saldo: R$" + this.saldo);
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("Valor de saque deve ser positivo");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
        console.log("Saque de R$" + valor + " realizado. Saldo: R$" + this.saldo);
    }
}

// Teste Exercício 7
console.log("Exercicio 7 - Conta Bancaria");
const conta = new ContaBancaria04("Maria Santos", 1000);
conta.depositar(500);
conta.sacar(200);
console.log();

// Exercício 8: Teste de Saque com try...catch
// Crie um teste que tenta sacar um valor maior que o saldo.
// Utilize try...catch para capturar e exibir a mensagem de erro.
console.log("Exercicio 8 - Teste Saque");
try {
    conta.sacar(2000);
} catch (error) {
    console.log("Erro capturado:", (error as Error).message);
}
console.log();

// Exercício 9: Validador de Senha Segura
// Crie uma classe Usuario.
// Atributos: email (string, público), senha (string, privado).
// Getters e Setters: crie setter para senha que valida se tem pelo menos 8 caracteres.
//   Se não tiver, lance throw new Error("Senha deve ter no mínimo 8 caracteres").
// Métodos: autenticar(senhaDigitada): boolean.
class Usuario04 {
    public email: string;
    private _senha: string;

    constructor(email: string, senha: string) {
        this.email = email;
        this._senha = senha;
    }

    get senha(): string {
        return this._senha;
    }

    set senha(novaSenha: string) {
        if (novaSenha.length < 8) {
            throw new Error("A senha deve ter no mínimo 8 caracteres");
        }
        this._senha = novaSenha;
    }

    autenticar(senhaDigitada: string): boolean {
        return this._senha === senhaDigitada;
    }
}

// Teste Exercício 9
console.log("Exercicio 9 - Validador Senha");
const usuario = new Usuario04("user@email.com", "senha123");
console.log("Autenticacao correta:", usuario.autenticar("senha123"));
console.log("Autenticacao incorreta:", usuario.autenticar("senha456"));
try {
    usuario.senha = "curta";
} catch (error) {
    console.log("Erro:", (error as Error).message);
}
console.log();

// Exercício 10: Cofre Digital com Tentativas
// Crie uma classe Cofre.
// Atributos: segredo (string, privado), aberto (boolean, privado), tentativasFalhas (number, privado), bloqueado (boolean, privado).
// Métodos:
// - abrir(segredoDigitado): se bloqueado, lance throw new Error("Cofre bloqueado após 3 tentativas falhas").
//   Se acertar, abre o cofre. Se errar, incrementa tentativasFalhas. Após 3 erros, bloqueia.
// - isAberto(): retorna estado do cofre.
class Cofre {
    private segredo: string;
    private aberto: boolean;
    private tentativasFalhas: number;
    private bloqueado: boolean;

    constructor(segredo: string) {
        this.segredo = segredo;
        this.aberto = false;
        this.tentativasFalhas = 0;
        this.bloqueado = false;
    }

    abrir(segredoDigitado: string): void {
        if (this.bloqueado) {
            throw new Error("Cofre bloqueado após 3 tentativas falhas");
        }

        if (segredoDigitado === this.segredo) {
            this.aberto = true;
            this.tentativasFalhas = 0;
            console.log("Cofre aberto com sucesso!");
        } else {
            this.tentativasFalhas++;
            console.log("Senha incorreta. Tentativas:" + this.tentativasFalhas + "/3");
            if (this.tentativasFalhas >= 3) {
                this.bloqueado = true;
                throw new Error("Cofre bloqueado após 3 tentativas falhas");
            }
        }
    }

    isAberto(): boolean {
        return this.aberto;
    }
}

// Teste Exercício 10
console.log("Exercicio 10 - Cofre Digital");
const cofre = new Cofre("1234");
try {
    cofre.abrir("0000");
    cofre.abrir("1111");
    cofre.abrir("2222");
} catch (error) {
    console.log("Erro:", (error as Error).message);
}
console.log();

// Exercício 11: Controle de Velocidade de Veículo
// Crie uma classe Carro.
// Atributos: modelo (string, público), velocidadeAtual (number, privado), velocidadeMaxima (number, privado).
// Métodos:
// - acelerar(incremento): aumenta velocidade, mas não ultrapassa velocidadeMaxima.
// - frear(decremento): diminui velocidade, mas não fica menor que 0.
// - getVelocidade(): retorna velocidade atual.
class Carro04 {
    public modelo: string;
    private velocidadeAtual: number;
    private velocidadeMaxima: number;

    constructor(modelo: string, velocidadeMaxima: number) {
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }

    acelerar(incremento: number): void {
        const novaVelocidade = this.velocidadeAtual + incremento;
        if (novaVelocidade > this.velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeMaxima;
            console.log("Velocidade maxima atingida:" + this.velocidadeMaxima + " km/h");
        } else {
            this.velocidadeAtual = novaVelocidade;
        }
    }

    frear(decremento: number): void {
        const novaVelocidade = this.velocidadeAtual - decremento;
        if (novaVelocidade < 0) {
            this.velocidadeAtual = 0;
            console.log("Veiculo parado");
        } else {
            this.velocidadeAtual = novaVelocidade;
        }
    }

    getVelocidade(): number {
        return this.velocidadeAtual;
    }
}

// Teste Exercício 11
console.log("Exercicio 11 - Controle Velocidade");
const carro = new Carro04("Fusca", 120);
carro.acelerar(50);
console.log("Velocidade:", carro.getVelocidade() + " km/h");
carro.acelerar(100);
console.log("Velocidade:", carro.getVelocidade() + " km/h");
carro.frear(30);
console.log("Velocidade:", carro.getVelocidade() + " km/h");
console.log();

// Exercício 12: Calculadora de IMC
// Crie uma classe Pessoa.
// Atributos: nome (string, público), peso (number, privado), altura (number, privado), imc (number, privado).
// Métodos:
// - calcularIMC(): método privado que retorna peso / (altura * altura).
// - Getters e Setters para peso e altura que recalculam o IMC quando alterados.
// - getIMC(): retorna o IMC calculado.
// - getClassificacaoIMC(): retorna "Abaixo do peso", "Peso normal", "Sobrepeso" ou "Obesidade".
class Pessoa04 {
    public nome: string;
    private _peso: number;
    private _altura: number;
    private _imc: number;

    constructor(nome: string, peso: number, altura: number) {
        this.nome = nome;
        this._peso = peso;
        this._altura = altura;
        this._imc = this.calcularIMC();
    }

    private calcularIMC(): number {
        return this._peso / (this._altura * this._altura);
    }

    get peso(): number {
        return this._peso;
    }

    set peso(valor: number) {
        if (valor <= 0) {
            console.log("Peso deve ser maior que zero");
            return;
        }
        this._peso = valor;
        this._imc = this.calcularIMC();
    }

    get altura(): number {
        return this._altura;
    }

    set altura(valor: number) {
        if (valor <= 0) {
            console.log("Altura deve ser maior que zero");
            return;
        }
        this._altura = valor;
        this._imc = this.calcularIMC();
    }

    getIMC(): number {
        return this._imc;
    }

    getClassificacaoIMC(): string {
        if (this._imc < 18.5) return "Abaixo do peso";
        if (this._imc < 25) return "Peso normal";
        if (this._imc < 30) return "Sobrepeso";
        return "Obesidade";
    }
}

// Teste Exercício 12
console.log("Exercicio 12 - Calculadora IMC");
const pessoa = new Pessoa04("Joao", 70, 1.75);
console.log(pessoa.nome + " - IMC:" + pessoa.getIMC().toFixed(2) + " - " + pessoa.getClassificacaoIMC());
console.log();

// ============================================
// NÍVEL 3: MANIPULAÇÃO DE COLEÇÕES E ESTRUTURAS DE REPETIÇÃO
// ============================================

// Exercício 13: Playlist de Músicas
// Crie uma classe Playlist.
// Atributos: nome (string, público), musicas (array de string, privado).
// Métodos:
// - adicionarMusica(nomeMusica): adiciona se não existir na playlist.
// - removerMusica(nomeMusica): remove se existir.
// - listarMusicas(): mostra todas as músicas.
class Playlist {
    public nome: string;
    private musicas: string[];

    constructor(nome: string) {
        this.nome = nome;
        this.musicas = [];
    }

    adicionarMusica(nomeMusica: string): void {
        if (this.musicas.includes(nomeMusica)) {
            console.log("Musica " + nomeMusica + " ja esta na playlist");
            return;
        }
        this.musicas.push(nomeMusica);
        console.log("Musica " + nomeMusica + " adicionada");
    }

    removerMusica(nomeMusica: string): void {
        const index = this.musicas.indexOf(nomeMusica);
        if (index > -1) {
            this.musicas.splice(index, 1);
            console.log("Musica " + nomeMusica + " removida");
        } else {
            console.log("Musica " + nomeMusica + " nao encontrada");
        }
    }

    listarMusicas(): void {
        console.log("Playlist: " + this.nome);
        for (const musica of this.musicas) {
            console.log("  - " + musica);
        }
    }
}

// Teste Exercício 13
console.log("Exercicio 13 - Playlist");
const playlist = new Playlist("Minhas Favoritas");
playlist.adicionarMusica("Bohemian Rhapsody");
playlist.adicionarMusica("Stairway to Heaven");
playlist.adicionarMusica("Bohemian Rhapsody");
playlist.listarMusicas();
playlist.removerMusica("Stairway to Heaven");
playlist.listarMusicas();
console.log();

// Exercício 14: Carrinho de Compras
// Crie uma classe ItemCarrinho com atributos nome e preco.
// Crie uma classe CarrinhoDeCompras.
// Atributos: itens (array de ItemCarrinho, privado).
// Métodos:
// - adicionarItem(item): adiciona ao carrinho.
// - calcularTotal(): usa reduce para somar os preços.
// - filtrarItensAcimaDe(valor): usa filter para retornar itens acima do valor.
class ItemCarrinho {
    constructor(public nome: string, public preco: number) {}
}

class CarrinhoDeCompras {
    private itens: ItemCarrinho[];

    constructor() {
        this.itens = [];
    }

    adicionarItem(item: ItemCarrinho): void {
        this.itens.push(item);
    }

    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }

    filtrarItensAcimaDe(valorMinimo: number): ItemCarrinho[] {
        return this.itens.filter(item => item.preco > valorMinimo);
    }
}

// Teste Exercício 14
console.log("Exercicio 14 - Carrinho de Compras");
const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem(new ItemCarrinho("Notebook", 2000));
carrinho.adicionarItem(new ItemCarrinho("Mouse", 50));
carrinho.adicionarItem(new ItemCarrinho("Teclado", 150));
console.log("Total: R$" + carrinho.calcularTotal());
const itensCaros = carrinho.filtrarItensAcimaDe(100);
console.log("Itens acima de R$ 100:");
itensCaros.forEach(item => console.log("  - " + item.nome + ": R$" + item.preco));
console.log();

// Exercício 15: Estoque de Loja
// Crie uma interface ProdutoEstoque com id, nome e quantidade.
// Crie uma classe Estoque.
// Atributos: produtos (array de ProdutoEstoque, privado).
// Métodos:
// - adicionarProduto(id, nome, qtd): adiciona se ID não existir.
// - atualizarQuantidade(id, novaQtd): atualiza se produto existir. Se novaQtd < 0, lance throw new Error.
interface ProdutoEstoque {
    id: number;
    nome: string;
    quantidade: number;
}

class Estoque04 {
    private produtos: ProdutoEstoque[];

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(id: number, nome: string, qtd: number): void {
        if (this.produtos.some(p => p.id === id)) {
            console.log("Produto com ID " + id + " ja existe");
            return;
        }
        this.produtos.push({ id, nome, quantidade: qtd });
        console.log("Produto " + nome + " adicionado");
    }

    atualizarQuantidade(id: number, novaQtd: number): void {
        const produto = this.produtos.find(p => p.id === id);
        if (!produto) {
            console.log("Produto com ID " + id + " nao encontrado");
            return;
        }
        if (novaQtd < 0) {
            throw new Error("Quantidade não pode ser negativa");
        }
        produto.quantidade = novaQtd;
        console.log("Estoque de " + produto.nome + " atualizado para " + novaQtd);
    }
}

// Teste Exercício 15
console.log("Exercicio 15 - Estoque");
const estoque04 = new Estoque04();
estoque04.adicionarProduto(1, "Notebook", 10);
estoque04.adicionarProduto(2, "Mouse", 50);
estoque04.atualizarQuantidade(1, 15);
try {
    estoque04.atualizarQuantidade(2, -5);
} catch (error) {
    console.log("Erro:", (error as Error).message);
}
console.log();

// Exercício 16: Menu Interativo com do...while
// Crie uma classe FilaAtendimento.
// Atributos: clientes (array de string, privado).
// Métodos:
// - entrarNaFila(nome): adiciona cliente.
// - atenderProximo(): remove e retorna o primeiro da fila.
// Use do...while para simular um menu interativo.
class FilaAtendimento {
    private clientes: string[];

    constructor() {
        this.clientes = [];
    }

    entrarNaFila(nome: string): void {
        this.clientes.push(nome);
        console.log(`${nome} entrou na fila`);
    }

    atenderProximo(): void {
        if (this.clientes.length === 0) {
            console.log("Fila vazia");
            return;
        }
        const atendido = this.clientes.shift();
        console.log(atendido + " foi atendido");
    }
}

// Teste Exercício 16
console.log("Exercicio 16 - Menu Interativo");
const fila = new FilaAtendimento();
fila.entrarNaFila("Cliente 1");
fila.entrarNaFila("Cliente 2");
fila.atenderProximo();
fila.atenderProximo();
console.log();

// Exercício 17: Boletim Escolar
// Crie uma classe Boletim.
// Atributos: notas (array de number, privado).
// Métodos:
// - adicionarNota(nota): se nota < 0 ou > 10, lance throw new Error("Nota deve estar entre 0 e 10").
// - calcularMedia(): retorna a média das notas.
// - isAprovado(): retorna true se média >= 7.0.
class Boletim04 {
    private notas: number[];

    constructor() {
        this.notas = [];
    }

    adicionarNota(nota: number): void {
        if (nota < 0 || nota > 10) {
            throw new Error("Nota deve estar entre 0 e 10");
        }
        this.notas.push(nota);
    }

    calcularMedia(): number {
        if (this.notas.length === 0) return 0;
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }

    isAprovado(): boolean {
        return this.calcularMedia() >= 7.0;
    }
}

// Teste Exercício 17
console.log("Exercicio 17 - Boletim");
const boletim = new Boletim04();
try {
    boletim.adicionarNota(8);
    boletim.adicionarNota(7);
    boletim.adicionarNota(9);
    boletim.adicionarNota(11);
} catch (error) {
    console.log("Erro:", (error as Error).message);
}
console.log("Media:", boletim.calcularMedia().toFixed(2));
console.log("Aprovado:", boletim.isAprovado());
console.log();

// Exercício 18: Gestão de Biblioteca
// Crie uma classe Livro com titulo, autor e disponivel (boolean).
// Crie uma classe Biblioteca.
// Atributos: acervo (array de Livro, privado).
// Métodos:
// - cadastrarLivro(livro): adiciona ao acervo.
// - emprestarLivro(titulo): se não encontrado ou indisponível, lance throw new Error.
// - devolverLivro(titulo): marca como disponível.
class Livro04 {
    constructor(
        public titulo: string,
        public autor: string,
        public disponivel: boolean = true
    ) {}
}

class Biblioteca04 {
    private acervo: Livro04[];

    constructor() {
        this.acervo = [];
    }

    cadastrarLivro(livro: Livro04): void {
        this.acervo.push(livro);
        console.log("Livro " + livro.titulo + " cadastrado");
    }

    emprestarLivro(titulo: string): void {
        const livro = this.acervo.find(l => l.titulo === titulo);
        if (!livro) {
            throw new Error("Livro " + titulo + " nao encontrado");
        }
        if (!livro.disponivel) {
            throw new Error("Livro " + titulo + " nao esta disponivel");
        }
        livro.disponivel = false;
        console.log("Livro " + titulo + " emprestado");
    }

    devolverLivro(titulo: string): void {
        const livro = this.acervo.find(l => l.titulo === titulo);
        if (!livro) {
            throw new Error("Livro " + titulo + " nao encontrado");
        }
        livro.disponivel = true;
        console.log("Livro " + titulo + " devolvido");
    }
}

// Teste Exercício 18
console.log("Exercicio 18 - Biblioteca");
const biblioteca04 = new Biblioteca04();
biblioteca04.cadastrarLivro(new Livro04("Dom Casmurro", "Machado de Assis"));
biblioteca04.cadastrarLivro(new Livro04("O Pequeno Principe", "Saint-Exupery"));
try {
    biblioteca04.emprestarLivro("Dom Casmurro");
    biblioteca04.emprestarLivro("Dom Casmurro");
} catch (error) {
    console.log("Erro:", (error as Error).message);
}
biblioteca04.devolverLivro("Dom Casmurro");
console.log();

// ============================================
// NÍVEL 4: CASOS PRÁTICOS COMPLEXOS, MÚLTIPLAS CLASSES E PROJETOS
// ============================================

// Exercício 19: Sistema de Folha de Pagamento
// Crie uma classe Funcionario.
// Atributos: nome (string, privado), salarioBase (number, privado), descontos (number, privado).
// Métodos:
// - Getters e Setters para salarioBase e descontos com validação (não podem ser negativos).
// - getSalarioLiquido(): retorna salarioBase - descontos.
// Crie uma classe FolhaPagamento.
// Atributos: funcionarios (array de Funcionario, privado).
// Métodos: adicionarFuncionario(func) e calcularCustoTotal().
class Funcionario04 {
    private _nome: string;
    private _salarioBase: number;
    private _descontos: number;

    constructor(nome: string, salarioBase: number, descontos: number) {
        this._nome = nome;
        this._salarioBase = salarioBase;
        this._descontos = descontos;
    }

    get nome(): string {
        return this._nome;
    }

    get salarioBase(): number {
        return this._salarioBase;
    }

    set salarioBase(valor: number) {
        if (valor < 0) {
            console.log("Salario nao pode ser negativo");
            return;
        }
        this._salarioBase = valor;
    }

    get descontos(): number {
        return this._descontos;
    }

    set descontos(valor: number) {
        if (valor < 0) {
            console.log("Descontos nao podem ser negativos");
            return;
        }
        this._descontos = valor;
    }

    getSalarioLiquido(): number {
        return this._salarioBase - this._descontos;
    }
}

class FolhaPagamento {
    private funcionarios: Funcionario04[];

    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario: Funcionario04): void {
        this.funcionarios.push(funcionario);
    }

    calcularCustoTotal(): number {
        let total = 0;
        for (const func of this.funcionarios) {
            total += func.getSalarioLiquido();
        }
        return total;
    }
}

// Teste Exercício 19
console.log("Exercicio 19 - Folha de Pagamento");
const folha = new FolhaPagamento();
folha.adicionarFuncionario(new Funcionario04("Ana", 3000, 300));
folha.adicionarFuncionario(new Funcionario04("Carlos", 4000, 400));
console.log("Custo total: R$" + folha.calcularCustoTotal().toFixed(2));
console.log();

// Exercício 20: Gerenciador de Tarefas
// Crie uma classe Tarefa com id, descricao e concluida (boolean).
// Crie uma classe GerenciadorTarefas.
// Atributos: tarefas (array de Tarefa, privado), proximoId (number, privado).
// Métodos:
// - adicionarTarefa(descricao): cria nova tarefa com ID auto-incrementado.
// - concluirTarefa(id): marca tarefa como concluída.
// - listarPendentes(): retorna tarefas não concluídas usando filter.
class Tarefa {
    constructor(
        public id: number,
        public descricao: string,
        public concluida: boolean = false
    ) {}
}

class GerenciadorTarefas {
    private tarefas: Tarefa[];
    private proximoId: number;

    constructor() {
        this.tarefas = [];
        this.proximoId = 1;
    }

    adicionarTarefa(descricao: string): void {
        this.tarefas.push(new Tarefa(this.proximoId++, descricao));
        console.log("Tarefa " + descricao + " adicionada");
    }

    concluirTarefa(id: number): void {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.concluida = true;
            console.log("Tarefa " + id + " concluida");
        }
    }

    listarPendentes(): Tarefa[] {
        return this.tarefas.filter(t => !t.concluida);
    }
}

// Teste Exercício 20
console.log("Exercicio 20 - Gerenciador de Tarefas");
const gerenciador = new GerenciadorTarefas();
gerenciador.adicionarTarefa("Estudar TypeScript");
gerenciador.adicionarTarefa("Fazer exercicios");
gerenciador.concluirTarefa(1);
console.log("Tarefas pendentes:");
gerenciador.listarPendentes().forEach(t => console.log("  - " + t.descricao));
console.log();

// Exercício 21: Sistema de Cofre Multi-Moedas
// Crie uma classe CarteiraDigital.
// Atributos: saldoBRL (number, privado), saldoUSD (number, privado), taxaCambio (number, público, readonly).
// Métodos:
// - depositarBRL(valor): adiciona ao saldo em reais.
// - comprarDolares(valorBRL): converte reais para dólares usando a taxa de câmbio.
// - getSaldoBRL() e getSaldoUSD(): retornam os saldos.
class CarteiraDigital {
    private saldoBRL: number;
    private saldoUSD: number;
    public readonly taxaCambio: number;

    constructor(taxaCambio: number) {
        this.saldoBRL = 0;
        this.saldoUSD = 0;
        this.taxaCambio = taxaCambio;
    }

    depositarBRL(valor: number): void {
        if (valor <= 0) {
            throw new Error("Valor deve ser positivo");
        }
        this.saldoBRL += valor;
    }

    comprarDolares(valorBRL: number): void {
        if (valorBRL <= 0) {
            throw new Error("Valor deve ser positivo");
        }
        if (valorBRL > this.saldoBRL) {
            throw new Error("Saldo em reais insuficiente");
        }
        const valorUSD = valorBRL / this.taxaCambio;
        this.saldoBRL -= valorBRL;
        this.saldoUSD += valorUSD;
        console.log("Comprados $" + valorUSD.toFixed(2) + " com R$" + valorBRL);
    }

    getSaldoBRL(): number {
        return this.saldoBRL;
    }

    getSaldoUSD(): number {
        return this.saldoUSD;
    }
}

// Teste Exercício 21
console.log("Exercicio 21 - Carteira Digital");
const carteira = new CarteiraDigital(5.0);
try {
    carteira.depositarBRL(1000);
    carteira.comprarDolares(500);
    console.log("Saldo BRL: R$" + carteira.getSaldoBRL());
    console.log("Saldo USD: $" + carteira.getSaldoUSD().toFixed(2));
    carteira.comprarDolares(1000);
} catch (error) {
    console.log("Erro:", (error as Error).message);
}
console.log();

// Exercício 22: Sistema de Reservas de Hotel
// Crie uma classe Quarto com numero, precoDiaria e reservado (boolean).
// Crie uma classe Hotel.
// Atributos: quartos (array de Quarto, privado).
// Métodos:
// - cadastrarQuarto(quarto): adiciona quarto.
// - reservarQuarto(numero, dias): reserva quarto se disponível. Retorna total da reserva.
//   Se não encontrado ou já reservado, lance throw new Error.
class Quarto {
    constructor(
        public numero: number,
        public precoDiaria: number,
        public reservado: boolean = false
    ) {}
}

class Hotel {
    private quartos: Quarto[];

    constructor() {
        this.quartos = [];
    }

    cadastrarQuarto(quarto: Quarto): void {
        this.quartos.push(quarto);
        console.log("Quarto " + quarto.numero + " cadastrado");
    }

    reservarQuarto(numero: number, dias: number): number {
        const quarto = this.quartos.find(q => q.numero === numero);
        if (!quarto) {
            throw new Error(`Quarto ${numero} não encontrado`);
        }
        if (quarto.reservado) {
            throw new Error(`Quarto ${numero} já está reservado`);
        }
        quarto.reservado = true;
        const total = dias * quarto.precoDiaria;
        console.log("Quarto " + numero + " reservado por " + dias + " dias. Total: R$" + total);
        return total;
    }
}

// Teste Exercício 22
console.log("Exercicio 22 - Hotel");
const hotel = new Hotel();
hotel.cadastrarQuarto(new Quarto(101, 200));
hotel.cadastrarQuarto(new Quarto(102, 250));
try {
    hotel.reservarQuarto(101, 3);
    hotel.reservarQuarto(101, 2);
} catch (error) {
    console.log("Erro:", (error as Error).message);
}
console.log();

// Exercício 23: Vending Machine
// Crie uma interface ItemVending com id, nome, preco e qtd.
// Crie uma classe VendingMachine.
// Atributos: estoque (array de ItemVending, privado), saldoInserido (number, privado).
// Métodos:
// - adicionarItem(item): adiciona ao estoque.
// - inserirMoeda(valor): adiciona ao saldo inserido.
// - comprarItem(id): verifica estoque e saldo, realiza compra e retorna troco.
interface ItemVending {
    id: number;
    nome: string;
    preco: number;
    qtd: number;
}

class VendingMachine {
    private saldoInserido: number;
    private estoque: ItemVending[];

    constructor() {
        this.saldoInserido = 0;
        this.estoque = [];
    }

    adicionarItem(item: ItemVending): void {
        this.estoque.push(item);
    }

    inserirMoeda(valor: number): void {
        if (valor <= 0) {
            throw new Error("Valor deve ser positivo");
        }
        this.saldoInserido += valor;
        console.log("Saldo inserido: R$" + this.saldoInserido);
    }

    comprarItem(id: number): number {
        const item = this.estoque.find(i => i.id === id);
        if (!item) {
            throw new Error("Item não encontrado");
        }
        if (item.qtd <= 0) {
            throw new Error("Item sem estoque");
        }
        if (this.saldoInserido < item.preco) {
            throw new Error("Saldo insuficiente");
        }
        item.qtd--;
        const troco = this.saldoInserido - item.preco;
        this.saldoInserido = 0;
        console.log("Item " + item.nome + " comprado. Troco: R$" + troco);
        return troco;
    }
}

// Teste Exercício 23
console.log("Exercicio 23 - Vending Machine");
const vending = new VendingMachine();
vending.adicionarItem({ id: 1, nome: "Refrigerante", preco: 5, qtd: 10 });
vending.adicionarItem({ id: 2, nome: "Chocolate", preco: 3, qtd: 5 });
try {
    vending.inserirMoeda(10);
    vending.comprarItem(1);
    vending.inserirMoeda(2);
    vending.comprarItem(2);
} catch (error) {
    console.log("Erro:", (error as Error).message);
}
console.log();

// Exercício 24: Extrato Bancário Estruturado
// Crie um tipo TipoTransacao = 'DEPOSITO' | 'SAQUE'.
// Crie uma classe Transacao com tipo, valor e data.
// Crie uma classe ContaCorrenteComExtrato.
// Atributos: saldo (number, privado), historico (array de Transacao, privado).
// Métodos:
// - depositar(valor): adiciona ao saldo e registra transação.
// - sacar(valor): subtrai do saldo e registra transação.
// - gerarExtrato(): mostra todas as transações e saldo atual.
type TipoTransacao = 'DEPOSITO' | 'SAQUE';

class Transacao {
    constructor(
        public tipo: TipoTransacao,
        public valor: number,
        public data: Date
    ) {}
}

class ContaCorrenteComExtrato {
    private saldo: number;
    private historico: Transacao[];

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
        this.historico = [];
    }

    depositar(valor: number): void {
        this.saldo += valor;
        this.historico.push(new Transacao('DEPOSITO', valor, new Date()));
    }

    sacar(valor: number): void {
        this.saldo -= valor;
        this.historico.push(new Transacao('SAQUE', valor, new Date()));
    }

    gerarExtrato(): void {
        console.log("Extrato Bancario");
        this.historico.forEach(t => {
            const dataFormatada = t.data.toLocaleString('pt-BR');
            console.log(dataFormatada + " - " + t.tipo + ": R$" + t.valor.toFixed(2));
        });
        console.log("Saldo atual: R$" + this.saldo.toFixed(2));
    }
}

// Teste Exercício 24
console.log("Exercicio 24 - Extrato Bancario");
const contaExtrato = new ContaCorrenteComExtrato(1000);
contaExtrato.depositar(500);
contaExtrato.sacar(200);
contaExtrato.depositar(100);
contaExtrato.gerarExtrato();
console.log();

// Exercício 25: Desafio Integrador – Marketplace
// Crie uma classe ClienteMarketplace.
// Atributos: nome (string, privado), email (string, privado).
// Setter para email com validação de formato (deve conter @).
// Crie uma classe ProdutoMarketplace.
// Atributos: id (number, público), nome (string, público), preco (number, público), estoque (number, público).
// Crie uma classe Pedido.
// Atributos: cliente (ClienteMarketplace, privado), itens (array de ProdutoMarketplace, privado), pago (boolean, privado).
// Métodos:
// - adicionarProduto(produto): adiciona se houver estoque.
// - finalizarPedido(): calcula total, deduz estoque dos produtos e marca como pago.
class ClienteMarketplace {
    private _nome: string;
    private _email: string;

    constructor(nome: string, email: string) {
        this._nome = nome;
        this._email = this.validarEmail(email);
    }

    private validarEmail(email: string): string {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            throw new Error("E-mail inválido");
        }
        return email;
    }

    get nome(): string {
        return this._nome;
    }

    get email(): string {
        return this._email;
    }
}

class ProdutoMarketplace {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public estoque: number
    ) {}
}

class Pedido {
    private cliente: ClienteMarketplace;
    private itens: ProdutoMarketplace[];
    private pago: boolean;

    constructor(cliente: ClienteMarketplace) {
        this.cliente = cliente;
        this.itens = [];
        this.pago = false;
    }

    adicionarProduto(produto: ProdutoMarketplace): void {
        if (produto.estoque <= 0) {
            throw new Error("Produto " + produto.nome + " sem estoque");
        }
        this.itens.push(produto);
        console.log("Produto " + produto.nome + " adicionado ao pedido");
    }

    finalizarPedido(): number {
        if (this.pago) {
            throw new Error("Pedido já finalizado");
        }
        let total = 0;
        for (const produto of this.itens) {
            total += produto.preco;
            produto.estoque--;
        }
        this.pago = true;
        console.log("Pedido finalizado. Total: R$" + total.toFixed(2));
        return total;
    }
}

// Teste Exercício 25
console.log("Exercicio 25 - Marketplace");
try {
    const cliente = new ClienteMarketplace("Joao Silva", "joao@email.com");
    const produto1 = new ProdutoMarketplace(1, "Notebook", 2000, 5);
    const produto2 = new ProdutoMarketplace(2, "Mouse", 50, 10);

    const pedido = new Pedido(cliente);
    pedido.adicionarProduto(produto1);
    pedido.adicionarProduto(produto2);
    pedido.finalizarPedido();

    console.log("Estoque Notebook:" + produto1.estoque);
    console.log("Estoque Mouse:" + produto2.estoque);

    // Teste e-mail invalido
    try {
        const clienteInvalido = new ClienteMarketplace("Maria", "email-invalido");
    } catch (error) {
        console.log("Erro:", (error as Error).message);
    }
} catch (error) {
    console.log("Erro:", (error as Error).message);
}

console.log("Fim da Lista 04");
