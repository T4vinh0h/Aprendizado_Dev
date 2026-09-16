-- =====================================================
-- BANCO DE DADOS: SISTEMA DE INVESTIGAÇÃO CRIMINAL
-- Aula 9 - Funções de Agregação e Filtros
-- =====================================================

DROP DATABASE IF EXISTS investigacao_criminal;
CREATE DATABASE investigacao_criminal;
USE investigacao_criminal;


-- -----------------------------------------------------
-- CRIAÇÃO DAS TABELAS
-- -----------------------------------------------------

CREATE TABLE delegacias (
    id      INT PRIMARY KEY AUTO_INCREMENT,
    nome    VARCHAR(100) NOT NULL,
    cidade  VARCHAR(50)  NOT NULL
);

CREATE TABLE investigadores (
    id           INT PRIMARY KEY AUTO_INCREMENT,
    nome         VARCHAR(100) NOT NULL,
    patente      ENUM('Delegado', 'Investigador', 'Perito', 'Agente') NOT NULL,
    id_delegacia INT,
    FOREIGN KEY (id_delegacia) REFERENCES delegacias(id)
);

CREATE TABLE suspeitos (
    id           INT PRIMARY KEY AUTO_INCREMENT,
    nome         VARCHAR(100) NOT NULL,
    idade        INT,
    cidade       VARCHAR(50),
    antecedentes INT DEFAULT 0,
    situacao     ENUM('Foragido', 'Preso', 'Liberado', 'Em Observação') NOT NULL
);

CREATE TABLE casos (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    titulo      VARCHAR(150) NOT NULL,
    tipo        ENUM('Homicídio', 'Fraude', 'Roubo', 'Tráfico', 'Crime Digital', 'Sequestro') NOT NULL,
    data_abertura DATE,
    status      ENUM('Aberto', 'Encerrado', 'Suspenso') NOT NULL,
    prioridade  ENUM('Baixa', 'Média', 'Alta') NOT NULL,
    id_investigador INT,
    FOREIGN KEY (id_investigador)
        REFERENCES investigadores(id)
        ON DELETE SET NULL
);

CREATE TABLE evidencias (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    descricao   VARCHAR(200) NOT NULL,
    tipo        ENUM('Física', 'Digital', 'Biológica', 'Testemunhal') NOT NULL,
    data_coleta DATE,
    id_caso     INT,
    FOREIGN KEY (id_caso)
        REFERENCES casos(id)
        ON DELETE CASCADE
);

CREATE TABLE casos_suspeitos (
    id             INT PRIMARY KEY AUTO_INCREMENT,
    id_caso        INT,
    id_suspeito    INT,
    nivel_suspeita ENUM('Baixo', 'Médio', 'Alto') NOT NULL,
    FOREIGN KEY (id_caso)
        REFERENCES casos(id)
        ON DELETE CASCADE,
    FOREIGN KEY (id_suspeito)
        REFERENCES suspeitos(id)
        ON DELETE CASCADE
);


-- -----------------------------------------------------
-- INSERINDO DADOS
-- -----------------------------------------------------

INSERT INTO delegacias (nome, cidade) VALUES
('1ª Delegacia de Homicídios',   'São Paulo'),
('Delegacia de Crimes Digitais', 'Rio de Janeiro'),
('Delegacia de Roubos',          'Curitiba'),
('Delegacia de Fraudes',         'Porto Alegre'),
('Delegacia de Narcóticos',      'Pelotas');


INSERT INTO investigadores (nome, patente, id_delegacia) VALUES
('Carlos Mendes',   'Delegado',     1),
('Fernanda Lima',   'Investigador', 1),
('Ricardo Souza',   'Delegado',     2),
('Patrícia Rocha',  'Perito',       2),
('Marcos Teixeira', 'Delegado',     3),
('Juliana Neves',   'Agente',       3),
('Anderson Cruz',   'Delegado',     4),
('Beatriz Alves',   'Investigador', 4),
('Rodrigo Santos',  'Delegado',     5),
('Camila Dias',     'Perito',       5);


