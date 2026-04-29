# SPRINTS.md — Planejamento de Desenvolvimento

> Consulte este arquivo para saber o que está em andamento e o que vem a seguir.
> Atualize os checkboxes à medida que cada item for concluído **e testado**.

---

## Sprint 1 — Ambiente e Estrutura ✅ CONCLUÍDA

**Objetivo:** ter o monorepo funcional com todos os processos rodando localmente.

- [x] Docker: PostgreSQL + Adminer rodando
- [x] Monorepo raiz: `package.json`, `.npmrc`, `.gitignore`
- [x] `libs/shared-types`: enums exportados
- [x] Backend (NestJS 11): projeto criado, TypeORM + ConfigModule configurados
- [x] Backend: conectando ao PostgreSQL via Docker
- [x] Frontend (Angular 21): projeto criado com NgModules (`--no-standalone`)
- [x] Frontend: Karma/Jasmine removidos, Jest 30 + jest-preset-angular@16 funcionando
- [x] Frontend: estrutura de pastas (core, shared, layout, features)
- [x] Frontend: alias `@banking-pj/shared-types` mapeado no tsconfig
- [x] Frontend: Akita 8.0.1 instalado
- [x] Frontend: `_variables.scss` e `_mixins.scss` criados
- [x] Frontend: `ng serve` compilando sem erros em localhost:4200
- [x] Documentação: pasta `docs/` criada com todos os arquivos de referência

**Desvios registrados (sem impacto no aprendizado):**
- Angular 21 instalado (SETUP.md especificava 18) — CLI pegou versão mais recente
- NestJS 11 instalado (SETUP.md especificava 10) — idem
- Node 24 (SETUP.md especificava 20 LTS)
- jest-preset-angular@16 em vez de @14 — necessário para Angular 21

---

## Sprint 2 — Autenticação ← EM ANDAMENTO

**Objetivo:** implementar o fluxo completo de login JWT, do banco ao browser.

**Conceito central:** autenticação em dois lados — o backend emite e valida tokens,
o frontend armazena e envia o token em cada requisição.

### Backend (NestJS)

- [x] `BusinessRuleException`: exceção de negócio com status 422
- [x] Entidade `User` com campos: id, email, passwordHash, role, companyId, name
- [x] Módulo `UsersModule`: entidade + service (`findByEmail`) + module exportando UsersService
- [x] `libs/shared-types` compilado para JS — NestJS resolve via symlink do npm workspace
- [x] Seed de usuários de teste (1 ADMIN + 1 CARDHOLDER) — `DatabaseModule` + `UserSeedService`
- [x] Módulo `AuthModule`: login endpoint (`POST /auth/login`)
- [x] `JwtStrategy` com Passport: valida o token em rotas protegidas
- [ ] `RoleGuard` + decorator `@Roles()`: protege rotas por perfil
- [ ] Spec: `AuthService` — cenários de login válido, senha errada, usuário inexistente

### Frontend (Angular)

- [ ] `AuthService` no `CoreModule`: chama `POST /api/auth/login`
- [ ] `AuthStore` + `AuthQuery` (Akita): armazena `{ token, user, isLoading, error }`
- [ ] `AuthFacade`: interface pública entre componentes e estado
- [ ] Interceptor HTTP (`TokenInterceptor`): injeta `Authorization: Bearer <token>`
- [ ] `AuthGuard`: redireciona para `/login` se não autenticado
- [ ] `RoleGuard`: redireciona se perfil insuficiente
- [ ] Componente `LoginComponent`: formulário com validação reativa
- [ ] Spec: `AuthFacade` — login com sucesso, login com erro

---

## Sprint 3 — Cards (planejada)

**Objetivo:** listagem e detalhes de cartões com filtro por perfil.

- [ ] Entidade `Card` com campos: id, lastFourDigits, status, type, cardholderName, companyId
- [ ] `CardsModule` backend: CRUD + filtro por companyId/userId
- [ ] `CardsStore` + `CardsQuery` + `CardsFacade` (Akita)
- [ ] `CardListPageComponent`: lista com status badge e skeleton loader
- [ ] `CardItemComponent` (Dumb): exibe um cartão com OnPush
- [ ] Bloquear/desbloquear cartão: regra de negócio no backend
- [ ] Spec: regra de bloqueio (CARDHOLDER só bloqueia o próprio cartão)

---

## Sprint 4 — Transações e Faturas (planejada)

- [ ] Entidade `Transaction` + `Invoice`
- [ ] Listagem de transações com paginação
- [ ] Cálculo de fatura (soma de transações por período)
- [ ] Filtro ADMIN vs CARDHOLDER

---

## Sprint 5 — Contestações (planejada)

- [ ] Entidade `Dispute` com estado de máquina (OPEN → UNDER_REVIEW → APPROVED/REJECTED)
- [ ] Workflow de contestação
- [ ] Notificação ao ADMIN quando nova contestação é aberta

---

## Legenda de status

| Símbolo | Significado |
|---------|-------------|
| `- [ ]` | Pendente |
| `- [x]` | Concluído e testado |
| `← EM ANDAMENTO` | Sprint atual |
| `(planejada)` | Escopo definido, não iniciada |
