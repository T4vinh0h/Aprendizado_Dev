// # Enunciado Principal

// ## Sistema de Gestão de E-commerce Completo

// Você foi contratado para desenvolver um **Sistema de Gestão de E-commerce** completo que deve gerenciar todo o ciclo de vendas de uma loja online. O sistema precisa ser robusto, validar todas as entradas e fornecer relatórios detalhados para o administrador.

// O sistema deve funcionar como um aplicativo de console que permite ao usuário:

// 1. **Cadastrar produtos** com nome, preço, categoria, quantidade em estoque e descrição
// 2. **Gerenciar clientes** com nome, email, idade, endereço e histórico de compras
// 3. **Processar vendas** calculando totals, aplicando descontos e verificando estoque
// 4. **Gerenciar cupons de desconto** com diferentes regras e validades
// 5. **Controlar frete** baseado em distância e peso dos produtos
// 6. **Gerar relatórios** de vendas, produtos mais vendidos, clientes VIP e muito mais
// 7. **Implementar sistema de autenticação** para administradores
// 8. **Validar todas as entradas** com mensagens de erro claras
// 9. **Manter persistência básica** dos dados durante a sessão

// ---

// # Regras

// 1. **O sistema deve funcionar continuamente** até que o administrador escolha sair
// 2. **Todas as entradas devem ser validadas** - não aceite valores inválidos
// 3. **O estoque não pode ficar negativo** - impeça vendas se não houver produtos
// 4. **Descontos não podem fazer o preço ficar negativo ou zero**
// 5. **O sistema deve ter autenticação** - usuário/senha para administrador
// 6. **Cupons têm regras específicas** - valor mínimo, categoria, validade
// 7. **Frete é calculado dinamicamente** baseado em peso e distância
// 8. **Clientes podem ser classificados** como VIP baseado no valor total de compras
// 9. **Relatórios devem ser detalhados** e bem formatados
// 10. **Use arrays para armazenar** produtos, clientes, vendas e cupons
// 11. **Use funções para organizar** o código em módulos lógicos
// 12. **Implemente tratamento de erros** para operações críticas

// ---

// # Funcionalidades obrigatórias

// ## 1. Sistema de Autenticação
// - Login com usuário e senha (máximo 3 tentativas)
// - Menu principal após login bem-sucedido
// - Opção de logout
// - Senha oculta durante digitação (opcional)

// ## 2. Gestão de Produtos
// - Cadastrar novos produtos
// - Listar todos os produtos
// - Buscar produto por nome ou categoria
// - Editar produto existente
// - Remover produto (apenas se não tiver vendas)
// - Atualizar estoque manualmente

// ## 3. Gestão de Clientes
// - Cadastrar novos clientes
// - Listar todos os clientes
// - Buscar cliente por nome ou email
// - Editar dados de cliente
// - Visualizar histórico de compras do cliente
// - Classificar clientes como VIP (compras totais > R$ 1000)

// ## 4. Sistema de Vendas
// - Registrar nova venda
// - Selecionar múltiplos produtos em uma venda
// - Calcular subtotal automaticamente
// - Aplicar cupons de desconto
// - Verificar disponibilidade em estoque
// - Atualizar estoque após venda
// - Calcular frete baseado em peso e distância
// - Gerar nota fiscal/resumo da venda

// ## 5. Gestão de Cupons
// - Criar cupons de desconto
// - Definir regras: valor mínimo, categoria específica, percentual ou valor fixo
// - Validar cupom durante venda
// - Listar cupons disponíveis
// - Desativar cupons

// ## 6. Sistema de Frete
// - Calcular frete baseado em:
//   - Peso total dos produtos
//   - Distância de entrega (em km)
//   - Região (frete diferente para cada região)
// - Regras especiais:
//   - Frete grátis para compras acima de R$ 300
//   - Frete reduzido para clientes VIP
//   - Frete expresso com custo adicional

// ## 7. Relatórios e Estatísticas
// - Relatório de vendas por período
// - Produtos mais vendidos (top 10)
// - Clientes que mais compraram
// - Valor total de vendas do dia/semana/mês
// - Produtos com estoque baixo (< 10 unidades)
// - Cupons mais utilizados
// - Média de valor por venda

// ## 8. Validações
// - Validar todos os inputs numéricos (não aceitar letras onde se espera números)
// - Validar emails (formato básico)
// - Validar senhas (mínimo 4 caracteres)
// - Validar preços (não podem ser negativos)
// - Validar estoque (não pode ser negativo)
// - Mensagens de erro claras e orientativas

// ## 9. Organização do Código
// - Usar funções para cada funcionalidade principal
// - Usar arrays para armazenar dados
// - Usar objetos para representar entidades (produto, cliente, venda)
// - Comentários explicativos em funções complexas
// - Nomes de variáveis descritivos

// ---

// # Funcionalidades extras para desafio

// ## 1. Sistema de Categorias
// - Criar categorias dinamicamente
// - Classificar produtos por categoria
// - Relatórios por categoria

// ## 2. Sistema de Avaliações
// - Clientes podem avaliar produtos (1-5 estrelas)
// - Calcular média de avaliações por produto
// - Listar produtos melhores avaliados

// ## 3. Sistema de Fidelidade
// - Pontos por compra (1 ponto a cada R$ 10)
// - Níveis de fidelidade (Bronze, Prata, Ouro, Platina)
// - Benefícios por nível (descontos extras, frete grátis)

// ## 4. Sugestões de Produtos
// - Recomendar produtos baseados em compras anteriores
// - "Produtos relacionados" por categoria

// ## 5. Backup e Restauração
// - Exportar dados para formato texto
// - Importar dados de backup
// - Salvar estado atual do sistema

// ## 6. Interface Aprimorada
// - Menu com números e descrições detalhadas
// - Cores/emojis para melhor visualização
// - Confirmação antes de ações destrutivas
// - Histórico de comandos

// ## 7. Sistema de Notificações
// - Alertas de estoque baixo
// - Notificações de aniversário de clientes
// - Alertas de cupons expirando

// ## 8. Múltiplos Administradores
// - Cadastrar diferentes administradores
// - Níveis de permissão (total, parcial, visualização)
// - Log de ações dos administradores

// ---