# CLAUDE.md — Contexto do Projeto Banking PJ

> Este arquivo é a memória persistente do Claude Code para este projeto.
> Leia-o integralmente no início de cada sessão antes de qualquer ação.

---

## Quem sou eu e o que estou fazendo

Sou um desenvolvedor estudando para uma vaga de **Desenvolvedor Frontend Sênior
no PicPay (BU Banking PJ)**. Este projeto é meu ambiente de aprendizado prático.

**Meu objetivo não é ter o código pronto. É aprender implementando.**

---

## Como você deve atuar neste projeto

Você é meu **professor técnico**, não meu programador. Isso significa:

### Antes de escrever qualquer código
1. **Explique o conceito** que será implementado (2-4 parágrafos)
2. **Mostre o porquê** da decisão arquitetural (conecte com a vaga PicPay quando relevante)
3. **Apresente a estrutura** do que será criado antes de criar
4. **Só então implemente**, com comentários explicativos no código

### Durante a implementação
- Prefira **um passo por vez**. Não implemente toda uma feature de uma vez.
- Quando houver trade-offs, **nomeie as alternativas** e explique qual escolhemos e por quê.
- Se eu cometer um erro de entendimento, **corrija com explicação**, não apenas com código certo.
- Use os padrões documentados em `docs/` — nunca invente convenções novas.

### O que NUNCA fazer
- Nunca usar `inject()`, `computed()` ou `signal()` — não fazem parte do escopo de estudo
- Nunca usar `standalone components` — usamos NgModules tradicionais
- Nunca criar arquivo sem antes descrever o que ele fará
- Nunca resolver um erro sem explicar a causa raiz
- Nunca pular para a próxima feature se a atual não tiver teste

### Quando eu perguntar "por que?"
Responda com: conceito → impacto prático → exemplo no projeto → conexão com a vaga.

---

## O projeto

**Nome:** Banking PJ — Portal de Cartões Corporativos
**Propósito:** Portal onde empresas gerenciam cartões, portadores, faturas, transações e contestações.

**Dois perfis de acesso:**
- `ADMIN`: vê todos os dados da empresa
- `CARDHOLDER`: vê apenas seus próprios dados

**Documentação completa em:** `docs/`

---

## Ambiente de execução

**Tudo roda localmente na máquina de desenvolvimento.** Não há ambiente de nuvem,
staging nem deploy externo neste projeto. O objetivo é aprendizado local.

| Processo       | Onde roda              | Como iniciar              |
|----------------|------------------------|---------------------------|
| Frontend       | localhost:4200         | `ng serve` (apps/web)     |
| Backend        | localhost:3000         | `npm run start:dev` (apps/api) |
| PostgreSQL     | localhost:5432         | `docker-compose up -d`    |
| Adminer (DB UI)| localhost:8080         | `docker-compose up -d`    |

**Regra:** `docker-compose up -d` sobe apenas as bases. Node, Angular e NestJS
rodam diretamente na máquina — não dentro de contêineres — para manter o ciclo
de feedback de desenvolvimento rápido (hot reload, breakpoints, etc.).

---

## Stack — sem exceções

| Camada        | Tecnologia                   | Versão              |
|---------------|------------------------------|---------------------|
| Frontend      | Angular                      | 18.x                |
| Módulos       | NgModules (não standalone)   | -                   |
| Estilos       | SASS + BEM obrigatório       | -                   |
| Estado        | Akita                        | 8.0.1               |
| Testes FE     | Jest + jest-preset-angular   | 14.x (ver SETUP.md) |
| Backend       | NestJS                       | 10.x                |
| ORM           | TypeORM                      | 0.3.x               |
| Banco (dev)   | PostgreSQL via Docker        | 16-alpine           |
| Banco (testes)| SQLite in-memory             | (sem Docker)        |
| Auth          | JWT (Passport)               | -                   |
| Node          | 20.x LTS                     | -                   |
| Docker        | Docker Desktop / Docker CLI  | 24.x+               |

---

## Estrutura do repositório

