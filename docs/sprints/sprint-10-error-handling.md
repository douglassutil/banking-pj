# Sprint 10 — Error Handling (Frontend + Backend)

## Objective

Handle errors properly in both backend and frontend to make the system more reliable and user-friendly.

---

## What You Will Learn

- How to handle errors in backend
- How to handle errors in frontend
- How to provide feedback to users
- How to deal with failed requests

---

## Prerequisites

- Sprint 0 to Sprint 9 completed

---

## Step-by-Step Tasks

### Backend

#### 1) Handle errors in service

Add basic error handling in your service.

Example scenarios:

- Database failure
- Invalid operation

---

#### 2) Return proper HTTP status codes

Examples:

- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

---

### Frontend

#### 3) Add error state

Create a state variable for errors.

---

#### 4) Handle fetch errors

Use try/catch when calling the API.

---

#### 5) Display error messages

Show a message in the UI when an error occurs.

---

#### 6) Improve loading handling

Ensure loading and error states do not conflict.

---

## Expected Result

- Errors are handled gracefully
- User sees clear feedback
- Application does not crash

---

## Verification Checklist

- [ ] Backend returns proper error codes
- [ ] Frontend captures errors
- [ ] Error messages are displayed
- [ ] App remains stable

---

## Definition of Done

- System handles failure scenarios
- Student understands error flow

---

## Common Mistakes

- Ignoring errors
- Showing raw error messages
- Not handling async failures

---

## Reflection Questions

- What happens when the API fails?
- Why is user feedback important?
- How can errors improve system design?

---

## Mentor Notes

Encourage testing failure scenarios intentionally.
