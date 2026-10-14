# Atividade — Modelo Lógico e Preparação para o Modelo Físico de Banco de Dados

**Aluno:** Otavio

## Parte 1 — Conceitos iniciais

**a) O que é um modelo lógico de banco de dados?**  
Resposta: É a representação das entidades e relacionamentos do modelo conceitual organizados em tabelas, com atributos, tipos de dados, chaves primárias e estrangeiras definidos, mas ainda independente de um SGBD específico.

**b) Para que serve o modelo lógico?**  
Resposta: Serve para estruturar como os dados serão organizados em tabelas antes da implementação física, funcionando como uma ponte entre o modelo conceitual (mais abstrato) e o modelo físico (implementação real no banco).

**c) Qual a diferença entre modelo conceitual e modelo lógico?**  
Resposta: O modelo conceitual representa entidades e relacionamentos de forma abstrata, sem se preocupar com tabelas, tipos de dados ou chaves. O modelo lógico já organiza essas entidades em tabelas, definindo atributos, chaves primárias e estrangeiras, ainda sem a sintaxe de um SGBD específico.

**d) Qual a diferença entre modelo lógico e modelo físico?**  
Resposta: O modelo lógico define tabelas, campos e relacionamentos de forma genérica. O modelo físico é a implementação real no SGBD escolhido (por exemplo, MySQL), já com sintaxe SQL, tipos de dados específicos, índices e restrições técnicas.

**e) Por que não devemos criar um banco de dados sem antes planejar sua estrutura?**  
Resposta: Porque sem planejamento corremos o risco de ter dados duplicados, inconsistências, relacionamentos mal definidos, dificuldade de manutenção e retrabalho para corrigir a estrutura depois que o banco já estiver em uso.

**f) O que é uma tabela?**  
Resposta: É a estrutura que armazena dados organizados em linhas (registros) e colunas (campos), representando uma entidade do sistema.

**g) O que é um campo?**  
Resposta: É cada coluna de uma tabela, representando um atributo específico da entidade, como nome ou CPF.

**h) O que é um registro?**  
Resposta: É cada linha da tabela, representando uma ocorrência específica da entidade, como um aluno em particular.

**i) O que é um relacionamento entre tabelas?**  
Resposta: É a ligação lógica entre duas tabelas, geralmente feita por meio de chaves primárias e estrangeiras, indicando como os dados de uma tabela se conectam aos dados de outra.

## Parte 2 — Chaves primárias e estrangeiras

**a) O que é uma chave primária?**  
Resposta: É o campo (ou conjunto de campos) que identifica de forma única cada registro de uma tabela.

**b) Qual é a função da chave primária em uma tabela?**  
Resposta: Garantir que cada registro seja único e permitir sua identificação e localização de forma rápida e confiável.

**c) Por que o campo de chave primária não pode se repetir?**  
Resposta: Porque, se repetisse, não seria possível diferenciar registros distintos, comprometendo a integridade dos dados e gerando ambiguidade nas consultas.

**d) O que é uma chave estrangeira?**  
Resposta: É um campo em uma tabela que faz referência à chave primária de outra tabela.

**e) Para que serve uma chave estrangeira?**  
Resposta: Serve para criar e manter o relacionamento entre tabelas, garantindo a integridade referencial dos dados.

**f) Qual a diferença entre chave primária e chave estrangeira?**  
Resposta: A chave primária identifica unicamente os registros da própria tabela; a chave estrangeira referencia a chave primária de outra tabela para estabelecer um relacionamento entre elas.

**g) Em uma tabela chamada ALUNO, qual campo poderia ser usado como chave primária?**  
Resposta: O campo id_aluno.

**h) Em uma tabela chamada MATRICULA, por que pode ser necessário guardar o código do aluno?**  
Resposta: Porque a matrícula relaciona um aluno a uma disciplina, sendo necessário guardar essa referência (chave estrangeira) para saber a qual aluno cada matrícula pertence.

## Parte 3 — Tipos de dados

