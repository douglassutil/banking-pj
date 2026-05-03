# Sprint 4 — Organize Feature Module

## Objective

Organize the health feature into a proper module structure following NestJS best practices.

---

## What You Will Learn

- What a module is in NestJS
- How to group related files
- How to structure a feature
- How to scale project organization

---

## Prerequisites

- Sprint 0 completed
- Sprint 1 completed
- Sprint 2 completed
- Sprint 3 completed
- Health endpoint working with service layer

---

## Step-by-Step Tasks

### 1) Create a module file

Create a new file:

```text
apps/backend/src/health/health.module.ts
```

---

### 2) Define the module

Create a class called `HealthModule`.

Register:

- HealthController
- HealthService

---

### 3) Update AppModule

Open:

```text
apps/backend/src/app.module.ts
```

Remove controller and service from AppModule.

Import the HealthModule instead.

---

### 4) Verify file structure

Your structure should look like:

```text
health/
  health.controller.ts
  health.service.ts
  health.module.ts
```

---

### 5) Test the endpoint

Run the backend and call:

```bash
GET http://localhost:3000/health
```

---

## Expected Result

The endpoint still returns:

```json
{
  "status": "ok"
}
```

But now the feature is properly organized inside a module.

---

## Verification Checklist

- [ ] Module file created
- [ ] Controller and service moved into module
- [ ] AppModule imports HealthModule
- [ ] Endpoint still works

---

## Definition of Done

This sprint is complete when:

- The feature is encapsulated in a module
- AppModule is simplified
- The student understands modular architecture

---

## Common Mistakes

- Forgetting to export module correctly
- Not importing module in AppModule
- Keeping logic in AppModule

---

## Troubleshooting

If the endpoint stops working:

- Check module imports
- Verify controller is registered
- Check console errors

---

## Reflection Questions

- Why do we use modules?
- How does this help scale the system?
- What would happen in a large project without modules?

---

## Mentor Notes

This is the first step toward scalable architecture.

Focus on organization, not complexity.
