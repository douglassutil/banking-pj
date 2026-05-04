# Setup — React Beginner Track

## Pré-requisitos

- Node.js 20+
- Docker
- Git

---

## Passo a passo

### 1. Clonar projeto

```bash
git clone https://github.com/douglassutil/banking-pj
cd banking-pj
```

### 2. Copiar variáveis de ambiente

```bash
cp .env.example .env
cp .env.example apps/backend/.env
```

O `.env` na raiz é usado pelo Docker e ferramentas globais.
O `.env` em `apps/backend/` é usado pelo NestJS e Prisma CLI.

### 3. Instalar dependências

```bash
npm install
```

### 4. Subir banco de dados

```bash
npm run db:up
```

### 5. Rodar backend

Abra um novo terminal e execute:

```bash
npm run dev:backend
```

Verifique o log do terminal. O backend está pronto quando aparecer:

```
Server running on port 3000
```

Não abra `http://localhost:3000` no navegador — não há rota configurada ainda.

---

### 6. Rodar frontend

Abra outro terminal e execute:

```bash
npm run dev:frontend
```

Frontend disponível em:

http://localhost:5173

---

## Database Migrations

Migrations will be introduced in **Sprint 7**.
At this stage, the database will be empty — that is expected.
Do not worry about running migrations before reaching Sprint 7.

---

## Verificação

- Banco rodando (Docker)
- Backend rodando (log mostra "Server running on port 3000")
- Frontend rodando (http://localhost:5173 abre no navegador)

Se tudo estiver ok, você está pronto para iniciar os sprints.
