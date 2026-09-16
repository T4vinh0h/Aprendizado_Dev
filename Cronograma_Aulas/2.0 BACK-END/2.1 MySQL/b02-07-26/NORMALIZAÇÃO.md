# Atividade — As 3 Formas Normais em Banco de Dados

**Objetivo:** Compreender as três primeiras formas normais e aplicar técnicas de normalização em tabelas de banco de dados.

## Parte 1 — Conceitos

**a) O que é normalização?**  
É um processo utilizado para organizar os dados de um banco de dados, dividindo as informações em tabelas menores e bem estruturadas, seguindo um conjunto de regras (as formas normais), com o objetivo de eliminar redundâncias e inconsistências.

**b) Qual o objetivo da normalização em banco de dados?**  
Reduzir a duplicação de dados, evitar inconsistências, facilitar a manutenção e garantir que cada informação fique armazenada em um único lugar, tornando o banco mais confiável e eficiente.

**c) O que é redundância de dados?**  
É quando a mesma informação aparece repetida em vários lugares da tabela ou do banco. Por exemplo, repetir o nome e telefone de um cliente em cada venda que ele fizer.

**d) O que são dependências funcionais?**  
É a relação entre atributos de uma tabela em que o valor de um campo depende diretamente de outro. Por exemplo, o nome_produto depende do cod_produto — ou seja, conhecendo o código do produto, sabe-se automaticamente qual é o nome dele.

## Parte 2 — Primeira Forma Normal (1FN)

### Tabela original

| id_cliente | nome | telefones |
|------------|------|-----------|
| 1 | Ana | 9999-1111, 9888-2222 |
| 2 | Carlos | 9777-3333 |

**a) A tabela está na 1FN? Justifique.**  
Não. A 1FN exige que cada campo contenha apenas um valor atômico (indivisível). Na tabela, o campo telefones guarda mais de um valor na mesma célula (ex: "9999-1111, 9888-2222"), o que viola essa regra.

**b) Qual o problema encontrado?**  
Multivalorado em um único campo: não é possível buscar, filtrar ou relacionar telefones individualmente, e a lista pode crescer sem limite definido dentro de uma única coluna.

**c) Reescreva a tabela corretamente aplicando a 1FN.**

#### Tabela clientes

| id_cliente (PK) | nome |
|-----------------|------|
| 1 | Ana |
| 2 | Carlos |

#### Tabela telefones (nova)

| id_telefone (PK) | id_cliente (FK) | telefone |
|------------------|-----------------|----------|
| 1 | 1 | 9999-1111 |
| 2 | 1 | 9888-2222 |
| 3 | 2 | 9777-3333 |

## Parte 3 — Segunda Forma Normal (2FN)

### Tabela original

| id_pedido | cod_produto | nome_produto | quantidade |
|-----------|-------------|--------------|------------|
| 1 | 10 | Mouse | 2 |
| 1 | 11 | Teclado | 1 |

**a) A tabela está na 2FN? Explique.**  
Não. A 2FN exige que, em tabelas com chave primária composta, todos os atributos não-chave dependam da chave completa. Aqui a chave é composta por (id_pedido, cod_produto), mas nome_produto depende apenas de cod_produto, e não da chave inteira.

**b) Qual atributo possui dependência parcial?**  
O atributo nome_produto, pois depende só de cod_produto, não de id_pedido.

**c) Como a tabela poderia ser reorganizada?**

#### Tabela produtos

| cod_produto (PK) | nome_produto |
|------------------|--------------|
| 10 | Mouse |
| 11 | Teclado |

#### Tabela itens_pedido

| id_pedido (FK) | cod_produto (FK) | quantidade |
|----------------|------------------|------------|
| 1 | 10 | 2 |
| 1 | 11 | 1 |

## Parte 4 — Terceira Forma Normal (3FN)

### Tabela original

| id_funcionario | nome | id_departamento | nome_departamento |
|----------------|------|------------------|-------------------|
| 1 | João | 10 | Financeiro |
| 2 | Maria | 20 | RH |

**a) A tabela está na 3FN? Justifique.**  
Não. A 3FN exige que não existam dependências transitivas, ou seja, atributos não-chave dependendo de outros atributos não-chave. Aqui, nome_departamento depende de id_departamento, e não diretamente de id_funcionario (chave primária).

**b) Qual dependência transitiva existe?**  
id_funcionario → id_departamento → nome_departamento. O nome do departamento depende do código do departamento, e não do funcionário diretamente.

**c) Como corrigir o problema?**

#### Tabela departamentos

| id_departamento (PK) | nome_departamento |
|----------------------|-------------------|
| 10 | Financeiro |
| 20 | RH |

#### Tabela funcionarios

| id_funcionario (PK) | nome | id_departamento (FK) |
|---------------------|------|----------------------|
| 1 | João | 10 |
| 2 | Maria | 20 |

## Parte 5 — Atividade Prática

### Tabela original

| id_venda | cliente | produto | categoria | preço |
|----------|---------|---------|-----------|-------|
| ... | ... | ... | ... | ... |

**a) Identifique problemas de redundância.**  
Essa estrutura centraliza dados demais em cascata deixando claro que precisamos dividir essa tabela para evitar conflitos. (produto → categoria; venda → cliente; venda → produto → preço).

**b) e c) Normalize até a 3FN — Crie as tabelas separadas.**

#### Tabela clientes

| id_cliente (PK) | nome_cliente |
|------------------|--------------|
| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |

#### Tabela categorias

| id_categoria (PK) | nome_categoria |
|-------------------|----------------|
| xxxxxxxxxxxxx | xxxxxxxxxxxxx |

#### Tabela produtos

| id_produto (PK) | nome_produto | preco | id_categoria (FK) |
|-----------------|--------------|-------|-------------------|
| xxxxxxxxxxxxx | xxxxxxxxxxxxx | xxxxxxxxxxxxx | xxxxxxxxxxxxx |

#### Tabela vendas

| id_venda (PK) | id_cliente (FK) | id_produto (FK) | data_venda | quantidade |
|----------------|-----------------|-----------------|------------|------------|
| xxxxxxxxxxxxxx | xxxxxxxxxxxxxx | xxxxxxxxxxxxxx | xxxxxxxxxxxxxx | xxxxxxxxxxxxxx |

**d) Identifique:**

**Chaves primárias:**
- clientes.id_cliente
- categorias.id_categoria
- produtos.id_produto
- vendas.id_venda

**Chaves estrangeiras:**
- produtos.id_categoria → referencia categorias.id_categoria
- vendas.id_cliente → referencia clientes.id_cliente
- vendas.id_produto → referencia produtos.id_produto

## Parte 6 — Reflexão

**Por que bancos de dados normalizados facilitam manutenção e atualização dos dados?**  
Porque cada informação fica armazenada em um único lugar. Se o preço de um produto ou o nome de um cliente mudar, basta atualizar um único registro, em vez de precisar corrigir a mesma informação em várias linhas espalhadas pela tabela. Isso reduz o risco de inconsistências (dados desatualizados ou contraditórios), diminui o espaço ocupado pelo banco e torna o sistema mais confiável e fácil de manter à medida que cresce.
