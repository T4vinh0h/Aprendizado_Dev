-- ============================================
-- EXERCÍCIOS DE DML - DATA MANIPULATION LANGUAGE
-- ============================================

-- Antes de começar
CREATE DATABASE lista_banco;
USE lista_banco;

-- ============================================
-- PARTE 1 - CRIANDO TABELAS
-- ============================================

-- Exercício 1 - Tabela de clientes
CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    idade INT,
    data_cadastro DATE DEFAULT CURRENT_DATE
);

-- Exercício 2 - Tabela de produtos
CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL,
    preco DECIMAL(10, 2),
    estoque INT DEFAULT 0
);

-- Exercício 3 - Tabela de funcionários
CREATE TABLE funcionarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10, 2),
    data_admissao DATE
);

-- Exercício 4 - Tabela de categorias
CREATE TABLE categorias (
    id   INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT
);

-- Exercício 5 - Tabela de fornecedores
CREATE TABLE fornecedores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cnpj VARCHAR(20) UNIQUE,
    telefone VARCHAR(20),
    cidade VARCHAR(50)
);

-- ============================================
-- PARTE 2 - INSERINDO DADOS (INSERT)
-- ============================================

-- Exercício 6 - Inserindo clientes
INSERT INTO clientes (nome, email, idade) VALUES
('João Silva', 'joao@email.com', 17),
('Maria Santos', 'maria@email.com', 25),
('Pedro Oliveira', 'pedro@email.com', 40),
('Ana Costa', 'ana@email.com', 30),
('Carlos Lima', 'carlos@email.com', 35);

-- Exercício 7 - Inserindo produtos
INSERT INTO produtos (nome, preco, estoque) VALUES
('Notebook Dell', 3500.00, 10),
('Mouse Logitech', 80.00, 50),
('Teclado Mecânico', 250.00, 30),
('Monitor 24"', 900.00, 15);

-- Exercício 8 - Inserindo funcionários
INSERT INTO funcionarios (nome, cargo, salario, data_admissao) VALUES
('Roberto Alves', 'Vendedor', 2500.00, '2022-03-15'),
('Juliana Mendes', 'Gerente', 5000.00, '2020-01-10'),
('Lucas Pereira', 'Estagiário', 1200.00, '2023-06-01'),
('Fernanda Souza', 'Analista', 4000.00, '2021-07-20'),
('Marcos Costa', 'Diretor', 8000.00, '2019-02-01');

-- Exercício 9 - Inserindo categorias
INSERT INTO categorias (nome, descricao) VALUES
('Eletrônicos', 'Produtos eletrônicos em geral'),
('Roupas', 'Vestuário e acessórios'),
('Alimentos', 'Produtos alimentícios');

-- Exercício 10 - Inserindo múltiplos registros de uma vez
INSERT INTO produtos (nome, preco, estoque) VALUES
('Smartphone Samsung', 1200.00, 20),
('Headphone Bluetooth', 150.00, 40),
('Webcam HD', 180.00, 25);

-- Exercício 11 - Inserindo com colunas específicas
INSERT INTO clientes (nome, email) VALUES
('Beatriz Nunes', 'beatriz@email.com');

-- Exercício 12 - Inserindo mais funcionários
INSERT INTO funcionarios (nome, cargo, salario, data_admissao) VALUES
('Ricardo Gomes', 'Estagiário', 1300.00, '2023-08-15'),
('Patricia Lima', 'Gerente', 5200.00, '2019-11-20'),
('André Santos', 'Analista', 3800.00, '2022-04-10'),
('Carla Dias', 'Vendedor', 2600.00, '2022-09-05');

-- Exercício 13 - Inserindo cliente sem idade
INSERT INTO clientes (nome, email, idade) VALUES
('Diego Ferreira', 'diego@email.com', 28);

-- Exercício 14 - Inserindo produtos sem estoque
INSERT INTO produtos (nome, preco) VALUES
('Câmera Digital', 800.00),
('Impressora', 450.00);

-- Exercício 15 - Inserindo categoria com descrição longa
INSERT INTO categorias (nome, descricao) VALUES
('Livros', 'Livros de diversos gêneros como ficção, não-ficção, romance e suspense. Nossa coleção inclui autores nacionais e internacionais renomados.');

-- Exercício 16 - Inserindo fornecedores
INSERT INTO fornecedores (nome, cnpj, telefone, cidade) VALUES
('Tech Distribuidora', '12.345.678/0001-90', '(11) 3333-4444', 'São Paulo'),
('Global Import', '98.765.432/0001-10', '(21) 5555-6666', 'Rio de Janeiro'),
('Norte Suprimentos', '45.678.901/0001-23', '(61) 7777-8888', 'Brasília'),
('Sul Atacadista', '78.901.234/0001-45', '(51) 9999-0000', 'Porto Alegre');

