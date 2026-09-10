-- ============================================
-- EXERCÍCIOS DE SELECT E FOREIGN KEYS
-- ============================================

-- ANTES DE COMEÇAR
CREATE DATABASE lista_banco_relacional;
USE lista_banco_relacional;

-- ============================================
-- PARTE 1 - CRIANDO TABELAS COM FOREIGN KEY
-- ============================================

-- Exercício 1 - Tabela pai: departamentos
CREATE TABLE departamentos (
    id_depto INT PRIMARY KEY AUTO_INCREMENT,
    nome_depto VARCHAR(100) NOT NULL
);

-- Exercício 2 - Tabela filha: funcionarios
CREATE TABLE funcionarios (
    id_func INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10, 2),
    id_depto INT,
    FOREIGN KEY (id_depto) REFERENCES departamentos(id_depto)
);

-- Exercício 3 - Tabela pai: cursos
CREATE TABLE cursos (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100) NOT NULL,
    carga_horaria INT
);

-- Exercício 4 - Tabela filha: alunos com ON DELETE SET NULL
CREATE TABLE alunos (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nota DECIMAL(10, 2),
    cidade VARCHAR(50),
    id_curso INT,
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso) ON DELETE SET NULL ON UPDATE CASCADE
);

-- Exercício 5 - Tabela pai: clientes
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

-- Exercício 6 - Tabela filha: pedidos com ON DELETE CASCADE
CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(200),
    valor DECIMAL(10, 2),
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) ON DELETE CASCADE
);

-- ============================================
-- PARTE 2 - INSERINDO DADOS NAS TABELAS RELACIONADAS
-- ============================================

-- Exercício 7 - Populando departamentos
INSERT INTO departamentos (nome_depto) VALUES
('TI'),
('Financeiro'),
('Recursos Humanos');

-- Exercício 8 - Populando funcionarios
INSERT INTO funcionarios (nome, salario, id_depto) VALUES
('João Silva', 3500.00, 1),
('Maria Santos', 2800.00, 2),
('Pedro Oliveira', 3200.00, 1),
('Ana Costa', 4200.00, 3),
('Carlos Lima', 2900.00, 2),
('Beatriz Nunes', 3100.00, NULL);

-- Exercício 9 - Populando cursos
INSERT INTO cursos (nome_curso, carga_horaria) VALUES
('Análise de Sistemas', 2000),
('Design Gráfico', 1200),
('Administração', 1800);

-- Exercício 10 - Populando alunos
INSERT INTO alunos (nome, nota, cidade, id_curso) VALUES
('Roberto Alves', 8.5, 'Pelotas', 1),
('Juliana Mendes', 9.0, 'Rio Grande', 2),
('Lucas Pereira', 7.5, 'Pelotas', 3),
('Fernanda Souza', 6.5, 'Porto Alegre', 1),
('Marcos Costa', 8.0, 'Pelotas', 2),
('Patricia Lima', 7.0, 'Canoas', NULL);

-- Exercício 11 - Populando clientes e pedidos
-- 1. Inserir 4 clientes
INSERT INTO clientes (nome, email) VALUES
('Ricardo Gomes', 'ricardo@email.com'),
('André Santos', 'andre@email.com'),
('Carla Dias', 'carla@email.com'),
('Diego Ferreira', 'diego@email.com');

-- 2. Inserir 8 pedidos
INSERT INTO pedidos (descricao, valor, id_cliente) VALUES
('Notebook Dell', 3500.00, 1),
('Mouse Logitech', 80.00, 1),
('Teclado Mecânico', 250.00, 2),
('Monitor 24"', 900.00, 2),
('Smartphone Samsung', 1200.00, 3),
('Headphone Bluetooth', 150.00, 3),
('Webcam HD', 180.00, 4),
('Câmera Digital', 800.00, 4);

-- Exercício 12 - Testando a integridade referencial
-- INSERT INTO funcionarios (nome, salario, id_depto) VALUES ('Teste', 2000.00, 999);
-- Este comando falhará com erro de integridade referencial porque o id_depto = 999 não existe na tabela departamentos.
-- O MySQL não permite inserir um registro com foreign key apontando para um registro inexistente na tabela referenciada.

-- ============================================
-- PARTE 3 - CONSULTAS COM SELECT BÁSICO
-- ============================================

-- Exercício 13 - SELECT simples
SELECT * FROM funcionarios;

-- Exercício 14 - SELECT com colunas específicas
SELECT nome, salario FROM funcionarios;

-- Exercício 15 - WHERE
SELECT * FROM alunos WHERE cidade = 'Pelotas';

