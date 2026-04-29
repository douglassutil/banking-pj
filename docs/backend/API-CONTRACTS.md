# API-CONTRACTS.md — Contratos da API

> Todo endpoint implementado deve corresponder exatamente ao que está aqui.
> Qualquer desvio deve ser documentado com justificativa antes de ser implementado.

**Base URL de desenvolvimento:** `http://localhost:3000`
**Prefixo global:** nenhum (rotas começam em `/auth`, `/cards`, etc.)
**Autenticação:** `Authorization: Bearer <jwt_token>` em todas as rotas protegidas

---

## Auth

### POST /auth/login

Autentica o usuário e retorna tokens JWT.

**Request body:**
```json
{
  "email": "admin@empresa.com",
  "password": "senha123"
}
```

**Response 200 — sucesso:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": "uuid",
    "email": "admin@empresa.com",
    "name": "João Silva",
    "role": "ADMIN",
    "companyId": "uuid"
  }
}
```

**Response 401 — credenciais inválidas:**
```json
{
  "statusCode": 401,
  "message": "Credenciais inválidas"
}
```

> **Por que 401 e não 422?** 422 (BusinessRuleException) é para violações de
> regra de negócio dentro de uma operação válida. Credenciais erradas são falha
> de autenticação — domínio do HTTP 401.

---

### GET /auth/me

Retorna os dados do usuário autenticado extraídos do token JWT.

**Headers:** `Authorization: Bearer <token>`

**Response 200:**
```json
{
  "id": "uuid",
  "email": "admin@banking.dev",
  "role": "ADMIN",
  "companyId": "uuid"
}
```

**Response 401 — sem token ou token inválido:** `{ "statusCode": 401 }`

---

### GET /auth/admin-only *(rota de exemplo/diagnóstico)*

Rota exclusiva para ADMIN — demonstra o uso combinado de `JwtAuthGuard` + `RoleGuard` + `@Roles()`.

**Headers:** `Authorization: Bearer <token>`

**Response 200 (ADMIN):** `{ "message": "Você é ADMIN — acesso permitido." }`

**Response 403 (CARDHOLDER):** `{ "statusCode": 403, "message": "Forbidden" }`

---

### POST /auth/logout *(Sprint 3)*

Invalida o token no servidor (quando implementarmos refresh token).

---

## Cards

### GET /cards

Lista cartões da empresa. ADMIN recebe todos; CARDHOLDER recebe apenas os seus.

**Headers:** `Authorization: Bearer <token>`

**Response 200:**
```json
[
  {
    "id": "uuid",
    "lastFourDigits": "4321",
    "status": "ACTIVE",
    "type": "PHYSICAL",
    "cardholderName": "Maria Souza",
    "cardholderEmail": "maria@empresa.com"
  }
]
```

---

### PATCH /cards/:id/block

Bloqueia um cartão. CARDHOLDER só pode bloquear o próprio.

**Response 200:** card atualizado com `status: "BLOCKED"`

**Response 422 — regra de negócio:**
```json
{
  "statusCode": 422,
  "message": "Cartão já está bloqueado"
}
```

**Response 403 — sem permissão:**
```json
{
  "statusCode": 403,
  "message": "Acesso negado"
}
```

---

### PATCH /cards/:id/unblock

Desbloqueia um cartão. Mesmas regras de permissão do `/block`.

---

## Transactions

### GET /transactions

Lista transações. Aceita query params: `?cardId=uuid&startDate=2024-01-01&endDate=2024-01-31`

**Response 200:**
```json
{
  "data": [
    {
      "id": "uuid",
      "amount": 4990,
      "description": "Posto Shell",
      "date": "2024-01-15T14:30:00Z",
      "cardId": "uuid"
    }
  ],
  "total": 1,
  "page": 1,
  "perPage": 20
}
```

> `amount` em centavos: 4990 = R$ 49,90

---

## Disputes

### POST /disputes

Abre uma contestação de transação.

**Request body:**
```json
{
  "transactionId": "uuid",
  "reason": "NOT_RECOGNIZED",
  "description": "Não reconheço essa compra"
}
```

**Response 201:** dispute criada com `status: "OPEN"`

**Response 422 — transação já contestada:**
```json
{
  "statusCode": 422,
  "message": "Esta transação já possui uma contestação aberta"
}
```

---

### PATCH /disputes/:id/review

ADMIN move uma contestação para `UNDER_REVIEW`.

### PATCH /disputes/:id/approve

ADMIN aprova a contestação.

### PATCH /disputes/:id/reject

ADMIN rejeita a contestação.

---

## Padrão de erros

Todos os erros seguem o mesmo shape:

```json
{
  "statusCode": 422,
  "message": "Descrição legível do problema",
  "error": "Business Rule Violation"
}
```

| Código | Quando usar |
|--------|-------------|
| 400    | Payload malformado (class-validator falhou) |
| 401    | Não autenticado (sem token ou token inválido) |
| 403    | Autenticado mas sem permissão (role insuficiente) |
| 404    | Recurso não encontrado |
| 422    | Regra de negócio violada (BusinessRuleException) |
| 500    | Erro interno — nunca expor detalhes ao cliente |
