# Sprint 4 — Transaction Entity

This sprint introduces business events and financial operations into the system.

The student will create the Transaction entity and connect it to the Account entity.

This is the moment where the system begins to represent real business activity.

---

# Objective

Create the Transaction entity and establish a relationship with the Account entity.

---

# Concepts Introduced

Business events

Transaction history

Entity relationships

Data consistency

Domain modeling

---

# Why This Matters

Most real systems track changes over time.

Transactions represent actions performed by users.

Understanding how to record and relate those actions is essential for building reliable business systems.

---

# Prerequisites

Sprint 0 completed

Sprint 1 completed

Sprint 2 completed

Sprint 3 completed

User and Account entities exist in the database

Application runs successfully

---

# Tasks

Open the backend project

Locate the Prisma schema file

Create a new Transaction model with the following fields:

id

accountId

amount

type

createdAt

Define a relationship between Transaction and Account

Update the database schema

Generate a migration

Apply the migration

Update the seed script to create at least one transaction linked to an existing account

Run the seed script

---

# Expected Result

A new Transaction table exists in the database.

Each transaction is linked to an account.

The application starts without errors.

---

# Verification Steps

Run the application

Open the database client

Verify the Transaction table exists

Verify the accountId foreign key exists

Verify at least one transaction record exists linked to an account

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

Verify account exists before creating transaction

---

# Code Quality Checklist

[ ] Migration runs successfully

[ ] Relationship is correctly defined

[ ] Seed data is inserted

[ ] Application starts without errors

---

# Definition of Done

The sprint is complete when:

The Transaction entity exists in the database

The relationship between Account and Transaction works correctly

The student understands how business events are recorded

---

# Optional Challenge

Add validation to prevent negative transaction amounts.

Generate and apply a new migration if needed.

---

# Reflection Questions

Why do systems record transaction history instead of only storing balances?

What problems can occur if transactions are not stored properly?

How does transaction history help debugging financial systems?

---

# Mentor Notes

Encourage the student to think of transactions as real-world actions.

Ask the student to describe what happens when money is deposited or withdrawn.