-- Exercício 16 - WHERE com número
SELECT * FROM funcionarios WHERE salario > 3000;

-- Exercício 17 - ORDER BY crescente
SELECT * FROM alunos ORDER BY nome ASC;

-- Exercício 18 - ORDER BY decrescente
SELECT * FROM funcionarios ORDER BY salario DESC;

-- Exercício 19 - LIMIT
SELECT * FROM alunos ORDER BY nota DESC LIMIT 3;

-- Exercício 20 - DISTINCT
SELECT DISTINCT cidade FROM alunos;

-- ============================================
-- PARTE 4 - ALIAS (AS)
-- ============================================

-- Exercício 21 - Alias em coluna
SELECT nome AS nome_do_aluno, nota AS media_final FROM alunos;

-- Exercício 22 - Alias em tabela
SELECT a.nome, a.nota FROM alunos AS a;

-- ============================================
-- PARTE 5 - INNER JOIN
-- ============================================

-- Exercício 23 - INNER JOIN simples
SELECT funcionarios.nome, departamentos.nome_depto
FROM funcionarios
INNER JOIN departamentos ON funcionarios.id_depto = departamentos.id_depto;

-- Exercício 24 - INNER JOIN com alias
SELECT f.nome, d.nome_depto
FROM funcionarios AS f
INNER JOIN departamentos AS d ON f.id_depto = d.id_depto;

-- Exercício 25 - INNER JOIN entre alunos e cursos
SELECT alunos.nome, cursos.nome_curso
FROM alunos
INNER JOIN cursos ON alunos.id_curso = cursos.id_curso;

-- Exercício 26 - INNER JOIN com WHERE
SELECT alunos.nome, cursos.nome_curso
FROM alunos
INNER JOIN cursos ON alunos.id_curso = cursos.id_curso
WHERE alunos.nota >= 7;

-- Exercício 27 - INNER JOIN entre clientes e pedidos
SELECT clientes.nome, pedidos.descricao
FROM clientes
INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;

-- ============================================
-- PARTE 6 - LEFT JOIN
-- ============================================

-- Exercício 28 - LEFT JOIN em alunos e cursos
SELECT alunos.nome, cursos.nome_curso
FROM alunos
LEFT JOIN cursos ON alunos.id_curso = cursos.id_curso;

-- Exercício 29 - LEFT JOIN em funcionarios e departamentos
SELECT funcionarios.nome, departamentos.nome_depto
FROM funcionarios
LEFT JOIN departamentos ON funcionarios.id_depto = departamentos.id_depto;

-- Exercício 30 - LEFT JOIN com ORDER BY
SELECT alunos.nome, cursos.nome_curso
FROM alunos
LEFT JOIN cursos ON alunos.id_curso = cursos.id_curso
ORDER BY alunos.nome ASC;

-- ============================================
-- PARTE 7 - CONSULTA COMPLETA (JUNTANDO TUDO)
-- ============================================

-- Exercício 31 - Consulta completa 1
SELECT alunos.nome AS aluno, cursos.nome_curso AS curso, alunos.nota
FROM alunos
INNER JOIN cursos ON alunos.id_curso = cursos.id_curso
WHERE alunos.nota >= 7
ORDER BY alunos.nota DESC
LIMIT 5;

-- Exercício 32 - Consulta completa 2
SELECT clientes.nome AS cliente, pedidos.descricao AS produto
FROM clientes
INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
WHERE pedidos.valor > 100
ORDER BY pedidos.valor DESC;

-- ============================================
-- PARTE 8 - TESTANDO OS CASCADES
-- ============================================

-- Exercício 33 - Testando ON DELETE CASCADE
-- 1. Verificar quantos pedidos existem para o cliente de id_cliente = 1
SELECT COUNT(*) FROM pedidos WHERE id_cliente = 1;

-- 2. Delete esse cliente da tabela clientes
DELETE FROM clientes WHERE id_cliente = 1;

-- 3. Verificar novamente os pedidos
SELECT COUNT(*) FROM pedidos WHERE id_cliente = 1;
-- Explicação: O resultado será 0 porque ON DELETE CASCADE fez com que todos os pedidos relacionados ao cliente fossem automaticamente deletados quando o cliente foi removido.

-- Exercício 34 - Testando ON DELETE SET NULL
-- 1. Verificar quais alunos estão no curso de id_curso = 1
SELECT * FROM alunos WHERE id_curso = 1;

-- 2. Delete esse curso da tabela cursos
DELETE FROM cursos WHERE id_curso = 1;

