// ============================================
// LISTA DE EXERCÍCIOS 05 - POO (ABSTRAÇÃO + ENCAPSULAMENTO + HERANÇA) EM TYPESCRIPT
// ============================================

// ============================================
// NÍVEL 1: FUNDAMENTOS DE HERANÇA E ENCAPSULAMENTO BÁSICO
// ============================================
// Exercício 1: Especialização de Veículo (Uso de extends e super)
// Crie uma classe base Veiculo com marca, modelo e velocidade (privado).
// Métodos: acelerar(incremento) e getVelocidade().
// Crie uma classe Moto que extends Veiculo.
// Atributo adicional: cilindradas (privado).
// Método: empinar() - só funciona se velocidade > 0.
// Use super() no construtor para chamar o construtor da classe base.
class Veiculo {
    public marca: string;
    public modelo: string;
    private velocidade: number;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
    }

    acelerar(incremento: number): void {
        this.velocidade += incremento;
    }

    getVelocidade(): number {
        return this.velocidade;
    }
}

class Moto extends Veiculo {
    private cilindradas: number;

    constructor(marca: string, modelo: string, cilindradas: number) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    empinar(): void {
        if (this.getVelocidade() > 0) {
            console.log("Empinando a moto!");
        } else {
            console.log("A moto precisa estar em movimento para empinar!");
        }
    }
}

// Teste Exercício 1
console.log("Exercicio 1 - Veiculo e Moto");
const moto1 = new Moto("Honda", "CBR", 600);
moto1.acelerar(50);
moto1.empinar();
console.log("Velocidade:" + moto1.getVelocidade() + " km/h");
console.log();

// Exercício 2: Hierarquia de Animais e Sons (Sobrescrita Simples)
// Crie uma classe base Animal com nome (protected) e idade (privado).
// Métodos: getIdade(), setIdade() com validação, emitirSom() retorna "Som genérico de animal".
// Crie subclasses Cachorro e Gato que sobrescrevem emitirSom() retornando "Au Au!" e "Miau!".
class Animal {
    protected nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    getIdade(): number {
        return this.idade;
    }

    setIdade(idade: number): void {
        if (idade < 0) {
            throw new Error("Idade não pode ser negativa");
        }
        this.idade = idade;
    }

    emitirSom(): string {
        return "Som genérico de animal";
    }
}

class Cachorro extends Animal {
    emitirSom(): string {
        return "Au Au!";
    }
}

class Gato extends Animal {
    emitirSom(): string {
        return "Miau!";
    }
}

// Teste Exercício 2
console.log("Exercicio 2 - Animais e Sons");
const cachorro = new Cachorro("Rex", 5);
const gato = new Gato("Mimi", 3);
console.log(cachorro.getIdade() + " anos - " + cachorro.emitirSom());
console.log(gato.getIdade() + " anos - " + gato.emitirSom());
console.log();

// Exercício 3: Aparelho Eletrônico com Atributo Protegido (protected)
// Crie uma classe DispositivoEletronico com marca (público) e nivelBateria (protected).
// Construtor valida se bateria está entre 0 e 100.
// Crie uma classe Smartphone que extends DispositivoEletronico.
// Método: usarAplicativo(consumo) - reduz bateria, lança erro se bateria esgotar.
class DispositivoEletronico {
    public marca: string;
    protected nivelBateria: number;

    constructor(marca: string, nivelBateria: number) {
        this.marca = marca;
        if (nivelBateria < 0 || nivelBateria > 100) {
            throw new Error("Nível de bateria deve estar entre 0 e 100%");
        }
        this.nivelBateria = nivelBateria;
    }
}

class Smartphone extends DispositivoEletronico {
    usarAplicativo(consumo: number): void {
        if (this.nivelBateria === 0) {
            throw new Error("Bateria esgotada! Carregue o dispositivo.");
        }
        this.nivelBateria -= consumo;
        if (this.nivelBateria < 0) {
            this.nivelBateria = 0;
            throw new Error("Bateria esgotada durante o uso do aplicativo!");
        }
        console.log("Usando aplicativo. Bateria restante:" + this.nivelBateria + "%");
    }
}