INSERT INTO suspeitos (nome, idade, cidade, antecedentes, situacao) VALUES
('Jorge Batista',    35, 'São Paulo',       3, 'Preso'),
('Luciana Pires',    28, 'Rio de Janeiro',  1, 'Em Observação'),
('Fábio Moraes',     42, 'Curitiba',        5, 'Foragido'),
('Renata Cardoso',   31, 'Porto Alegre',    0, 'Liberado'),
('Paulo Henrique',   50, 'Pelotas',         2, 'Em Observação'),
('Sílvia Monteiro',  24, 'São Paulo',       0, 'Liberado'),
('Eduardo Barros',   38, 'Manaus',          4, 'Preso'),
('Tatiane Ferreira', 29, 'Salvador',        1, 'Em Observação'),
('Cláudio Ramos',    47, 'Fortaleza',       6, 'Foragido'),
('Ingrid Lopes',     33, 'Belo Horizonte',  2, 'Liberado');


INSERT INTO casos (titulo, tipo, data_abertura, status, prioridade, id_investigador) VALUES
('Homicídio Parque Central',      'Homicídio',    '2024-01-15', 'Aberto',    'Alta',  1),
('Fraude Bancária Milionária',    'Fraude',       '2024-02-03', 'Aberto',    'Alta',  3),
('Roubo Joalheria Norte',         'Roubo',        '2024-02-20', 'Encerrado', 'Média', 5),
('Tráfico Zona Sul',              'Tráfico',      '2024-03-10', 'Aberto',    'Alta',  9),
('Invasão de Sistema Governo',    'Crime Digital','2024-03-28', 'Aberto',    'Alta',  3),
('Sequestro Empresário Paulista', 'Sequestro',    '2024-04-05', 'Encerrado', 'Alta',  1),
('Roubo Carga Rodovia',           'Roubo',        '2024-04-22', 'Aberto',    'Média', 5),
('Falsificação de Documentos',    'Fraude',       '2024-05-08', 'Suspenso',  'Baixa', 7),
('Homicídio Zona Portuária',      'Homicídio',    '2024-05-19', 'Aberto',    'Alta',  1),
('Estelionato Online',            'Crime Digital','2024-06-01', 'Encerrado', 'Média', 3);


INSERT INTO evidencias (descricao, tipo, data_coleta, id_caso) VALUES
('Impressão digital na arma',         'Física',      '2024-01-16', 1),
('Câmera de segurança',               'Digital',     '2024-01-17', 1),
('Fibras de tecido na cena',          'Biológica',   '2024-01-18', 1),
('Extrato bancário suspeito',         'Digital',     '2024-02-04', 2),
('Contrato com assinatura falsa',     'Física',      '2024-02-05', 2),
('Bolsa encontrada na cena',          'Física',      '2024-02-21', 3),
('Log de acesso ao servidor',         'Digital',     '2024-03-29', 5),
('Mensagens criptografadas',          'Digital',     '2024-03-30', 5),
('Nota de resgate manuscrita',        'Física',      '2024-04-06', 6),
('Gravação de ligação telefônica',    'Testemunhal', '2024-04-07', 6),
('Documento adulterado apreendido',   'Física',      '2024-05-09', 8),
('Sangue na cena do crime',           'Biológica',   '2024-05-20', 9),
('Testemunho gravado em vídeo',       'Testemunhal', '2024-05-21', 9),
('Histórico de transações digitais',  'Digital',     '2024-06-02', 10),
('Captura de tela de golpe aplicado', 'Digital',     '2024-06-03', 10);


INSERT INTO casos_suspeitos (id_caso, id_suspeito, nivel_suspeita) VALUES
(1,  1,  'Alto'),
(1,  6,  'Médio'),
(2,  2,  'Alto'),
(2,  4,  'Baixo'),
(3,  3,  'Alto'),
(4,  5,  'Alto'),
(4,  7,  'Médio'),
(5,  2,  'Alto'),
(5,  8,  'Baixo'),
(6,  1,  'Médio'),
(6,  9,  'Alto'),
(7,  3,  'Alto'),
(8,  4,  'Alto'),
(8,  10, 'Médio'),
(9,  9,  'Alto'),
(10, 2,  'Alto'),
(10, 6,  'Baixo');


-- =====================================================
-- EXERCÍCIOS
-- =====================================================


-- EXERCÍCIO 0 - ENUM ------------------------------------
-- a) O que é o tipo ENUM no MySQL?
-- R: ENUM é um tipo de dado que permite definir uma lista predefinida de valores que a coluna pode aceitar.
--    É como um "menu" de opções válidas, garantindo que apenas os valores especificados possam ser inseridos.

