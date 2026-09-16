# EXERCÍCIOS CONCEITUAIS - MODELAGEM DE BANCO DE DADOS

## Situação-problema

Uma loja deseja organizar melhor o controle de suas vendas. Atualmente, as informações são anotadas manualmente. A loja precisa registrar:

- **clientes**: Cada cliente pode realizar várias vendas.
- **produtos**: Cada venda pertence a um cliente.
- **vendas**: Cada venda pode registrar um produto vendido.

## Exercício 1 — Identificação das tabelas

Leia a situação-problema e responda:

**Quais tabelas são necessárias para esse sistema?**  
Neste exemplo, são necessárias as tabelas - PRODUTOS, CLIENTES E VENDAS.

**Por que precisamos de uma tabela para clientes?**  
É preciso registrar pois, tendo os dados do cliente conseguimos vincular os produtos ao mesmo, evitando assim, eventuais problemas a cada venda feita realizado por ele(a).

**Por que precisamos de uma tabela para produtos?**  
Deve-se ter um registro individual, para que cada produto seja consultado independente de sua finalidade.

**Por que precisamos de uma tabela para vendas?**  
Para registrar a transação, especificando o cliente ao produto em um determinado momento e quantidade.

## Exercício 2 — Identificação dos campos

Para cada tabela abaixo, escreva quais campos ela deve ter.

- **clientes**: ID, Nome, CPF/CNPJ, Telefone.
- **produtos**: ID, Nome, Categoria, Preço, Estoque.
- **vendas**: ID, ID do Produto, ID do Cliente, Data da Venda, Quantidade, Valor Total.

## Exercício 3 — Completando a tabela clientes

Complete o modelo lógico da tabela clientes.

| Campo | Tipo de dado | Chave primária | Obrigatório | Auto incremento |
|-------|------------|---------------|------------|----------------|
| id | INT | sim | sim | sim |
| nome | VARCHAR(100) | não | sim | não |
| telefone | VARCHAR(20) | não | não | não |
| cpf | VARCHAR(14) | não | sim | não |

## Exercício 4 — Completando a tabela produtos

Complete o modelo lógico da tabela produtos.

| Campo | Tipo de dado | Chave primária | Obrigatório | Auto incremento |
|-------|------------|---------------|------------|----------------|
| id | INT | sim | sim | sim |
| nome | VARCHAR(100) | não | sim | não |
| preco | DECIMAL(10,2) | não | sim | não |
| estoque | INT | não | sim | não |

## Exercício 5 — Completando a tabela vendas

Complete o modelo lógico da tabela vendas.

| Campo | Tipo de dado | Chave primária | Chave estrangeira | Obrigatório | Auto incremento |
|-------|------------|---------------|------------------|------------|----------------|
| id | INT | sim | não | sim | sim |
| data_venda | DATETIME | não | não | sim | não |
| cliente_id | INT | não | sim | sim | não |
| produto_id | INT | não | sim | sim | não |
| quantidade | INT | não | não | sim | não |
| valor_total | DECIMAL(10,2) | não | não | sim | não |

## Exercício 6 — Escolhendo tipos de dados

Escolha o tipo de dado mais adequado para cada informação.

- Código do cliente: INT
- Nome do cliente: VARCHAR(100)
- Telefone do cliente: VARCHAR(20)
- CPF do cliente: VARCHAR(14)
- Código do produto: INT
- Nome do produto: VARCHAR(100)
- Preço do produto: DECIMAL(10,2)
- Quantidade em estoque: INT
- Data e hora da venda: DATETIME
- Valor total da venda: DECIMAL(10,2)

## Exercício 7 — Chave primária

Responda:

**O que é uma chave primária?**  
É um/vários campos que identificam um registro especifico de forma unica, ou seja, um dado que não pode ser repetido dentro da tabela SQL. Como por exemplo o CPF.

**Para que serve o campo id em uma tabela?**  
Uma garantia do programa que, mesmo que duas pessoas tenham o mesmo nome, sejam diferenciadas pelo código.

