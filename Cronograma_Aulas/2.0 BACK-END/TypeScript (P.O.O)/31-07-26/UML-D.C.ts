// ============================================================
// PARTE 3 – Modelagem prática (Implementação em TypeScript)
// ============================================================

// Exercício 1 – Biblioteca
class LivroUML {
    constructor(
        public titulo: string,
        public autor: string,
        public isbn: string
    ) {}
}

class UsuarioBiblio {
    private emprestimos: EmprestimoUML[] = [];

    constructor(
        public nome: string,
        public matricula: string
    ) {}

    adicionarEmprestimo(emprestimo: EmprestimoUML): void {
        this.emprestimos.push(emprestimo);
    }

    listarEmprestimos(): void {
        console.log(`Empréstimos de ${this.nome}:`);
        this.emprestimos.forEach(emp => {
            console.log(`- Livro: ${emp.livro.titulo}, Data: ${emp.data}`);
        });
    }
}

class EmprestimoUML {
    constructor(
        public livro: LivroUML,
        public data: Date,
        public dataDevolucao?: Date
    ) {}
}

// Exemplo de uso
const livroUML1 = new LivroUML("Dom Casmurro", "Machado de Assis", "978-85-359-0277-9");
const usuarioBiblio1 = new UsuarioBiblio("João Silva", "2023001");
const emprestimoUML1 = new EmprestimoUML(livroUML1, new Date("2024-01-15"));
usuarioBiblio1.adicionarEmprestimo(emprestimoUML1);
usuarioBiblio1.listarEmprestimos();

// ============================================================

// Exercício 2 – Escola
class PessoaEscola {
    constructor(
        public nome: string,
        public cpf: string
    ) {}
}

class AlunoEscola extends PessoaEscola {
    constructor(nome: string, cpf: string, public matricula: string) {
        super(nome, cpf);
    }
}

class ProfessorEscola extends PessoaEscola {
    private disciplinas: DisciplinaEscola[] = [];

    constructor(nome: string, cpf: string, public salario: number) {
        super(nome, cpf);
    }

    adicionarDisciplina(disciplina: DisciplinaEscola): void {
        this.disciplinas.push(disciplina);
    }

    listarDisciplinas(): void {
        console.log(`Disciplinas lecionadas por ${this.nome}:`);
        this.disciplinas.forEach(d => console.log(`- ${d.nome}`));
    }
}

class DisciplinaEscola {
    constructor(
        public nome: string,
        public cargaHoraria: number,
        public professor?: ProfessorEscola
    ) {}

    adicionarAluno(aluno: AlunoEscola): void {
        console.log(`${aluno.nome} matriculado em ${this.nome}`);
    }
}

// Exemplo de uso
const profEscola1 = new ProfessorEscola("Maria Santos", "123.456.789-00", 5000);
const discEscola1 = new DisciplinaEscola("Programação Orientada a Objetos", 60, profEscola1);
const alunoEscola1 = new AlunoEscola("Pedro Costa", "987.654.321-00", "2023002");
profEscola1.adicionarDisciplina(discEscola1);
discEscola1.adicionarAluno(alunoEscola1);
profEscola1.listarDisciplinas();

// ============================================================

// Exercício 3 – Loja Virtual
class ProdutoLoja {
    constructor(
        public nome: string,
        public descricao: string,
        public preco: number,
        public estoque: number
    ) {}
}

class ClienteLoja {
    private pedidos: PedidoLoja[] = [];

    constructor(
        public nome: string,
        public email: string,
        public endereco: string
    ) {}

    adicionarPedido(pedido: PedidoLoja): void {
        this.pedidos.push(pedido);
    }

    listarPedidos(): void {
        console.log(`Pedidos de ${this.nome}:`);
        this.pedidos.forEach(p => console.log(`- Pedido: ${p.data}, Total: R$${p.valorTotal}`));
    }
}

class ItemPedidoLoja {
    constructor(
        public produto: ProdutoLoja,
        public quantidade: number
    ) {
        this.subtotal = produto.preco * quantidade;
    }

    subtotal: number;
}

class PedidoLoja {
    private itens: ItemPedidoLoja[] = [];

    constructor(
        public data: Date,
        public cliente: ClienteLoja
    ) {
        this.valorTotal = 0;
    }

    valorTotal: number;

    adicionarItem(item: ItemPedidoLoja): void {
        this.itens.push(item);
        this.valorTotal += item.subtotal;
    }

    cancelar(): void {
        console.log("Pedido cancelado - itens removidos");
        this.itens = [];
        this.valorTotal = 0;
    }
}

