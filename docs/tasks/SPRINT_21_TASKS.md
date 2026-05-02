# Sprint 21 — Security and Rate Limiting (Training Tasks)

This document converts Sprint 21 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Implement basic security protections to prevent abuse and improve system reliability.

The system should:

- Limit excessive requests
- Protect authentication endpoints
- Add security headers
- Configure safe CORS rules

---

## Why This Sprint Matters

When an application is exposed to the internet, it becomes a target for misuse.

Without protection:

- Bots can overload the server
- Users can attempt brute-force logins
- Security vulnerabilities can be exploited

This sprint introduces defensive thinking — protecting systems before problems occur.

---

## Task 1 — Understand Rate Limiting

### Objective

Learn how rate limiting protects applications.

### Steps

1. Research what rate limiting is

2. Identify scenarios where it is needed

3. Document at least two examples

### Expected Result

Developer understands why rate limiting is important.

### Manual Test

Explain in your own words how rate limiting works.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 2 — Install Rate Limiting Library

### Objective

Add rate limiting capability to the backend.

### Steps

1. Install package:

express-rate-limit

2. Verify installation

### Expected Result

Application can use rate limiting middleware.

### Manual Test

Check package.json contains dependency.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 3 — Configure Global Rate Limit

### Objective

Limit the number of requests allowed per minute.

### Steps

1. Create middleware configuration

2. Set limit:

100 requests per minute

3. Apply middleware globally

### Expected Result

Excessive requests are blocked.

### Manual Test

Send many requests quickly and verify limit triggers.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 4 — Protect Login Endpoint

### Objective

Apply stricter limits to authentication endpoints.

### Steps

1. Create dedicated rate limiter

2. Set lower limit:

5 login attempts per minute

3. Apply middleware to login route

### Expected Result

Login endpoint is protected from brute-force attempts.

### Manual Test

Attempt login repeatedly and verify limit activates.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 5 — Add Security Headers

### Objective

Protect application using secure HTTP headers.

### Steps

1. Install package:

helmet

2. Configure middleware

3. Apply to application

### Expected Result

Security headers are automatically added to responses.

### Manual Test

Inspect response headers in browser developer tools.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 6 — Configure CORS Safely

### Objective

Restrict which origins can access the API.

### Steps

1. Configure CORS middleware

2. Allow only trusted origins

3. Block unknown origins

### Expected Result

API accepts requests only from approved clients.

### Manual Test

Attempt request from unauthorized origin and verify rejection.

### Estimated Time

45 minutes

### Difficulty

Medium

---

## Sprint Definition of Done

All tasks must satisfy the Definition of Done checklist.

Refer to:

/docs/checklists/DEFINITION_OF_DONE.md

---

## Sprint Completion Criteria

- Rate limiting configured
- Login endpoint protected
- Security headers added
- CORS configured safely
- System resists excessive requests
- No console errors

---

## Estimated Total Time

Approximately:

4 to 5 hours
