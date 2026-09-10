# Aprendizado de Programação - Baseado no curso Técnico de Desenvolvimento de Sistemas 

## Pré-requisitos

- **Node.js** (versão 14 ou superior) instalado
- **npm** (Node Package Manager) - geralmente instalado junto com Node.js
- **Git** para clonar o repositório
- Editor de código (VS Code, Sublime Text, ou outro de preferência)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/T4vinh0h/Aprendizado_Dev.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Aprendizado_Dev
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. (Opcional) Para executar arquivos TypeScript da pasta P.O.O, instale ts-node:
   ```bash
   npm install -g ts-node typescript
   ```

5. Verifique a instalação:
   ```bash
   node --version
   npm --version
   ts-node --version  # se instalou o ts-node
   ```

## Executáveis

Para executar qualquer exercício JavaScript, use o Node.js:

```bash
node caminho/para/o/arquivo.js
```

Exemplos:
```bash
node SENAC/Logica\ Prog/exemplo.js
node SENAC/P.O.O/classe_exemplo.js
```

Para executar arquivos TypeScript (pasta P.O.O), use o ts-node:

```bash
# Instalar ts-node globalmente (se não tiver)
npm install -g ts-node

# Executar arquivo TypeScript
ts-node caminho/para/arquivo.ts
```

Exemplos:
```bash
ts-node SENAC/P.O.O/b05-08-26/Otavio_Lista01_JS.ts
ts-node SENAC/P.O.O/b06-08-26/Otavio_Lista2.ts
ts-node SENAC/P.O.O/31-07-26/UML-D.C.ts
```

Para executar scripts MySQL, utilize um cliente MySQL como:
- **MySQL Workbench** (interface gráfica)
- **mysql** command-line client:
  ```bash
  mysql -u usuario -p nome_banco < arquivo.sql
  ```
- **DBeaver** (interface gráfica multi-banco)

## Estrutura do Projeto

```
Logica_Prog.-Node.js/
├── SENAC/
│   ├── Logica Prog/      # Exercícios de lógica de programação
│   ├── MySQL/            # Exercícios relacionados a MySQL
│   ├── P.O.O/            # Programação Orientada a Objetos
│   └── UGC_23-06-26/     # Material específico
├── node_modules/         # Dependências instaladas
├── package.json          # Configuração do projeto
├── package-lock.json     # Lock das dependências
├── LICENSE               # Licença do projeto
└── README.md             # Documentação
```

## Dependências

- **prompt-sync**: Biblioteca para leitura de entrada de dados via console de forma síncrona.
- **typescript**: Linguagem TypeScript para tipagem estática (usado na pasta P.O.O).
- **ts-node**: Execução direta de arquivos TypeScript sem compilação prévia.

---

## Lógica de Programação

### Conceitos Identificados e Frequência

**Conceitos Básicos (presentes em 40+ arquivos):**
- **Variáveis e constantes (`let`, `const`, `var`)**: armazenam valores de entrada, resultados de cálculos, contadores e estados. **- 340 arquivos**
- **Operadores aritméticos (+, -, *, /)**: usados em somas, subtrações, multiplicações, divisões, médias e conversões. **- 365 arquivos**
- **console.log**: exibe resultados, mensagens e orientações ao usuário. **- 338 arquivos**
- **Template strings (`${}`)**: formatam saídas dinâmicas com variáveis dentro de texto. **- 157 arquivos**
- **Comentários**: explicam a lógica por etapas e organizam exercícios. **- 340 arquivos**
- **Entrada de dados com prompt-sync**: lê valores do usuário em exercícios interativos. **- 176 arquivos**
- **Conversão de tipos (Number(), parseFloat(), parseInt())**: transforma texto em número para operações matemáticas. **- 99 arquivos**

