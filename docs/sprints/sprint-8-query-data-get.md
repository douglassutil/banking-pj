# Sprint 8 — Query Data (GET)

## Objective

Retrieve data from the database and return it through a GET endpoint.

---

## What You Will Learn

- How to query data using Prisma
- How to return lists of data
- How GET endpoints work with real data

---

## Prerequisites

- Sprint 0 completed
- Sprint 1 completed
- Sprint 2 completed
- Sprint 3 completed
- Sprint 4 completed
- Sprint 5 completed
- Sprint 6 completed
- Sprint 7 completed

---

## Step-by-Step Tasks

### 1) Update the service

Modify your service to retrieve data from the database.

Example:

- Find all messages

---

### 2) Create a GET endpoint

In your controller, create a GET route:

```text
GET /health
```

Return the list of stored messages.

---

### 3) Structure the response

Return something like:

```json
[
  {
    "id": 1,
    "content": "hello"
  }
]
```

---

### 4) Test the endpoint

Call:

```bash
GET http://localhost:3000/health
```

---

## Expected Result

- API returns stored data
- Data matches what was previously inserted

---

## Verification Checklist

- [ ] Service queries database
- [ ] Controller returns data
- [ ] Endpoint responds correctly
- [ ] Data persists between requests

---

## Definition of Done

- System can retrieve stored data
- Student understands read operations

---

## Common Mistakes

- Forgetting to await Prisma query
- Incorrect method usage
- Returning wrong data format

---

## Reflection Questions

- What is the difference between POST and GET?
- Why is data retrieval important?
- How does this support frontend features?

---

## Mentor Notes

This completes the basic read/write cycle of the system.