-- b) Quais colunas deste banco utilizam ENUM? Liste todas.
-- R: 
--    - investigadores.patente: ('Delegado', 'Investigador', 'Perito', 'Agente')
--    - suspeitos.situacao: ('Foragido', 'Preso', 'Liberado', 'Em Observação')
--    - casos.tipo: ('Homicídio', 'Fraude', 'Roubo', 'Tráfico', 'Crime Digital', 'Sequestro')
--    - casos.status: ('Aberto', 'Encerrado', 'Suspenso')
--    - casos.prioridade: ('Baixa', 'Média', 'Alta')
--    - evidencias.tipo: ('Física', 'Digital', 'Biológica', 'Testemunhal')
--    - casos_suspeitos.nivel_suspeita: ('Baixo', 'Médio', 'Alto')

-- c) Tente inserir um suspeito com situacao = 'Desaparecido'.
--    O que acontece? Por quê?
-- R: O comando falhará com erro porque 'Desaparecido' não está na lista de valores aceitos pela coluna situacao.
--    O ENUM só aceita: 'Foragido', 'Preso', 'Liberado', 'Em Observação'.
--    Exemplo do erro: Data truncated for column 'situacao' at row 1

-- d) Quais são os valores aceitos pela coluna prioridade da tabela casos?
-- R: 'Baixa', 'Média', 'Alta'


-- EXERCÍCIO 1 -------------------------------------------
-- Liste o total de casos cadastrados no banco.
SELECT COUNT(*) AS total_casos FROM casos;


-- EXERCÍCIO 2 -------------------------------------------
-- Liste o total de casos do tipo Homicídio.
SELECT COUNT(*) AS total_homicidios FROM casos WHERE tipo = 'Homicídio';


-- EXERCÍCIO 3 -------------------------------------------
-- Liste a média de idade dos suspeitos.
SELECT AVG(idade) AS media_idade FROM suspeitos;


-- EXERCÍCIO 4 -------------------------------------------
-- Liste todos os suspeitos com mais de 2 antecedentes criminais.
SELECT * FROM suspeitos WHERE antecedentes > 2;


-- EXERCÍCIO 5 -------------------------------------------
-- Liste todos os casos com status "Aberto".
SELECT * FROM casos WHERE status = 'Aberto';


-- EXERCÍCIO 6 -------------------------------------------
-- Liste todos os casos com prioridade "Alta" e status "Aberto".
SELECT * FROM casos WHERE prioridade = 'Alta' AND status = 'Aberto';


-- EXERCÍCIO 7 -------------------------------------------
-- Liste todos os casos abertos entre 01/03/2024 e 31/05/2024.
SELECT * FROM casos 
WHERE data_abertura BETWEEN '2024-03-01' AND '2024-05-31'
AND status = 'Aberto';


-- EXERCÍCIO 8 -------------------------------------------
-- Liste todos os suspeitos das cidades
-- São Paulo, Curitiba e Fortaleza.
SELECT * FROM suspeitos 
WHERE cidade IN ('São Paulo', 'Curitiba', 'Fortaleza');


-- EXERCÍCIO 9 -------------------------------------------
-- Liste todos os suspeitos com idade entre 25 e 40 anos
-- e com pelo menos 1 antecedente criminal.
SELECT * FROM suspeitos 
WHERE idade BETWEEN 25 AND 40 
AND antecedentes >= 1;


-- EXERCÍCIO 10 ------------------------------------------
-- Liste todos os casos do tipo Homicídio ou Fraude.
SELECT * FROM casos WHERE tipo IN ('Homicídio', 'Fraude');


-- EXERCÍCIO 11 ------------------------------------------
-- Liste o total de suspeitos que estão Foragidos ou Presos.
SELECT COUNT(*) AS total_foragidos_presos 
FROM suspeitos 
WHERE situacao IN ('Foragido', 'Preso');


-- EXERCÍCIO 12 ------------------------------------------
-- Liste todos os suspeitos que estão Foragidos ou Presos.
SELECT * FROM suspeitos WHERE situacao IN ('Foragido', 'Preso');


-- EXERCÍCIO 13 ------------------------------------------
-- Liste o nome do investigador, a patente
-- e o nome da delegacia onde ele trabalha.
SELECT i.nome, i.patente, d.nome AS delegacia
FROM investigadores i
INNER JOIN delegacias d ON i.id_delegacia = d.id;


-- EXERCÍCIO 14 ------------------------------------------
-- Liste o título de cada caso e o nome do investigador
-- responsável por ele.
SELECT c.titulo, i.nome AS investigador
FROM casos c
INNER JOIN investigadores i ON c.id_investigador = i.id;


