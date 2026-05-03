# Sprint 6 — Input Validation

## Objective

Validate incoming request data to ensure only valid inputs are processed by the system.

---

## What You Will Learn

- Why validation is important
- How to validate DTOs
- How to handle invalid input
- Basic API error responses

---

## Prerequisites

- Sprint 0 completed
- Sprint 1 completed
- Sprint 2 completed
- Sprint 3 completed
- Sprint 4 completed
- Sprint 5 completed

---

## Step-by-Step Tasks

### 1) Install validation dependencies

```bash
npm install class-validator class-transformer
```

---

### 2) Update DTO with validation rules

Open:

```text
apps/backend/src/health/dto/create-health.dto.ts
```

Add validation rules to the `message` field.

Examples:

- Required
- Must be a string
- Minimum length

---

### 3) Enable validation globally

Open:

```text
apps/backend/src/main.ts
```

Enable validation pipe.

---

### 4) Test invalid input

Send request:

```json
{}
```

Expected:

```text
400 Bad Request
```

---

### 5) Test valid input

```json
{
  "message": "hello"
}
```

Expected:

```json
{
  "status": "ok",
  "message": "hello"
}
```

---

## Expected Result

- Invalid data is rejected
- Valid data is accepted
- API returns proper error responses

---

## Verification Checklist

- [ ] Validation library installed
- [ ] DTO contains validation rules
- [ ] Validation pipe enabled
- [ ] Invalid requests fail
- [ ] Valid requests succeed

---

## Definition of Done

- System validates input data
- Invalid data does not reach service layer
- Student understands validation flow

---

## Common Mistakes

- Forgetting to enable validation pipe
- Missing decorators in DTO
- Incorrect import of validation tools

---

## Reflection Questions

- Why should APIs validate input?
- What problems can invalid data cause?
- Where should validation happen?

---

## Mentor Notes

This is the first step toward robust and secure APIs.