-- 3. Consultar novamente esses alunos
SELECT * FROM alunos WHERE id_curso IS NULL;
-- Explicação: O id_curso dos alunos que estavam no curso deletado foi automaticamente definido como NULL devido à cláusula ON DELETE SET NULL.

-- Exercício 35 - Testando ON UPDATE CASCADE
-- 1. Atualizar o id_curso de um curso existente
UPDATE cursos SET id_curso = 20 WHERE id_curso = 2;

-- 2. Consultar a tabela alunos
SELECT * FROM alunos WHERE id_curso = 20;
-- Explicação: O id_curso dos alunos que estavam no curso original foi automaticamente atualizado para 20 devido à cláusula ON UPDATE CASCADE.

-- ============================================
-- PARTE 9 - ALTER TABLE COM FOREIGN KEY
-- ============================================

-- Exercício 36 - Adicionando FK depois
-- 1. Criar tabela projetos sem foreign key
CREATE TABLE projetos (
    id_projeto INT PRIMARY KEY AUTO_INCREMENT,
    nome_projeto VARCHAR(100),
    id_func INT
);

-- 2. Adicionar foreign key via ALTER TABLE
ALTER TABLE projetos
ADD FOREIGN KEY (id_func) REFERENCES funcionarios(id_func);

-- Exercício 37 - Adicionando FK com CASCADE via ALTER TABLE
-- Criar tabela dependentes
CREATE TABLE dependentes (
    id_dep INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    id_func INT
);

-- Adicionar foreign key com ON DELETE CASCADE
ALTER TABLE dependentes
ADD FOREIGN KEY (id_func) REFERENCES funcionarios(id_func) ON DELETE CASCADE;

-- ============================================
-- PARTE 10 - VERIFICANDO E REMOVENDO FOREIGN KEYS
-- ============================================

-- Exercício 38 - Verificando FKs
SHOW CREATE TABLE alunos;
-- Nome da constraint gerada: alunos_ibfk_1 (pode variar dependendo da versão do MySQL)

-- Exercício 39 - Consultando pelo INFORMATION_SCHEMA
SELECT 
    CONSTRAINT_NAME,
    TABLE_NAME,
    COLUMN_NAME,
    REFERENCED_TABLE_NAME,
    REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'pedidos' AND TABLE_SCHEMA = 'lista_banco_relacional';

-- Exercício 40 - Removendo uma FK
-- 1. Descobrir o nome da constraint
SHOW CREATE TABLE funcionarios;
-- Nome da constraint: funcionarios_ibfk_1

-- 2. Remover a foreign key
ALTER TABLE funcionarios DROP FOREIGN KEY funcionarios_ibfk_1;

-- 3. Confirmar remoção
SHOW CREATE TABLE funcionarios;

-- ============================================
-- DESAFIO FINAL - SISTEMA DE BIBLIOTECA
-- ============================================

-- Exercício 41 - Sistema de biblioteca
-- 1. Criar tabela autores
CREATE TABLE autores (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

-- 2. Criar tabela livros com FK e CASCADE
CREATE TABLE livros (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150),
    ano INT,
    id_autor INT,
    FOREIGN KEY (id_autor) REFERENCES autores(id_autor) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 3. Inserir 3 autores e 6 livros
INSERT INTO autores (nome) VALUES
('Machado de Assis'),
('Clarice Lispector'),
('Jorge Amado');

INSERT INTO livros (titulo, ano, id_autor) VALUES
('Dom Casmurro', 1899, 1),
('Memórias Póstumas de Brás Cubas', 1881, 1),
('A Hora da Estrela', 1977, 2),
('A Paixão Segundo G.H.', 1964, 2),
('Capitães da Areia', 1937, 3),
('Gabriela, Cravo e Canela', 1958, 3);

-- 4. INNER JOIN mostrando título e nome do autor
SELECT livros.titulo, autores.nome
FROM livros
INNER JOIN autores ON livros.id_autor = autores.id_autor;

-- 5. LEFT JOIN mostrando todos os autores e seus livros
SELECT autores.nome, livros.titulo
FROM autores
LEFT JOIN livros ON autores.id_autor = livros.id_autor;

-- 6. Delete um autor que tenha livros
DELETE FROM autores WHERE id_autor = 1;

-- Verificar se os livros foram removidos
SELECT * FROM livros WHERE id_autor = 1;
-- Explicação: Os livros do autor deletado foram automaticamente removidos devido ao ON DELETE CASCADE.

-- 7. Listar os 3 livros mais recentes
SELECT * FROM livros ORDER BY ano DESC LIMIT 3;
