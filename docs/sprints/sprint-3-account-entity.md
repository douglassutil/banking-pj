# Sprint 3 — Account Entity

This sprint introduces relationships between entities and real domain modeling concepts.

The student will create the Account entity and connect it to the User entity using a foreign key.

This is the moment where the system evolves from isolated data to a real domain model.

---

# Objective

Create the Account entity and establish a relationship with the User entity.

---

# Concepts Introduced

Entity relationships

Foreign keys

One-to-many relationships

Data modeling

Referential integrity

---

# Why This Matters

Real systems rarely store isolated data.

Most business logic depends on relationships between entities.

Understanding relationships is essential for building reliable and scalable applications.

---

# Prerequisites

Sprint 0 completed

Sprint 1 completed

Sprint 2 completed

User entity exists in the database

Application runs successfully

---

# Tasks

Open the backend project

Locate the Prisma schema file

Create a new Account model with the following fields:

id

userId

balance

createdAt

Define a relationship between Account and User

Update the database schema

Generate a migration

Apply the migration

Update the seed script to create at least one account linked to an existing user

Run the seed script

---

# Expected Result

A new Account table exists in the database.

Each account is linked to a user.

The application starts without errors.

---

# Verification Steps

Run the application

Open the database client

Verify the Account table exists

Verify the userId foreign key exists

Verify at least one account record exists linked to a user

Restart the application and confirm data persists

---

# Common Mistakes

Incorrect relationship definition

Missing foreign key field

Migration not applied

Seed script not updated

---

# Troubleshooting

If the relationship does not work:

Review the Prisma schema

Check foreign key configuration

Run:

npm run dev:reset

If seed data fails:

Verify user exists before creating account

---

# Code Quality Checklist

[ ] Migration runs successfully

[ ] Relationship is correctly defined

[ ] Seed data is inserted

[ ] Application starts without errors

---

# Definition of Done

The sprint is complete when:

The Account entity exists in the database

The relationship between User and Account works correctly

The student understands how foreign keys work

---

# Optional Challenge

Add a new field to Account (for example: status or type).

Generate and apply a new migration.

---

# Reflection Questions

What is a foreign key?

Why do we use relationships between tables?

What problems can occur if relationships are not enforced?

---

# Mentor Notes

Ensure the student understands the difference between entity and relationship.

Encourage drawing a simple diagram of User and Account before coding.
