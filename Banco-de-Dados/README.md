# Modelagens: Banco de Dados e Diagramas BPMN

Repositório dedicado ao estudo e aplicação de conceitos de **Modelagem de Banco de Dados**. Contém desde a especificação de um minimundo até a implementação prática com SQL e conexão com PostgreSQL.

## 📚 Atividades Desenvolvidas

### 1. Modelagem Conceitual
- **Minimundo:** Loja de peças de carros "AquiCarro"
- **Escopo:** Controle de vendas, estoque, comissões e reposição de peças
- **Entidades modeladas:** Cliente, Vendedor, Venda, Peça, Estoque, Compra, Fornecedor

### 2. Modelagem Lógica e Elementos Semiestruturados
- Definição de chaves primárias, atributos simples, compostos e multivalorados
- Atributos derivados (lucro, comissão) e não-estruturados (fotos, vídeos, manuais, áudios, certificados)
- Especificação de relacionamentos e cardinalidades:
  - Cliente **Realiza** Venda (1,N) : (1,1)
  - Vendedor **Faz** Venda (0,N) : (1,1)
  - Peça **Comercializa** Venda (0,1) : (1,N)
  - Estoque **Contém** Peça (0,1) : (0,1)
  - Estoque **Irá** Compra (0,1) : (1,1)
  - Peça **Irá Repor** Compra (1,1) : (1,N)
  - Fornecedor **Irá Fornecer** Compra (0,N) : (1,1)

### 3. Formas Normais (1FN, 2FN, 3FN)
- Análise e adequação das tabelas às três primeiras formas normais

### 4. Implementação SQL
- Comandos `INSERT` para povoamento das tabelas (clientes, telefones, e-mails)
- Consultas com `SELECT`, `WHERE`, `FULL JOIN`, `INNER JOIN`
- Atualizações com `UPDATE` (inclusive uso de `OVERLAY` para substituição parcial de strings)
- Exclusões com `DELETE` (simples e com condições como `LIKE` e `CAST`)

### 5. Conexão com PostgreSQL (TypeScript)
- Script para conexão com banco de dados PostgreSQL
- Uso de variáveis de ambiente (`.env`) para credenciais
- Execução de consultas com o módulo `pg`

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| **PostgreSQL** | Banco de dados relacional |
| **SQL** | Definição, manipulação e consulta de dados |
| **TypeScript** | Conexão e interação com o banco |
| **pg (Node.js)** | Driver oficial para PostgreSQL |
| **dotenv** | Gerenciamento de variáveis de ambiente |
| **Git / GitHub** | Versionamento e hospedagem do projeto |


## ▶️ Como Executar a Conexão com o Banco

1. Configure um banco PostgreSQL local ou remoto
2. Crie um arquivo `.env` baseado no `.env.example`:
```env
PGUSER=seu_usuario
PGPASSWORD=sua_senha
PGHOST=localhost
PGPORT=5432
PGDATABASE=nome_do_banco

3. Execute o Typescript
npm install pg dotenv
npx ts-node src/conectarBancoDados.ts

🎯 Conceitos Trabalhados

    Modelagem Entidade-Relacionamento (MER)

    Cardinalidades e relacionamentos complexos

    Atributos multivalorados, derivados e não-estruturados

    Formas normais (1FN, 2FN, 3FN)

    SQL: INSERT, SELECT, UPDATE, DELETE, JOINs

    Subconsultas e funções de string (OVERLAY, POSITION, TRIM)

    Conexão de aplicações com banco de dados relacional

📌 Status do Projeto

✅ Modelagem conceitual e lógica
✅ Implementação SQL
✅ Conexão TypeScript com PostgreSQL

Autor: GabrielALPorto
Contexto: Atividades da disciplina de Banco de Dados - Cruzeiro do Sul
