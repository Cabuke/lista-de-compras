# 🛒 Lista de Compras – Teste Angular

Aplicação desenvolvida como teste técnico em Angular, com foco em simplicidade, clareza e cumprimento integral dos requisitos propostos.

O projeto implementa uma **lista de compras com CRUD em memória**, leitura inicial de dados via arquivo estático e regras de validação.

────────────────────────────

## ✨ Funcionalidades

✔ Carregamento inicial a partir de `lista.txt`  
✔ CRUD completo em memória  
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
│ └── lista.txt → carga inicial
├── app/
│ ├── models/ → tipagem
│ ├── services/ → regras de negócio
│ └── app.ts → componente principal


────────────────────────────

## 🚀 Como rodar o projeto

### 1) Clonar o repositório

git clone https://github.com/Cabuke/lista-de-compras.git
cd lista-de-compras

### 2) Instalar dependências
npm install

### 3) Rodar a aplicação
ng serve

### 4) Abrir no navegador
http://localhost:4200


────────────────────────────

🧪 O que pode ser testado

- Inserir produto com nome e quantidade

- Bloqueio ao tentar salvar apenas um dos campos

- Bloqueio de nomes duplicados (ex: "Banana" e "banana")

- Editar produto com feedback

- Remover produto com confirmação

- Filtrar por ID, nome e quantidade

- Ver total de produtos

- Ver soma total das quantidades

🎯 Objetivo

- Projeto criado para demonstrar:

- Organização de código Angular

- Separação de responsabilidades

- Leitura e transformação de dados

- Validações de negócio

- Simplicidade e clareza de UI/UX

────────────────────────────

🧠 Observação

Todos os dados são mantidos apenas em memória.
Ao recarregar a página, a lista volta para o estado inicial definido em **lista.txt**.





