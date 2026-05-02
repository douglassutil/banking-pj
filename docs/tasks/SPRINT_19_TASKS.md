# Sprint 19 — Role-Based Access Control (RBAC) (Training Tasks)

This document converts Sprint 19 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Implement role-based access control to restrict system features based on user permissions.

The system should:

- Define user roles
- Restrict access to specific actions
- Hide UI elements based on permissions
- Protect routes based on role

---

## Why This Sprint Matters

In real systems, not all users can perform all actions.

Examples:

- Only admins can create users
- Only managers can approve transactions
- Regular users can only view their own data

This sprint introduces access control — a critical concept in production systems.

---

## Task 1 — Define User Roles

### Objective

Create a clear list of roles used in the application.

### Steps

1. Create enum or constant file:

src/types/UserRole.ts

2. Define roles:

ADMIN
USER

3. Export role definitions

### Expected Result

Application recognizes available roles.

### Manual Test

Import roles in another file and verify TypeScript works.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 2 — Store User Role in Global State

### Objective

Make the user's role accessible across the application.

### Steps

1. Update AuthContext

2. Add role property to user object

3. Ensure role is stored after login

### Expected Result

Application can read user role globally.

### Manual Test

Login and verify role is available in context.

### Estimated Time

45 minutes

### Difficulty

Medium

---

## Task 3 — Create Role Check Utility

### Objective

Centralize permission logic in a reusable function.

### Steps

1. Create file:

src/utils/roleUtils.ts

2. Implement function:

hasRole(requiredRole)

3. Return true or false

### Expected Result

Application can check permissions consistently.

### Manual Test

Call function with different roles and verify results.

### Estimated Time

45 minutes

### Difficulty

Medium

---

## Task 4 — Restrict UI Elements Based on Role

### Objective

Hide or show components depending on user permissions.

### Steps

1. Identify admin-only action

2. Use role check utility

3. Conditionally render component

### Expected Result

Restricted actions are hidden from unauthorized users.

### Manual Test

Login as USER and verify admin button is hidden.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 5 — Protect Routes Based on Role

### Objective

Prevent unauthorized users from accessing protected pages.

### Steps

1. Create ProtectedRoute component

2. Check user role before rendering page

3. Redirect unauthorized users

### Expected Result

Unauthorized users cannot access restricted routes.

### Manual Test

Try accessing admin route as USER.

Verify redirection occurs.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 6 — Display Access Denied Message

### Objective

Provide clear feedback when access is blocked.

### Steps

1. Create component:

AccessDenied.tsx

2. Display friendly message

3. Suggest returning to home page

### Expected Result

User understands why access was denied.

### Manual Test

Attempt restricted action and verify message appears.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Sprint Definition of Done

All tasks must satisfy the Definition of Done checklist.

Refer to:

/docs/checklists/DEFINITION_OF_DONE.md

---

## Sprint Completion Criteria

- Roles defined
- Role stored in global state
- UI elements restricted based on role
- Routes protected
- Access denied message displayed
- No console errors

---

## Estimated Total Time

Approximately:

4 to 5 hours
