# Atividade de POO - 27/07/26

## Parte 1 – Questões Teóricas

### 1. Explique, com suas palavras, o que é POO (Programação Orientada a Objetos).

POO é um paradigma de programação que organiza o código em objetos, que são instâncias de classes. Cada objeto combina dados (atributos) e comportamentos (métodos), permitindo modelar sistemas de forma mais próxima da realidade, com foco em reutilização, encapsulamento e modularidade.

### 2. Qual a diferença entre CLASSE e OBJETO? Dê um exemplo do cotidiano.

- **Classe**: É o modelo ou template que define a estrutura e comportamento de um tipo de objeto.
- **Objeto**: É uma instância concreta de uma classe.

**Exemplo**: A classe "Carro" define que todo carro tem cor, modelo e ano (atributos) e pode acelerar e frear (métodos). Um objeto seria um carro específico: "Fusca Vermelho, 1975".

### 3. O que é UML? Ela é uma linguagem de programação? Justifique.

UML (Unified Modeling Language) é uma linguagem de modelagem visual padronizada para especificar, visualizar, documentar e artefatos de sistemas de software. **Não é uma linguagem de programação** porque não é executável; serve apenas para documentação e comunicação entre desenvolvedores e stakeholders.

### 4. Cite os quatro objetivos da UML.

1. Especificar a estrutura e comportamento de um sistema
2. Visualizar a arquitetura do sistema
3. Documentar as decisões de design
4. Facilitar a comunicação entre equipe e stakeholders

### 5. Qual a diferença entre requisitos funcionais e não funcionais? Dê um exemplo de cada.

- **Requisitos funcionais**: Descrevem o que o sistema deve fazer (funcionalidades).
  - Exemplo: "O sistema deve permitir que o usuário faça login com e-mail e senha."
- **Requisitos não funcionais**: Descrevem como o sistema deve ser (qualidades).
  - Exemplo: "O sistema deve responder em menos de 2 segundos."

### 6. O que é um ATOR em um Diagrama de Casos de Uso? Ele precisa ser sempre uma pessoa?

Um ator é uma entidade externa que interage com o sistema, podendo ser um usuário, outro sistema ou dispositivo. **Não precisa ser sempre uma pessoa**; pode ser um sistema externo (ex: "Sistema de Pagamento") ou hardware (ex: "Sensor de Temperatura").

### 7. Explique, em uma frase, cada um dos quatro tipos de relacionamento:

- **Associação**: Relacionamento geral entre ator e casos de uso.
- **Inclusão («include»)**: Caso de uso base obrigatoriamente inclui outro caso de uso.
- **Extensão («extend»)**: Caso de uso estende outro caso de uso de forma opcional sob condição.
- **Herança (Generalização)**: Caso de uso filho herda comportamento do caso de uso pai.

### 8. Marque a alternativa CORRETA sobre o relacionamento «include»:

(X) Representa um comportamento obrigatório, reaproveitado por vários casos de uso.
( ) Representa um comportamento opcional, executado apenas em certas condições.
( ) É utilizado apenas entre atores.
( ) Substitui a Associação em sistemas grandes.

### 9. Marque a alternativa CORRETA sobre o relacionamento «extend»:

( ) O caso base não funciona sem o caso estendido.
( ) A seta aponta do caso base para o caso estendido.
(X) Representa um comportamento opcional, que ocorre sob certa condição.
( ) É sinônimo de herança entre atores.

### 10. O nome de um caso de uso deve ser formado por qual estrutura? Dê 3 exemplos válidos.

Deve ser formado por **Verbo + Objeto** (ação + entidade).

**Exemplos válidos**:
- Consultar Unidade Curricular
- Reservar Sala de Aula
- Emitir Atestado Médico

---

## Parte 2 – Identifique o Relacionamento

### 1. Em um sistema bancário, toda vez que o cliente vai realizar uma transferência, é necessário que ele autentique-se antes. O mesmo vale para pagar boleto e ver saldo.

**Resposta**: Inclusão («include») - A autenticação é obrigatória e reaproveitada por vários casos de uso.

### 2. Ao finalizar uma compra em uma loja virtual, o cliente pode, se desejar, aplicar um cupom de desconto. A compra se conclui normalmente sem o cupom.

**Resposta**: Extensão («extend») - O cupom é opcional e ocorre sob condição do usuário.

### 3. Em um sistema de biblioteca, o aluno realiza a reserva de um livro.

**Resposta**: Associação - Relacionamento direto entre o ator (aluno) e o caso de uso (reservar livro).

### 4. Em um sistema de RH, todo gerente é um funcionário. Além das ações que qualquer funcionário faz, o gerente pode aprovar horas extras.

**Resposta**: Herança (Generalização) - Gerente herda de Funcionário e adiciona comportamento específico.

### 5. Em um sistema de e-commerce, não é possível finalizar uma compra sem antes calcular o frete.

**Resposta**: Inclusão («include») - Calcular frete é obrigatório para finalizar compra.

### 6. Ao cadastrar um usuário em um sistema, caso o usuário queira, ele pode informar uma foto de perfil. O cadastro conclui-se mesmo sem foto.

**Resposta**: Extensão («extend») - Foto de perfil é opcional no cadastro.

### 7. Em um sistema de estacionamento, o cliente emite o ticket de entrada.

