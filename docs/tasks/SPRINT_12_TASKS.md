# Sprint 12 — Transactions UI (Training Tasks)

This document converts Sprint 12 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Implement transaction operations in the user interface allowing users to:

- Deposit money
- Withdraw money
- Transfer money
- View transaction history

---

## Task 1 — Create Transaction Type

### Objective

Define the Transaction data structure used in the frontend.

### Steps

1. Create file:

src/types/Transaction.ts

2. Define the Transaction interface

### Expected Result

TypeScript recognizes the Transaction type.

### Manual Test

Open project and verify no TypeScript errors.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 2 — Create Transaction Service

### Objective

Implement functions to communicate with the API for transactions.

### Steps

1. Create file:

src/services/transaction.service.ts

2. Implement function deposit()

3. Implement function withdraw()

4. Implement function transfer()

5. Implement function getTransactions()

### Expected Result

API requests can be executed successfully.

### Manual Test

Trigger each function and verify requests are sent to the API.

### Estimated Time

1 hour 30 minutes

### Difficulty

Medium

---

## Task 3 — Create Deposit Form Component

### Objective

Allow users to deposit money into an account.

### Steps

1. Create component:

DepositForm.tsx

2. Create input for account ID

3. Create input for amount

4. Create submit button

5. Call deposit() function

### Expected Result

User can submit a deposit successfully.

### Manual Test

Submit deposit and verify transaction is created.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 4 — Create Withdraw Form Component

### Objective

Allow users to withdraw money from an account.

### Steps

1. Create component:

WithdrawForm.tsx

2. Create input for account ID

3. Create input for amount

4. Create submit button

5. Call withdraw() function

### Expected Result

User can submit a withdrawal successfully.

### Manual Test

Submit withdrawal and verify balance decreases.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 5 — Create Transfer Form Component

### Objective

Allow users to transfer money between accounts.

### Steps

1. Create component:

TransferForm.tsx

2. Create input for source account

3. Create input for destination account

4. Create input for amount

5. Create submit button

6. Call transfer() function

### Expected Result

User can transfer money between accounts.

### Manual Test

Execute transfer and verify both accounts are updated.

### Estimated Time

1 hour 30 minutes

### Difficulty

Medium

---

## Task 6 — Display Transaction History

### Objective

Show the list of transactions in the UI.

### Steps

1. Create component:

TransactionList.tsx

2. Render transaction rows

3. Display transaction type and amount

### Expected Result

Transactions appear in the UI.

### Manual Test

Perform operations and verify history updates.

### Estimated Time

1 hour

### Difficulty

Easy

---

## Task 7 — Refresh History After Operation

### Objective

Update the transaction list after each operation.

### Steps

1. Reload transactions after deposit

2. Reload transactions after withdraw

3. Reload transactions after transfer

### Expected Result

New transactions appear immediately.

### Manual Test

Perform operation and verify list refreshes automatically.

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

- Deposit works correctly
- Withdraw works correctly
- Transfer works correctly
- Transaction history is displayed
- List updates after operations
- No console errors

---

## Estimated Total Time

Approximately:

6 to 7 hours
