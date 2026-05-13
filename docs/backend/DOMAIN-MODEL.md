# DOMAIN-MODEL.md — Modelo de Domínio

> Descreve as entidades, seus campos, relacionamentos e regras de negócio.
> Toda entidade TypeORM deve refletir exatamente o que está documentado aqui.

---

## Entidades

### User

Representa um usuário do sistema — pode ser administrador da empresa ou portador de cartão.

| Campo        | Tipo        | Restrições                    | Descrição                          |
|--------------|-------------|-------------------------------|------------------------------------|
| id           | uuid        | PK, gerado automaticamente    | Identificador único                |
| email        | string      | unique, not null              | Login do usuário                   |
| passwordHash | string      | not null                      | Senha criptografada com bcrypt     |
| name         | string      | not null                      | Nome completo                      |
| role         | UserRole    | not null, default: CARDHOLDER | Perfil de acesso                   |
| companyId    | uuid        | not null                      | Empresa à qual pertence            |
| createdAt    | timestamp   | auto                          | Data de criação                    |
| updatedAt    | timestamp   | auto                          | Última atualização                 |

**Regras:**
- Um usuário pertence a exatamente uma empresa (`companyId`)
- ADMIN vê todos os dados da empresa; CARDHOLDER vê apenas os próprios
- A senha nunca é retornada em nenhum endpoint — apenas `passwordHash` existe no banco

---

### Card

Representa um cartão corporativo — físico ou virtual — associado a um portador.

| Campo           | Tipo       | Restrições     | Descrição                              |
|-----------------|------------|----------------|----------------------------------------|
| id              | uuid       | PK             | Identificador único                    |
| lastFourDigits  | string(4)  | not null       | Últimos 4 dígitos do cartão            |
| status          | CardStatus | not null       | Estado atual do cartão                 |
| type            | CardType   | not null       | Físico ou virtual                      |
| cardholderName  | string     | not null       | Nome impresso no cartão                |
| cardholderEmail | string     | not null       | Email do portador (FK lógica)          |
| companyId       | uuid       | not null       | Empresa dona do cartão                 |
| createdAt       | timestamp  | auto           |                                        |
| updatedAt       | timestamp  | auto           | Atualizado em toda operação de status  |

**Por que `updatedAt` no Card?** O campo `status` é mutável — bloqueio e desbloqueio
alteram seu valor. `updatedAt` fornece rastreabilidade mínima: *quando* foi a última
operação. Não substitui um audit log completo, mas é o piso de auditoria para entidades
com estado mutável em contextos regulados.

**Regras:**
- CARDHOLDER só pode bloquear/desbloquear o próprio cartão
- ADMIN pode operar qualquer cartão da empresa
- Cartão `CANCELLED` não pode ser reativado — operação irreversível
- Cartão `EXPIRED` não aceita novas transações

---

### Transaction

Representa uma movimentação financeira vinculada a um cartão.

| Campo       | Tipo      | Restrições | Descrição                        |
|-------------|-----------|------------|----------------------------------|
| id          | uuid      | PK         |                                  |
| amount      | decimal   | not null   | Valor em centavos (evita float)  |
| description | string    | not null   | Descrição do estabelecimento     |
| date        | timestamp | not null   | Data da transação                |
| cardId      | uuid      | FK → Card  |                                  |
| invoiceId   | uuid      | FK → Invoice, nullable | Fatura à qual pertence |
| companyId   | uuid      | not null   |                                  |

**Por que `amount` em centavos?** Armazenar valores monetários como `number` (float)
causa erros de arredondamento. `R$ 10,99` vira `1099` centavos — inteiro, sem imprecisão.

---

### Invoice

Representa a fatura mensal de um cartão.

| Campo     | Tipo          | Restrições | Descrição                    |
|-----------|---------------|------------|------------------------------|
| id        | uuid          | PK         |                              |
| status    | InvoiceStatus | not null   | Estado da fatura             |
| dueDate   | date          | not null   | Data de vencimento           |
| total     | decimal       | computed   | Soma das transações          |
| cardId    | uuid          | FK → Card  |                              |
| companyId | uuid          | not null   |                              |

---

### Dispute

Representa uma contestação de transação feita pelo portador.

| Campo         | Tipo          | Restrições          | Descrição                    |
|---------------|---------------|---------------------|------------------------------|
| id            | uuid          | PK                  |                              |
| reason        | DisputeReason | not null            | Motivo da contestação        |
| status        | DisputeStatus | not null, default: OPEN |                          |
| description   | string        | nullable            | Detalhamento do portador     |
| transactionId | uuid          | FK → Transaction    |                              |
| openedById    | uuid          | FK → User           | Portador que abriu           |
| resolvedById  | uuid          | FK → User, nullable | Admin que resolveu           |
| createdAt     | timestamp     | auto                |                              |
| resolvedAt    | timestamp     | nullable            |                              |

**Máquina de estados:**
```
OPEN → UNDER_REVIEW → APPROVED
                    → REJECTED
```
Transições inválidas (ex: APPROVED → OPEN) geram `BusinessRuleException`.

---

## Relacionamentos

```
Company (implícito via companyId)
  │
  ├── User (1:N)
  │     └── Card (1:N via cardholderEmail)
  │
  └── Card (1:N)
        ├── Transaction (1:N)
        │     └── Dispute (1:1)
        └── Invoice (1:N)
              └── Transaction (1:N)
```

> **Por que `companyId` em todas as entidades?** Isolamento de dados por empresa
> (multi-tenancy simples). Toda query deve incluir `WHERE companyId = :companyId`
> para garantir que um usuário nunca veja dados de outra empresa.