**Qual campo identifica cada cliente?**  
Cliente (id).

**Qual campo identifica cada produto?**  
Produto (id).

**Qual campo identifica cada venda?**  
Venda (id).

**Por que o campo id não deve se repetir?**  
Porque a chave primária serve para discernir um registro específico; se houvesse repetição, o sistema não saberia qual registro acessar.

## Exercício 8 — Chave estrangeira

Observe os campos da tabela vendas: id ; data_venda ; cliente_id ; produto_id ; quantidade ; valor_total

Responda:

**Qual campo liga a venda ao cliente?**  
O campo cliente_id.

**Qual campo liga a venda ao produto?**  
O campo produto_id.

**O campo cliente_id faz referência a qual tabela?**  
Faz referência à tabela clientes (ao campo id de clientes).

**O campo produto_id faz referência a qual tabela?**  
Faz referência à tabela produtos (ao campo id de produtos).

**Por que a tabela vendas precisa se ligar à tabela clientes?**  
Porque cada venda precisa saber qual cliente a realizou, sem repetir todos os dados do cliente dentro da própria venda.

**Por que a tabela de vendas precisa se ligar à tabela de produtos?**  
Porque cada venda precisa saber qual produto foi vendido, sem repetir todos os dados do produto dentro da própria venda.

## Exercício 9 — Relacionamentos

Complete as frases usando 1:N ou N:1.

- Um cliente pode fazer várias vendas. **Relacionamento: 1:N**
- Uma venda pertence a um cliente. **Relacionamento: N:1**
- Um produto pode aparecer em várias vendas. **Relacionamento: 1:N**
- Uma venda possui um produto. **Relacionamento: N:1**

## Exercício 10 — Verdadeiro ou falso

Marque V para verdadeiro e F para falso.

- (V) Uma tabela armazena dados sobre um assunto.
- (V) Uma coluna representa uma característica da tabela.
- (V) Um registro é uma linha da tabela.
- (F) A chave primária pode se repetir várias vezes.
- (V) A chave estrangeira liga uma tabela a outra.
- (F) O telefone deve ser INT porque possui números.
- (V) O preço deve usar DECIMAL(10,2).
- (V) O campo id normalmente é usado como chave primária.
- (V) A tabela vendas pode ter uma chave estrangeira para clientes.
- (V) O campo cliente_id identifica o cliente relacionado à venda.

## Exercício 11 — Corrigindo tipos de dados

Analise os campos abaixo e corrija os tipos de dados quando necessário.

**Atributo - telefone INT**  
Tipo correto: VARCHAR(20)  
Justificativa: O telefone pode conter caracteres como parênteses, hífen e o número 0 à esquerda (DDD), além de não ser usado para cálculos matemáticos.

**Atributo - preco VARCHAR(100)**  
Tipo correto: DECIMAL(10,2)  
Justificativa: Preço é um valor numérico que precisa manter casas decimais exatas e permitir cálculos, o que o texto não garante.

**Atributo - nome INT**  
Tipo correto: VARCHAR(100)  
Justificativa: Como o nome é um texto composto por letras, acentos e espaços. Não faz sentido tratá-lo como número Inteiro.

**Atributo - data_venda VARCHAR(100)**  
Tipo correto: DATETIME  
Justificativa: Datas exigem um formato exclusivo, essencialmente com objetivo de realizar operações matemáticas (ex: cálculos de intervalo).

**Atributo - estoque DECIMAL(10,2)**  
Tipo correto: INT  
Justificativa: Como o estoque serve para contar unidades inteiras, não faz o menor sentido usar casas decimais.

## Exercício 12 — Modelo lógico textual

Complete o modelo lógico textual abaixo com os tipos de dados:

**clientes:**
- id INT PK
- nome VARCHAR(100)
- telefone VARCHAR(20)
- cpf VARCHAR(18)

**produtos:**
- id INT PK
- nome VARCHAR(100)
- preco DECIMAL(10,2)
- estoque INT

**vendas:**
- id INT PK
- data_venda DATETIME
- cliente_id INT FK
- produto_id INT FK
- quantidade INT
- valor_total DECIMAL(10,2)

