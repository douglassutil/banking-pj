# Sprint 3 — Introduce Service Layer

## Objective

Refactor the existing endpoint to introduce a service layer and separate responsibilities between controller and business logic.

---

## What You Will Learn

- What a service is
- Separation of concerns
- How controllers and services interact
- Basic code organization

---

## Prerequisites

- Sprint 0 completed
- Sprint 1 completed
- Sprint 2 completed
- Health endpoint working

---

## Step-by-Step Tasks

### 1) Create a service

Create a new file:

```text
apps/backend/src/health/health.service.ts
```

---

### 2) Implement the service

Create a class called `HealthService`.

Move the response logic to this service.

---

### 3) Update the controller

Modify your controller to use the service instead of returning the response directly.

---

### 4) Inject the service

Use dependency injection to access the service inside the controller.

---

### 5) Register the service

Open:

```text
apps/backend/src/app.module.ts
```

Add the service to the `providers` array.

---

### 6) Test the endpoint again

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

But now the logic is handled by the service.

---

## Verification Checklist

- [ ] Service file created
- [ ] Logic moved to service
- [ ] Controller uses the service
- [ ] Service registered in AppModule
- [ ] Endpoint still works

---

## Definition of Done

This sprint is complete when:

- The controller no longer contains business logic
- The service handles the response
- The student understands separation of concerns

---

## Common Mistakes

- Forgetting to register the service
- Not injecting the service correctly
- Keeping logic inside the controller

---

## Troubleshooting

If the application fails:

- Check console logs
- Verify provider registration
- Ensure correct imports

---

## Reflection Questions

- Why should controllers be thin?
- What is the responsibility of a service?
- How does this improve maintainability?

---

## Mentor Notes

This is the first architectural improvement.

Focus on understanding structure, not complexity.
