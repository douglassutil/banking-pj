# SETUP.md — Guia de Configuração do Ambiente

> Execute cada passo na ordem. Não avance sem validar o entregável de cada etapa.
>
> **Filosofia do ambiente:** Docker sobe apenas os serviços de infraestrutura
> (bancos de dados). Node.js, Angular e NestJS rodam diretamente na sua máquina
> para manter hot reload rápido e depuração sem fricção.

---

## Pré-requisitos

Antes de começar, confirme que você tem tudo instalado:

```bash
node --version     # deve mostrar v20.x
npm --version      # deve mostrar 10.x+
docker --version   # deve mostrar 24.x+
docker compose version  # deve mostrar v2.x (sem hífen)
ng version         # Angular CLI — se não tiver: npm install -g @angular/cli@18
nest --version     # NestJS CLI  — se não tiver: npm install -g @nestjs/cli
git --version      # qualquer versão recente
```

> **Docker Desktop (Mac/Windows):** certifique-se de que o Docker Desktop está
> em execução antes de rodar qualquer comando `docker compose`.

---

## Visão geral do que vamos criar

```
banking-pj/
├── CLAUDE.md
├── SETUP.md
├── docker-compose.yml        ← Passo 0: infra (PostgreSQL + Adminer)
├── .env.example
├── .gitignore
├── .npmrc
├── package.json              ← Passo 1: monorepo raiz
├── apps/
│   ├── api/                  ← Passo 3: NestJS
│   └── web/                  ← Passo 4: Angular 18
└── libs/
    ├── shared-types/         ← Passo 2: enums e interfaces
    └── testing/
```

---

## Passo 0 — Docker: Banco de Dados

Este é o **único** componente que roda em contêiner. Subimos o banco antes de
qualquer código para garantir que a conexão funcione desde o primeiro `nest start`.

### Criar o `docker-compose.yml` na raiz do projeto

```yaml
services:

  postgres:
    image: postgres:16-alpine
    container_name: banking-pj-postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB:       banking_pj
      POSTGRES_USER:     banking_user
      POSTGRES_PASSWORD: banking_pass
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U banking_user -d banking_pj"]
      interval: 10s
      timeout: 5s
      retries: 5

  adminer:
    image: adminer:latest
    container_name: banking-pj-adminer
    restart: unless-stopped
    ports:
      - "8080:8080"
    depends_on:
      postgres:
        condition: service_healthy

volumes:
  postgres_data:
```

> **Por que PostgreSQL e não SQLite?**
> Decidimos usar PostgreSQL via Docker como banco de desenvolvimento para
> ter um ambiente próximo do real desde o início. SQLite continuará sendo
> usado apenas nos **testes de integração do NestJS** (`:memory:`) para que
> rodem sem depender do Docker — ver `docs/adrs/decisions.md` ADR 005.

### Criar o `.env.example` na raiz

```env
# ── Banco de dados (Docker) ──────────────────────────────────────────
DB_HOST=localhost
DB_PORT=5432
DB_NAME=banking_pj
DB_USER=banking_user
DB_PASS=banking_pass

# ── JWT ──────────────────────────────────────────────────────────────
JWT_SECRET=troque-por-um-valor-longo-e-aleatorio-em-producao
JWT_REFRESH_SECRET=outro-valor-diferente-do-jwt-secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# ── App ──────────────────────────────────────────────────────────────
NODE_ENV=development
PORT=3000
```

### Subir o banco

```bash
# Na raiz do projeto (onde está o docker-compose.yml)
docker compose up -d

# Verificar que os contêineres estão saudáveis
docker compose ps
```

A saída esperada:

```
NAME                     STATUS
banking-pj-postgres      running (healthy)
banking-pj-adminer       running
```

### Verificar o banco no Adminer

Abra `http://localhost:8080` no navegador e faça login:

| Campo    | Valor          |
|----------|----------------|
| Sistema  | PostgreSQL     |
| Servidor | postgres       |
| Usuário  | banking_user   |
| Senha    | banking_pass   |
| Base     | banking_pj     |