## Exercício 13 — Identificando PK, FK ou campo comum

Classifique cada campo como PK, FK ou comum.

- clientes.id: PK
- clientes.nome: comum
- clientes.telefone: comum
- produtos.id: PK
- produtos.nome: comum
- produtos.preco: comum
- vendas.id: PK
- vendas.cliente_id: FK
- vendas.produto_id: FK
- vendas.valor_total: comum

## Exercício 14 — Desenhando o relacionamento

Represente em forma de desenho simples, os relacionamentos entre as tabelas:

```
clientes 1 —— N vendas
produtos 1 —— N vendas
```

**O que significa o lado 1?**  
Quer dizer que a relação só envolve um registro por vez. É sempre um único cliente ou um único produto, sem misturar as coisas.

**O que significa o lado N?**  
Em termos simples, o outro lado da relação aceita vários registros vinculados, permitindo que existam diversas vendas para um único cadastro.

**Por que clientes se relacionam com vendas?**  
Porque um cliente pode realizar diversas vendas ao longo do tempo, e cada venda precisa estar vinculada a quem a fez.

**Por que produtos se relacionam com vendas?**  
Porque um produto pode ser vendido diversas vezes, e cada venda precisa registrar qual produto foi vendido.

## Exercício 15 — Analisando dados repetidos

Observe a anotação abaixo:

```
Venda 1
Cliente: João
Telefone: 99999-1111
Produto: Mouse
Preço: 80,00
Quantidade: 2

Venda 2
Cliente: João
Telefone: 99999-1111
Produto: Teclado
Preço: 150,00
Quantidade: 1
```

Responda:

**Quais dados aparecem repetidos?**  
O nome do cliente (João) e o telefone (99999-1111) aparecem repetidos nas duas vendas.

**Por que repetir o nome e telefone do cliente em várias vendas pode ser ruim?**  
Porque gera redundância: se o telefone do cliente mudar, seria necessário atualizar em todas as vendas dele, aumentando o risco de inconsistência nos dados.

**Em qual tabela os dados do cliente deveriam ficar?**  
Na tabela clientes.

**Em qual tabela os dados do produto deveriam ficar?**  
Na tabela produtos.

**Em qual tabela deveria ficar o registro da venda?**  
Na tabela vendas, referenciando o cliente e o produto por meio de chaves estrangeiras (cliente_id e produto_id).

## Exercício 16 — Criando o modelo lógico final

Escreva o modelo lógico final do sistema:

**Clientes:**
- id INT PK
- nome VARCHAR(100)
- telefone VARCHAR(20)
- cpf VARCHAR(14)

**Produtos:**
- id INT PK
- nome VARCHAR(100)
- preco DECIMAL(10,2)
- estoque INT

**Vendas:**
- id INT PK
- data_venda DATETIME
- cliente_id INT FK
- produto_id INT FK
- quantidade INT
- valor_total DECIMAL(10,2)

## Exercício 17 — Explicando o modelo

Responda com suas palavras:

**O que a tabela clientes armazena?**  
Armazena os dados cadastrais de cada cliente, como nome, telefone e CPF.

**O que a tabela produtos armazena?**  
Armazena os dados de cada produto disponível para venda, como nome, preço e estoque.

**O que a tabela de vendas armazena?**  
É aqui que ficam armazenadas as transações, reunindo informações essenciais como o cliente, o produto, a data da compra, a quantidade de itens e o valor total.

**Por que a venda precisa ter cliente_id?**  
Para saber qual cliente realizou aquela venda específica, sem precisar repetir todos os dados do cliente na própria venda.

**Por que a venda precisa ter produto_id?**  
Para saber qual produto foi vendido naquela transação, sem precisar repetir todos os dados do produto na própria venda.

**O que aconteceria se não existisse chave estrangeira?**  
Não haveria uma ligação confiável entre as tabelas — seria possível registrar uma venda para um cliente ou produto inexistente, e o banco não garantiria a integridade dos dados entre as tabelas.
