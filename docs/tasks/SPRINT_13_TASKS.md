# Sprint 13 — Loading and Error Feedback (Training Tasks)

This document converts Sprint 13 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Improve user experience by providing visual feedback during operations.

The system should:

- Show loading indicators
- Display success messages
- Display error messages
- Prevent duplicate submissions

---

## Why This Sprint Matters

In real systems, users must always know what is happening.

Without feedback:

- Users click multiple times
- Users think the system is broken
- Duplicate requests may occur

This sprint introduces professional UX behavior used in production systems.

---

## Task 1 — Add Loading State to Forms

### Objective

Display a loading state while an API request is running.

### Steps

1. Add state variable:

isLoading

2. Set isLoading to true before API call

3. Set isLoading to false after response

4. Disable submit button while loading

### Expected Result

Button becomes disabled while request is running.

### Manual Test

Submit form and verify button becomes disabled.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 2 — Show Loading Indicator

### Objective

Display a visible loading indicator during requests.

### Steps

1. Create component:

LoadingSpinner.tsx

2. Render spinner when isLoading is true

### Expected Result

User sees loading indicator during request.

### Manual Test

Trigger operation and verify spinner appears.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 3 — Display Success Message

### Objective

Inform the user when an operation succeeds.

### Steps

1. Create success message state

2. Show message after successful operation

3. Clear message after a short delay

### Expected Result

User sees confirmation message after operation.

### Manual Test

Perform operation and verify success message appears.

### Estimated Time

1 hour

### Difficulty

Easy

---

## Task 4 — Display Error Message

### Objective

Inform the user when an operation fails.

### Steps

1. Capture error response

2. Store error message in state

3. Display error message in UI

### Expected Result

User sees error message when request fails.

### Manual Test

Force an error (invalid input) and verify message appears.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 5 — Prevent Duplicate Submissions

### Objective

Ensure users cannot submit the same form multiple times while a request is running.

### Steps

1. Disable submit button during loading

2. Ignore additional clicks while loading

### Expected Result

Only one request is sent per action.

### Manual Test

Click submit multiple times quickly and verify only one request is executed.

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

- Loading indicator appears during operations
- Success message is displayed after success
- Error message is displayed after failure
- Submit button is disabled during loading
- No duplicate requests occur
- No console errors

---

## Estimated Total Time

Approximately:

3 to 4 hours