Deve abrir o banco vazio. Isso confirma que o PostgreSQL está acessível.

### Comandos úteis do Docker

```bash
docker compose up -d        # sobe em background
docker compose down         # derruba os contêineres (preserva o volume)
docker compose down -v      # derruba E apaga os dados do banco
docker compose logs -f postgres   # acompanha logs do banco
docker compose ps           # status dos contêineres
```

**Validação do Passo 0:** `docker compose ps` mostra os dois contêineres como `running`.

---

## Passo 1 — Estrutura do Monorepo (NPM Workspaces)

```bash
# Na pasta onde o projeto ficará (se ainda não criou)
mkdir banking-pj && cd banking-pj
```

### Criar o `package.json` raiz

```json
{
  "name": "banking-pj",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "apps/*",
    "libs/*"
  ],
  "scripts": {
    "db:up":         "docker compose up -d",
    "db:down":       "docker compose down",
    "db:reset":      "docker compose down -v && docker compose up -d",
    "dev:api":       "npm run dev --workspace=apps/api",
    "dev:web":       "npm run dev --workspace=apps/web",
    "test:api":      "npm run test --workspace=apps/api",
    "test:web":      "npm run test --workspace=apps/web",
    "test:coverage": "npm run test:coverage --workspace=apps/web"
  }
}
```

### Criar o `.gitignore` na raiz

```
# Dependências
node_modules/

# Build
dist/
out-tsc/

# Banco local (SQLite de testes)
*.sqlite

# Variáveis de ambiente (NUNCA commitar)
.env
.env.local
.env.*.local

# Cobertura de testes
coverage/

# IDE
.idea/
.vscode/
*.suo
*.ntvs*
*.njsproj
*.sln

# OS
.DS_Store
Thumbs.db
```

### Criar o `.npmrc` na raiz

```
legacy-peer-deps=true
```

> **Por que `legacy-peer-deps`?** O Akita 8.0.1 declara peer dependency em
> Angular ≤17. Esta flag instrui o npm a não bloquear a instalação por esse
> motivo. Em runtime não há incompatibilidade — é apenas uma restrição
> declarativa desatualizada no pacote.

### Criar as pastas do monorepo

```bash
mkdir -p apps/web apps/api libs/shared-types libs/testing docs
```

**Validação:** `ls apps/ libs/` deve mostrar as quatro pastas.

---

## Passo 2 — Shared Types

```bash
cd libs/shared-types
```

Criar `package.json`:

```json
{
  "name": "@banking-pj/shared-types",
  "version": "1.0.0",
  "main": "src/index.ts",
  "types": "src/index.ts"
}
```

Criar `src/enums.ts`:

```typescript
export enum UserRole {
  ADMIN      = 'ADMIN',
  CARDHOLDER = 'CARDHOLDER',
}

export enum CardStatus {
  ACTIVE    = 'ACTIVE',
  BLOCKED   = 'BLOCKED',
  CANCELLED = 'CANCELLED',
  EXPIRED   = 'EXPIRED',
}

export enum CardType {
  PHYSICAL = 'PHYSICAL',
  VIRTUAL  = 'VIRTUAL',
}

export enum InvoiceStatus {
  OPEN    = 'OPEN',
  CLOSED  = 'CLOSED',
  OVERDUE = 'OVERDUE',
  PAID    = 'PAID',
}

export enum DisputeStatus {
  OPEN         = 'OPEN',
  UNDER_REVIEW = 'UNDER_REVIEW',
  APPROVED     = 'APPROVED',
  REJECTED     = 'REJECTED',
}

export enum DisputeReason {
  NOT_RECOGNIZED       = 'NOT_RECOGNIZED',
  DUPLICATE            = 'DUPLICATE',
  WRONG_AMOUNT         = 'WRONG_AMOUNT',
  SERVICE_NOT_PROVIDED = 'SERVICE_NOT_PROVIDED',
}
```

Criar `src/index.ts`:

```typescript
export * from './enums';
```

**Validação:** `cat libs/shared-types/src/enums.ts` deve exibir os enums.

---

## Passo 3 — Backend (NestJS)

```bash
cd apps/api

# Criar projeto NestJS dentro da pasta existente
nest new . --skip-git
# Quando perguntar package manager: selecione npm
```

### Instalar dependências do backend

```bash
npm install \
  @nestjs/typeorm typeorm pg \
  @nestjs/jwt @nestjs/passport passport passport-jwt \
  @nestjs/config \
  bcrypt \
  class-validator class-transformer

npm install --save-dev \
  @types/passport-jwt \
  @types/bcrypt \
  @types/node \
  sqlite3
```

> `pg` é o driver do PostgreSQL para o ambiente de desenvolvimento.
> `sqlite3` é instalado apenas como devDependency para os testes de integração
> que usam banco em memória — nunca é usado em desenvolvimento ou produção.

### Configurar `tsconfig.json`

Adicionar dentro de `compilerOptions`:

```json
{
  "compilerOptions": {
    "strict": true,
    "strictPropertyInitialization": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  }
}
```

> `strictPropertyInitialization: false` é necessário para as entidades TypeORM,
> que declaram propriedades sem inicializador (`@Column() name: string`).

### Criar `.env` em `apps/api/`

Copie o `.env.example` da raiz:

```bash
cp ../../.env.example .env
```

O arquivo já tem todos os valores corretos para o banco Docker.

### Configurar TypeORM em `app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject:  [ConfigService],
      useFactory: (config: ConfigService) => {
        const isTest = config.get('NODE_ENV') === 'test';

        // Testes de integração: SQLite em memória (sem Docker necessário)
        if (isTest) {
          return {
            type:        'sqlite',
            database:    ':memory:',
            entities:    [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
          };
        }

        // Desenvolvimento e produção: PostgreSQL via Docker
        return {
          type:        'postgres',
          host:         config.get('DB_HOST'),
          port:         config.get<number>('DB_PORT'),
          database:     config.get('DB_NAME'),
          username:     config.get('DB_USER'),
          password:     config.get('DB_PASS'),
          entities:    [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize:  config.get('NODE_ENV') !== 'production',
          logging:      config.get('NODE_ENV') === 'development',
        };
      },
    }),
  ],
})
export class AppModule {}
```

> **Por que `forRootAsync`?** Para que o TypeORM leia as variáveis de ambiente
> via `ConfigService` em vez de lê-las estaticamente no momento do import.
> Isso garante que `.env` já foi carregado antes da conexão ser tentada.

### Configurar `main.ts`

Substitua o conteúdo gerado pelo NestJS por:

```typescript
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Prefixo global: todas as rotas ficam em /api/* (ex: /api/auth/login).
  // Obrigatório para o proxy do Angular funcionar em desenvolvimento.
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

> **Por que `setGlobalPrefix('api')`?** O proxy do Angular redireciona `/api/*`
> para o backend. Sem o prefixo global, a rota seria `/auth/login` no backend,
> mas o proxy encaminharia `/api/auth/login` → 404.

### Validar backend

```bash
# O banco Docker precisa estar rodando (Passo 0)
npm run start:dev
```

Saída esperada:

```
[NestFactory] Starting Nest application...
[NestApplication] Nest application successfully started
Application is running on: http://[::1]:3000
```

Se aparecer `ECONNREFUSED 127.0.0.1:5432`, o Docker não está rodando.
Execute `docker compose up -d` na raiz do projeto.

**Validação:** `curl http://localhost:3000/api` retorna resposta (pode ser 404, mas sem erro de conexão).

---

## Passo 4 — Frontend (Angular 18)

```bash
cd apps/web

# Criar projeto Angular dentro da pasta existente
ng new web --routing --style=scss --skip-git --directory=.
# Quando perguntar sobre SSR: N
```

### Remover Karma e Jasmine

```bash
npm uninstall \
  karma \
  karma-chrome-launcher \
  karma-coverage \
  karma-jasmine \
  karma-jasmine-html-reporter \
  @types/jasmine \
  jasmine-core

rm karma.conf.js
rm src/test.ts 2>/dev/null || true
```

### Instalar Jest

```bash
npm install --save-dev \
  jest \
  @types/jest \
  jest-preset-angular@14 \
  jest-environment-jsdom
```

> **Atenção às versões do jest-preset-angular:**
> - v14.x → Angular 18 ✅ (nossa versão)
> - v15.x → Angular 19-20
> - v16.x → Angular 21+ (removeu suporte ao 18)
>
> Se o npm instalar uma versão maior, force: `npm install --save-dev jest-preset-angular@14`

### Criar `jest.config.ts` em `apps/web/`

```typescript
import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets';

const presetConfig = createCjsPreset();

const config: Config = {
  ...presetConfig,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment:    'jsdom',
  testPathPattern:    ['src/**/*.spec.ts'],
  coverageDirectory:  'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.module.ts',
    '!src/main.ts',
    '!src/environments/**',
    '!src/**/*.model.ts',
  ],
  coverageThresholds: {
    global: {
      statements: 80,
      branches:   75,
      functions:  80,
      lines:      80,
    },
  },
  moduleNameMapper: {
    '^@banking-pj/shared-types(.*)$':
      '<rootDir>/../../libs/shared-types/src$1',
  },
};

