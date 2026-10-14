-- ========================================================
-- SCRIPT COMPLETO - 10 SISTEMAS PARA MYSQL WORKBENCH
-- Cada sistema tem seu proprio banco (schema)
-- Execute tudo de uma vez, ou por blocos (um sistema por vez)
-- ========================================================




-- ========================================================
-- 1. SISTEMA DE BIBLIOTECA
-- ========================================================
DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE biblioteca;
USE biblioteca;


CREATE TABLE autor (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE livro (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150) NOT NULL,
    ano_publicacao YEAR NOT NULL,
    isbn VARCHAR(20) NOT NULL UNIQUE
);


-- Tabela associativa N:N entre livro e autor
CREATE TABLE livro_autor (
    id_livro INT NOT NULL,
    id_autor INT NOT NULL,
    PRIMARY KEY (id_livro, id_autor),
    FOREIGN KEY (id_livro) REFERENCES livro(id_livro),
    FOREIGN KEY (id_autor) REFERENCES autor(id_autor)
);


CREATE TABLE leitor (
    id_leitor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE emprestimo (
    id_emprestimo INT PRIMARY KEY AUTO_INCREMENT,
    id_leitor INT NOT NULL,
    id_livro INT NOT NULL,
    data_retirada DATE NOT NULL,
    data_prevista_devolucao DATE NOT NULL,
    data_devolucao DATE,
    FOREIGN KEY (id_leitor) REFERENCES leitor(id_leitor),
    FOREIGN KEY (id_livro) REFERENCES livro(id_livro)
);




-- ========================================================
-- 2. SISTEMA DE ESCOLA DE CURSOS
-- ========================================================
DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola;
USE escola;


CREATE TABLE professor (
    id_professor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE curso (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    id_professor INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_professor) REFERENCES professor(id_professor)
);


CREATE TABLE aluno (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


-- Entidade associativa N:N entre aluno e curso, com atributos proprios
CREATE TABLE matricula (
    id_matricula INT PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT NOT NULL,
    id_curso INT NOT NULL,
    data_matricula DATE NOT NULL,
    situacao ENUM('ativa', 'concluida', 'cancelada') NOT NULL DEFAULT 'ativa',
    FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno),
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
);




-- ========================================================
-- 3. SISTEMA DE PET SHOP
-- ========================================================
DROP DATABASE IF EXISTS petshop;
CREATE DATABASE petshop;
USE petshop;


CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(150)
);


CREATE TABLE pet (
    id_pet INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    nome VARCHAR(60) NOT NULL,
    especie VARCHAR(40) NOT NULL,
    raca VARCHAR(60),
    idade INT,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);


CREATE TABLE servico (
    id_servico INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL
);


CREATE TABLE atendimento (
    id_atendimento INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT NOT NULL,
    id_servico INT NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    valor_cobrado DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_pet) REFERENCES pet(id_pet),
    FOREIGN KEY (id_servico) REFERENCES servico(id_servico)
);




-- ========================================================
-- 4. SISTEMA DE RESTAURANTE
-- ========================================================
DROP DATABASE IF EXISTS restaurante;
CREATE DATABASE restaurante;
USE restaurante;


CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE pedido (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    status ENUM('aberto', 'em preparo', 'entregue', 'cancelado') NOT NULL DEFAULT 'aberto',
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);


CREATE TABLE prato (
    id_prato INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(200),
    preco DECIMAL(10,2) NOT NULL
);


-- Tabela associativa N:N entre pedido e prato
CREATE TABLE pedido_prato (
    id_pedido INT NOT NULL,
    id_prato INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    PRIMARY KEY (id_pedido, id_prato),
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    FOREIGN KEY (id_prato) REFERENCES prato(id_prato)
);




-- ========================================================
-- 5. SISTEMA DE ACADEMIA
-- ========================================================
DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia;
USE academia;


CREATE TABLE plano (
    id_plano INT PRIMARY KEY AUTO_INCREMENT,
    tipo ENUM('mensal', 'trimestral', 'anual') NOT NULL
);


CREATE TABLE aluno (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    id_plano INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    data_nascimento DATE NOT NULL,
    FOREIGN KEY (id_plano) REFERENCES plano(id_plano)
);


CREATE TABLE instrutor (
    id_instrutor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE treino (
    id_treino INT PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT NOT NULL,
    id_instrutor INT NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    data DATE NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno),
    FOREIGN KEY (id_instrutor) REFERENCES instrutor(id_instrutor)
);




-- ========================================================
-- 6. SISTEMA DE HOTEL
-- ========================================================
DROP DATABASE IF EXISTS hotel;
CREATE DATABASE hotel;
USE hotel;


CREATE TABLE hospede (
    id_hospede INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    email VARCHAR(100)
);


CREATE TABLE quarto (
    id_quarto INT PRIMARY KEY AUTO_INCREMENT,
    numero INT NOT NULL UNIQUE,
    tipo VARCHAR(50) NOT NULL,
    valor_diaria DECIMAL(10,2) NOT NULL
);


