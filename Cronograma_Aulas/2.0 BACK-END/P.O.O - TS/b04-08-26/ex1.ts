// Classe LivroTS
class LivroTS {
    // Atributos com tipagem
    titulo: string;
    autor: string;
    isbn: string;

    // Método construtor chamado quando um objeto é criado
    constructor(titulo: string, autor: string, isbn: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }

    // Método que mostra as informações do livro
    mostrarInformacoes(): void {
        console.log("=== Informações do Livro ===");
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log("============================");
    }
}

// Criando os livros
const livroTS1: LivroTS = new LivroTS("Dom Casmurro", "Machado de Assis", "978-85-359-0277-9");
const livroTS2: LivroTS = new LivroTS("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "978-85-325-3073-8");
const livroTS3: LivroTS = new LivroTS("1984", "George Orwell", "978-85-254-3073-2");

// Chamando o método para mostrar os dados dos livros
livroTS1.mostrarInformacoes();
livroTS2.mostrarInformacoes();
livroTS3.mostrarInformacoes();
