# Sprint 14 — Form Validation (Training Tasks)

This document converts Sprint 14 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Implement form validation to prevent invalid data from being sent to the API.

The system should:

- Validate required fields
- Validate numeric values
- Display validation messages
- Prevent invalid submissions

---

## Why This Sprint Matters

Validation is one of the most common responsibilities of frontend developers.

Without validation:

- Users send invalid data
- APIs return errors
- User experience becomes frustrating

This sprint introduces defensive programming and user-friendly validation patterns.

---

## Task 1 — Validate Required Fields

### Objective

Ensure required inputs are not empty before submission.

### Steps

1. Identify required fields in the form

2. Check if values are empty

3. Prevent submission if any field is missing

### Expected Result

Form cannot be submitted with empty required fields.

### Manual Test

Try submitting the form without filling required fields.

Expected:

Validation message appears.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 2 — Validate Numeric Values

### Objective

Ensure amount values are valid numbers greater than zero.

### Steps

1. Check if value is numeric

2. Check if value is greater than zero

3. Show validation message if invalid

### Expected Result

Invalid numbers are rejected before sending request.

### Manual Test

Enter:

- negative value
- zero
- text value

Expected:

Validation message appears.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 3 — Display Validation Messages

### Objective

Provide clear feedback when validation fails.

### Steps

1. Create validation message state

2. Display message below input field

3. Use consistent message style

### Expected Result

User understands why input is invalid.

### Manual Test

Trigger validation and verify message appears near the input.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 4 — Prevent Submission When Invalid

### Objective

Block API requests when validation fails.

### Steps

1. Check validation result before API call

2. Stop submission if validation fails

3. Allow submission when valid

### Expected Result

Invalid data is never sent to the API.

### Manual Test

Submit invalid form and verify no request is sent.

### Estimated Time

45 minutes

### Difficulty

Medium

---

## Task 5 — Reuse Validation Logic

### Objective

Avoid duplicating validation logic across forms.

### Steps

1. Create helper function for validation

2. Reuse function in multiple forms

### Expected Result

Validation logic is centralized and reusable.

### Manual Test

Use validation in at least two forms and verify behavior is consistent.

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

- Required fields are validated
- Numeric values are validated
- Validation messages are displayed
- Invalid submissions are blocked
- Validation logic is reusable
- No console errors

---

## Estimated Total Time

Approximately:

3 to 4 hours
