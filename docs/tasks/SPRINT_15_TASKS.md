# Sprint 15 — Pagination (Training Tasks)

This document converts Sprint 15 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Implement pagination to efficiently display large datasets.

The system should:

- Request paginated data from the API
- Display page navigation controls
- Allow users to move between pages
- Show correct number of records per page

---

## Why This Sprint Matters

Real systems often contain thousands of records.

Without pagination:

- Pages become slow
- UI becomes cluttered
- Performance degrades

This sprint introduces performance awareness and scalable data handling.

---

## Task 1 — Understand Pagination Parameters

### Objective

Learn how pagination works using page and limit parameters.

### Steps

1. Review API documentation

2. Identify parameters:

page
limit

3. Test API manually using different page values

### Expected Result

Developer understands how pagination parameters affect results.

### Manual Test

Call API with:

page=1
page=2

Verify returned data changes.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 2 — Update Service to Support Pagination

### Objective

Modify the service layer to request paginated data.

### Steps

1. Update function getTransactions()

2. Add parameters:

page
limit

3. Pass parameters to API request

### Expected Result

Service can request specific pages from the API.

### Manual Test

Request page 2 and verify different records are returned.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 3 — Store Current Page in State

### Objective

Track the currently selected page in the UI.

### Steps

1. Create state variable:

currentPage

2. Initialize with value 1

3. Update value when user navigates

### Expected Result

Application knows which page is currently selected.

### Manual Test

Navigate to another page and verify state updates.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 4 — Create Pagination Controls Component

### Objective

Allow users to navigate between pages.

### Steps

1. Create component:

PaginationControls.tsx

2. Add buttons:

Previous
Next

3. Handle click events

### Expected Result

User can navigate between pages.

### Manual Test

Click Next and verify page changes.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 5 — Reload Data When Page Changes

### Objective

Fetch new data when the user navigates to another page.

### Steps

1. Detect page change

2. Call API again

3. Update displayed data

### Expected Result

New page data appears automatically.

### Manual Test

Navigate to page 2 and verify new records appear.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 6 — Display Page Information

### Objective

Provide feedback about the current page.

### Steps

1. Display current page number

2. Display total pages if available

### Expected Result

User understands navigation context.

### Manual Test

Verify page number updates when navigating.

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

- Pagination parameters implemented
- Navigation buttons working
- Data reloads when page changes
- Current page displayed correctly
- No console errors

---

## Estimated Total Time

Approximately:

3 to 4 hours