| Informação | Tipo de dado |
|------------|--------------|
| a) Código de identificação de um aluno | INT |
| b) Nome de um aluno | VARCHAR(100) |
| c) CPF de um aluno | VARCHAR(14) |
| d) Telefone de um aluno | VARCHAR(20) |
| e) Data de nascimento | DATE |
| f) Data e hora de uma matrícula | DATETIME |
| g) Valor de uma mensalidade | DECIMAL(10,2) |
| h) Situação ativo/inativo | BOOLEAN |
| i) Nome de uma disciplina | VARCHAR(100) |
| j) Carga horária de uma disciplina | INT |

## Parte 4 — Análise da situação-problema

**Tabela: ALUNO**  
Resposta: Armazena os dados pessoais dos alunos, como nome, CPF, telefone, data de nascimento e a turma à qual pertence.

**Tabela: PROFESSOR**  
Resposta: Armazena os dados dos professores, como nome, e-mail e telefone.

**Tabela: DISCIPLINA**  
Resposta: Armazena as disciplinas oferecidas pela escola, com nome, carga horária e o professor responsável.

**Tabela: TURMA**  
Resposta: Armazena as turmas da escola, com nome, turno e ano.

**Tabela: MATRICULA**  
Resposta: Armazena o vínculo entre um aluno e uma disciplina, incluindo a data da matrícula e a situação (ativa, cancelada, etc.).

## Parte 5 — Entidades e atributos

### ALUNO

**a) Qual campo deve ser a chave primária?**  
Resposta: id_aluno

**b) Qual campo pode ligar o aluno à turma?**  
Resposta: turma_id

**c) O campo nome deve ser obrigatório?**  
Resposta: Sim, deve ser obrigatório.

**d) O campo telefone deve ser numérico ou texto? Justifique.**  
Resposta: Deve ser texto (VARCHAR), pois pode conter parênteses, traços e números com zero à esquerda, além de nunca ser usado em cálculos matemáticos.

### PROFESSOR

**a) Qual campo deve ser a chave primária?**  
Resposta: id_professor

**b) Quais campos armazenam texto?**  
Resposta: nome, email e telefone

**c) O professor pode estar ligado a uma disciplina?**  
Resposta: Sim, de forma indireta, através do campo professor_id na tabela DISCIPLINA.

### DISCIPLINA

**a) Qual campo deve ser a chave primária?**  
Resposta: id_disciplina

**b) Qual campo deve ser chave estrangeira?**  
Resposta: professor_id

**c) A chave estrangeira aponta para qual tabela?**  
Resposta: PROFESSOR

**d) Por que a disciplina precisa ter professor_id?**  
Resposta: Porque cada disciplina precisa estar associada a um professor responsável por ministrá-la.

### TURMA

**a) Qual campo deve ser a chave primária?**  
Resposta: id_turma

**b) Que tipo de informação pode ser armazenada no campo turno?**  
Resposta: O período em que a turma estuda, como manhã, tarde ou noite.

**c) Uma turma pode ter vários alunos?**  
Resposta: Sim.

### MATRÍCULA

**a) Qual campo deve ser a chave primária?**  
Resposta: id_matricula

**b) Quais campos devem ser chaves estrangeiras?**  
Resposta: aluno_id e disciplina_id

**c) O campo aluno_id aponta para qual tabela?**  
Resposta: ALUNO

**d) O campo disciplina_id aponta para qual tabela?**  
Resposta: DISCIPLINA

**e) Por que a tabela MATRÍCULA é necessária?**  
Resposta: Porque é ela que resolve o relacionamento muitos-para-muitos entre aluno e disciplina, permitindo que um aluno se matricule em várias disciplinas e que uma disciplina tenha vários alunos, sem duplicar dados.

## Parte 6 — Construção do modelo lógico textual

### ALUNO
- id_aluno: INT — PK
- nome: VARCHAR(100)
- cpf: VARCHAR(14)
- telefone: VARCHAR(20)
- data_nascimento: DATE
- turma_id: INT — FK

### PROFESSOR
- id_professor: INT — PK
- nome: VARCHAR(100)
- email: VARCHAR(100)
- telefone: VARCHAR(20)

