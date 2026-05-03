# Sprint 2 — User Entity

This sprint introduces the first real implementation task: creating a database entity.

The student will define a data model, generate a migration, and persist data in the database.

This is the moment where the system begins to store real information.

---

# Objective

Create the first database entity (User) and understand how application data is stored and retrieved.

---

# Concepts Introduced

Database schema

Entity modeling

Primary keys

Migrations

Seed data

Persistence

---

# Why This Matters

Every application depends on data.

Understanding how data is structured and stored is one of the most important skills for any developer.

This sprint establishes the foundation for all future features.

---

# Prerequisites

Sprint 0 completed

Sprint 1 completed

Application runs successfully

Basic understanding of database tables

---

# Tasks

Open the backend project

Locate the Prisma schema file

Create a new User model with the following fields:

id

name

email

createdAt

Update the database schema

Generate a migration

Apply the migration

Create seed data for at least one user

Run the seed script

---

# Expected Result

A new User table exists in the database.

At least one user record exists in the database.

The application starts without errors.

---

# Verification Steps

Run the application

Open the database client

Verify the User table exists

Verify at least one user record exists

Restart the application and confirm data persists

---

# Common Mistakes

Forgetting to run migrations

Incorrect field types

Missing required fields

Database connection errors

---

# Troubleshooting

If the migration fails:

Run:

npm run dev:reset

If the seed script fails:

Check database connection configuration

Restart Docker containers

---

# Code Quality Checklist

[ ] Migration runs successfully

[ ] Database schema is correct

[ ] Seed data is inserted

[ ] Application starts without errors

---

# Definition of Done

The sprint is complete when:

The User entity exists in the database

Seed data is successfully inserted

The student understands how migrations work

---

# Optional Challenge

Add an additional field to the User model (for example: phone or status).

Generate and apply a new migration.

---

# Reflection Questions

What is the purpose of a migration?

Why should database changes be versioned?

What happens if the database schema and application code are not synchronized?

---

# Mentor Notes

Encourage the student to read migration logs carefully.

Ensure the student understands the difference between schema and data.
