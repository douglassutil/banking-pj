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

### 1) Install Prisma

```bash
npm install prisma @prisma/client
npx prisma init
```

---

### 2) Configure database connection

Open:

```text
prisma/schema.prisma
```

Set the datasource using `DATABASE_URL`.

---

### 3) Create a model

Define a simple model, for example:

```text
Message
```

Fields:

- id
- content
- createdAt

---

### 4) Run migration

```bash
npx prisma migrate dev --name init
```

---

### 5) Generate Prisma client

```bash
npx prisma generate
```

---

### 6) Use Prisma in service

Inject Prisma into your service.

Save incoming message data into the database.

---

### 7) Test persistence

Send request:

```json
{
  "message": "hello"
}
```

Verify that data is stored in the database.

---

## Expected Result

- Data is saved in the database
- API still returns correct response

---

## Verification Checklist

- [ ] Prisma installed
- [ ] Database connected
- [ ] Model created
- [ ] Migration executed
- [ ] Data saved successfully

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
