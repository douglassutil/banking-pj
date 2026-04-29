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

---

## ADR 009 — Guards separados: `JwtAuthGuard` + `RoleGuard`

**Status:** Aceito

**Contexto:** NestJS permite usar `@UseGuards(AuthGuard('jwt'))` inline em cada
rota. Poderíamos também criar um único guard que valida token E role ao mesmo
tempo.

**Decisão:** Dois guards separados e nomeados: `JwtAuthGuard` (autenticação) e
`RoleGuard` (autorização). Sempre aplicados nessa ordem.

**Razão:** Responsabilidade única — cada guard faz uma coisa só. `JwtAuthGuard`
responde "você está autenticado?" e `RoleGuard` responde "você tem permissão?".
Separar também permite proteger rotas apenas com JWT (sem restrição de role) sem
duplicar lógica. A ordem importa: autenticação antes de autorização — sem
`req.user` populado, o `RoleGuard` não tem o que verificar.

**Consequência:** Toda rota protegida usa `@UseGuards(JwtAuthGuard, RoleGuard)`.
Rotas restritas a um perfil adicionam `@Roles(UserRole.ADMIN)` ou
`@Roles(UserRole.CARDHOLDER)`. Rotas sem `@Roles()` permitem qualquer
usuário autenticado. Ambos os guards são exportados pelo `AuthModule` para uso
em outros módulos.

---

## ADR 010 — `moduleResolution: "node16"` no backend (TypeScript 5.9)

**Status:** Aceito

**Contexto:** O TypeScript 5.9 deprecou `moduleResolution: "node"` (alias para
`node10`). O mecanismo de supressão (`ignoreDeprecations: "6.0"`) só se torna
válido quando o TypeScript 6 for lançado — em 5.9.x, essa string é rejeitada
como valor inválido, criando um impasse.

**Decisão:** Migrar para `module: "node16"` + `moduleResolution: "node16"`.

**Razão:** É a forma suportada de resolver o conflito sem dependência de versão
futura. Como o `package.json` da API não tem `"type": "module"`, o compilador
ainda trata arquivos `.ts` como CommonJS — o output gerado é idêntico ao anterior.

**Consequência:** `tsconfig.json` do backend usa `node16` para ambas as opções.
A mudança não afeta o comportamento em runtime. Se no futuro migrarmos para ESM,
o tsconfig já estará no modo correto.

---

## ADR 011 — `paths` do Angular aponta para `dist/` da lib, não para `src/`

**Status:** Aceito

**Contexto:** O `tsconfig.json` do Angular (`apps/web`) tinha `paths` apontando
para `libs/shared-types/src/index.ts` (arquivo TypeScript fonte). O TypeScript 5.9
passou a exigir que todos os arquivos fonte referenciados por `paths` estejam dentro
do `rootDir`. Como `libs/` está fora do `rootDir` de `apps/web`, o compilador
rejeitava o import.

**Decisão:** Mudar o `paths` para apontar para `libs/shared-types/dist/index`
(sem extensão — o TypeScript resolve para `.d.ts`).

**Razão:** Arquivos `.d.ts` são declarações de tipo, não arquivos fonte. O TypeScript
os lê para tipagem sem incluí-los na compilação, portanto não precisam estar dentro
do `rootDir`. O `dist/` já existe porque o `shared-types` compila antes de ser
consumido.

**Consequência:** Ao modificar `libs/shared-types/src/`, é necessário rodar
`npm run build` dentro de `libs/shared-types/` para que o `dist/` fique atualizado
e o Angular veja as mudanças.

---

## ADR 012 — `rootDir` explícito obrigatório no TypeScript 5.9

**Status:** Aceito

**Contexto:** O TypeScript 5.9 deixou de inferir `rootDir` silenciosamente e passou
a exigir que ele seja declarado explicitamente quando `outDir` está configurado.
Isso afetou três arquivos: `apps/api/tsconfig.json` (resolvido com `node16`),
`apps/web/tsconfig.json`, `apps/web/tsconfig.app.json` e
`libs/shared-types/tsconfig.json`.

**Decisão:** Adicionar `"rootDir": "src"` em cada `tsconfig.json` que compila
arquivos fonte.

**Razão:** O valor já era inferido como `"src"` antes — a mudança é apenas tornar
explícito o que o TypeScript já assumia. Nenhum comportamento de compilação muda.

**Consequência:** Qualquer novo `tsconfig.json` criado no projeto que use `outDir`
deve declarar `rootDir` explicitamente.