### DISCIPLINA
- id_disciplina: INT — PK
- nome_disciplina: VARCHAR(100)
- carga_horaria: INT
- professor_id: INT — FK

### TURMA
- id_turma: INT — PK
- nome_turma: VARCHAR(20)
- turno: VARCHAR(20)
- ano: INT

### MATRÍCULA
- id_matricula: INT — PK
- aluno_id: INT — FK
- disciplina_id: INT — FK
- data_matricula: DATETIME
- situacao: VARCHAR(20)

## Parte 7 — Identificando PK, FK e campo comum

| Campo | Classificação |
|-------|---------------|
| a) aluno.id_aluno | PK |
| b) aluno.nome | Campo comum |
| c) aluno.turma_id | FK |
| d) professor.id_professor | PK |
| e) professor.nome | Campo comum |
| f) disciplina.id_disciplina | PK |
| g) disciplina.professor_id | FK |
| h) turma.id_turma | PK |
| i) matricula.id_matricula | PK |
| j) matricula.aluno_id | FK |
| k) matricula.disciplina_id | FK |
| l) matricula.situacao | Campo comum |

## Parte 8 — Relacionamentos

| Situação | Relacionamento |
|----------|----------------|
| a) Uma turma pode ter vários alunos. | 1:N |
| b) Um aluno pertence a uma turma. | 1:N |
| c) Um professor pode ministrar várias disciplinas. | 1:N |
| d) Uma disciplina possui um professor responsável. | 1:N |
| e) Um aluno pode estar matriculado em várias disciplinas. | N:N |
| f) Uma disciplina pode ter vários alunos matriculados. | N:N |
| g) Relação entre aluno e disciplina resolvida pela matrícula. | N:N (tipo original) |

## Parte 9 — Desenhando os relacionamentos

```
TURMA  1 ────── N  ALUNO
PROFESSOR  1 ────── N  DISCIPLINA
ALUNO  1 ────── N  MATRÍCULA
DISCIPLINA  1 ────── N  MATRÍCULA
```

**a) O que significa o lado 1?**  
Resposta: Significa que apenas um único registro daquela tabela participa da relação (por exemplo, uma única turma).

**b) O que significa o lado N?**  
Resposta: Significa que vários registros da outra tabela podem se relacionar com aquele único registro do lado 1 (por exemplo, vários alunos numa mesma turma).

**c) Por que MATRÍCULA se relaciona com ALUNO?**  
Resposta: Porque cada matrícula pertence a um único aluno, mas um mesmo aluno pode ter várias matrículas, em disciplinas diferentes.

**d) Por que MATRÍCULA se relaciona com DISCIPLINA?**  
Resposta: Porque cada matrícula está vinculada a uma única disciplina, mas uma mesma disciplina pode ter várias matrículas, de alunos diferentes.

## Parte 10 — Muitos para muitos

**a) Esse relacionamento é 1:N ou N:N?**  
Resposta: N:N

**b) Por que esse relacionamento não deve ser resolvido colocando todas as disciplinas dentro da tabela ALUNO?**  
Resposta: Porque isso geraria repetição de dados (várias disciplinas em um único registro do aluno), dificultaria consultas e violaria os princípios de normalização do banco de dados.

**c) Por que esse relacionamento não deve ser resolvido colocando todos os alunos dentro da tabela DISCIPLINA?**  
Resposta: Pelo mesmo motivo: um mesmo aluno pode estar em várias disciplinas, o que causaria repetição de dados e dificuldade de manutenção.

**d) Qual tabela intermediária resolve esse problema?**  
Resposta: A tabela MATRICULA.

**e) Quais campos essa tabela intermediária precisa ter?**  
Resposta: id_matricula (PK), aluno_id (FK), disciplina_id (FK), além de campos adicionais como data_matricula e situacao.

## Parte 11 — Corrigindo problemas no modelo

**a) Qual é o problema desse modelo?**  
Resposta: A tabela ALUNO mistura informações de várias entidades diferentes em um único lugar, sem normalização.

**b) Quais informações estão misturadas na tabela ALUNO?**  
Resposta: Dados do aluno, da turma, da disciplina, do professor e da matrícula, todos juntos na mesma tabela.