// Teste Exercício 3
console.log("Exercicio 3 - Dispositivo Eletronico");
const smartphone = new Smartphone("Samsung", 100);
smartphone.usarAplicativo(20);
smartphone.usarAplicativo(30);
console.log();

// Exercício 4: Formas Geométricas e Cálculo de Área
// Crie uma classe base Forma com cor (público).
// Método: calcularArea() retorna 0.
// Crie subclasses Quadrado e Circulo que sobrescrevem calcularArea().
// Quadrado: atributo lado, retorna lado * lado.
// Circulo: atributo raio, retorna PI * raio^2.
class Forma {
    public cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }

    calcularArea(): number {
        return 0;
    }
}

class Quadrado extends Forma {
    private lado: number;

    constructor(cor: string, lado: number) {
        super(cor);
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Circulo extends Forma {
    private raio: number;

    constructor(cor: string, raio: number) {
        super(cor);
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

// Teste Exercício 4
console.log("Exercicio 4 - Formas Geometricas");
const quadrado = new Quadrado("Azul", 5);
const circulo = new Circulo("Vermelho", 3);
console.log("Quadrado (" + quadrado.cor + "): Area = " + quadrado.calcularArea());
console.log("Circulo (" + circulo.cor + "): Area = " + circulo.calcularArea().toFixed(2));
console.log();

// NÍVEL 2: MODIFICADORES, REGRAS DE NEGÓCIO E VALIDAÇÕES

// Exercício 5: Contas Bancárias Especializadas (Uso de readonly e protected)
// Crie uma classe base Conta com numeroConta (readonly), titular (público) e saldo (protected).
// Métodos: depositar(), sacar() com validações.
// Crie uma classe ContaPoupanca que extends Conta.
// Atributo: taxaRendimento (privado).
// Método: renderJuros() aplica rendimento ao saldo.
class Conta {
    public readonly numeroConta: string;
    public titular: string;
    protected saldo: number;

    constructor(numeroConta: string, titular: string, saldoInicial: number) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("Valor de depósito deve ser positivo");
        }
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("Valor de saque deve ser positivo");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    getSaldo(): number {
        return this.saldo;
    }
}

class ContaPoupanca extends Conta {
    private taxaRendimento: number;

    constructor(numeroConta: string, titular: string, saldoInicial: number, taxaRendimento: number) {
        super(numeroConta, titular, saldoInicial);
        this.taxaRendimento = taxaRendimento;
    }

    renderJuros(): void {
        const rendimento = this.saldo * (this.taxaRendimento / 100);
        this.saldo += rendimento;
        console.log("Rendimento de " + this.taxaRendimento + "% aplicado: R$" + rendimento.toFixed(2) + ". Saldo: R$" + this.saldo.toFixed(2));
    }
}

// Teste Exercício 5
console.log("Exercicio 5 - Contas Bancarias");
const contaPoupanca = new ContaPoupanca("12345-6", "Joao Silva", 1000, 1.5);
contaPoupanca.renderJuros();
console.log();

// Exercício 6: Gestão de Funcionários com Bonificação
// Crie uma classe base FuncionarioEmpresa com nome (protected) e salarioBase (privado).
// Métodos: getSalarioBase(), setSalarioBase() com validação, calcularSalarioFinal().
// Crie uma classe Gerente que extends FuncionarioEmpresa.
// Atributo: bonusAdicional (privado).
// Sobrescreve calcularSalarioFinal() para incluir o bônus.
class FuncionarioEmpresa {
    protected nome: string;
    private salarioBase: number;

    constructor(nome: string, salarioBase: number) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    getSalarioBase(): number {
        return this.salarioBase;
    }

    setSalarioBase(salarioBase: number): void {
        if (salarioBase <= 0) {
            throw new Error("Salário base deve ser positivo");
        }
        this.salarioBase = salarioBase;
    }

    calcularSalarioFinal(): number {
        return this.salarioBase;
    }
}

class Gerente extends FuncionarioEmpresa {
    private bonusAdicional: number;

    constructor(nome: string, salarioBase: number, bonusAdicional: number) {
        super(nome, salarioBase);
        this.bonusAdicional = bonusAdicional;
    }

    calcularSalarioFinal(): number {
        return super.calcularSalarioFinal() + this.bonusAdicional;
    }
}

// Teste Exercício 6
console.log("Exercicio 6 - Funcionarios");
const gerente = new Gerente("Maria Santos", 5000, 1000);
console.log(gerente.getSalarioBase() + " + bonus = R$" + gerente.calcularSalarioFinal().toFixed(2));
console.log();

// Exercício 7: Controle de Acesso e Tratamento com try...catch
// Crie uma classe base Usuario com email e senha (privados).
// Método: login() verifica credenciais.
// Crie uma classe Administrador que extends Usuario.
// Atributo: nivelAcesso (privado).
// Método: deletarUsuario(usuario) - se usuario for Administrador, lance throw new Error.
class Usuario {
    private email: string;
    private senha: string;

    constructor(email: string, senha: string) {
        this.email = email;
        this.senha = senha;
    }

    login(email: string, senha: string): boolean {
        return this.email === email && this.senha === senha;
    }
}

class Administrador extends Usuario {
    private nivelAcesso: number;

    constructor(email: string, senha: string, nivelAcesso: number) {
        super(email, senha);
        this.nivelAcesso = nivelAcesso;
    }

    deletarUsuario(usuario: Usuario): void {
        if (usuario instanceof Administrador) {
            throw new Error("Não é permitido deletar outro administrador!");
        }
        console.log(`Usuário deletado com sucesso.`);
    }
}

// Teste Exercício 7
console.log("Exercicio 7 - Controle de Acesso");
const admin = new Administrador("admin@empresa.com", "admin123", 5);
const outroAdmin = new Administrador("admin2@empresa.com", "admin456", 3);

try {
    admin.deletarUsuario(outroAdmin);
} catch (error) {
    console.log("Erro capturado:", (error as Error).message);
}
console.log();

// Exercício 8: Produtos com Sobretaxa Alfandegaria
// Crie uma classe base ProdutoLoja com nome (público) e preco (protected).
// Método: getPrecoFinal() retorna preco.
// Crie uma classe ProdutoImportado que extends ProdutoLoja.
// Atributo: taxaAlfandega (privado).
// Sobrescreve getPrecoFinal() para incluir a taxa alfandegária.
class ProdutoLoja {
    public nome: string;
    protected preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    getPrecoFinal(): number {
        return this.preco;
    }
}

class ProdutoImportado extends ProdutoLoja {
    private taxaAlfandega: number;

    constructor(nome: string, preco: number, taxaAlfandega: number) {
        super(nome, preco);
        this.taxaAlfandega = taxaAlfandega;
    }

    getPrecoFinal(): number {
        return this.preco + (this.preco * this.taxaAlfandega / 100);
    }
}

// Teste Exercício 8
console.log("Exercicio 8 - Produtos Importados");
const produtoImportado = new ProdutoImportado("Notebook", 3000, 15);
console.log(produtoImportado.nome + ": R$" + produtoImportado.getPrecoFinal().toFixed(2) + " (com taxa alfandegaria)");
console.log();

// ============================================
// NÍVEL 3: POLIMORFISMO, COLEÇÕES E ARRAYS
// ============================================

// Exercício 9: Folha de Pagamento Polimórfica (reutiliza FuncionarioEmpresa do Exercício 6)
// Crie uma classe Diretor que extends FuncionarioEmpresa.
// Atributo: participacaoLucros (privado).
// Sobrescreve calcularSalarioFinal() para incluir participação nos lucros.
// Crie uma classe Empresa com array de FuncionarioEmpresa.
// Métodos: adicionarFuncionario() e calcularFolhaTotal() usando polimorfismo.
class Diretor extends FuncionarioEmpresa {
    private participacaoLucros: number;

    constructor(nome: string, salarioBase: number, participacaoLucros: number) {
        super(nome, salarioBase);
        this.participacaoLucros = participacaoLucros;
    }

    calcularSalarioFinal(): number {
        return super.calcularSalarioFinal() + this.participacaoLucros;
    }
}

class Empresa {
    private funcionarios: FuncionarioEmpresa[];

    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(f: FuncionarioEmpresa): void {
        this.funcionarios.push(f);
    }

    calcularFolhaTotal(): number {
        let total = 0;
        for (const funcionario of this.funcionarios) {
            total += funcionario.calcularSalarioFinal();
        }
        return total;
    }
}

// Teste Exercício 9
console.log("Exercicio 9 - Folha de Pagamento");
const empresa = new Empresa();
empresa.adicionarFuncionario(new FuncionarioEmpresa("Ana", 3000));
empresa.adicionarFuncionario(new Gerente("Carlos", 4000, 1000));
empresa.adicionarFuncionario(new Diretor("Roberto", 6000, 2000));
console.log("Folha total: R$" + empresa.calcularFolhaTotal().toFixed(2));
console.log();
// Exercício 10: Sistema de Notificações Multicanal
// Crie uma classe abstrata CanalNotificacao com método abstrato enviar().
// Crie subclasses EmailNotificacao, SMSNotificacao e PushNotificacao que implementam enviar().
// Crie uma classe CentralNotificacoes.
// Método: dispararEmMassa(canais, destinatario, msg) - envia mensagem por todos os canais.
abstract class CanalNotificacao {
    abstract enviar(destinatario: string, mensagem: string): void;
}

class EmailNotificacao extends CanalNotificacao {
    enviar(destinatario: string, mensagem: string): void {
        console.log("EMAIL para " + destinatario + ": " + mensagem);
    }
}

class SMSNotificacao extends CanalNotificacao {
    enviar(destinatario: string, mensagem: string): void {
        console.log("SMS para " + destinatario + ": " + mensagem);
    }
}

class PushNotificacao extends CanalNotificacao {
    enviar(destinatario: string, mensagem: string): void {
        console.log("PUSH para " + destinatario + ": " + mensagem);
    }
}

class CentralNotificacoes {
    dispararEmMassa(canais: CanalNotificacao[], destinatario: string, msg: string): void {
        for (const canal of canais) {
            canal.enviar(destinatario, msg);
        }
    }
}

// Teste Exercício 10
console.log("Exercicio 10 - Sistema de Notificacoes");
const central = new CentralNotificacoes();
const canais: CanalNotificacao[] = [
    new EmailNotificacao(),
    new SMSNotificacao(),
    new PushNotificacao()
];
central.dispararEmMassa(canais, "usuario@email.com", "Sua conta foi criada com sucesso!");
console.log();
// Exercício 11: Catálogo e Player de Mídia
// Crie uma classe base Midia com titulo e duracaoSegundos (protected).
// Método: reproduzir() retorna mensagem genérica.
// Crie subclasses Musica e Video.
// Musica: atributo artista, sobrescreve reproduzir() com detalhes da música.
// Video: atributo resolucao, sobrescreve reproduzir() com detalhes do vídeo.
class Midia {
    protected titulo: string;
    protected duracaoSegundos: number;

    constructor(titulo: string, duracaoSegundos: number) {
        this.titulo = titulo;
        this.duracaoSegundos = duracaoSegundos;
    }

    reproduzir(): string {
        return `Reproduzindo: ${this.titulo} (${this.duracaoSegundos}s)`;
    }
}

class Musica extends Midia {
    private artista: string;

    constructor(titulo: string, duracaoSegundos: number, artista: string) {
        super(titulo, duracaoSegundos);
        this.artista = artista;
    }

    reproduzir(): string {
        return "Musica: " + this.titulo + " - " + this.artista + " (" + this.duracaoSegundos + "s)";
    }
}

class Video extends Midia {
    private resolucao: string;

    constructor(titulo: string, duracaoSegundos: number, resolucao: string) {
        super(titulo, duracaoSegundos);
        this.resolucao = resolucao;
    }

    reproduzir(): string {
        return "Video: " + this.titulo + " (" + this.resolucao + ", " + this.duracaoSegundos + "s)";
    }
}

class Player {
    private midias: Midia[];

    constructor() {
        this.midias = [];
    }

    adicionarMidia(midia: Midia): void {
        this.midias.push(midia);
    }

    reproduzirTudo(): void {
        console.log("Reproduzindo Playlist");
        this.midias.forEach(midia => console.log(midia.reproduzir()));
    }
}

// Teste Exercício 11
console.log("Exercicio 11 - Player de Midia");
const player = new Player();
player.adicionarMidia(new Musica("Bohemian Rhapsody", 354, "Queen"));
player.adicionarMidia(new Video("Aula de TypeScript", 1800, "1080p"));
player.reproduzirTudo();
console.log();
// Exercício 12: Garagem e Gestão de Frota com Métodos de Array (reutiliza Veiculo do Exercício 1)
// Crie uma classe CarroGaragem que extends Veiculo.
// Atributo: portas (privado).
// Crie uma classe Garagem.
// Atributos: veiculos (array de Veiculo, privado).
// Métodos:
// - estacionar(veiculo): adiciona veículo.
// - buscarPorMarca(marca): usa filter para buscar veículos por marca.
// - calcularMediaVelocidade(): usa reduce para calcular média de velocidade da frota.
class CarroGaragem extends Veiculo {
    private portas: number;

    constructor(marca: string, modelo: string, portas: number) {
        super(marca, modelo);
        this.portas = portas;
    }
}

class Garagem {
    private veiculos: Veiculo[];

    constructor() {
        this.veiculos = [];
    }

    estacionar(veiculo: Veiculo): void {
        this.veiculos.push(veiculo);
        console.log(`Veículo ${veiculo.marca} ${veiculo.modelo} estacionado.`);
    }

    buscarPorMarca(marca: string): Veiculo[] {
        return this.veiculos.filter(v => v.marca === marca);
    }

    calcularMediaVelocidade(): number {
        if (this.veiculos.length === 0) return 0;
        const total = this.veiculos.reduce((acc, v) => acc + v.getVelocidade(), 0);
        return total / this.veiculos.length;
    }
}

// Teste Exercício 12
console.log("Exercicio 12 - Garagem");
const garagem = new Garagem();
const carroGaragem1 = new CarroGaragem("Toyota", "Corolla", 4);
const carroGaragem2 = new CarroGaragem("Honda", "Civic", 4);
const motoGaragem = new Moto("Yamaha", "MT-07", 689);

carroGaragem1.acelerar(60);
carroGaragem2.acelerar(80);
motoGaragem.acelerar(70);

garagem.estacionar(carroGaragem1);
garagem.estacionar(carroGaragem2);
garagem.estacionar(motoGaragem);

console.log("Veiculos Toyota:" + garagem.buscarPorMarca("Toyota").length);
console.log("Media de velocidade:" + garagem.calcularMediaVelocidade().toFixed(2) + " km/h");
console.log();

// ============================================
// NÍVEL 4: CASOS PRÁTICOS COMPLEXOS E PROJETOS INTEGRADORES
// ============================================

// Exercício 13: Sistema de Pedidos e Comanda de Restaurante
// Crie uma classe base ItemMenu com codigo, nome e precoBase (protected).
// Método: getPreco() retorna precoBase.
// Crie subclasses PratoPrincipal (mantém preço) e Bebida (adiciona taxaRefrigeracao).
// Crie uma classe Comanda.
// Atributos: numeroMesa (privado), itens (array de ItemMenu, privado).
// Métodos: adicionarItem(), calcularTotal() usando reduce, gerarExtrato().
class ItemMenu {
    protected codigo: number;
    protected nome: string;
    protected precoBase: number;

    constructor(codigo: number, nome: string, precoBase: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.precoBase = precoBase;
    }

    getPreco(): number {
        return this.precoBase;
    }

    getNome(): string {
        return this.nome;
    }
}

class PratoPrincipal extends ItemMenu {
    constructor(codigo: number, nome: string, precoBase: number) {
        super(codigo, nome, precoBase);
    }
}

class Bebida extends ItemMenu {
    private taxaRefrigeracao: number;

    constructor(codigo: number, nome: string, precoBase: number, taxaRefrigeracao: number) {
        super(codigo, nome, precoBase);
        this.taxaRefrigeracao = taxaRefrigeracao;
    }

    getPreco(): number {
        return this.precoBase + this.taxaRefrigeracao;
    }
}

class Comanda {
    private numeroMesa: number;
    private itens: ItemMenu[];

    constructor(numeroMesa: number) {
        this.numeroMesa = numeroMesa;
        this.itens = [];
    }

    adicionarItem(item: ItemMenu): void {
        this.itens.push(item);
    }

    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.getPreco(), 0);
    }

    gerarExtrato(): void {
        console.log("Comanda Mesa " + this.numeroMesa);
        this.itens.forEach(item => {
            console.log(item.getNome() + " - R$" + item.getPreco().toFixed(2));
        });
        console.log("TOTAL: R$" + this.calcularTotal().toFixed(2));
    }
}

// Teste Exercício 13
console.log("Exercicio 13 - Restaurante");
const comanda = new Comanda(5);
comanda.adicionarItem(new PratoPrincipal(1, "File Mignon", 89.90));
comanda.adicionarItem(new Bebida(2, "Refrigerante", 8.00, 2.00));
comanda.adicionarItem(new PratoPrincipal(3, "Risoto", 65.00));
comanda.gerarExtrato();
console.log();
// Exercício 14: Gateway de Pagamentos e Processamento Estruturado
// Crie uma classe abstrata MetodoPagamento com descricao (protected).
// Método abstrato: processar(valor): boolean.
// Crie subclasses:
// - CartaoCredito: atributos limite e taxaOperacao (2%). Desconta do limite com taxa. Se não houver limite, lança erro.
// - Pix: aplica 5% de desconto promocional antes de confirmar.
// - BoletoBancario: adiciona taxa fixa de R$ 2,00 e gera linha digitável simulada.
// Crie uma classe Checkout com método realizarCobranca() protegido por try...catch.
abstract class MetodoPagamento {
    protected descricao: string;

