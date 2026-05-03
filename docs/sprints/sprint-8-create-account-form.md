# Sprint 8 — Create Account Form

This sprint introduces user interaction through forms.

The student will create a form in the frontend to create new accounts by calling the backend API.

This is the moment where the system becomes interactive from the user's perspective.

---

# Objective

Create a frontend form that allows the user to create a new account using the POST /accounts endpoint.

---

# Concepts Introduced

Forms

Controlled components

Form state

Form submission

User feedback

Error handling in UI

---

# Why This Matters

Forms are one of the most common interaction patterns in web applications.

Users create accounts, submit data, and perform actions through forms.

Understanding how to capture user input and send it to an API is essential for building real applications.

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

POST /accounts endpoint works correctly

Frontend application runs successfully

---

# Tasks

Open the frontend project

Create a new page called CreateAccount

Create a form with the following fields:

userId

initialBalance

Use component state to store form values

Handle input changes

Handle form submission

Call the API endpoint:

POST /accounts

Display a success message after creating the account

Clear the form after submission

---

# Expected Result

The user can create a new account from the frontend form.

The account is stored in the database.

The success message appears after submission.

---

# Verification Steps

Run the application

Open the browser

Navigate to the Create Account page

Fill the form fields

Submit the form

Verify the success message appears

Verify the new account exists in the database

---

# Common Mistakes

Form submission not preventing page reload

Incorrect API URL

State not updating correctly

Missing error handling

---

# Troubleshooting

If the form does not submit:

Check browser console

Verify API endpoint is running

Ensure preventDefault is used

Check network requests in developer tools

---

# Code Quality Checklist

[ ] Form captures input correctly

[ ] API call executes successfully

[ ] Success message appears

[ ] Form resets after submission

---

# Definition of Done

The sprint is complete when:

The form submits data successfully

The account is created in the database

The student understands how form submission works

---

# Optional Challenge

Add validation to ensure the initial balance is a valid number.

Display an error message if validation fails.

---

# Reflection Questions

Why should forms validate input before sending data?

What happens if the API returns an error?

Why is user feedback important after submitting a form?

---

# Mentor Notes

Encourage the student to test both successful and failed submissions.

Discuss how forms are used in login, registration, and payment systems.
