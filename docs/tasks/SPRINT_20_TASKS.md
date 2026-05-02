# Sprint 20 — Logging (Training Tasks)

This document converts Sprint 20 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Implement application logging to record important events and errors.

The system should:

- Log successful operations
- Log errors
- Log authentication events
- Provide visibility into system behavior

---

## Why This Sprint Matters

In real systems, problems will occur.

Without logs:

- Developers cannot diagnose issues
- Failures are difficult to understand
- Debugging becomes slow and unreliable

Logging introduces observability — the ability to understand what the system is doing.

---

## Task 1 — Understand What Should Be Logged

### Objective

Identify important events that should be recorded.

### Steps

1. Review application flows

2. Identify key events:

User login
User logout
Transaction created
Error occurred

3. Document selected events

### Expected Result

Developer understands what events are important.

### Manual Test

List at least four events to log.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 2 — Create Logger Utility

### Objective

Centralize logging functionality in one place.

### Steps

1. Create file:

src/utils/logger.ts

2. Implement functions:

logInfo()
logError()
logWarning()

3. Use console methods internally

### Expected Result

Application can log messages consistently.

### Manual Test

Call logger functions and verify output in console.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 3 — Log Successful Operations

### Objective

Record important successful actions.

### Steps

1. Add log after transaction creation

2. Include relevant information:

Transaction ID
Amount
User ID

### Expected Result

Successful operations generate log messages.

### Manual Test

Create transaction and verify log appears.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 4 — Log Errors

### Objective

Capture and record application errors.

### Steps

1. Wrap API calls with error handling

2. Call logError() when exception occurs

3. Include error message

### Expected Result

Errors are recorded in logs.

### Manual Test

Trigger error and verify error log appears.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 5 — Log Authentication Events

### Objective

Record login and logout actions.

### Steps

1. Add log after successful login

2. Add log after logout

3. Include user identifier

### Expected Result

Authentication actions are logged.

### Manual Test

Login and logout, verify logs appear.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 6 — Standardize Log Messages

### Objective

Ensure logs follow a consistent format.

### Steps

1. Define message pattern:

[TIMESTAMP] [LEVEL] Message

2. Update logger utility to apply format

### Expected Result

All logs follow the same structure.

### Manual Test

Verify logs contain timestamp and level.

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

- Logger utility created
- Successful operations logged
- Errors logged
- Authentication events logged
- Log messages standardized
- No console errors

---

## Estimated Total Time

Approximately:

3 to 4 hours
