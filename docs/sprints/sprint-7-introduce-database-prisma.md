# Sprint 7 — Introduce Database (Prisma)

## Objective

Connect the application to a database and persist data using Prisma ORM.

---

## What You Will Learn

- What an ORM is
- How to connect to a database
- How to define models
- How to persist data

---

## Prerequisites

- Sprint 0 completed
- Sprint 1 completed
- Sprint 2 completed
- Sprint 3 completed
- Sprint 4 completed
- Sprint 5 completed
- Sprint 6 completed

---

## Step-by-Step Tasks

### 1) Understand the setup

Prisma is already configured in this project. You do NOT need to install or initialize it.

Open the existing schema file:

```text
apps/backend/prisma/schema.prisma
```

You will see the datasource and generator already defined.
Your task is to define your first model.

---

### 2) Create a model

Add the following model to `schema.prisma`:

```prisma
model Account {
  id        Int      @id @default(autoincrement())
  name      String
  balance   Float
  createdAt DateTime @default(now())
}
```

This represents a bank account — it fits the domain of this application.

---

### 3) Run migration

From the project root:

```bash
npm run migrate
```

This creates the table in your database.

---

### 4) Generate Prisma client

```bash
npm run generate
```

This regenerates the typed client so TypeScript knows about your new model.

---

### 5) Use Prisma in service

Inject Prisma into your service.

Save incoming account data into the database.

---

### 6) Test persistence

Send a POST request to create an account.

Verify that the data is stored in the database using Adminer (http://localhost:8080).

---

## Expected Result

- Data is saved in the database
- API still returns correct response

---

## Verification Checklist

- [ ] Schema updated with Account model
- [ ] Migration executed successfully
- [ ] Prisma client generated
- [ ] Data saved and visible in Adminer

---

## Definition of Done

- System persists data
- Student understands basic ORM usage

---

## Common Mistakes

- Incorrect DATABASE_URL
- Migration not applied
- Prisma client not generated

---

## Reflection Questions

- What is an ORM?
- Why use Prisma instead of raw SQL?
- How does persistence change the system behavior?

---

## Mentor Notes

This is a major milestone — the system now stores real data.
