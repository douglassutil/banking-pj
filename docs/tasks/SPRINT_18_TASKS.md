# Sprint 18 — Global State with Context (Training Tasks)

This document converts Sprint 18 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Implement global state management using React Context to share data across multiple components.

The system should:

- Store authenticated user information globally
- Provide access to shared state across pages
- Avoid passing props through many components
- Centralize session-related logic

---

## Why This Sprint Matters

As applications grow, passing data manually between components becomes difficult to maintain.

Without global state:

- Code becomes repetitive
- Components become tightly coupled
- Maintenance becomes harder

This sprint introduces application-level state management — a fundamental concept in real-world frontend systems.

---

## Task 1 — Create Context Folder Structure

### Objective

Organize files for global state management.

### Steps

1. Create folder:

src/context

2. Create file:

AuthContext.tsx

### Expected Result

Project contains a dedicated location for global state logic.

### Manual Test

Verify new folder and file exist.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 2 — Define Auth Context Interface

### Objective

Define the data structure stored in the global state.

### Steps

1. Define interface containing:

user
isAuthenticated
login
logout

2. Export interface

### Expected Result

TypeScript recognizes the context structure.

### Manual Test

Verify no TypeScript errors.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 3 — Implement Context Provider

### Objective

Create a provider component that stores and manages authentication state.

### Steps

1. Create AuthProvider component

2. Store user state

3. Implement login function

4. Implement logout function

5. Provide values through context

### Expected Result

Application can manage authentication state globally.

### Manual Test

Login and verify user state updates.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 4 — Wrap Application with Provider

### Objective

Make the global state available across the application.

### Steps

1. Import AuthProvider in main application file

2. Wrap App component with provider

### Expected Result

All components can access global state.

### Manual Test

Access context from multiple components.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 5 — Use Context in Components

### Objective

Consume global state in multiple components.

### Steps

1. Import useContext hook

2. Access authentication state

3. Display user information

### Expected Result

Components can read shared data without prop drilling.

### Manual Test

Display logged user name in header.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 6 — Persist Authentication State

### Objective

Keep authentication state after page refresh.

### Steps

1. Store token in localStorage

2. Load token on application startup

3. Restore authentication state

### Expected Result

User remains logged in after refresh.

### Manual Test

Login, refresh page, verify session persists.

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

- Global state implemented
- Authentication state shared across components
- Application wrapped with provider
- User remains logged after refresh
- No console errors

---

## Estimated Total Time

Approximately:

4 to 5 hours