export default config;
```

### Criar `setup-jest.ts` em `apps/web/`

```typescript
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
setupZoneTestEnv();
```

### Atualizar `tsconfig.spec.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir":  "./out-tsc/spec",
    "module":  "CommonJS",
    "types":   ["jest", "node"]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts",
    "setup-jest.ts"
  ]
}
```

### Atualizar scripts no `package.json` de `apps/web/`

```json
{
  "scripts": {
    "ng":              "ng",
    "start":           "ng serve",
    "dev":             "ng serve",
    "build":           "ng build",
    "test":            "jest",
    "test:watch":      "jest --watch",
    "test:coverage":   "jest --coverage"
  }
}
```

### Limpar o template raiz

O Angular gera um `app.html` com a página de boas-vindas padrão. Essa página
aparece na tela independentemente das rotas configuradas. **Substitua todo o
conteúdo** por apenas:

```html
<!-- Ponto de entrada do router — cada rota renderiza seu componente aqui -->
<router-outlet />
```

E simplifique o `app.ts` gerado, removendo o `signal()` que não faz parte do escopo:

```typescript
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
```

> **`standalone: false` obrigatório:** a partir do Angular 19, componentes são
> `standalone: true` por padrão. Como este projeto usa NgModules, todo `@Component`
> precisa declarar `standalone: false` explicitamente — caso contrário não pode
> ser declarado em nenhum `NgModule`.

### Configurar proxy para o backend

Criar `proxy.conf.json` em `apps/web/`:

```json
{
  "/api": {
    "target":       "http://localhost:3000",
    "secure":       false,
    "changeOrigin": true
  }
}
```

Em `angular.json`, dentro de `"serve" > "options"`:

```json
"proxyConfig": "proxy.conf.json"
```

### Validar Jest

```bash
npm test
```

Deve passar o teste `app.component.spec.ts` gerado pelo Angular. Se houver
erro de `setupZoneTestEnv`, confirme que `jest-preset-angular` está na v14.x:

```bash
node -e "const p = require('jest-preset-angular/package.json'); console.log(p.version)"
```

---

## Passo 5 — Estrutura de Pastas Angular

```bash
cd apps/web/src/app

# Core — singletons, nunca lazy loaded
mkdir -p core/auth core/interceptors core/services

# Shared — componentes sem regra de negócio
mkdir -p shared/components/status-badge
mkdir -p shared/components/loading-skeleton
mkdir -p shared/components/empty-state
mkdir -p shared/components/confirm-dialog
mkdir -p shared/directives
mkdir -p shared/pipes

