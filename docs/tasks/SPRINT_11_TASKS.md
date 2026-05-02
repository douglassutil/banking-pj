# Sprint 11 — Accounts UI (Training Tasks)

This document converts Sprint 11 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Implement the Accounts user interface allowing users to:

- View account list
- Create a new account
- See updated data after creation

---

## Task 1 — Create Account Type

### Objective

Define the Account data structure used in the frontend.

### Steps

1. Create file:

src/types/Account.ts

2. Define the Account interface

### Expected Result

TypeScript recognizes the Account type.

### Manual Test

Open project and verify no TypeScript errors.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 2 — Create Account Service

### Objective

Implement functions to communicate with the API.

### Steps

1. Create file:

src/services/account.service.ts

2. Implement function getAccounts()

3. Implement function createAccount()

### Expected Result

API requests can be executed successfully.

### Manual Test

Call getAccounts() and verify data is returned.

### Estimated Time

1 hour

### Difficulty

Easy

---

## Task 3 — Create Account List Component

### Objective

Display the list of accounts in a table.

### Steps

1. Create component:

AccountList.tsx

2. Receive accounts via props

3. Render table rows

### Expected Result

Accounts appear in the UI.

### Manual Test

Open Accounts page and verify list is visible.

### Estimated Time

1 hour

### Difficulty

Easy

---

## Task 4 — Create Account Form Component

### Objective

Allow users to create new accounts.

### Steps

1. Create component:

AccountForm.tsx

2. Create input for user ID

3. Create submit button

4. Call createAccount()

### Expected Result

User can submit the form.

### Manual Test

Create an account and verify request is sent.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 5 — Refresh Account List After Creation

### Objective

Update UI after creating a new account.

### Steps

1. Reload account list after create

2. Update state

### Expected Result

New account appears in the list.

### Manual Test

Create account and confirm list updates.

### Estimated Time

45 minutes

### Difficulty

Medium

---

## Sprint Definition of Done

All tasks must satisfy the Definition of Done checklist.

Refer to:

docs/checklists/DEFINITION_OF_DONE.md

---

## Sprint Completion Criteria

- Accounts page loads successfully
- Accounts are displayed
- New accounts can be created
- List updates automatically
- No console errors

---

## Estimated Total Time

Approximately:

4 hours