**Conceitos Intermediários (presentes em 20-40 arquivos):**
- **Condicionais (if, else, else if)**: tomam decisões como aprovação/reprovação e validações de opções. **- 150 arquivos**
- **Operadores de comparação (>, <, >=, <=, ==, ===, !=)**: verificam intervalos, igualdade e combinações de condições. **- 229 arquivos**
- **Operadores lógicos (&&, ||, !)**: combinam múltiplas condições em expressões complexas. **- 115 arquivos**
- **Valores booleanos (true, false)**: controlam fluxos de validação e flags de estado. **- 33 arquivos**
- **Strings e manipulação básica**: tratam nomes, respostas, buscas e formatação de texto. **- 35 arquivos**
- **Validações de entrada**: checam números válidos, faixas esperadas e respostas corretas. **- 98 arquivos**

**Conceitos Avançados (presentes em 5-15 arquivos):**
- **Loops (while, for)**: repetem cálculos, percorrem listas e repetem tarefas até condição ser satisfeita. **- 125 arquivos**
- **Switch case**: escolhem ações com base em opções digitadas pelo usuário. **- 17 arquivos**
- **Arrays**: armazenam coleções como notas, itens e listas de valores. **- 99 arquivos**
- **Métodos de arrays (push)**: adicionam elementos em listas dinâmicas. **- 24 arquivos**
- **Funções declaradas**: encapsulam cálculos e lógica reutilizável. **- 75 arquivos**
- **Estruturas aninhadas**: combinam loops e condicionais para resolver problemas mais complexos. **- 88 arquivos**
- **Break e continue**: controlam o fluxo dentro de repetições. **- 26 arquivos**
- **Cálculos matemáticos complexos**: incluem raízes, arredondamentos e potências. **- 38 arquivos**
- **toFixed() para formatação**: formata números com casas decimais. **- 21 arquivos**
- **toLowerCase(), toUpperCase(), trim()**: normalizam entrada de texto. **- 8 arquivos**
- **typeof**: verifica tipos de dados em validações. **- 5 arquivos**

Situações comuns encontradas nos exercícios:
- cálculo de médias escolares e avaliação de notas
- menus de opções e escolha de operações
- validação de idade, senha, opção ou entrada numérica
- manipulação de listas de produtos, nomes e valores
- conversão de unidades e cálculos financeiros
- repetição para somar, contar, buscar e repetir tarefas

---

## MySQL

### Conceitos Identificados e Frequência

Os arquivos desta pasta exploram conceitos de banco de dados MySQL aplicados em sistemas práticos como bibliotecas, escolas, pet shops e sistemas criminais.
**Conceitos Básicos (presentes em 8+ arquivos):**
- **CREATE DATABASE**: cria novos bancos de dados para organizar sistemas completos. **- 8 arquivos**
- **CREATE TABLE**: define estrutura de tabelas com campos, tipos e restrições. **- 8 arquivos**
- **Tipos de dados (INT, VARCHAR, DECIMAL, DATE, DATETIME, YEAR, ENUM, BOOLEAN, TEXT)**: define o tipo de informação que cada coluna armazena. **- 8 arquivos**
- **PRIMARY KEY (PK)**: identifica unicamente cada registro da tabela, geralmente com AUTO_INCREMENT. **- 8 arquivos**
- **FOREIGN KEY (FK)**: cria relacionamentos entre tabelas, garantindo integridade referencial. **- 8 arquivos**
- **AUTO_INCREMENT**: gera valores automáticos incrementais para chaves primárias. **- 8 arquivos**
- **NOT NULL**: torna campos obrigatórios, impedindo valores vazios. **- 8 arquivos**
- **UNIQUE**: garante que valores em uma coluna não se repitam. **- 6 arquivos**
- **DEFAULT**: define um valor padrão quando nenhum valor é informado. **- 6 arquivos**

