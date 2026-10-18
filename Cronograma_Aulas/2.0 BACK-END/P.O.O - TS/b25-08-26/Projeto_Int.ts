// ==========================================
// Aluno: Otavio Santos
// Entidade: Produto (id, nome, preco, categoria, quantidadeEmEstoque)
// ==========================================

interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
    quantidadeEmEstoque: number;
}

// Classe para gerenciar produtos em memória
class GerenciadorDeProdutos {
    private produtos: Produto[] = [];

    // ==================== CRUD ====================

    // CREATE - Adicionar novo produto
    // INSERT INTO produtos VALUES (...);
    adicionar(produto: Produto): boolean {
        if (this.produtos.find(p => p.id === produto.id)) {
            console.log("Erro: ID já existe!");
            return false;
        }
        this.produtos.push(produto);
        console.log("Produto cadastrado com sucesso!");
        return true;
    }
    //-----------------------------------------------
    // READ - Listar todos os produtos
    // SELECT * FROM produtos;
    listar(): void {
        console.log("=== Lista de Produtos ===");
        if (this.produtos.length === 0) {
            console.log("Nenhum produto cadastrado.");
        } else {
            console.log(this.produtos);
        }
    }
    //-----------------------------------------------
    // READ - Buscar produto por ID
    // SELECT * FROM produtos WHERE id = ?;
    buscarPorId(id: number): Produto | undefined {
        const produto = this.produtos.find(produto => produto.id === id);
        if (produto) {
            console.log("Produto encontrado:", produto);
        } else {
            console.log("Produto não encontrado!");
        }
        return produto;
    }
    //-----------------------------------------------
    // UPDATE - Atualizar dados de um produto
    // UPDATE produtos SET nome = ?, preco = ?, categoria = ?, quantidadeEmEstoque = ? WHERE id = ?;
    atualizar(id: number, dadosAtualizados: Partial<Produto>): boolean {
        const produto = this.produtos.find(produto => produto.id === id);
        if (produto) {
            if (dadosAtualizados.nome !== undefined) produto.nome = dadosAtualizados.nome;
            if (dadosAtualizados.preco !== undefined) produto.preco = dadosAtualizados.preco;
            if (dadosAtualizados.categoria !== undefined) produto.categoria = dadosAtualizados.categoria;
            if (dadosAtualizados.quantidadeEmEstoque !== undefined) produto.quantidadeEmEstoque = dadosAtualizados.quantidadeEmEstoque;
            console.log("Produto atualizado com sucesso!");
            return true;
        } else {
            console.log("Produto não encontrado!");
            return false;
        }
    }
    //-----------------------------------------------
    // DELETE - Excluir produto por ID
    // DELETE FROM produtos WHERE id = ?;
    excluir(id: number): boolean {
        const tamanhoAnterior = this.produtos.length;
        this.produtos = this.produtos.filter(produto => produto.id !== id);
        if (this.produtos.length < tamanhoAnterior) {
            console.log("Produto removido com sucesso!");
            return true;
        } else {
            console.log("Produto não encontrado!");
            return false;
        }
    }
    //-----------------------------------------------
    // ==================== DESAFIO EXTRA ====================

    // Buscar produtos por categoria (campo diferente do id)
    // SELECT * FROM produtos WHERE categoria = ?;
    buscarPorCategoria(categoria: string): Produto[] {
        const produtosEncontrados = this.produtos.filter(produto =>
            produto.categoria.toLowerCase() === categoria.toLowerCase()
        );
        console.log(`Produtos com categoria "${categoria}":`, produtosEncontrados);
        return produtosEncontrados;
    }
}

// ==================== TESTES ====================

console.log("=== INÍCIO DOS TESTES ===\n");

const gerenciador = new GerenciadorDeProdutos();

// 1. CREATE - Cadastrar 4 produtos
console.log("1. CADASTRAR PRODUTOS (CREATE)");
gerenciador.adicionar({ id: 1, nome: "Notebook", preco: 3500, categoria: "Eletrônicos", quantidadeEmEstoque: 10 });
gerenciador.adicionar({ id: 2, nome: "Mouse", preco: 45, categoria: "Eletrônicos", quantidadeEmEstoque: 50 });
gerenciador.adicionar({ id: 3, nome: "Cadeira Gamer", preco: 899, categoria: "Móveis", quantidadeEmEstoque: 8 });
gerenciador.adicionar({ id: 4, nome: "Monitor", preco: 1200, categoria: "Eletrônicos", quantidadeEmEstoque: 15 });
console.log("");

// 2. READ - Listar todos
console.log("2. LISTAR TODOS (READ)");
gerenciador.listar();
console.log("");

// 3. READ - Buscar por ID
console.log("3. BUSCAR POR ID (READ)");
gerenciador.buscarPorId(2);
console.log("");

// 4. UPDATE - Atualizar produto
console.log("4. ATUALIZAR (UPDATE)");
gerenciador.atualizar(2, { preco: 39.9, quantidadeEmEstoque: 40 });
console.log("");

// 5. READ - Verificar atualização
console.log("5. VERIFICAR ATUALIZAÇÃO (READ)");
gerenciador.buscarPorId(2);
console.log("");

// 6. DELETE - Excluir produto
console.log("6. EXCLUIR (DELETE)");
gerenciador.excluir(1);
console.log("");

// 7. READ - Verificar exclusão
console.log("7. VERIFICAR EXCLUSÃO (READ)");
gerenciador.listar();
console.log("");

// 8. DESAFIO EXTRA - Buscar por categoria
console.log("8. DESAFIO EXTRA - BUSCAR POR CATEGORIA");
gerenciador.buscarPorCategoria("Eletrônicos");
console.log("");

console.log("=== FIM DOS TESTES ===");