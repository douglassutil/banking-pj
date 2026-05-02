# Sprint 16 — Filters (Training Tasks)

This document converts Sprint 16 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Implement filtering functionality to allow users to quickly find specific records.

The system should:

- Filter transactions by type
- Filter transactions by date
- Filter transactions by amount
- Clear filters and return to default view

---

## Why This Sprint Matters

Filtering is a core feature in real-world systems.

Without filters:

- Users waste time searching manually
- Data becomes difficult to navigate
- Productivity decreases

This sprint introduces data refinement and user productivity concepts.

---

## Task 1 — Add Filter State

### Objective

Store filter values in component state.

### Steps

1. Create state variables:

transactionType
startDate
endDate
minAmount
maxAmount

2. Initialize values as empty or null

### Expected Result

Application can track selected filter values.

### Manual Test

Change filter values and verify state updates.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 2 — Create Filter Form Component

### Objective

Allow users to input filter criteria.

### Steps

1. Create component:

TransactionFilters.tsx

2. Add dropdown for transaction type

3. Add date range inputs

4. Add amount range inputs

### Expected Result

User can select filter options.

### Manual Test

Change filter values and verify inputs respond correctly.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 3 — Apply Filters to API Request

### Objective

Send filter parameters to the backend when requesting data.

### Steps

1. Update getTransactions() service

2. Add filter parameters to request

3. Ensure parameters are optional

### Expected Result

API receives filter parameters correctly.

### Manual Test

Apply filter and verify request URL contains parameters.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 4 — Reload Data When Filters Change

### Objective

Refresh displayed data when filters are updated.

### Steps

1. Detect filter changes

2. Trigger new API request

3. Update transaction list

### Expected Result

Filtered results appear automatically.

### Manual Test

Change filter and verify displayed data updates.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 5 — Add Clear Filters Button

### Objective

Allow users to reset filters easily.

### Steps

1. Create button labeled:

Clear Filters

2. Reset filter state to default values

3. Reload data

### Expected Result

Filters reset and full dataset is displayed.

### Manual Test

Apply filters and then click Clear Filters.

Verify default results return.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Sprint Definition of Done

All tasks must satisfy the Definition of Done checklist.

Refer to:

/docs/checklists/DEFINITION_OF_DONE.md

---

## Sprint Completion Criteria

- Filters appear in the UI
- API receives filter parameters
- Data updates when filters change
- Clear Filters button works
- No console errors

---

## Estimated Total Time

Approximately:

4 to 5 hours