**Conceitos Intermediários (presentes em 4-7 arquivos):**
- **INSERT**: adiciona novos registros nas tabelas, um ou múltiplos de uma vez. **- 7 arquivos**
- **UPDATE**: modifica registros existentes com base em condições. **- 7 arquivos**
- **DELETE**: remove registros de tabelas conforme filtros especificados. **- 7 arquivos**
- **SELECT**: consulta e recupera dados das tabelas. **- 8 arquivos**
- **WHERE**: filtra resultados baseado em condições específicas. **- 8 arquivos**
- **ORDER BY**: ordena resultados por colunas em ordem crescente (ASC) ou decrescente (DESC). **- 7 arquivos**
- **LIMIT**: limita a quantidade de registros retornados em uma consulta. **- 6 arquivos**
- **DISTINCT**: remove valores duplicados dos resultados. **- 5 arquivos**
- **INNER JOIN**: combina registros de tabelas relacionadas onde há correspondência. **- 5 arquivos**
- **LEFT JOIN**: retorna todos os registros da tabela esquerda e correspondências da direita. **- 5 arquivos**
- **ALTER TABLE**: modifica estrutura de tabelas (adicionar/remover colunas, alterar tipos). **- 6 arquivos**
- **DROP TABLE**: exclui tabelas inteiras do banco de dados. **- 6 arquivos**
- **TRUNCATE TABLE**: remove todos os registros mantendo a estrutura, resetando auto_increment. **- 5 arquivos**
- **ON DELETE CASCADE**: exclui registros relacionados automaticamente quando o registro pai é deletado. **- 4 arquivos**
- **ON DELETE SET NULL**: define como NULL as chaves estrangeiras quando o registro pai é deletado. **- 4 arquivos**
- **ON UPDATE CASCADE**: atualiza automaticamente chaves estrangeiras quando a chave primária é alterada. **- 4 arquivos**

**Conceitos Avançados (presentes em 1-3 arquivos):**
- **GROUP BY**: agrupa resultados por uma ou mais colunas para análise. **- 3 arquivos**
- **Funções de agregação (COUNT, SUM, AVG, MAX, MIN)**: COUNT conta registros, SUM soma valores, AVG calcula média, MAX retorna maior valor, MIN retorna menor valor. **- 3 arquivos**
- **BETWEEN**: filtra valores dentro de um intervalo específico. **- 5 arquivos**
- **IN**: filtra valores que correspondem a uma lista de opções. **- 5 arquivos**
- **LIKE**: busca padrões de texto usando curingas (%). **- 3 arquivos**
- **CHECK**: valida se valores atendem a uma condição específica. **- 2 arquivos**
- **INDEX**: cria índices para acelerar consultas em colunas frequentemente pesquisadas. **- 2 arquivos**
- **Relacionamentos 1:N e N:N**: um registro de uma tabela se relaciona com muitos de outra (1:N) ou muitos com muitos (N:N). **- 8 arquivos**
- **Normalização (1FN, 2FN, 3FN)**: elimina redundâncias e dependências anômalas. **- 2 arquivos**
- **Dependências funcionais**: relação onde um atributo depende de outro para determinar seu valor. **- 2 arquivos**
- **Modelo conceitual, lógico e físico**: representação abstrata, organização em tabelas e implementação real em SGBD. **- 3 arquivos**

Situações comuns encontradas nos exercícios de MySQL:
- modelagem de sistemas completos (biblioteca, escola, pet shop, hotel, cinema)
- criação de relacionamentos entre tabelas com chaves estrangeiras
- implementação de cascata (CASCADE/SET NULL) para manter integridade
- consultas complexas com JOIN para combinar dados de múltiplas tabelas
- uso de funções de agregação para gerar estatísticas e relatórios
- normalização de bancos para eliminar redundâncias
- manipulação de dados (inserção, atualização, exclusão) com filtros específicos

---

## P.O.O. - Programação Orientada a Objetos

### Conceitos Identificados e Frequência

