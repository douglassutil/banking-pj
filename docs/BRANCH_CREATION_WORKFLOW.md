# Branch Creation Workflow — Training Platform

This document defines the official workflow for creating new branches in the training platform repository.

The goal is to ensure that new branches are created intentionally, consistently, and safely.

---

# Purpose

Branches in this repository represent **learning environments**.

Creating a new branch is not a technical action only.

It is a pedagogical decision.

This workflow ensures that new branches are created only when necessary and with the correct structure.

---

# Core Principle

A new branch should be created only when a new learning context exists.

Not when a new feature is added.

---

# Branch Types Covered

This workflow applies to:

starter-<stack>-<level>

experimental

student-<name>

---

# Step 1 — Identify the Need

Before creating a branch, answer these questions.

---

## Is there a new learning level?

Examples:

Beginner

Intermediate

Pleno

---

## Is there a new technology stack?

Examples:

React

Angular

Next.js

.NET

---

## Is there a new training program?

Examples:

Frontend specialization

Backend specialization

Fullstack training

---

If the answer to all questions is NO:

Do not create a new branch.

---

# Step 2 — Choose the Correct Branch Type

---

## Starter Branch

Use when:

A new learning environment is required.

Pattern:

starter-<stack>-<level>

Examples:

starter-react-beginner

starter-angular-pleno

---

## Experimental Branch

Use when:

Testing new tools or architecture.

Pattern:

experimental-<topic>

Examples:

experimental-nextjs

experimental-prisma

experimental-rabbitmq

---

## Student Branch

Use when:

A student begins training.

Pattern:

student-<name>

Examples:

student-joao

student-maria

---

# Step 3 — Select the Base Branch

New branches must always be created from the correct base.

---

Starter Branch

Base:

main

---

Student Branch

Base:

starter branch

---

Experimental Branch

Base:

main

---

# Step 4 — Create the Branch

Example commands:

---

Create starter branch:

```

git checkout main

git checkout -b starter-react-beginner

```

---

Create student branch:

```

git checkout starter-react-beginner

git checkout -b student-douglas

```

---

Create experimental branch:

```

git checkout main

git checkout -b experimental-nextjs

```

---

# Step 5 — Validate the Branch

Before publishing the branch, verify:

[ ] Project builds successfully

[ ] Application starts

[ ] Docker environment runs

[ ] Database connects

[ ] README instructions work

[ ] No runtime errors

---

# Step 6 — Protect the Branch (Starter Only)

Starter branches must be protected.

---

Recommended GitHub settings:

Require pull request before merging

Prevent force push

Prevent direct commits

---

# Versioning Rule

Never modify a starter branch that is actively used by students.

Instead:

Create a new version.

Examples:

starter-react-beginner-v1

starter-react-beginner-v2

---

# When to Archive a Branch

Archive a branch when:

The training program is deprecated

The stack is no longer supported

The branch is replaced by a new version

---

# Example — Current Official Branch Set

main

starter-react-beginner

starter-angular-pleno

experimental

---

# Final Rule

Branch creation is a design decision.

Not a convenience action.
