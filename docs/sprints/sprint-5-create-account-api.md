# Sprint 5 — Create Account API

This sprint introduces the first real API endpoint that modifies system data.

The student will implement a POST endpoint to create accounts.

This is the moment where the system becomes interactive.

---

# Objective

Create an API endpoint to create a new account linked to a user.

---

# Concepts Introduced

HTTP POST

DTO (Data Transfer Object)

Request validation

Service logic

API response

---

# Why This Matters

APIs are the backbone of modern applications.

Understanding how to receive data, validate it, and store it is a fundamental backend skill.

This sprint transforms the system from passive storage into an active service.

---

# Prerequisites

Sprint 0 completed

Sprint 1 completed

Sprint 2 completed

Sprint 3 completed

Sprint 4 completed

Account entity exists in the database

Application runs successfully

---

# Tasks

Open the backend project

Locate the Account controller

Create a new endpoint:

POST /accounts

Create a DTO with the following fields:

userId

initialBalance

Validate the input data

Call the service to create the account

Return a success response

Test the endpoint using an API client

---

# Expected Result

The API creates a new account successfully.

The account is stored in the database.

The API returns a success response.

---

# Verification Steps

Run the application

Send a POST request to:

POST /accounts

Verify the response status is 201 Created

Open the database client

Verify the new account exists

---

# Common Mistakes

Missing request validation

Incorrect DTO structure

Service method not called

Database errors

---

# Troubleshooting

If the endpoint fails:

Check validation rules

Check logs

Verify database connection

Restart the application

---

# Code Quality Checklist

[ ] Endpoint responds correctly

[ ] Input validation works

[ ] Service logic executes

[ ] Data is stored correctly

---

# Definition of Done

The sprint is complete when:

The API endpoint works correctly

The account is stored in the database

The student understands the request-response cycle

---

# Optional Challenge

Add validation to prevent creating an account with a negative balance.

---

# Reflection Questions

What is the role of a DTO?

Why should input data be validated?

What happens if invalid data is accepted?

---

# Mentor Notes

Encourage the student to test the endpoint multiple times.

Ask the student to explain each step of the request flow.
