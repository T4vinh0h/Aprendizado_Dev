# Lista de Exercícios – Diagrama de Classes

Relações abordadas: Associação, Agregação, Composição e Herança (Generalização).

============================================================

## PARTE 1 – Rápidas (teoria)

### O que se representa em uma classe no diagrama? Cite os três "compartimentos".

**Resposta:**
Em uma classe no diagrama UML, representamos:
1. **Nome da classe** (compartimento superior)
2. **Atributos** (compartimento do meio)
3. **Métodos** (compartimento inferior)

### Qual a diferença entre atributo e método?

**Resposta:**
- **Atributo**: São as características/propriedades de uma classe (dados que ela armazena). Representam o estado do objeto.
- **Método**: São as ações/comportamentos que a classe pode executar. Representam o comportamento do objeto.

### O que significam os símbolos de visibilidade +, - e #?

**Resposta:**
- **+ (público)**: Pode ser acessado por qualquer classe
- **- (privado)**: Só pode ser acessado dentro da própria classe
- **# (protegido)**: Pode ser acessado pela própria classe e por suas subclasses (herança)

### Explique, em uma frase, cada relação:

**Associação:**
Relação simples onde uma classe "usa" ou "se relaciona com" outra, sem dependência forte de ciclo de vida.

**Agregação:**
Relação "todo-parte" onde a parte pode existir independentemente do todo (losango vazado).

**Composição:**
Relação "todo-parte" forte onde a parte não existe sem o todo (losango preenchido).

**Herança:**
Relação "é um tipo de" onde uma classe herda características e comportamentos de outra classe (generalização/especialização).

### Qual a diferença prática entre Agregação e Composição? Dê um exemplo de cada.

**Resposta:**
- **Agregação**: A parte pode existir independentemente. Exemplo: Um Time tem Jogadores - se o time acabar, os jogadores continuam existindo (podem ir para outros times).
- **Composição**: A parte não existe sem o todo. Exemplo: Uma Casa tem Cômodos - se a casa for demolida, os cômodos deixam de existir.

### O que significa a multiplicidade 1..* entre duas classes?

**Resposta:**
Significa que para uma instância da classe de origem, pode haver uma ou mais (1 ou muitos) instâncias da classe de destino. Exemplo: Um Cliente (1) pode ter vários (1..*) Pedidos.

============================================================

## PARTE 2 – Identifique a relação

Para cada situação, diga qual relação é a mais adequada: Associação, Agregação, Composição ou Herança.

1. **Um Cachorro é um tipo de Animal.**
   - **Herança** (é um tipo de)

2. **Um Pedido contém vários Itens de Pedido. Se o pedido for excluído, os itens deixam de existir.**
   - **Composição** (morre junto)

3. **Um Cliente faz vários Pedidos, mas o cliente existe independentemente dos pedidos.**
   - **Associação** (existe independentemente)

4. **Um Time possui vários Jogadores. Se o time acabar, os jogadores continuam existindo (podem ir para outros times).**
   - **Agregação** (sobrevive separado)

5. **Um Carro possui um Motor. Se o carro for destruído, o motor daquele carro também deixa de fazer sentido dentro dele.**
   - **Composição** (morre junto)

6. **Gerente e Vendedor são tipos de Funcionário.**
   - **Herança** (são tipos de)

7. **Um Aluno se matricula em várias Disciplinas. Ambos existem separadamente.**
   - **Associação** (existem separadamente)

8. **Uma Casa é composta por vários Cômodos. Se a casa é demolida, os cômodos não existem mais.**
   - **Composição** (morre junto)

============================================================

## PARTE 3 – Modelagem prática

### Exercício 1 – Biblioteca

**Classes:**
- Livro (título, autor, ISBN)
- Usuário (nome, matrícula)
- Empréstimo (data, dataDevolucao)

**Relações:**
- Usuário 1..* Empréstimo (Composição - se usuário removido, empréstimos deixam de existir)
- Empréstimo 1..1 Livro (Associação)

**Multiplicidades:**
- Um Usuário pode ter vários Empréstimos (1..*)
- Cada Empréstimo é de um único Livro (1)

### Exercício 2 – Escola

**Classes:**
- Pessoa (nome, CPF)
- Aluno (herda de Pessoa)
- Professor (herda de Pessoa)
- Disciplina (nome, cargaHoraria)

**Relações:**
- Aluno é um tipo de Pessoa (Herança)
- Professor é um tipo de Pessoa (Herança)
- Professor 1..* Disciplina (Associação)
- Disciplina 1..1 Professor
- Aluno *..* Disciplina (Associação - matrícula)

