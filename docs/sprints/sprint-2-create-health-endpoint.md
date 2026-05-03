# Sprint 2 — Create Health Endpoint

## Objective

Create your first backend endpoint and verify that the system responds to HTTP requests.

This is your first implementation sprint.

---

## What You Will Learn

- What a controller is
- How to create a route
- How HTTP requests work
- How to return a response

---

## Prerequisites

- Sprint 0 completed
- Sprint 1 completed
- System running locally

---

## Step-by-Step Tasks

### 1) Create a controller

Inside the backend project, create a new file:

```text
apps/backend/src/health/health.controller.ts
```

---

### 2) Implement the controller

Create a class called `HealthController`.

---

### 3) Add a route

Add a GET route for `/health`.

---

### 4) Return a response

Return the following JSON:

```json
{
  "status": "ok"
}
```

---

### 5) Register the controller

Open:

```text
apps/backend/src/app.module.ts
```

Add your controller to the `controllers` array.

---

### 6) Test the endpoint

Start the backend:

```bash
npm run dev:api
```

Call the endpoint:

```bash
GET http://localhost:3000/health
```

You can use:

- Browser
- Postman
- curl

---

## Expected Result

The endpoint returns:

```json
{
  "status": "ok"
}
```

---

## Verification Checklist

- [ ] Controller file created
- [ ] Route implemented
- [ ] Controller registered in AppModule
- [ ] Endpoint responds correctly
- [ ] No runtime errors

---

## Definition of Done

This sprint is complete when:

- The endpoint works
- The student understands how a request reaches the controller

---

## Common Mistakes

- Forgetting to register the controller
- Incorrect route decorator
- Typo in endpoint path

---

## Troubleshooting

If the endpoint does not work:

- Check if the server is running
- Check console logs
- Verify controller is registered

---

## Reflection Questions

- What happens when you call an endpoint?
- What is the role of a controller?
- Why is this the entry point of the backend?

---

## Mentor Notes

This is the first coding task.

Ensure the student understands every step.
