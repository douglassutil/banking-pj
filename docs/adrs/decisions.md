# decisions.md — Architectural Decision Records (ADRs)

> Cada ADR explica UMA decisão técnica: o contexto, as alternativas consideradas
> e por que escolhemos o que escolhemos. Leia antes de questionar ou alterar
> qualquer padrão do projeto.

---

## ADR 001 — NgModules em vez de Standalone Components

**Status:** Aceito

**Contexto:** Angular 17+ usa Standalone Components como padrão. O `ng new`
pergunta se quer standalone e o padrão mudou para sim.

**Decisão:** Usar NgModules tradicionais (`--no-standalone`).

**Razão:** O objetivo do projeto é aprender arquitetura empresarial. NgModules
ensinam fronteiras explícitas de dependência — você declara o que cada módulo
possui, importa e exporta. Em codebases grandes de fintechs, essa clareza
é essencial. Standalone components são mais simples mas removem essa fronteira,
dificultando o raciocínio sobre dependências em escala.

**Consequência:** Todo componente, pipe e directive precisa ser declarado em um
módulo. Imports ficam no módulo, não no componente.

---

## ADR 002 — Akita para gerenciamento de estado

**Status:** Aceito

**Contexto:** As opções avaliadas foram NgRx, Akita e serviços com BehaviorSubject.

**Decisão:** Usar Akita 8.0.1.

**Razão:**
- NgRx tem overhead de boilerplate (actions, reducers, effects, selectors) que
  dificulta o aprendizado inicial sem ganho proporcional neste escopo.
- BehaviorSubject puro não escala — vira "state espaguete" sem Store/Query/Facade.
- Akita oferece o padrão Store/Query/Facade sem boilerplate excessivo, e o
  conceito de Query com selectors Observable prepara para NgRx se necessário.

**Consequência:** Todo estado de feature vive em `features/<name>/state/`.
Componentes nunca acessam a Store diretamente — sempre via Facade.

---

## ADR 003 — Jest em vez de Karma/Jasmine

**Status:** Aceito

**Contexto:** Angular usa Karma + Jasmine por padrão.

**Decisão:** Remover Karma/Jasmine e usar Jest com jest-preset-angular.

**Razão:** Jest é mais rápido (executa em Node, sem browser), tem melhor
suporte a TypeScript, mocks mais simples e é o padrão em projetos Node/NestJS
— o que unifica a experiência de teste no monorepo.

**Consequência:** `ng test` não funciona — usar `npm test` no diretório do app.
Versão atual: jest-preset-angular@16 (Angular 21 + Jest 30).

---

## ADR 004 — JWT sem refresh token no Sprint 2

**Status:** Aceito (temporário)

**Contexto:** JWT adequado usa access token de curta duração + refresh token.

**Decisão:** Implementar apenas access token no Sprint 2.

**Razão:** Focar no mecanismo central (emissão, validação, guard) sem a
complexidade adicional do refresh flow. Refresh token será adicionado no Sprint 3.

**Consequência:** Token expira em 15 minutos e o usuário precisa fazer login
novamente. Comportamento aceitável para ambiente de aprendizado.

---

## ADR 005 — SQLite em memória para testes de integração

**Status:** Aceito

**Contexto:** Testes de integração do NestJS precisam de banco de dados.

**Decisão:** Usar SQLite `:memory:` quando `NODE_ENV=test`.

**Razão:** Permite rodar `npm test` sem Docker rodando. Cada execução começa
com banco zerado, garantindo isolamento. A divergência SQLite/PostgreSQL é
aceitável para testes de lógica de negócio — não testamos SQL específico do
Postgres (como arrays ou JSONB).

**Consequência:** `sqlite3` é devDependency em `apps/api`. Nunca usado em
desenvolvimento ou produção.

---

## ADR 006 — `amount` em centavos para valores monetários

**Status:** Aceito

**Contexto:** Valores monetários podem ser armazenados como float, string ou inteiro.

**Decisão:** Armazenar em centavos como inteiro (`decimal` no TypeORM, que
mapeia para `NUMERIC` no PostgreSQL).

**Razão:** Float causa erros de arredondamento — `0.1 + 0.2 !== 0.3` em
JavaScript. String perde operações matemáticas. Centavos como inteiro é
preciso, simples e é o padrão em sistemas financeiros.

**Consequência:** R$ 49,90 é armazenado como `4990`. A conversão para exibição
(`4990 / 100`) acontece no frontend, em pipes SASS.

---

## ADR 007 — `companyId` em todas as entidades (multi-tenancy)

**Status:** Aceito

**Contexto:** O sistema atende múltiplas empresas. Precisamos garantir isolamento.

**Decisão:** Adicionar `companyId` como campo em todas as entidades principais
e incluir em todas as queries como filtro obrigatório.

**Razão:** Alternativas como schemas separados por empresa ou banco por empresa
são mais robustas mas têm custo operacional alto. Para este escopo, filtrar por
`companyId` na camada de serviço é simples e seguro.

**Consequência:** Todo Service deve receber `companyId` do usuário autenticado
(extraído do JWT) e nunca confiar no `companyId` enviado pelo cliente no body.

---

## ADR 008 — `BusinessRuleException` para erros de domínio

**Status:** Aceito

**Contexto:** NestJS oferece `HttpException` e suas subclasses. Poderíamos
lançar `BadRequestException` ou `UnprocessableEntityException` diretamente.

**Decisão:** Criar `BusinessRuleException` que estende `HttpException` com
status 422 e mensagem padronizada.

**Razão:** Centralizar o padrão de erro de negócio. Controllers não precisam
conhecer o código HTTP — apenas lançam `BusinessRuleException('mensagem')`.
Facilita encontrar todos os pontos de erro de negócio com um grep.

**Consequência:** Erros de negócio são sempre 422. Erros de autenticação são
401/403 (tratados pelos Guards). Erros de validação de DTO são 400 (tratados
pelo ValidationPipe global).