**Resposta**: Associação - Relacionamento direto entre ator e caso de uso.

### 8. No sistema de uma clínica, médicos e enfermeiros são tipos de funcionários. Ambos podem bater ponto, mas o médico também pode assinar receitas.

**Resposta**: Herança (Generalização) - Médico e Enfermeiro herdam de Funcionário.

### 9. Ao efetuar um pagamento, o sistema verifica pendências apenas quando o cliente tem histórico de inadimplência.

**Resposta**: Extensão («extend») - Verificação de pendências é condicional (ocorre apenas se houver histórico de inadimplência).

### 10. Em um sistema de emissão de nota fiscal, sempre que uma nota é emitida, o sistema obrigatoriamente valida o CNPJ do destinatário.

**Resposta**: Inclusão («include») - Validar CNPJ é obrigatório em toda emissão de nota fiscal.

---

## Parte 3 – Modelagem Prática

### Exercício 1 – Biblioteca Escolar

**Atores**:
- Aluno
- Bibliotecário
- Funcionário (ator generalizado)

**Casos de Uso**:
- Consultar Catálogo de Livros
- Reservar Livro
- Autenticar no Sistema («include» de Reservar Livro)
- Registrar Empréstimo
- Registrar Devolução
- Aplicar Multa («extend» de Registrar Devolução)
- Bater Ponto

**Relacionamentos**:
- **Inclusão («include»)**:
  - Reservar Livro «include» Autenticar no Sistema
  - Registrar Empréstimo «include» Autenticar no Sistema
- **Extensão («extend»)**:
  - Registrar Devolução «extend» Aplicar Multa (condição: livro em atraso)
- **Herança (Generalização)**:
  - Bibliotecário é um tipo de Funcionário

---

### Exercício 2 – Sistema de uma Pizzaria

**Atores**:
- Cliente
- Atendente
- Gerente
- Cozinha (sistema externo)

**Casos de Uso**:
- Fazer Pedido (pelo aplicativo)
- Calcular Frete («include» de Fazer Pedido)
- Adicionar Observações («extend» de Fazer Pedido)
- Registrar Pedido (por telefone)
- Enviar Notificação para Cozinha («include» de Fazer Pedido e Registrar Pedido)
- Emitir Relatórios de Vendas

**Relacionamentos**:
- **Inclusão («include»)**:
  - Fazer Pedido «include» Calcular Frete
  - Fazer Pedido «include» Enviar Notificação para Cozinha
  - Registrar Pedido «include» Enviar Notificação para Cozinha
- **Extensão («extend»)**:
  - Fazer Pedido «extend» Adicionar Observações (opcional)
- **Herança (Generalização)**:
  - Gerente é um tipo de Atendente

---

### Exercício 3 – Sistema de Estacionamento

**Atores**:
- Motorista
- Funcionário do Estacionamento
- Sistema de Câmeras (ator externo)

**Casos de Uso**:
- Retirar Ticket de Entrada
- Efetuar Pagamento
- Solicitar Nota Fiscal («extend» de Efetuar Pagamento)
- Gerar Relatórios Diários
- Registrar Placa de Entrada
- Registrar Placa de Saída

**Relacionamentos**:
- **Inclusão («include»)**:
  - Efetuar Pagamento «include» Informar Ticket
- **Extensão («extend»)**:
  - Efetuar Pagamento «extend» Solicitar Nota Fiscal (opcional)
- **Associação**:
  - Sistema de Câmeras → Registrar Placa de Entrada
  - Sistema de Câmeras → Registrar Placa de Saída

---

### Exercício 4 – Sistema de Clínica Médica

**Atores**:
- Paciente
- Recepcionista
- Médico
- Funcionário (ator generalizado)

**Casos de Uso**:
- Agendar Consulta
- Cadastrar Paciente («include» de Agendar Consulta)
- Registrar Atendimento
- Prescrever Receita («extend» de Registrar Atendimento)
- Fazer Login

**Relacionamentos**:
- **Inclusão («include»)**:
  - Agendar Consulta «include» Cadastrar Paciente
- **Extensão («extend»)**:
  - Registrar Atendimento «extend» Prescrever Receita (opcional)
- **Herança (Generalização)**:
  - Médico é um tipo de Funcionário
  - Recepcionista é um tipo de Funcionário
  - Todo Funcionário pode Fazer Login

---

### Exercício 5 (desafio) – Sistema de Streaming

**Atores**:
- Usuário Comum
- Usuário Assinante
- Administrador

**Casos de Uso**:
- Assistir Filme
- Fazer Login («include» de Assistir Filme)
- Avaliar Filme («extend» de Assistir Filme)
- Ativar Legendas («extend» de Assistir Filme)
- Pagar Mensalidade
- Acessar Títulos Premium
- Cadastrar Novos Filmes

**Relacionamentos**:
- **Inclusão («include»)**:
  - Assistir Filme «include» Fazer Login
- **Extensão («extend»)**:
  - Assistir Filme «extend» Avaliar Filme (opcional, após assistir)
  - Assistir Filme «extend» Ativar Legendas (opcional, durante filme)
- **Herança (Generalização)**:
  - Usuário Comum e Usuário Assinante herdam de Usuário
  - Usuário Assinante pode Acessar Títulos Premium (comportamento adicional)
  - Usuário Assinante «include» Pagar Mensalidade (automático mensal)