**Conceitos Básicos (presentes em 3+ arquivos):**
- **Classes (`class`)**: modelo/template que define estrutura de objetos com atributos e métodos. **- 3 arquivos**
- **Objetos (`new`)**: instâncias concretas de classes, criadas com operador new. **- 3 arquivos**
- **Atributos/Propriedades**: variáveis dentro de classes que armazenam dados (nome, idade, preço, etc.). **- 3 arquivos**
- **Construtores (`constructor`, `this`)**: métodos especiais para inicializar objetos com valores iniciais e referenciar instância atual. **- 3 arquivos**
- **Métodos**: funções dentro de classes que definem comportamentos dos objetos. **- 3 arquivos**
- **Tipagem (`: tipo`, `void`)**: uso de tipos TypeScript (`string`, `number`, `void`) para variáveis, parâmetros e retornos. **- 3 arquivos**
- **Variáveis (`const`, `let`)**: declaram constantes (não reatribuíveis) e variáveis com escopo de bloco (reatribuíveis). **- 3 arquivos**
- **console.log**: exibe resultados, mensagens e orientações ao usuário em métodos. **- 3 arquivos**

**Conceitos Intermediários (presentes em 1-3 arquivos):**
- **Métodos com retorno (`: number`, `: string`)**: funções que retornam valores específicos. **- 3 arquivos**
- **Métodos void (`: void`)**: funções que não retornam valor explícito. **- 3 arquivos**
- **Parâmetros obrigatórios**: argumentos que devem ser fornecidos ao chamar métodos. **- 3 arquivos**
- **Parâmetros opcionais (`?`)**: argumentos marcados com ? que podem ser omitidos ao chamar função. **- 1 arquivo**
- **Funções declaradas (`function`, `=>`)**: palavra-chave para declarar funções e sintaxe de arrow function. **- 1 arquivo**
- **Condicionais em métodos (`if`, `else`)**: uso de estruturas condicionais para lógica de negócios dentro de classes. **- 3 arquivos**
- **Laços em métodos (`for`)**: uso de laços de repetição para repetir operações dentro de classes. **- 3 arquivos**
- **Arrays/Vetores (`[]`)**: armazenamento de múltiplos objetos ou valores em classes. **- 2 arquivos**
- **Classes compostas**: uma classe usando objetos de outra classe (ex: Escola com Aluno). **- 1 arquivo**

**Conceitos Avançados (presentes em 1-2 arquivos):**
- **Lógica de negócios complexa**: validações, cálculos de média, IMC, controle de estoque. **- 2 arquivos**
- **Sistemas completos**: implementação de bibliotecas, estacionamentos, caixas eletrônicos, escolas. **- 2 arquivos**
- **Regras de negócio**: validação de saldo, controle de vagas, verificação de estoque. **- 2 arquivos**

**Situações comuns encontradas nos exercícios de POO:**
- criação de classes para modelar entidades do mundo real (Pessoa, Produto, Carro, Aluno)
- implementação de métodos para apresentar dados, realizar cálculos e validar regras
- uso de condicionais para controlar fluxo de lógica de negócios
- uso de laços para percorrer listas de objetos ou repetir operações
- implementação de sistemas completos com múltiplas classes interconectadas
- validação de regras de negócio (saldo suficiente, estoque disponível, vagas livres)

---

## Licença

Este projeto está licenciado sob a **Licença MIT**.

### Detalhes da Licença MIT

**Permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o "Software"), para lidar com o Software sem restrições, incluindo, sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do Software, e para permitir pessoas a quem o Software é fornecido para fazê-lo, sujeito às seguintes condições:**

- O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

**O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO VIOLAÇÃO. EM NENHUMA CASO OS AUTORES OU TITULARES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTRAS RESPONSIBILIDADES, SEJA EM UMA AÇÃO DE CONTRATO, ATO ILÍCITO OU DE OUTRA FORMA, DECORRENTE DE, FORA OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO SOFTWARE.**

Para mais informações, consulte o arquivo [LICENSE](LICENSE) neste repositório.

---