// Exemplo de uso
const produtoLoja1 = new ProdutoLoja("Notebook Dell", "Intel i5, 8GB RAM", 3500, 10);
const clienteLoja1 = new ClienteLoja("Ana Paula", "ana@email.com", "Rua A, 123");
const pedidoLoja1 = new PedidoLoja(new Date(), clienteLoja1);
const itemLoja1 = new ItemPedidoLoja(produtoLoja1, 2);
pedidoLoja1.adicionarItem(itemLoja1);
clienteLoja1.adicionarPedido(pedidoLoja1);
clienteLoja1.listarPedidos();

// ============================================================

// Exercício 4 – Veículos
class VeiculoUML {
    constructor(
        public placa: string,
        public cor: string,
        public ano: number
    ) {}
}

class CarroUML extends VeiculoUML {
    private motor: MotorUML;
    private pneus: PneuUML[] = [];

    constructor(placa: string, cor: string, ano: number, motor: MotorUML) {
        super(placa, cor, ano);
        this.motor = motor;
    }

    adicionarPneu(pneu: PneuUML): void {
        this.pneus.push(pneu);
    }

    mostrarInformacoes(): void {
        console.log(`Carro: ${this.placa}, ${this.cor}, ${this.ano}`);
        console.log(`Motor: ${this.motor.potencia}CV`);
        console.log(`Pneus: ${this.pneus.length}`);
    }
}

class MotoUML extends VeiculoUML {
    constructor(placa: string, cor: string, ano: number) {
        super(placa, cor, ano);
    }
}

class MotorUML {
    constructor(
        public potencia: number,
        public cilindradas: number
    ) {}
}

class PneuUML {
    constructor(
        public marca: string,
        public modelo: string,
        public tamanho: string
    ) {}
}

// Exemplo de uso
const motorUML1 = new MotorUML(150, 2000);
const carroUML1 = new CarroUML("ABC-1234", "Preto", 2022, motorUML1);
carroUML1.adicionarPneu(new PneuUML("Pirelli", "P-Zero", "205/55R16"));
carroUML1.adicionarPneu(new PneuUML("Pirelli", "P-Zero", "205/55R16"));
carroUML1.adicionarPneu(new PneuUML("Pirelli", "P-Zero", "205/55R16"));
carroUML1.adicionarPneu(new PneuUML("Pirelli", "P-Zero", "205/55R16"));
carroUML1.mostrarInformacoes();

// ============================================================

// Exercício 5 – Playlist
class MusicaUML {
    constructor(
        public titulo: string,
        public artista: string,
        public album: string,
        public duracao: number
    ) {}
}

class PlaylistUML {
    private musicas: MusicaUML[] = [];

    constructor(
        public nome: string,
        public descricao: string,
        public dataCriacao: Date
    ) {}

    adicionarMusica(musica: MusicaUML): void {
        this.musicas.push(musica);
    }

    listarMusicas(): void {
        console.log(`Playlist: ${this.nome}`);
        this.musicas.forEach(m => console.log(`- ${m.titulo} - ${m.artista}`));
    }
}

class UsuarioPlaylist {
    private playlists: PlaylistUML[] = [];

    constructor(
        public nome: string,
        public email: string
    ) {}

    criarPlaylist(playlist: PlaylistUML): void {
        this.playlists.push(playlist);
    }

    listarPlaylists(): void {
        console.log(`Playlists de ${this.nome}:`);
        this.playlists.forEach(p => console.log(`- ${p.nome}`));
    }

    remover(): void {
        console.log("Usuário removido - playlists deletadas");
        this.playlists = [];
    }
}

// Exemplo de uso
const musicaUML1 = new MusicaUML("Bohemian Rhapsody", "Queen", "A Night at the Opera", 354);
const musicaUML2 = new MusicaUML("Stairway to Heaven", "Led Zeppelin", "Led Zeppelin IV", 482);
const playlistUML1 = new PlaylistUML("Rock Clássicos", "Melhores músicas de rock", new Date());
playlistUML1.adicionarMusica(musicaUML1);
playlistUML1.adicionarMusica(musicaUML2);
const usuarioPlaylist1 = new UsuarioPlaylist("Carlos Drummond", "carlos@email.com");
usuarioPlaylist1.criarPlaylist(playlistUML1);
usuarioPlaylist1.listarPlaylists();
playlistUML1.listarMusicas();

// ============================================================
// EXERCÍCIO FINAL – Sistema da Hamburgueria BurgerTech
// ============================================================

// Pessoas
class PessoaBurger {
    constructor(
        public nome: string,
        public cpf: string,
        public telefone: string
    ) {}
}

class ClienteBurger extends PessoaBurger {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        public enderecoEntrega: string
    ) {
        super(nome, cpf, telefone);
    }

    private pedidos: PedidoBurger[] = [];

    fazerPedido(pedido: PedidoBurger): void {
        this.pedidos.push(pedido);
    }
}

