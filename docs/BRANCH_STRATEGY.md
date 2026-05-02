# Branch Strategy — Training Platform Repository

This document defines the official branch strategy for the training platform.

The goal is to ensure clarity, scalability, and consistency as the project evolves across multiple stacks and learning levels.

---

# Why This Strategy Exists

This repository is not a typical software project.

It is a **training platform** designed to support:

- Multiple technology stacks
- Multiple experience levels
- Multiple learning paths
- Continuous experimentation

Without a clear branch strategy, the repository will eventually become confusing and difficult to maintain.

This document prevents that.

---

# Core Principles

1 — Branches represent learning context

2 — Each branch has a single responsibility

3 — Training branches must remain stable

4 — Reference code may evolve continuously

5 — Experiments must not break training environments

---

# Branch Naming Convention

All training branches must follow this pattern:

starter-<stack>-<level>

Examples:

starter-react-beginner

starter-angular-pleno

starter-react-intermediate

starter-angular-beginner

---

# Branch Types

The repository uses four primary branch types.

---

# 1 — main

Purpose:

Reference implementation and active development environment.

Description:

This branch contains the working reference system.

It is allowed to evolve and change as architecture and practices improve.

This branch is currently used to validate patterns and architecture using Angular.

Typical contents:

- Full implementation
- Latest architecture decisions
- CI/CD configuration
- Production-ready code

Important rules:

- May change frequently
- Not used as a beginner starting point
- Serves as technical reference

---

# 2 — starter branches

Purpose:

Provide stable starting points for structured learning.

Pattern:

starter-<stack>-<level>

Examples:

starter-react-beginner

starter-angular-pleno

Description:

These branches define the official entry points for training programs.

They must remain stable and predictable.

Typical contents:

- Project skeleton
- Working environment
- Minimal implementation
- Training instructions
- Step-by-step tasks

Important rules:

- Must compile and run
- Must not include full solutions
- Must not change frequently
- Must be versioned when updated

---

# 3 — experimental

Purpose:

Safe environment for testing ideas without affecting training branches.

Typical usage:

- Testing new frameworks
- Trying architectural changes
- Evaluating tools
- Prototyping new features

Examples:

experimental-nextjs

experimental-prisma

experimental-rabbitmq

Important rules:

- Can change freely
- Can be unstable
- Never used for training

---

# 4 — student branches (optional)

Purpose:

Allow individual learners to work independently.

Pattern:

student-<name>

Examples:

student-joao

student-maria

student-dev1

Description:

These branches represent the working space of individual learners.

They are temporary and may be deleted after training completion.

Important rules:

- Created from a starter branch
- Used only for practice
- Not used as reference

---

# Current Official Branches

The repository currently uses the following branches.

main

starter-angular-pleno

starter-react-beginner

experimental

---

# When to Create a New Starter Branch

Create a new starter branch when:

- A new technology stack is introduced
- A new experience level is introduced
- A new training program is defined

Examples:

starter-react-beginner

starter-react-intermediate

starter-angular-beginner

starter-dotnet-backend

---

# When to Create a New Version

Do not modify a starter branch directly when students are already using it.

Instead:

Create a new version.

Examples:

starter-react-beginner-v1

starter-react-beginner-v2

Or use tags:

starter-react-beginner@v1

starter-react-beginner@v2

---

# How New Students Should Start

Step 1:

Checkout the appropriate starter branch.

Step 2:

Create a personal working branch.

Example:

git checkout starter-react-beginner

git checkout -b student-douglas

Step 3:

Work only on the personal branch.

---

# Branch Lifecycle

Starter Branch

Created once

Maintained carefully

Versioned when updated

Student Branch

Created per student

Used during training

Deleted after completion

Experimental Branch

Created as needed

Removed when no longer relevant

---

# Stability Rules

The following branches must remain stable:

starter-react-beginner

starter-angular-pleno

The following branches may change frequently:

main

experimental

---

# Summary

main

Reference implementation

starter-<stack>-<level>

Training starting point

experimental

Safe experimentation space

student-<name>

Temporary working branch