-- Exercício 17 - Inserindo pedidos em massa
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_nome VARCHAR(100),
    produto VARCHAR(80),
    quantidade INT,
    valor_total DECIMAL(10, 2)
);

INSERT INTO pedidos (cliente_nome, produto, quantidade, valor_total) VALUES
('João Silva', 'Notebook Dell', 1, 3500.00),
('Maria Santos', 'Mouse Logitech', 2, 160.00),
('Pedro Oliveira', 'Teclado Mecânico', 1, 250.00),
('Ana Costa', 'Monitor 24"', 2, 1800.00),
('Carlos Lima', 'Smartphone Samsung', 1, 1200.00);

-- Exercício 18 - Inserindo cliente completo
INSERT INTO clientes (nome, email, idade, data_cadastro) VALUES
('Gabriel Rocha', 'gabriel@email.com', 32, '2023-05-10');

-- Exercício 19 - Inserindo produtos com preços variados
INSERT INTO produtos (nome, preco, estoque) VALUES
('Caneta', 5.00, 100),
('Borracha', 3.00, 150),
('Caderno', 8.00, 80),
('Mochila', 75.00, 30),
('Tablet iPad', 2500.00, 10);

-- ============================================
-- PARTE 3 - ATUALIZANDO DADOS (UPDATE)
-- ============================================

-- Exercício 20 - Atualizando produtos
-- 1. Aumentar em 10% o preço de todos os produtos
UPDATE produtos SET preco = preco * 1.10;

-- 2. Atualizar o estoque do produto de id = 2 para 50 unidades
UPDATE produtos SET estoque = 50 WHERE id = 2;

-- 3. Alterar o nome do produto de id = 1 para "Produto Promocional"
UPDATE produtos SET nome = 'Produto Promocional' WHERE id = 1;

-- Exercício 21 - Atualizando cliente específico
UPDATE clientes SET email = 'joao.novo@email.com' WHERE id = 1;

-- Exercício 22 - Ajuste salarial
-- 1. Aumento de 15% para todos os funcionários com cargo "Vendedor"
UPDATE funcionarios SET salario = salario * 1.15 WHERE cargo = 'Vendedor';

-- 2. Alterar o cargo do funcionário id = 3 para "Supervisor"
UPDATE funcionarios SET cargo = 'Supervisor' WHERE id = 3;

-- 3. Atualizar o salário de todos os "Estagiários" para 1500.00
UPDATE funcionarios SET salario = 1500.00 WHERE cargo = 'Estagiário';

-- Exercício 23 - Atualização em massa
UPDATE clientes SET nome = CONCAT(nome, ' (Idoso)') WHERE idade >= 60;

-- Exercício 24 - Atualizando estoque
UPDATE produtos SET estoque = estoque - 5 WHERE estoque > 10;

-- Exercício 25 - Atualizando vários campos ao mesmo tempo
UPDATE funcionarios SET cargo = 'Diretor', salario = 10000.00, data_admissao = '2020-01-15' WHERE id = 1;

-- Exercício 26 - Atualizando com base em outra coluna
UPDATE produtos SET estoque = estoque * 2 WHERE preco < 20.00;

-- Exercício 27 - Corrigindo dados
UPDATE clientes SET email = 'sememail@exemplo.com' WHERE email NOT LIKE '%@%';

-- Exercício 28 - Atualizando idade
UPDATE clientes SET idade = idade + 1;

-- Exercício 29 - Atualizando telefone padrão
ALTER TABLE clientes ADD COLUMN telefone VARCHAR(20);
UPDATE clientes SET telefone = '(00) 00000-0000' WHERE telefone IS NULL;

-- Exercício 30 - Reajuste por cargo
UPDATE funcionarios SET salario = salario * 1.08 WHERE salario < 3000.00;

-- Exercício 31 - Atualizando fornecedores
UPDATE fornecedores SET telefone = '(11) 99999-0000' WHERE cidade = 'São Paulo';

-- Exercício 32 - Desconto nos produtos
UPDATE produtos SET preco = preco * 0.80 WHERE estoque > 50;

-- Exercício 33 - Padronizando nomes
UPDATE clientes SET nome = UPPER(nome);

-- Exercício 34 - Corrigindo cargo
UPDATE funcionarios SET cargo = 'Trainee' WHERE cargo = 'Estagiário';

-- ============================================
-- PARTE 4 - DELETANDO DADOS (DELETE)
-- ============================================

-- Exercício 35 - Deletando clientes
-- 1. Delete todos os clientes com idade menor que 18
DELETE FROM clientes WHERE idade < 18;