class Funcionario extends PessoaBurger {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        public matricula: string,
        public salario: number
    ) {
        super(nome, cpf, telefone);
    }
}

class Atendente extends Funcionario {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        matricula: string,
        salario: number
    ) {
        super(nome, cpf, telefone, matricula, salario);
    }
}

class Entregador extends Funcionario {
    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        matricula: string,
        salario: number,
        public placaMoto: string
    ) {
        super(nome, cpf, telefone, matricula, salario);
    }
}

// Lojas
class Loja {
    private funcionarios: Funcionario[] = [];
    private cardapio?: Cardapio;

    constructor(
        public endereco: string,
        public telefone: string
    ) {}

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    definirCardapio(cardapio: Cardapio): void {
        this.cardapio = cardapio;
    }

    fecharLoja(): void {
        console.log("Loja fechada - funcionários podem ir para outra loja");
        this.cardapio = undefined;
    }
}

class Cardapio {
    private itens: Item[] = [];

    constructor(public dataAtualizacao: Date) {}

    adicionarItem(item: Item): void {
        this.itens.push(item);
    }

    remover(): void {
        console.log("Cardápio removido - itens deletados");
        this.itens = [];
    }
}

class Item {
    constructor(
        public nome: string,
        public preco: number
    ) {}
}

class Hamburguer extends Item {
    private ingredientes: Ingrediente[] = [];

    constructor(nome: string, preco: number) {
        super(nome, preco);
    }

    adicionarIngrediente(ingrediente: Ingrediente): void {
        this.ingredientes.push(ingrediente);
    }
}

class Bebida extends Item {
    constructor(nome: string, preco: number) {
        super(nome, preco);
    }
}

class Ingrediente {
    constructor(
        public nome: string,
        public quantidadeEstoque: number
    ) {}
}

// Pedidos
class PedidoBurger {
    private itens: ItemPedidoBurger[] = [];

    constructor(
        public data: Date,
        public cliente: ClienteBurger,
        public loja: Loja,
        public entregador?: Entregador
    ) {
        this.valorTotal = 0;
    }

    valorTotal: number;

    adicionarItem(item: ItemPedidoBurger): void {
        this.itens.push(item);
        this.valorTotal += item.subtotal;
    }

    cancelar(): void {
        console.log("Pedido cancelado - itens removidos");
        this.itens = [];
        this.valorTotal = 0;
    }
}

class ItemPedidoBurger {
    constructor(
        public item: Item,
        public quantidade: number
    ) {
        this.subtotal = item.preco * quantidade;
    }

    subtotal: number;
}

// Exemplo de uso - Sistema BurgerTech
const clienteBurger1 = new ClienteBurger("João Silva", "123.456.789-00", "11-99999-9999", "Rua A, 123");
const atendente1 = new Atendente("Maria Santos", "987.654.321-00", "11-88888-8888", "AT001", 2500);
const entregador1 = new Entregador("Pedro Costa", "456.789.123-00", "11-77777-7777", "EN001", 2000, "XYZ-9876");

const loja1 = new Loja("Av. Principal, 1000", "11-5555-5555");
loja1.adicionarFuncionario(atendente1);
loja1.adicionarFuncionario(entregador1);

const cardapio1 = new Cardapio(new Date());
const hamburguer1 = new Hamburguer("X-Burger", 25);
const hamburguer2 = new Hamburguer("X-Salada", 30);
const bebida1 = new Bebida("Coca-Cola", 8);
const ingrediente1 = new Ingrediente("Pão", 100);
const ingrediente2 = new Ingrediente("Carne", 50);

hamburguer1.adicionarIngrediente(ingrediente1);
hamburguer1.adicionarIngrediente(ingrediente2);

cardapio1.adicionarItem(hamburguer1);
cardapio1.adicionarItem(hamburguer2);
cardapio1.adicionarItem(bebida1);

loja1.definirCardapio(cardapio1);

const pedidoBurger1 = new PedidoBurger(new Date(), clienteBurger1, loja1, entregador1);
const itemPedido1 = new ItemPedidoBurger(hamburguer1, 2);
const itemPedido2 = new ItemPedidoBurger(bebida1, 1);
pedidoBurger1.adicionarItem(itemPedido1);
pedidoBurger1.adicionarItem(itemPedido2);

clienteBurger1.fazerPedido(pedidoBurger1);

console.log("Sistema BurgerTech - Pedido criado com sucesso!");
console.log(`Cliente: ${clienteBurger1.nome}`);
console.log(`Valor Total: R$${pedidoBurger1.valorTotal}`);
console.log(`Entregador: ${entregador1.nome} - Moto: ${entregador1.placaMoto}`);