**c) Quais dados podem se repetir várias vezes?**  
Resposta: nome_turma, nome_disciplina, nome_professor e data_matricula podem se repetir a cada nova disciplina cursada pelo mesmo aluno.

**d) Quais tabelas deveriam ser criadas separadamente?**  
Resposta: TURMA, DISCIPLINA, PROFESSOR e MATRICULA.

**e) Como a matrícula do aluno em uma disciplina deveria ser registrada?**  
Resposta: Em uma tabela MATRICULA separada, relacionando aluno_id e disciplina_id, e não dentro da própria tabela ALUNO.

## Parte 12 — Separando informações corretamente

| Informação | Tabela |
|------------|--------|
| a) João Silva | ALUNO |
| b) CPF | ALUNO |
| c) Nome da turma | TURMA |
| d) Nome da disciplina | DISCIPLINA |
| e) Nome do professor | PROFESSOR |
| f) Data da matrícula | MATRICULA |

## Parte 13 — Modelo lógico completo

### ALUNO
- id_aluno: INT PK
- nome: VARCHAR(100)
- cpf: VARCHAR(14)
- telefone: VARCHAR(20)
- data_nascimento: DATE
- turma_id: INT FK

### PROFESSOR
- id_professor: INT PK
- nome: VARCHAR(100)
- email: VARCHAR(100)
- telefone: VARCHAR(20)

### DISCIPLINA
- id_disciplina: INT PK
- nome_disciplina: VARCHAR(100)
- carga_horaria: INT
- professor_id: INT FK

### TURMA
- id_turma: INT PK
- nome_turma: VARCHAR(20)
- turno: VARCHAR(20)
- ano: INT

### MATRÍCULA
- id_matricula: INT PK
- aluno_id: INT FK
- disciplina_id: INT FK
- data_matricula: DATETIME
- situacao: VARCHAR(20)

## Parte 14 — Preparação para o modelo físico

**a) No modelo físico, o que precisamos definir além do nome dos campos?**  
Resposta: Precisamos definir os tipos de dados de cada campo, restrições (como NOT NULL e UNIQUE), chaves primárias e estrangeiras, valores padrão e campos de auto incremento.

**b) Por que precisamos definir tipos de dados?**  
Resposta: Para garantir que os dados armazenados sejam consistentes, ocupem o espaço adequado, permitam validações corretas e otimizem o desempenho do banco.

**c) Por que alguns campos devem ser obrigatórios?**  
Resposta: Porque alguns dados são essenciais para o funcionamento do sistema e não podem ficar vazios, como o nome do aluno.

**d) O que significa dizer que um campo é auto incremento?**  
Resposta: Significa que o valor do campo é gerado automaticamente pelo banco de dados, aumentando a cada novo registro, sem precisar ser informado manualmente.

**e) Quais campos normalmente usam auto incremento?**  
Resposta: Normalmente os campos de chave primária, como id_aluno, id_professor, id_disciplina, id_turma e id_matricula.

**f) Por que telefone deve ser armazenado como texto?**  
Resposta: Porque o telefone pode conter caracteres especiais (parênteses, traço), pode começar com zero e nunca é utilizado em operações matemáticas.

**g) Por que idade nem sempre é a melhor opção para armazenar no banco?**  
Resposta: Porque a idade muda com o tempo; é melhor armazenar a data de nascimento e calcular a idade quando necessário, evitando que o dado fique desatualizado.

## Parte 15 — Campos obrigatórios

| Campo | Obrigatório / Opcional |
|-----------|-------------------------|
| a) nome do aluno | OBRIGATÓRIO |
| b) CPF do aluno | OBRIGATÓRIO |
| c) telefone do aluno | OPCIONAL |
| d) nome da disciplina | OBRIGATÓRIO |
| e) carga horária da disciplina | OBRIGATÓRIO |
| f) nome do professor | OBRIGATÓRIO |
| g) data da matrícula | OBRIGATÓRIO |
| h) situação da matrícula | OBRIGATÓRIO |

## Parte 16 — Verdadeiro ou falso