# Layout — shells visuais
mkdir -p layout/main-layout layout/auth-layout layout/header layout/sidebar

# Features — todos lazy loaded
mkdir -p features/auth/components/login
mkdir -p features/dashboard/components/dashboard-page
mkdir -p features/cards/components/card-list-page
mkdir -p features/cards/components/card-item
mkdir -p features/cards/state
mkdir -p features/invoices/state
mkdir -p features/transactions/state
mkdir -p features/disputes/state
mkdir -p features/cardholders/state
```

### Criar os arquivos SASS globais

```bash
mkdir -p apps/web/src/styles
```

Criar `apps/web/src/styles/_variables.scss` com o conteúdo completo da seção
`_variables.scss` em `docs/frontend/SASS-BEM.md`.

Criar `apps/web/src/styles/_mixins.scss` com o conteúdo completo da seção
`_mixins.scss` em `docs/frontend/SASS-BEM.md`.

Atualizar `apps/web/src/styles.scss`:

```scss
@use 'styles/variables' as *;
@use 'styles/mixins' as *;
```

---

## Passo 6 — Shared Types no Angular

Atualizar `tsconfig.json` de `apps/web/` para mapear o alias do workspace:

```json
{
  "compilerOptions": {
    "paths": {
      "@banking-pj/shared-types": ["../../libs/shared-types/src/index.ts"]
    }
  }
}
```

Isso permite importar `import { CardStatus } from '@banking-pj/shared-types'`
tanto no frontend quanto no backend, usando os mesmos enums compilados.

**Validar o alias** — adicionar temporariamente em `app.component.ts`:

```typescript
import { CardStatus } from '@banking-pj/shared-types';
console.log(CardStatus.ACTIVE); // deve mostrar 'ACTIVE' no console do browser
```

Remover após confirmar. Se houver erro de compilação, verifique o caminho no `paths`.

---

## Passo 7 — Instalar Akita

```bash
cd apps/web
npm install @datorama/akita
```

O aviso de peer dependency já está suprimido pelo `.npmrc` da raiz. Se instalou
`apps/web` sem herdar o `.npmrc`, use:

```bash
npm install @datorama/akita --legacy-peer-deps
```

Verificar instalação:

```bash
node -e "require('@datorama/akita'); console.log('Akita OK')"
```

---

## Checklist de Validação Final

Antes de iniciar o **Sprint 2 (Autenticação)**, todos os itens abaixo devem
estar marcados:

### Docker e Infra
- [ ] `docker compose ps` mostra `banking-pj-postgres` como `running (healthy)`
- [ ] `docker compose ps` mostra `banking-pj-adminer` como `running`
- [ ] Adminer acessível em `http://localhost:8080` com login funcionando
- [ ] `.env.example` commitado, `.env` no `.gitignore`

### Monorepo
- [ ] `package.json` raiz com workspaces e scripts `db:up`, `dev:api`, `dev:web`
- [ ] `.npmrc` com `legacy-peer-deps=true`
- [ ] `libs/shared-types/src/enums.ts` com todos os enums exportados

### Backend
- [ ] `npm run start:dev` (em `apps/api`) inicia sem erros na porta 3000
- [ ] Log mostra conexão com PostgreSQL (`Query: SELECT NOW()` ou similar)
- [ ] `apps/api/.env` criado com os dados do Docker

### Frontend
- [ ] `ng serve` (em `apps/web`) abre `http://localhost:4200` sem erros no browser
- [ ] `npm test` passa o `app.component.spec.ts` padrão
- [ ] `npm run test:coverage` gera relatório em `apps/web/coverage/`
- [ ] Import de `@banking-pj/shared-types` compila sem erro
- [ ] `@datorama/akita` instalado (`node -e "require('@datorama/akita')"` sem erro)

### Estilos
- [ ] `_variables.scss` e `_mixins.scss` em `apps/web/src/styles/`
- [ ] `ng serve` compila SASS sem erros (verificar terminal)

