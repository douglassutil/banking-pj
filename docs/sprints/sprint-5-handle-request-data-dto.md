# Sprint 5 — Handle Request Data (DTO)

## Objective

Receive data from HTTP requests using a DTO (Data Transfer Object).

---

## What You Will Learn

- What a DTO is
- How to receive request body data
- How to structure input data
- Basic validation concepts

---

## Prerequisites

- Sprint 0 completed
- Sprint 1 completed
- Sprint 2 completed
- Sprint 3 completed
- Sprint 4 completed

---

## Step-by-Step Tasks

### 1) Create a DTO file

Create:

```text
apps/backend/src/health/dto/create-health.dto.ts
```

---

### 2) Define the DTO

Create a class with properties:

```text
message: string
```

---

### 3) Update the controller

Modify your endpoint to accept request body data using the DTO.

---

### 4) Update the service

Modify the service to use the received data.

Return something like:

```json
{
  "status": "ok",
  "message": "<received message>"
}
```

---

### 5) Test the endpoint

Send a POST request:

```bash
POST http://localhost:3000/health
```

Body example:

```json
{
  "message": "hello"
}
```

---

## Expected Result

```json
{
  "status": "ok",
  "message": "hello"
}
```

---

## Verification Checklist

- [ ] DTO created
- [ ] Controller receives body
- [ ] Service uses DTO data
- [ ] Endpoint returns dynamic response

---

## Definition of Done

- Endpoint accepts input data
- Response changes based on input
- Student understands request body handling

---

## Common Mistakes

- Forgetting @Body()
- DTO not imported correctly
- Service not updated

---

## Reflection Questions

- Why do we use DTOs?
- What problems do they solve?
- How do they help in larger systems?

---

## Mentor Notes

This introduces input handling — a key step toward real APIs.
