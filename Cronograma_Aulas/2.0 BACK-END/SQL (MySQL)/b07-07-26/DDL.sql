-- ============================================================
-- Lista de exercícios — DDL em Banco de Dados
-- Tema: CREATE, ALTER, DROP, TRUNCATE e restrições
-- ============================================================

-- 1. Criar banco de dados
CREATE DATABASE escola;
USE escola;

-- 2. Tabela simples — alunos
CREATE TABLE alunos (
    id INT,
    nome VARCHAR(100),
    idade INT,
    email VARCHAR(100)
);

-- 3. Tabela com chave primária — professores
CREATE TABLE professores (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    disciplina VARCHAR(80) NOT NULL
);

-- 4. Tabela com AUTO_INCREMENT — cursos
CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT NOT NULL
);

-- Atividade prática: verificar estrutura da tabela
DESC cursos;

-- 5. Tabela com NOT NULL — turmas
CREATE TABLE turmas (
    id INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    ano INT NOT NULL
);

-- 6. Tabela com UNIQUE — usuarios
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

-- 7. Tabela com valor padrão — produtos
CREATE TABLE produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

-- Atividade prática: verificar estrutura da tabela
DESCRIBE produtos;

-- 8. Tabela com chave estrangeira — matriculas
-- Obs: para a FK funcionar, alunos.id precisa ser chave primária.
-- Caso a tabela alunos já exista sem PK, ajuste antes com:
-- ALTER TABLE alunos ADD PRIMARY KEY (id);
CREATE TABLE matriculas (
    id INT PRIMARY KEY,
    aluno_id INT,
    data_matricula DATE NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

-- 9. Tabela com duas chaves estrangeiras — aluno_curso
CREATE TABLE aluno_curso (
    id INT PRIMARY KEY,
    aluno_id INT,
    curso_id INT,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- 10. Alterar tabela adicionando coluna — alunos
ALTER TABLE alunos ADD COLUMN telefone VARCHAR(20);

-- Atividade prática: verificar estrutura da tabela
DESCRIBE alunos;

-- 11. Alterar tabela modificando coluna — alunos
ALTER TABLE alunos MODIFY COLUMN nome VARCHAR(150);

-- 12. Alterar tabela removendo coluna — alunos
ALTER TABLE alunos DROP COLUMN telefone;

-- 13. Adicionar restrição NOT NULL — usuarios
ALTER TABLE usuarios MODIFY COLUMN nome VARCHAR(100) NOT NULL;

-- 14. Adicionar restrição UNIQUE — professores
ALTER TABLE professores ADD CONSTRAINT uq_professor_nome UNIQUE (nome);

-- 15. Tabela com CHECK — funcionarios
CREATE TABLE funcionarios (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2) CHECK (salario > 0)
);

-- 16. Tabela com data padrão — emprestimos
CREATE TABLE emprestimos (
    id INT PRIMARY KEY,
    livro VARCHAR(100) NOT NULL,
    aluno_id INT,
    data_emprestimo DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);

-- 17. Renomear tabela
RENAME TABLE usuarios TO usuarios_sistema;

-- 18. Apagar registros de uma tabela com DDL (mantendo estrutura)
TRUNCATE TABLE produtos;

-- 19. Excluir uma tabela
DROP TABLE emprestimos;

-- 20. Excluir um banco de dados
-- ATENÇÃO: remove o banco inteiro. Execute apenas por último.
DROP DATABASE escola;

-- ============================================================
-- DESAFIO PRÁTICO — Banco de dados de uma biblioteca
-- ============================================================
DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE livros (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(150),
    nome_autor VARCHAR(100),
    ano_publicacao YEAR,
    editora VARCHAR(100),
    genero VARCHAR(50) DEFAULT '?',
    idioma VARCHAR(50) DEFAULT 'Português',
    quantidade_estoque INT NOT NULL DEFAULT 0,
    isbn VARCHAR(20) UNIQUE
);

CREATE TABLE leitores (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_leitor VARCHAR(100) NOT NULL,
    data_cadastro DATE DEFAULT (CURRENT_DATE),
    cpf VARCHAR(15) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE,
    telefone VARCHAR(20),
    data_nascimento DATE,
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE emprestimos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    livro_id INT NOT NULL,
    leitor_id INT NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    data_prevista_devolucao DATE NOT NULL,
    multa DECIMAL(10,2) DEFAULT 0.00,
    renovacoes INT DEFAULT 0,
    FOREIGN KEY (livro_id) REFERENCES livros(id),
    FOREIGN KEY (leitor_id) REFERENCES leitores(id)
);

ALTER TABLE livros
ADD preco_livro DECIMAL(10,2) NOT NULL,
ADD disponivel BOOLEAN DEFAULT TRUE;

ALTER TABLE emprestimos
ADD entregue BOOLEAN NOT NULL DEFAULT FALSE;

CREATE TABLE reservas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    livro_id INT NOT NULL,
    leitor_id INT NOT NULL,
    data_reserva DATE NOT NULL,
    data_expiracao DATE,
    status VARCHAR(20) DEFAULT 'ativa',
    FOREIGN KEY (livro_id) REFERENCES livros(id),
    FOREIGN KEY (leitor_id) REFERENCES leitores(id)
);

ALTER TABLE emprestimos
ADD CHECK (data_devolucao >= data_emprestimo);

CREATE INDEX idx_emprestimos_livro ON emprestimos(livro_id);
CREATE INDEX idx_emprestimos_leitor ON emprestimos(leitor_id);
CREATE INDEX idx_reservas_livro ON reservas(livro_id);
CREATE INDEX idx_reservas_leitor ON reservas(leitor_id);

DESC livros;
DESC leitores;
DESC emprestimos;
DESC reservas;