    constructor(descricao: string) {
        this.descricao = descricao;
    }

    abstract processar(valor: number): boolean;
}

class CartaoCredito extends MetodoPagamento {
    private limite: number;
    private taxaOperacao: number;

    constructor(limite: number) {
        super("Cartão de Crédito");
        this.limite = limite;
        this.taxaOperacao = 0.02;
    }

    processar(valor: number): boolean {
        const valorComTaxa = valor + (valor * this.taxaOperacao);
        if (valorComTaxa > this.limite) {
            throw new Error("Limite de crédito insuficiente");
        }
        this.limite -= valorComTaxa;
        console.log(`💳 Pagamento de R$ ${valor.toFixed(2)} processado (taxa: 2%). Limite restante: R$ ${this.limite.toFixed(2)}`);
        return true;
    }
}

class Pix extends MetodoPagamento {
    constructor() {
        super("Pix");
    }

    processar(valor: number): boolean {
        const valorComDesconto = valor * 0.95;
        console.log(`📱 Pix de R$ ${valorComDesconto.toFixed(2)} processado (desconto: 5%)`);
        return true;
    }
}

class BoletoBancario extends MetodoPagamento {
    constructor() {
        super("Boleto Bancário");
    }

    processar(valor: number): boolean {
        const valorComTaxa = valor + 2.00;
        const linhaDigitavel = this.gerarLinhaDigitavel();
        console.log("Boleto de R$" + valorComTaxa.toFixed(2) + " gerado. Linha digitavel: " + linhaDigitavel);
        return true;
    }

