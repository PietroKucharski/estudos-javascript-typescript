# estudos-javascript-typescript

Repositório de estudos de **JavaScript e TypeScript**, do básico ao avançado. Começou para acompanhar um curso completo de JS e TS e também reúne estudos complementares feitos por conta própria (documentações, artigos, desafios e outros materiais), com anotações, exercícios resolvidos e projetos práticos de front-end, back-end e deploy.

Cada aula fica em um arquivo comentado, com explicações escritas direto no código, servindo também como material de consulta rápida.

## Tecnologias

**Linguagens**
- JavaScript moderno (ES6+)
- TypeScript
- HTML5 e CSS3

**Back-end**
- Node.js e Express
- MongoDB com Mongoose (NoSQL)
- MySQL / MariaDB com Sequelize (SQL)
- PostgreSQL e Knex (query builder)
- JWT e sessions (autenticação)

**Front-end**
- React (class components, functional components e Hooks)
- Redux, Redux Saga e Redux Persist
- Axios e Fetch API
- Webpack e Babel
- Next.js + Strapi

**Qualidade e ferramentas**
- Jest (testes unitários e de integração)
- ESLint, Prettier e EditorConfig
- Visual Studio Code
- Git / GitHub

**Infraestrutura**
- Linux (Ubuntu Server) no Google Cloud Platform
- NGINX (proxy reverso) e PM2
- Let's Encrypt (HTTPS/TLS) e chaves SSH
- GitHub Webhooks (Continuous Deployment)

## Estrutura do projeto

```
estudos-javascript-typescript/
├── 01-javascript-basico/
│   └── aula01.js
├── 02-logica-de-programacao/
├── 03-javascript-orientado-a-objetos/
├── ...
├── projetos/
│   ├── agenda/
│   ├── api-rest/
│   ├── react-lista-de-tarefas/
│   ├── react-avancado/
│   └── blog-nextjs-strapi/
├── .gitignore
└── README.md
```

As pastas são organizadas por tema, seguindo a ordem do curso. Os projetos práticos ficam separados em `projetos/`, cada um com suas próprias dependências.

## Conteúdo

### Fundamentos de JavaScript

- [ ] Instalação do ambiente (Node.js, VS Code e extensões)
- [ ] JavaScript básico: variáveis, tipos e operadores
- [ ] Lógica de programação: estruturas condicionais e de repetição
- [ ] JavaScript orientado a objetos: classes, funções construtoras e factory functions
- [ ] JavaScript funcional: funções, arrays e objetos
- [ ] JavaScript assíncrono: promises, async/await, AJAX, Axios e Fetch API
- [ ] Expressões regulares (Regex)

### Tooling

- [ ] Sistema de módulos (CommonJS e ES Modules)
- [ ] Webpack e Babel

### Back-end com Node.js

- [ ] Node.js básico e sistema de módulos
- [ ] Express e EJS
- [ ] MongoDB com Mongoose
- [ ] Projeto Agenda: CRUD com login via sessions
- [ ] API REST com Express, Sequelize e MariaDB/MySQL
- [ ] Autenticação com JWT e middlewares

### Bancos de dados

- [ ] SQL com MySQL: consultas, relacionamentos e joins
- [ ] Knex (query builder)

### Front-end com React

- [ ] React básico: lista de tarefas com class e functional components
- [ ] Persistência com localStorage
- [ ] React Hooks
- [ ] Redux, Redux Saga e Redux Persist
- [ ] Consumo da API REST com login via JWT e CRUD completo

### TypeScript

- [ ] Tipos básicos, interfaces e type aliases
- [ ] Classes, modificadores de acesso e generics
- [ ] TypeScript no front-end e no back-end

### Arquitetura e qualidade

- [ ] Pilares da programação orientada a objetos
- [ ] Princípios SOLID
- [ ] Testes automatizados com Jest
- [ ] Padrões de projeto (Design Patterns GoF)

### Next.js + Strapi

- [ ] Blog com CSR, SSR, SSG e ISR
- [ ] Strapi como CMS com PostgreSQL
- [ ] Continuous Deployment com GitHub Webhooks

### Deploy e infraestrutura

- [ ] Servidor Linux (Ubuntu) no Google Cloud Platform
- [ ] NGINX como proxy reverso e PM2
- [ ] HTTPS com Let's Encrypt
- [ ] Chaves SSH e Git no servidor
- [ ] Boas práticas de segurança

### Bônus

- [ ] HTML5 e CSS3

### Estudos complementares

Conteúdos estudados fora do curso, adicionados conforme surgirem.

- [ ] _Adicione aqui novos tópicos_

## Como executar

Clone o repositório:

```bash
git clone https://github.com/<seu-usuario>/estudos-javascript-typescript.git
cd estudos-javascript-typescript
```

Arquivos JavaScript (Node.js):

```bash
node 01-javascript-basico/aula01.js
```

Arquivos TypeScript:

```bash
npx tsx caminho/para/arquivo.ts
# ou compilando antes
npx tsc caminho/para/arquivo.ts && node caminho/para/arquivo.js
```

Projetos práticos:

```bash
cd projetos/<nome-do-projeto>
npm install
npm start
```

Cada projeto pode ter um arquivo `.env.example` com as variáveis de ambiente necessárias.

## Objetivos

- Dominar JavaScript moderno (ES6+) e TypeScript, do básico ao avançado
- Desenvolver aplicações full stack com Node.js e React
- Trabalhar com bancos de dados relacionais e NoSQL
- Aplicar POO, princípios SOLID e padrões de projeto
- Escrever código testável com testes automatizados
- Configurar e publicar aplicações em servidores Linux com segurança

---

Repositório pessoal de estudos, atualizado conforme o andamento do curso e dos estudos complementares.