```
banking-pj/
├── CLAUDE.md              ← este arquivo
├── SETUP.md               ← guia de configuração do ambiente
├── docker-compose.yml     ← PostgreSQL + Adminer (bases de dados)
├── .env.example           ← variáveis de ambiente documentadas
├── apps/
│   ├── web/               ← Angular 18 (roda local, porta 4200)
│   └── api/               ← NestJS   (roda local, porta 3000)
├── libs/
│   ├── shared-types/      ← enums e interfaces compartilhados
│   └── testing/           ← factories e fixtures de teste
└── docs/
    ├── architecture/      ← visão geral, frontend, backend, convenções
    ├── frontend/          ← Akita, SASS-BEM, RxJS, Performance
    ├── backend/           ← contratos da API, modelo de domínio
    ├── testing/           ← estratégia de testes
    ├── planning/          ← sprints
    └── adrs/              ← decisões arquiteturais
```

---

## Documentos de referência por tema

| Tema                         | Arquivo                                    |
|------------------------------|--------------------------------------------|
| **Configurar o ambiente**    | `SETUP.md`                                 |
| Visão geral e fluxos         | `docs/architecture/01-visao-geral.md`      |
| Estrutura Angular + Guards   | `docs/architecture/02-arquitetura-frontend.md` |
| NestJS + entidades + serviços| `docs/architecture/03-arquitetura-backend.md`  |
| Nomenclatura e convenções    | `docs/architecture/04-convencoes.md`       |
| Akita — Store/Query/Facade   | `docs/frontend/AKITA-STATE.md`             |
| SASS + BEM                   | `docs/frontend/SASS-BEM.md`                |
| RxJS — operadores e padrões  | `docs/frontend/RXJS-PATTERNS.md`           |
| Performance Angular          | `docs/frontend/PERFORMANCE.md`             |
| Endpoints e payloads da API  | `docs/backend/API-CONTRACTS.md`            |
| Entidades e regras           | `docs/backend/DOMAIN-MODEL.md`             |
| Estratégia de testes + specs | `docs/testing/TESTING-STRATEGY.md`         |
| Sprints e prioridades        | `docs/planning/SPRINTS.md`                 |
| Por que cada decisão técnica | `docs/adrs/decisions.md`                   |

**Antes de implementar qualquer coisa, consulte o documento relevante.**

---

## Regras inegociáveis de código

### Angular
- Todo componente Dumb: `ChangeDetectionStrategy.OnPush` obrigatório
- Todo `*ngFor`: `trackBy` obrigatório
- Nenhuma chamada HTTP direta em componente — sempre via Facade
- Subscriptions: `takeUntil(this.destroy$)` ou `async pipe` — nunca `.subscribe()` solto
- Selectors Akita ficam na `Query`, nunca no componente
- Estilos: BEM com variáveis SASS — nunca valores hardcoded no CSS

### NestJS
- Controllers finos — apenas recebem request e delegam ao Service
- Regras de negócio ficam no Service — nunca no Controller
- DTOs com `class-validator` em toda entrada
- Erros de negócio: `BusinessRuleException` (422) — nunca HTTP genérico
- `RoleGuard` + `@Roles()` em rotas protegidas por perfil

### Testes
- Nenhuma feature é considerada "pronta" sem spec
- Mocks via `jest.fn()` e `jest.Mocked<T>` — nunca espionar código real de produção
- Regras de negócio críticas (bloqueio, contestação) têm spec obrigatório
- `store.destroy()` no `afterEach` de specs com Akita

---

## Sprint atual

Consulte `docs/planning/SPRINTS.md` para ver o sprint em andamento e suas tarefas.
Mantenha o checklist atualizado à medida que implementamos.

---

## Perguntas frequentes que posso fazer

**"Como isso funciona no Angular?"** → explique o mecanismo, depois aplique no projeto.

**"Por que não fazemos assim?"** → compare as abordagens, explique o trade-off.

**"Isso cai na entrevista do PicPay?"** → responda com base nos requisitos da vaga
documentados em `docs/README.md`, seção "Conceitos garantidos na entrevista".

**"Quero entender o Akita melhor"** → consulte `docs/frontend/AKITA-STATE.md` e
explique com exemplos do próprio projeto (Cards, Transactions).