-- 2. Delete o cliente cujo email seja específico
DELETE FROM clientes WHERE email = 'maria@email.com';

-- Exercício 36 - Deletando produtos
-- 1. Delete o produto cujo estoque seja igual a 0
DELETE FROM produtos WHERE estoque = 0;

-- 2. Delete todos os produtos com preço menor que 10.00
DELETE FROM produtos WHERE preco < 10.00;

-- Exercício 37 - Deletando funcionários
DELETE FROM funcionarios WHERE salario < 2000.00;

-- Exercício 38 - Deletando fornecedores
DELETE FROM fornecedores WHERE cidade = 'Rio de Janeiro';

-- Exercício 39 - Deletando por faixa
DELETE FROM produtos WHERE preco BETWEEN 100.00 AND 200.00;

-- Exercício 40 - Cuidado com DELETE sem WHERE
-- Ex: DELETE FROM categorias;
-- OBS: Este comando apagaria TODOS os registros da tabela categorias, mantendo apenas a estrutura da tabela.
-- É extremamente perigoso pois não há condição WHERE para restringir quais registros serão deletados.

-- ============================================
-- PARTE 5 - ALTERANDO A ESTRUTURA DAS TABELAS (ALTER TABLE)
-- ============================================

-- Exercício 41 - Adicionando colunas
-- 1. Adicionar coluna cidade
ALTER TABLE clientes ADD COLUMN cidade VARCHAR(50);

-- 2. Adicionar coluna estado
ALTER TABLE clientes ADD COLUMN estado VARCHAR(2);

-- Exercício 42 - Modificando colunas
-- 1. Modificar coluna idade para permitir valores nulos
ALTER TABLE clientes MODIFY COLUMN idade INT;

-- 2. Alterar coluna nome para aceitar até 150 caracteres
ALTER TABLE clientes MODIFY COLUMN nome VARCHAR(100);

-- Exercício 43 - Renomeando colunas
ALTER TABLE clientes CHANGE COLUMN data_cadastro criado_em DATE;

-- Exercício 44 - Removendo colunas
ALTER TABLE produtos ADD COLUMN descricao VARCHAR(200);
ALTER TABLE produtos DROP COLUMN descricao;

-- Exercício 45 - Renomeando a tabela
ALTER TABLE funcionarios RENAME TO colaboradores;
ALTER TABLE colaboradores RENAME TO funcionarios;

-- Exercício 46 - Adicionando várias colunas de uma vez
ALTER TABLE fornecedores ADD COLUMN email VARCHAR(100), ADD COLUMN site VARCHAR(100);

-- ============================================
-- PARTE 6 - REMOVENDO TABELAS E BANCO (DROP E TRUNCATE)
-- ============================================

-- Exercício 47 - Removendo tabela
DROP TABLE categorias;

-- Exercício 48 - Removendo com verificação
DROP TABLE IF EXISTS produtos;

-- Exercício 49 - Limpando uma tabela sem apagá-la
TRUNCATE TABLE clientes;
-- A diferença entre TRUNCATE e DELETE:
-- TRUNCATE: Remove todos os registros de forma rápida, resetando os auto_increment. Não pode ser usado com WHERE. É uma operação DDL.
-- DELETE: Remove registros linha por linha, pode ser usado com WHERE para remover registros específicos. É uma operação DML e pode ser desfeito com ROLLBACK.

-- ============================================
-- DESAFIO FINAL
-- ============================================

-- Exercício 50 - Fluxo completo
-- 1. Criar tabela pedidos
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_nome VARCHAR(100),
    produto VARCHAR(80),
    quantidade INT,
    valor_total DECIMAL(10, 2)
);

-- 2. Inserir 4 pedidos
INSERT INTO pedidos (cliente_nome, produto, quantidade, valor_total) VALUES
('Cliente A', 'Produto X', 2, 100.00),
('Cliente B', 'Produto Y', 3, 150.00),
('Cliente C', 'Produto Z', 1, 200.00),
('Cliente D', 'Produto W', 5, 250.00);

-- 3. Atualizar quantidade do pedido id = 2 para 10 e recalcular valor_total
UPDATE pedidos SET quantidade = 10, valor_total = valor_total * (10 / 3) WHERE id = 2;

-- 4. Delete o pedido com menor valor total
DELETE FROM pedidos WHERE valor_total = (SELECT MIN(valor_total) FROM pedidos);

-- 5. Adicionar coluna data_pedido
ALTER TABLE pedidos ADD COLUMN data_pedido DATE;

-- 6. Renomear tabela para ordens
ALTER TABLE pedidos RENAME TO ordens;