    private gerarLinhaDigitavel(): string {
        return Math.random().toString(36).substring(2, 15).toUpperCase();
    }
}

class Checkout {
    realizarCobranca(metodo: MetodoPagamento, valor: number): void {
        try {
            metodo.processar(valor);
            console.log("Pagamento realizado com sucesso!");
        } catch (error) {
            console.log("Erro no pagamento:" + (error as Error).message);
        }
    }
}

// Teste Exercício 14
console.log("Exercicio 14 - Gateway de Pagamentos");
const checkout = new Checkout();
checkout.realizarCobranca(new CartaoCredito(1000), 500);
checkout.realizarCobranca(new Pix(), 100);
checkout.realizarCobranca(new BoletoBancario(), 200);
checkout.realizarCobranca(new CartaoCredito(100), 500);
// Exercício 15: Desafio Integrador - Plataforma LMS de Ensino
// Crie uma classe base UsuarioLMS com id (readonly), nome (protected) e email (privado).
// Getters/Setters com validação de formato de e-mail. Método getDescricao().
// Subclasse Aluno: atributo matricula (privado) e cursosInscritos (array privado).
//   Método inscreverCurso(nomeCurso).
// Subclasse Instrutor: atributos valorHora e horasMinistradas (privados).
//   Método calcularRemuneracao().
// Classe Curso: atributos codigo, titulo, instrutor e turma (array de Aluno, privados).
//   Métodos: matricularAluno(aluno) - garante que não haja matrículas duplicadas com base no ID.
//   listarPresenca(): string[].
// Execução de Teste: Crie fluxo completo instanciando instrutor, curso e alunos, tratando erros em try...catch.
class UsuarioLMS {
    protected readonly id: number;
    protected nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = this.validarEmail(email);
    }

