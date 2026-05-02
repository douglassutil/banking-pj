# Sprint 17 — Custom Hooks (Training Tasks)

This document converts Sprint 17 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Refactor repeated logic into reusable custom hooks to improve code organization and maintainability.

The system should:

- Extract API logic into custom hooks
- Reuse logic across multiple components
- Improve readability and separation of concerns

---

## Why This Sprint Matters

As applications grow, duplicated logic becomes difficult to maintain.

Custom hooks allow developers to:

- Reuse logic
- Reduce duplication
- Improve readability
- Follow professional architecture patterns

This sprint introduces the concept of reusable logic — a key step toward scalable frontend architecture.

---

## Task 1 — Identify Repeated Logic

### Objective

Find duplicated logic that can be extracted into a hook.

### Steps

1. Review components that fetch transactions

2. Identify repeated code patterns

3. List logic that can be reused

### Expected Result

Developer understands where duplication exists.

### Manual Test

Open two components and verify similar logic appears in both.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 2 — Create useTransactions Hook

### Objective

Encapsulate transaction fetching logic into a reusable hook.

### Steps

1. Create folder:

src/hooks

2. Create file:

useTransactions.ts

3. Move fetching logic into the hook

4. Return transactions and loading state

### Expected Result

Components can retrieve transactions using the hook.

### Manual Test

Use the hook in a component and verify data loads correctly.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 3 — Replace Direct API Calls

### Objective

Update components to use the new hook instead of calling services directly.

### Steps

1. Remove direct API call from component

2. Import useTransactions

3. Use hook to retrieve data

### Expected Result

Components rely on reusable hook logic.

### Manual Test

Verify application behavior remains unchanged after refactor.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 4 — Handle Loading and Error State in Hook

### Objective

Centralize loading and error management inside the hook.

### Steps

1. Add loading state inside hook

2. Add error state inside hook

3. Return states to components

### Expected Result

Components receive loading and error state from hook.

### Manual Test

Simulate API failure and verify error state is handled.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 5 — Create Another Reusable Hook

### Objective

Reinforce the pattern by creating a second hook.

### Steps

1. Identify another reusable logic area

2. Create new hook file

3. Move logic into hook

### Expected Result

At least two reusable hooks exist in the project.

### Manual Test

Verify both hooks are used by components.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Sprint Definition of Done

All tasks must satisfy the Definition of Done checklist.

Refer to:

/docs/checklists/DEFINITION_OF_DONE.md

---

## Sprint Completion Criteria

- Reusable hook created
- Components use hook instead of direct service calls
- Loading state handled in hook
- Error state handled in hook
- No duplicated logic remains
- No console errors

---

## Estimated Total Time

Approximately:

4 to 5 hours
