# Banking PJ — Ambiente de Aprendizado

Portal de Cartões Corporativos construído como **projeto de aprendizado prático**
para desenvolvedores que estudam para vagas de **Frontend Sênior em fintechs**.

> Este repositório tem duas branches:
> - `main` — código de referência (implementação completa em andamento)
> - `starter` ← **você está aqui** — ponto de partida para aprender do zero

---

## O que você vai aprender

Implementando este projeto você vai praticar:

- **NestJS** com TypeORM, Passport JWT, Guards, DTOs com validação
- **Angular 21** com NgModules, Akita (Store/Query/Facade), RxJS, Guards de rota
- **Autenticação JWT** ponta a ponta — do backend ao browser
- **Testes unitários** com Jest no backend e frontend
- **Arquitetura de monorepo** com npm workspaces
- **RBAC** (Role-Based Access Control) com dois perfis: ADMIN e CARDHOLDER

---

## Pré-requisitos

- Node 20+ (recomendado: 24 LTS)
- Docker Desktop
- Claude Code (para o modo professor — veja abaixo)

---

## Como configurar o ambiente

Siga o guia completo em [`SETUP.md`](SETUP.md).

Resumo rápido:
```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env

# 3. Subir o banco de dados
docker-compose up -d

# 4. Backend (porta 3000)
cd apps/api && npm run start:dev

# 5. Frontend (porta 4200)
cd apps/web && ng serve
```

---

## Como usar com o Claude Code (modo professor)

Este repositório foi projetado para ser usado com o **Claude Code** como professor técnico.

O arquivo [`CLAUDE.md`](CLAUDE.md) configura automaticamente o comportamento da IA:
ela vai explicar cada conceito antes de implementar, guiar passo a passo e só avançar
quando você confirmar que entendeu.

```bash
# Instale o Claude Code
npm install -g @anthropic-ai/claude-code

# Abra o projeto
cd banking-pj
claude

# Diga para começar
"vamos começar o Sprint 2"
```

---

## Por onde começar

Abra [`docs/planning/SPRINTS.md`](docs/planning/SPRINTS.md) e siga os itens do
**Sprint 2 — Autenticação**. A documentação de referência para cada tema está em `docs/`.

| Tema | Arquivo |
|------|---------|
| Arquitetura geral | `docs/architecture/01-visao-geral.md` |
| Backend NestJS | `docs/architecture/03-arquitetura-backend.md` |
| Frontend Angular | `docs/architecture/02-arquitetura-frontend.md` |
| Contratos da API | `docs/backend/API-CONTRACTS.md` |
| Modelo de domínio | `docs/backend/DOMAIN-MODEL.md` |
| Estado com Akita | `docs/frontend/AKITA-STATE.md` |
| Estratégia de testes | `docs/testing/TESTING-STRATEGY.md` |
| Decisões técnicas | `docs/adrs/decisions.md` |

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Frontend | Angular 21 + NgModules |
| Estado | Akita 8 (Store / Query / Facade) |
| Estilos | SASS + BEM |
| Backend | NestJS 11 |
| ORM | TypeORM 0.3 |
| Banco (dev) | PostgreSQL 16 via Docker |
| Banco (testes) | SQLite in-memory |
| Auth | JWT com Passport |
| Testes | Jest 30 |