| Afirmação | V/F |
|-----------|-----|
| a) O modelo lógico organiza as informações em tabelas. | V |
| b) A chave primária pode se repetir várias vezes. | F |
| c) A chave estrangeira cria uma ligação entre tabelas. | V |
| d) Uma tabela deve armazenar informações de vários assuntos misturados. | F |
| e) O campo id normalmente é usado como chave primária. | V |
| f) Um aluno pode estar em várias disciplinas. | V |
| g) Uma disciplina pode ter vários alunos. | V |
| h) A tabela matrícula ajuda a resolver o relacionamento entre aluno e disciplina. | V |
| i) O telefone deve ser armazenado como número inteiro. | F |
| j) O modelo físico detalha como o banco será implementado. | V |

## Parte 17 — Comparando modelos

**a) O modelo conceitual mostra:**  
Resposta: As entidades e relacionamentos do sistema de forma abstrata, sem se preocupar com tabelas, tipos de dados ou chaves.

**b) O modelo lógico mostra:**  
Resposta: As tabelas, atributos, chaves primárias e estrangeiras, organizando os dados de forma estruturada, ainda independente do SGBD.

**c) O modelo físico mostra:**  
Resposta: A implementação real do banco de dados em um SGBD específico, com tipos de dados, comandos SQL e restrições técnicas.

**d) O modelo lógico vem antes ou depois do modelo conceitual?**  
Resposta: Depois.

**e) O modelo físico vem antes ou depois do modelo lógico?**  
Resposta: Depois.

## Parte 18 — Desafio extra

**a) Qual campo deve ser a chave primária da tabela CURSO?**  
Resposta: id_curso

**b) Que tipo de dado pode ser usado no campo nome_curso?**  
Resposta: VARCHAR(100)

**c) Que tipo de dado pode ser usado no campo carga_horaria?**  
Resposta: INT

**d) Um curso pode ter vários alunos?**  
Resposta: Sim.

**e) Um aluno pertence a um curso?**  
Resposta: Sim.

**f) Qual campo poderia ser adicionado em ALUNO para ligar o aluno ao curso?**  
Resposta: curso_id

## Parte 19 — Modelo com CURSO

### CURSO
- id_curso: INT — PK
- nome_curso: VARCHAR(100)
- carga_horaria: INT

### ALUNO
- id_aluno: INT — PK
- nome: VARCHAR(100)
- cpf: VARCHAR(14)
- telefone: VARCHAR(20)
- data_nascimento: DATE
- turma_id: INT — FK
- curso_id: INT — FK

**a) O campo curso_id em ALUNO aponta para qual tabela?**  
Resposta: CURSO

**b) O relacionamento entre CURSO e ALUNO é de qual tipo?**  
Resposta: 1:N (um curso pode ter vários alunos, mas cada aluno pertence a um único curso).

## Parte 20 — Reflexão final

**a) Por que o modelo lógico é importante antes da criação física do banco de dados?**  
Resposta: Porque ele organiza a estrutura dos dados antes da implementação, evitando retrabalho, inconsistências e problemas de relacionamento depois que o banco já estiver em uso.

**b) Como o modelo lógico ajuda a evitar repetição de dados?**  
Resposta: Ao separar as informações em tabelas distintas e conectá-las por meio de chaves estrangeiras, evita-se que a mesma informação seja armazenada repetidamente em vários registros.

**c) Como as chaves estrangeiras ajudam na organização do banco?**  
Resposta: Elas garantem a integridade referencial, conectando tabelas relacionadas e permitindo consultas que combinem dados de diferentes entidades sem duplicação.

**d) O que pode acontecer se o banco for criado sem planejamento?**  
Resposta: Podem surgir dados duplicados, inconsistências, dificuldade para fazer alterações futuras, relacionamentos mal definidos e retrabalho para corrigir a estrutura já implementada.

**e) Qual foi a parte mais difícil da atividade?**  
Resposta: A parte mais desafiadora foi identificar corretamente os relacionamentos N:N (como entre aluno e disciplina) e entender por que uma tabela intermediária, como a MATRÍCULA, é necessária para resolvê-los sem duplicar dados.
