# 🛒 Lista de Compras – Teste Angular

Aplicação desenvolvida como teste técnico em Angular, com foco em simplicidade, clareza e cumprimento integral dos requisitos propostos.

O projeto implementa uma **lista de compras com CRUD em memória**, leitura inicial de dados via arquivo estático e regras de validação.

────────────────────────────

## ✨ Funcionalidades

✔ Leitura inicial de `assets/lista.txt`   
✔ CRUD completo em memória (Adicionar, Editar, Remover)
✔ ID incremental automático  
✔ Não permite nomes duplicados (case insensitive)  
✔ Campo quantidade apenas numérico  
✔ Confirmação ao excluir  
✔ Feedback a cada ação (criar, editar, remover)  
✔ Filtros por:
- ID  
- Nome  
- Quantidade  
✔ Exibição de:
- Total de produtos  
- Soma total das quantidades  

────────────────────────────

## 🧩 Estrutura
src/
├── assets/
│ └── lista.txt → dados iniciais
├── app/
│ ├── models/ → interfaces de tipo
│ ├── services/ → lógica de negócio
│ ├── app.ts → componente principal
│ └── app.spec.ts → testes


────────────────────────────

## 🚀 Como rodar o projeto

### 1) Clonar o repositório

git clone https://github.com/Cabuke/lista-de-compras.git

### 2) Instalar dependências
npm install

### 3) Rodar a aplicação
ng serve

### 4) Abrir no navegador
http://localhost:4200


────────────────────────────

🧪 Testes

O projeto inclui testes automatizados para:

- Regras do ProdutoService

- Criação básica do componente principal (App)

Rodando os testes

`ng test`

O Angular executa os testes em um navegador controlado.

O que testar manualmente

- Inserir produto com nome e quantidade

- Validação de campos obrigatórios

- Evitar inserção de nomes duplicados

- Filtrar com resultados e sem resultados

- Somatório de quantidades

- Confirmação ao excluir

🎯 Objetivo

- Projeto criado para demonstrar:

- Organização de código Angular

- Separação de responsabilidades

- Leitura e transformação de dados

- Validações de negócio

- Simplicidade e clareza de UI/UX

────────────────────────────

📌 Observação

Todos os dados são mantidos apenas em memória.
Ao recarregar a página, a lista volta para o estado inicial definido em **lista.txt**.





