# Sprint 1 — Understand the System

## Objective

Understand the structure of the project and how the different parts of the system work together.

This sprint focuses on reading and exploring the codebase, not writing new features.

---

## What You Will Learn

- How the project is organized
- What each folder is responsible for
- How backend and frontend communicate
- How the system starts and runs

---

## Prerequisites

- Sprint 0 completed
- System running locally

---

## Step-by-Step Tasks

### 1) Explore the project structure

Open the repository and review the following folders:

```text
apps/
  backend/
  frontend/

infrastructure/

docs/

scripts/
```

Try to answer:

- What is the backend responsible for?
- What is the frontend responsible for?
- What is infrastructure responsible for?

---

### 2) Understand the backend entry point

Open the file:

```text
apps/backend/src/main.ts
```

Identify:

- Where the server starts
- Which port is used
- What module is loaded

---

### 3) Understand the application module

Open the file:

```text
apps/backend/src/app.module.ts
```

Observe:

- Imports
- Controllers
- Providers

Answer:

What is the role of the AppModule?

---

### 4) Understand the frontend entry point

Open the file:

```text
apps/frontend/src/main.tsx
```

Identify:

- Where the application starts
- Which component is rendered first

---

### 5) Understand the main frontend component

Open the file:

```text
apps/frontend/src/App.tsx
```

Observe:

- JSX structure
- Root component responsibility

---

## Verification Checklist

Confirm the following:

- [ ] You can locate the backend entry point
- [ ] You can locate the frontend entry point
- [ ] You understand the purpose of each main folder
- [ ] The system still runs successfully

---

## Definition of Done

This sprint is complete when:

- The student understands the project structure
- The student can explain how the system starts
- The student can navigate the codebase confidently

---

## Reflection Questions

- What happens when the backend starts?
- What happens when the frontend starts?
- Why is it important to understand the structure before coding?

---

## Mentor Notes

Do not rush this step.

Students who understand the structure early make fewer mistakes later.
