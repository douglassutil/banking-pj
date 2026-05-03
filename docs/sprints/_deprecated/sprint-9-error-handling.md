# Sprint 9 — Error Handling

This sprint introduces error handling and system resilience.

The student will implement proper error handling in both backend and frontend to manage invalid input and unexpected failures.

This is the moment where the system evolves from a functional prototype into a reliable application.

---

# Objective

Handle errors gracefully in both backend and frontend, ensuring the system remains stable and user-friendly.

---

# Concepts Introduced

HTTP status codes

Validation errors

Exception handling

User feedback

Defensive programming

---

# Why This Matters

Real systems fail.

Networks fail, users make mistakes, and unexpected situations occur.

Professional software does not avoid errors — it handles them correctly.

Understanding error handling is essential for building reliable applications.

---

# Prerequisites

Sprint 0 completed

Sprint 1 completed

Sprint 2 completed

Sprint 3 completed

Sprint 4 completed

Sprint 5 completed

Sprint 6 completed

Sprint 7 completed

Sprint 8 completed

Application runs successfully

---

# Tasks

Open the backend project

Identify validation points in DTOs

Add validation rules (for example: required fields, numeric values)

Ensure the backend returns proper HTTP status codes:

400 Bad Request

404 Not Found

500 Internal Server Error

Open the frontend project

Capture API errors during form submission

Display user-friendly error messages

Test scenarios with invalid input

---

# Expected Result

The system detects invalid input.

The backend returns appropriate error responses.

The frontend displays meaningful error messages.

The application continues running without crashing.

---

# Verification Steps

Run the application

Submit invalid form data

Verify the API returns an error status code

Verify the UI displays an error message

Verify the application remains stable

---

# Common Mistakes

Ignoring error responses

Displaying technical error messages to users

Missing validation rules

Unhandled exceptions

---

# Troubleshooting

If errors are not displayed:

Check frontend console

Verify API response format

Confirm error handling logic in the service layer

Restart the application

---

# Code Quality Checklist

[ ] Validation rules exist

[ ] Errors return correct status codes

[ ] Error messages are user-friendly

[ ] Application remains stable

---

# Definition of Done

The sprint is complete when:

Invalid input is handled correctly

Error messages are displayed to the user

The student understands how to manage failures

---

# Optional Challenge

Add a global error handler in the backend.

Log all unexpected errors.

---

# Reflection Questions

Why should systems validate input before processing data?

What is the difference between user errors and system errors?

How does proper error handling improve user experience?

---

# Mentor Notes

Encourage the student to intentionally trigger errors.

Discuss how professional systems monitor and log failures.