### Proxy
- [ ] `proxy.conf.json` em `apps/web/`
- [ ] `angular.json` com `"proxyConfig": "proxy.conf.json"`
- [ ] Com ambos rodando, `http://localhost:4200/api` retorna algo (pode ser 404, mas sem erro de CORS)

---

## Rotina diária de desenvolvimento

Toda vez que for trabalhar no projeto:

```bash
# 1. Subir o banco (se não estiver rodando)
docker compose up -d

# 2. Em terminais separados:
cd apps/api && npm run start:dev   # terminal 1 — backend
cd apps/web && ng serve            # terminal 2 — frontend

# Para rodar testes enquanto desenvolve:
cd apps/web && npm run test:watch  # terminal 3 (opcional)
cd apps/api && npm run test:watch  # terminal 4 (opcional)
```

Ao terminar:

```bash
# Parar Node (Ctrl+C nos terminais)
# O banco pode ficar rodando — o Docker usa poucos recursos em idle
# Ou derrubar explicitamente:
docker compose down
```

---

## Problemas Conhecidos e Soluções

### "ECONNREFUSED 127.0.0.1:5432" ao iniciar o NestJS
O Docker não está rodando ou o contêiner do PostgreSQL não subiu.
```bash
docker compose up -d
docker compose ps   # verificar status
docker compose logs postgres  # ver erros do banco
```

### "Cannot find module 'jest-preset-angular/presets'"
Versão incompatível instalada. Forçar v14:
```bash
npm install --save-dev jest-preset-angular@14
```

### "Peer dependency conflict ao instalar Akita"
Já coberto pelo `.npmrc`. Se instalar fora do workspace raiz:
```bash
npm install @datorama/akita --legacy-peer-deps
```

### "TypeError: setupZoneTestEnv is not a function"
Versão errada do `jest-preset-angular`. Verificar e corrigir:
```bash
node -e "const p = require('jest-preset-angular/package.json'); console.log(p.version)"
# Se não for 14.x:
npm install --save-dev jest-preset-angular@14
```

### "emitDecoratorMetadata error" nos decoradores do NestJS
Verificar se `apps/api/tsconfig.json` contém:
```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true
```

### Port 5432 already in use
Outra instância de PostgreSQL está rodando na sua máquina.
```bash
# Opção 1: parar o postgres local
sudo service postgresql stop   # Linux
brew services stop postgresql  # Mac

# Opção 2: mudar a porta no docker-compose.yml
ports:
  - "5433:5432"   # usar 5433 externamente
# E atualizar DB_PORT=5433 no .env
```

### "Cannot read properties of undefined (reading '_select')" no Akita

Ocorre quando seletores Akita são declarados como class fields inline com ES2022.
Com Angular 19+, os inicializadores de propriedade rodam **antes** do `super(store)`,
então o `_select` interno ainda não existe.

**Solução:** sempre inicializar os seletores no construtor, após `super(store)`:

```typescript
// ❌ Errado — falha com ES2022
readonly user$ = this.select(state => state.user);

// ✅ Correto
readonly user$: Observable<AuthUser | null>;

constructor(protected override store: AuthStore) {
  super(store); // inicializa o Akita
  this.user$ = this.select(state => state.user); // só depois
}
```

O mesmo vale para qualquer classe que use `this` de uma classe pai no inicializador:
`FormGroup`, `Observable`, etc. Mover para o construtor resolve.

### "Property 'fb' is used before its initialization" no Angular

Mesmo problema do Akita: com ES2022, `form = this.fb.group({})` como class field
roda antes de `this.fb` ser atribuído pelo construtor.

**Solução:** inicializar `form`, `isLoading$` e similares no corpo do construtor:

```typescript
// ✅ Correto
form: FormGroup;
constructor(private fb: FormBuilder) {
  this.form = this.fb.group({ ... });
}
```

### "password authentication failed for user banking_user"
O volume do Docker tem dados de uma configuração anterior.
```bash
docker compose down -v   # apaga o volume com os dados antigos
docker compose up -d     # recria tudo do zero
```
