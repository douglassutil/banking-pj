# Sprint 6 — List Accounts API

This sprint introduces read operations and data retrieval.

The student will implement a GET endpoint to list accounts stored in the database.

This is the moment where the system demonstrates visibility into stored data.

---

# Objective

Create an API endpoint to retrieve and display a list of accounts.

---

# Concepts Introduced

HTTP GET

Query operations

Repository retrieval

Response formatting

Data listing

---

# Why This Matters

Most applications spend more time reading data than writing data.

Understanding how to retrieve and present data is essential for building user interfaces and reports.

This sprint completes the basic CRUD cycle foundation.

---

# Prerequisites

Sprint 0 completed

Sprint 1 completed

Sprint 2 completed

Sprint 3 completed

Sprint 4 completed

Sprint 5 completed

Account entity exists in the database

Application runs successfully

---

# Tasks

Open the backend project

Locate the Account controller

Create a new endpoint:

GET /accounts

Call the repository to retrieve accounts

Return the list of accounts

Test the endpoint using an API client

---

# Expected Result

The API returns a list of accounts successfully.

The response contains stored account data.

The endpoint executes without errors.

---

# Verification Steps

Run the application

Send a GET request to:

GET /accounts

Verify the response status is 200 OK

Verify the response contains account records

---

# Common Mistakes

Returning incorrect response format

Repository method not implemented

Empty response due to missing data

Incorrect route configuration

---

# Troubleshooting

If the endpoint returns no data:

Check seed data

Verify database connection

Check repository query logic

Restart the application

---

# Code Quality Checklist

[ ] Endpoint responds correctly

[ ] Data is retrieved successfully

[ ] Response format is consistent

[ ] No runtime errors occur

---

# Definition of Done

The sprint is complete when:

The API endpoint returns a list of accounts

The student understands how data retrieval works

The response structure is correct

---

# Optional Challenge

Add filtering support (for example: list accounts by userId).

---

# Reflection Questions

Why are read operations important in applications?

What happens if the repository query fails?

How does response structure affect frontend integration?

---

# Mentor Notes

Encourage the student to test the endpoint with multiple records.

Discuss how listing data supports dashboards and reports.