    private validarEmail(email: string): string {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            throw new Error("Formato de e-mail inválido");
        }
        return email;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = this.validarEmail(email);
    }

    getDescricao(): string {
        return `Usuário: ${this.nome} (ID: ${this.id})`;
    }
}

class AlunoLMS extends UsuarioLMS {
    private matricula: string;
    private cursosInscritos: string[];

    constructor(id: number, nome: string, email: string, matricula: string) {
        super(id, nome, email);
        this.matricula = matricula;
        this.cursosInscritos = [];
    }

    inscreverCurso(nomeCurso: string): void {
        if (this.cursosInscritos.includes(nomeCurso)) {
            console.log("Aluno ja esta inscrito no curso " + nomeCurso);
            return;
        }
        this.cursosInscritos.push(nomeCurso);
        console.log("Aluno inscrito no curso: " + nomeCurso);
    }

    getCursos(): string[] {
        return [...this.cursosInscritos];
    }
}

class Instrutor extends UsuarioLMS {
    private valorHora: number;
    private horasMinistradas: number;

    constructor(id: number, nome: string, email: string, valorHora: number) {
        super(id, nome, email);
        this.valorHora = valorHora;
        this.horasMinistradas = 0;
    }

    adicionarHoras(horas: number): void {
        this.horasMinistradas += horas;
    }

