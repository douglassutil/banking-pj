# Sprint Plan — React Beginner Training

This document defines the official sprint progression for the `starter-react-beginner` learning path.

It translates the system architecture into a structured, incremental learning journey.

The goal is to ensure that beginners build confidence while gradually increasing complexity.

---

# Sprint Philosophy

Each sprint must:

- Introduce one primary concept
- Reinforce previous knowledge
- Produce a visible result
- Be achievable within a short time

---

# Total Sprint Count

Beginner track:

12 sprints

Estimated duration:

6 to 12 weeks

---

# Sprint 0 — Environment Setup

Objective:

Run the system locally and understand the project structure.

---

## Concepts

Docker

Project structure

Backend and frontend separation

---

## Tasks

Clone the repository

Run:

npm run dev

Open the frontend

Verify API health endpoint

---

## Expected Result

Application starts successfully.

Student understands how to run the system.

---

# Sprint 1 — Understanding the Backend

Objective:

Understand the backend structure and logging behavior.

---

## Concepts

Controller

Service

Repository

Logging

---

## Tasks

Locate the health endpoint

Read controller logic

Read service logic

Observe logs during startup

---

## Expected Result

Student understands request flow.

---

# Sprint 2 — User Entity

Objective:

Create the first database entity.

---

## Concepts

Database schema

Entity modeling

Migration

Seed

---

## Tasks

Create User entity

Generate migration

Run migration

Add seed data

---

## Expected Result

User table exists in database.

---

# Sprint 3 — Account Entity

Objective:

Create account entity and relationships.

---

## Concepts

Relationships

Foreign keys

Data modeling

---

## Tasks

Create Account entity

Link Account to User

Generate migration

---

## Expected Result

User-account relationship works.

---

# Sprint 4 — Transaction Entity

Objective:

Create transaction entity.

---

## Concepts

Domain modeling

Data persistence

---

## Tasks

Create Transaction entity

Link Transaction to Account

Generate migration

---

## Expected Result

Transaction persistence works.

---

# Sprint 5 — Create Account API

Objective:

Implement first write operation.

---

## Concepts

HTTP POST

DTO validation

Service logic

---

## Tasks

Create endpoint:

POST /accounts

Validate input

Save account

---

## Expected Result

Account can be created via API.

---

# Sprint 6 — List Accounts API

Objective:

Implement first read operation.

---

## Concepts

HTTP GET

Repository query

Response formatting

---

## Tasks

Create endpoint:

GET /accounts

Return account list

---

## Expected Result

Account list loads successfully.

---

# Sprint 7 — Frontend Account List

Objective:

Connect frontend to backend.

---

## Concepts

API integration

State management

Loading states

---

## Tasks

Create account list page

Call API endpoint

Display account list

---

## Expected Result

Frontend displays account data.

---

# Sprint 8 — Create Account Form

Objective:

Implement form submission.

---

## Concepts

Forms

Validation

User feedback

---

## Tasks

Create account form

Submit form

Display success message

---

## Expected Result

User can create account from UI.

---

# Sprint 9 — Transactions

Objective:

Implement transaction workflow.

---

## Concepts

Business logic

Balance updates

Error handling

---

## Tasks

Create transaction endpoint

Update account balance

Display transaction history

---

## Expected Result

Transaction flow works end-to-end.

---

# Sprint 10 — Error Handling

Objective:

Handle common runtime errors.

---

## Concepts

Validation errors

HTTP status codes

User feedback

---

## Tasks

Handle invalid input

Handle server errors

Display error messages

---

## Expected Result

System handles errors gracefully.

---

# Sprint 11 — Code Quality

Objective:

Introduce code quality practices.

---

## Concepts

Refactoring

Code readability

Consistency

---

## Tasks

Improve naming

Remove duplicated code

Organize files

---

## Expected Result

Code becomes cleaner and easier to maintain.

---

# Sprint 12 — Deployment

Objective:

Deploy the application.

---

## Concepts

Environment variables

Docker deployment

Production workflow

---

## Tasks

Build Docker image

Deploy to Fly.io

Verify application online

---

## Expected Result

Application runs in production.

---

# Final Principle

Every sprint must produce a visible achievement.