CREATE TABLE reserva (
    id_reserva INT PRIMARY KEY AUTO_INCREMENT,
    id_hospede INT NOT NULL,
    id_quarto INT NOT NULL,
    data_entrada DATE NOT NULL,
    data_saida DATE NOT NULL,
    situacao ENUM('confirmada', 'em andamento', 'finalizada', 'cancelada') NOT NULL DEFAULT 'confirmada',
    FOREIGN KEY (id_hospede) REFERENCES hospede(id_hospede),
    FOREIGN KEY (id_quarto) REFERENCES quarto(id_quarto)
);




-- ========================================================
-- 7. SISTEMA DE LOJA DE ROUPAS
-- ========================================================
DROP DATABASE IF EXISTS loja_roupas;
CREATE DATABASE loja_roupas;
USE loja_roupas;


CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);


CREATE TABLE produto (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    id_categoria INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    tamanho VARCHAR(10),
    cor VARCHAR(30),
    preco DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);


CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE compra (
    id_compra INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    data DATE NOT NULL,
    forma_pagamento VARCHAR(30) NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);


-- Tabela associativa N:N entre compra e produto
CREATE TABLE compra_produto (
    id_compra INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    PRIMARY KEY (id_compra, id_produto),
    FOREIGN KEY (id_compra) REFERENCES compra(id_compra),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);




-- ========================================================
-- 8. SISTEMA DE OFICINA MECANICA
-- ========================================================
DROP DATABASE IF EXISTS oficina;
CREATE DATABASE oficina;
USE oficina;


CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE veiculo (
    id_veiculo INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    placa VARCHAR(10) NOT NULL UNIQUE,
    modelo VARCHAR(60) NOT NULL,
    marca VARCHAR(60) NOT NULL,
    ano YEAR NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);


CREATE TABLE ordem_servico (
    id_os INT PRIMARY KEY AUTO_INCREMENT,
    id_veiculo INT NOT NULL,
    data_abertura DATE NOT NULL,
    problema_relatado VARCHAR(200) NOT NULL,
    status ENUM('aberta', 'em andamento', 'concluida', 'cancelada') NOT NULL DEFAULT 'aberta',
    FOREIGN KEY (id_veiculo) REFERENCES veiculo(id_veiculo)
);


CREATE TABLE servico (
    id_servico INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL
);


-- Tabela associativa N:N entre ordem_servico e servico
CREATE TABLE os_servico (
    id_os INT NOT NULL,
    id_servico INT NOT NULL,
    PRIMARY KEY (id_os, id_servico),
    FOREIGN KEY (id_os) REFERENCES ordem_servico(id_os),
    FOREIGN KEY (id_servico) REFERENCES servico(id_servico)
);




-- ========================================================
-- 9. SISTEMA DE CINEMA
-- ========================================================
DROP DATABASE IF EXISTS cinema;
CREATE DATABASE cinema;
USE cinema;


CREATE TABLE filme (
    id_filme INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150) NOT NULL,
    duracao INT NOT NULL,
    classificacao VARCHAR(10) NOT NULL,
    genero VARCHAR(50) NOT NULL
);


CREATE TABLE sala (
    id_sala INT PRIMARY KEY AUTO_INCREMENT,
    numero INT NOT NULL UNIQUE
);


CREATE TABLE sessao (
    id_sessao INT PRIMARY KEY AUTO_INCREMENT,
    id_filme INT NOT NULL,
    id_sala INT NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    FOREIGN KEY (id_filme) REFERENCES filme(id_filme),
    FOREIGN KEY (id_sala) REFERENCES sala(id_sala)
);


CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE ingresso (
    id_ingresso INT PRIMARY KEY AUTO_INCREMENT,
    id_sessao INT NOT NULL,
    id_cliente INT NOT NULL,
    assento VARCHAR(10) NOT NULL,
    valor_pago DECIMAL(10,2) NOT NULL,
    tipo ENUM('inteira', 'meia') NOT NULL,
    FOREIGN KEY (id_sessao) REFERENCES sessao(id_sessao),
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);






-- ========================================================
-- 10. SISTEMA DE DELIVERY
-- ========================================================
DROP DATABASE IF EXISTS delivery;
CREATE DATABASE delivery;
USE delivery;


CREATE TABLE restaurante (
    id_restaurante INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE produto (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    id_restaurante INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(200),
    preco DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_restaurante) REFERENCES restaurante(id_restaurante)
);


CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE pedido (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    endereco_entrega VARCHAR(150) NOT NULL,
    situacao ENUM('recebido', 'em preparo', 'a caminho', 'entregue', 'cancelado') NOT NULL DEFAULT 'recebido',
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);
-- Tabela associativa N:N entre pedido e produto
CREATE TABLE pedido_produto (
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    PRIMARY KEY (id_pedido, id_produto),
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto));