    calcularRemuneracao(): number {
        return this.valorHora * this.horasMinistradas;
    }
}

class Curso {
    private codigo: string;
    private titulo: string;
    private instrutor: Instrutor;
    private turma: AlunoLMS[];

    constructor(codigo: string, titulo: string, instrutor: Instrutor) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.instrutor = instrutor;
        this.turma = [];
    }

    matricularAluno(aluno: AlunoLMS): void {
        const jaMatriculado = this.turma.some(a => a.getEmail() === aluno.getEmail());
        if (jaMatriculado) {
            throw new Error("Aluno já matriculado neste curso");
        }
        this.turma.push(aluno);
        aluno.inscreverCurso(this.titulo);
    }

    listarPresenca(): string[] {
        return this.turma.map(a => a.getEmail());
    }
}

// Teste Exercício 15
console.log("Exercicio 15 - Plataforma LMS");
try {
    const instrutor = new Instrutor(1, "Prof. Daniel", "daniel@escola.com", 150);
    instrutor.adicionarHoras(40);
    console.log(instrutor.getDescricao());
    console.log(`Remuneração: R$ ${instrutor.calcularRemuneracao().toFixed(2)}`);

    const curso = new Curso("TS101", "TypeScript Avançado", instrutor);

    const aluno1 = new AlunoLMS(100, "Otavio Santos", "otavio@email.com", "2024001");
    const aluno2 = new AlunoLMS(101, "Maria Silva", "maria@email.com", "2024002");

    curso.matricularAluno(aluno1);
    curso.matricularAluno(aluno2);

    console.log("Presença na turma:");
    curso.listarPresenca().forEach(email => console.log(`  - ${email}`));

    // Tentativa de matricula duplicada
    try {
        curso.matricularAluno(aluno1);
    } catch (error) {
        console.log((error as Error).message);
    }

    // E-mail invalido
    try {
        const alunoInvalido = new AlunoLMS(102, "Joao", "email-invalido", "2024003");
    } catch (error) {
        console.log((error as Error).message);
    }
} catch (error) {
    console.log("Erro no sistema:" + (error as Error).message);
}

console.log("Fim da Lista 05");