-- EXERCÍCIO 15 ------------------------------------------
-- Liste o total de casos sob responsabilidade
-- do investigador de id = 1.
SELECT COUNT(*) AS total_casos 
FROM casos 
WHERE id_investigador = 1;


-- EXERCÍCIO 16 ------------------------------------------
-- Liste o título do caso e todas as evidências coletadas.
-- Mostre o título, a descrição e o tipo da evidência.
SELECT c.titulo, e.descricao, e.tipo
FROM casos c
INNER JOIN evidencias e ON c.id = e.id_caso;


-- EXERCÍCIO 17 ------------------------------------------
-- Liste o total de evidências do tipo Digital.
SELECT COUNT(*) AS total_evidencias_digitais 
FROM evidencias 
WHERE tipo = 'Digital';


-- EXERCÍCIO 18 ------------------------------------------
-- Liste o total de evidências do caso de id = 1.
SELECT COUNT(*) AS total_evidencias 
FROM evidencias 
WHERE id_caso = 1;


-- EXERCÍCIO 19 ------------------------------------------
-- Liste o título do caso, o nome dos suspeitos envolvidos
-- e o nível de suspeita de cada um.
SELECT c.titulo, s.nome AS suspeito, cs.nivel_suspeita
FROM casos c
INNER JOIN casos_suspeitos cs ON c.id = cs.id_caso
INNER JOIN suspeitos s ON cs.id_suspeito = s.id;


-- EXERCÍCIO 20 ------------------------------------------
-- Liste os suspeitos com nível de suspeita "Alto"
-- e o título do caso em que estão envolvidos.
SELECT s.nome AS suspeito, c.titulo AS caso
FROM suspeitos s
INNER JOIN casos_suspeitos cs ON s.id = cs.id_suspeito
INNER JOIN casos c ON cs.id_caso = c.id
WHERE cs.nivel_suspeita = 'Alto';


-- EXERCÍCIO 21 ------------------------------------------
-- Liste o total de antecedentes criminais somados
-- de todos os suspeitos envolvidos em casos do tipo Homicídio.
SELECT SUM(s.antecedentes) AS total_antecedentes
FROM suspeitos s
INNER JOIN casos_suspeitos cs ON s.id = cs.id_suspeito
INNER JOIN casos c ON cs.id_caso = c.id
WHERE c.tipo = 'Homicídio';


-- EXERCÍCIO 22 ------------------------------------------
-- Liste todos os investigadores e os casos que estão
-- responsáveis, incluindo investigadores sem nenhum caso atribuído.
SELECT i.nome, i.patente, c.titulo
FROM investigadores i
LEFT JOIN casos c ON i.id = c.id_investigador;


-- EXERCÍCIO 23 ------------------------------------------
-- Liste o total de investigadores que trabalham na delegacia de id = 1.
SELECT COUNT(*) AS total_investigadores 
FROM investigadores 
WHERE id_delegacia = 1;


-- EXERCÍCIO 24 ------------------------------------------
-- Liste o total de casos com prioridade "Alta".
SELECT COUNT(*) AS total_casos_alta_prioridade 
FROM casos 
WHERE prioridade = 'Alta';


-- EXERCÍCIO 25 ------------------------------------------
-- Faça uma consulta usando Group By
-- Liste o total de casos por tipo de crime.
SELECT tipo, COUNT(*) AS total_casos
FROM casos
GROUP BY tipo
ORDER BY total_casos DESC;


-- EXERCÍCIO 26 - DESAFIO --------------------------------
-- Liste o nome do investigador, a patente, o título do caso,
-- a prioridade do caso, o nome do suspeito e o nível de suspeita,
-- apenas para casos com status "Aberto" e prioridade "Alta"
-- e suspeitos com nível de suspeita "Alto".
-- Ordene pelo nome do investigador em ordem alfabética.
SELECT i.nome AS investigador, 
       i.patente, 
       c.titulo AS caso, 
       c.prioridade, 
       s.nome AS suspeito, 
       cs.nivel_suspeita
FROM investigadores i
INNER JOIN casos c ON i.id = c.id_investigador
INNER JOIN casos_suspeitos cs ON c.id = cs.id_caso
INNER JOIN suspeitos s ON cs.id_suspeito = s.id
WHERE c.status = 'Aberto' 
  AND c.prioridade = 'Alta' 
  AND cs.nivel_suspeita = 'Alto'
ORDER BY i.nome ASC;