**Multiplicidades:**
- Um professor leciona várias disciplinas (1..*)
- Uma disciplina tem um único professor (1)
- Um aluno se matricula em várias disciplinas (*)
- Uma disciplina pode ter vários alunos (*)

### Exercício 3 – Loja Virtual

**Classes:**
- Pedido (data, valorTotal, status)
- ItemPedido (quantidade, subtotal)
- Produto (nome, descricao, preco, estoque)
- Cliente (nome, email, endereco)

**Relações:**
- Pedido 1..* ItemPedido (Composição - se pedido cancelado, itens somem)
- ItemPedido 1..1 Produto (Associação - produto continua existindo)
- Cliente 1..* Pedido (Associação)

**Multiplicidades:**
- Um Pedido possui vários Itens de Pedido (1..*)
- Cada ItemPedido se refere a um Produto (1)
- Um Cliente faz vários Pedidos (1..*)

### Exercício 4 – Veículos

**Classes:**
- Veículo (placa, cor, ano)
- Carro (herda de Veículo)
- Moto (herda de Veículo)
- Motor (potencia, cilindradas)
- Pneu (marca, modelo, tamanho)

**Relações:**
- Carro é um tipo de Veículo (Herança)
- Moto é um tipo de Veículo (Herança)
- Carro 1..1 Motor (Composição - motor só existe enquanto carro existir)
- Carro 4..* Pneu (Agregação - pneus podem ser reaproveitados)

**Multiplicidades:**
- Todo carro possui exatamente um Motor (1)
- Um carro pode ter vários Pneus (mínimo 4) (4..*)

### Exercício 5 – Playlist

**Classes:**
- Playlist (nome, descricao, dataCriacao)
- Musica (titulo, artista, album, duracao)
- Usuario (nome, email)

**Relações:**
- Playlist 1..* Musica (Agregação - músicas existem independentemente)
- Usuario 1..* Playlist (Composição - se usuário excluído, playlists somem)

**Multiplicidades:**
- Uma Playlist contém várias Músicas (1..*)
- Uma Música pode estar em várias Playlists (*)
- Um Usuário possui várias Playlists (1..*)

============================================================

## EXERCÍCIO FINAL – Modelagem Completa

### Sistema da Hamburgueria BurgerTech

**Classes:**

#### Pessoas
- **Pessoa** (nome, CPF, telefone)
- **Cliente** (herda de Pessoa) - endereçoEntrega
- **Funcionário** (herda de Pessoa) - matricula, salario
- **Atendente** (herda de Funcionário)
- **Entregador** (herda de Funcionário) - placaMoto

#### Lojas
- **Loja** (endereco, telefone)
- **Cardápio** (dataAtualizacao)
- **Item** (nome, preco)
- **Hambúrguer** (herda de Item)
- **Bebida** (herda de Item)
- **Ingrediente** (nome, quantidadeEstoque)

#### Pedidos
- **Pedido** (data, valorTotal, status)
- **ItemPedido** (quantidade, subtotal)

**Relações:**

**Pessoas:**
- Cliente é um tipo de Pessoa (Herança)
- Funcionário é um tipo de Pessoa (Herança)
- Atendente é um tipo de Funcionário (Herança)
- Entregador é um tipo de Funcionário (Herança)

**Lojas:**
- Loja 1..* Funcionário (Agregação - funcionários continuam existindo se loja fechar)
- Loja 1..1 Cardápio (Composição - cardápio deixa de existir se loja fechar)
- Cardápio 1..* Item (Composição - itens somem se cardápio excluído)
- Hambúrguer é um tipo de Item (Herança)
- Bebida é um tipo de Item (Herança)
- Hambúrguer *..* Ingrediente (Agregação - ingredientes existem independentemente)

**Pedidos:**
- Cliente 1..* Pedido (Associação)
- Pedido 1..* ItemPedido (Composição - itens somem se pedido cancelado)
- ItemPedido 1..1 Item (Associação - item continua existindo)
- Pedido 1..1 Entregador (Associação - entregador continua existindo)
- Pedido 1..1 Loja (Associação)

**Multiplicidades:**
- Uma Loja possui vários Funcionários (1..*)
- Cada Loja tem exatamente um Cardápio (1)
- Um Cardápio é composto por vários Itens (1..*)
- Um Hambúrguer usa vários Ingredientes (*)
- Um Cliente faz vários Pedidos (1..*)
- Um Pedido é composto por vários Itens de Pedido (1..*)
- Cada Item de Pedido se refere a um Item do Cardápio (1)
- Cada Pedido é entregue por um Entregador (1)
- Cada Pedido pertence a uma Loja (1)
