# Starter Branch Requirements — Training Platform

This document defines the minimum requirements that every **starter branch** must satisfy before being used by students.

The goal is to guarantee consistency, predictability, and reliability across different stacks and learning levels.

---

# Purpose of Starter Branches

Starter branches represent **learning environments**.

They must provide a stable and guided starting point for developers.

They are not experimental branches.

They are not reference implementations.

They are structured entry points for training.

---

# Starter Branch Naming Pattern

starter-<stack>-<level>

Examples:

starter-react-beginner

starter-angular-pleno

---

# Core Requirement — The Project Must Run

Before a starter branch is considered ready, the application must:

- Install dependencies successfully
- Start without errors
- Respond to HTTP requests
- Run locally using documented commands

If the project does not run, the starter branch is not valid.

---

# Required Technical Components

Every starter branch must contain the following components.

---

## 1 — Project Setup

The project must include:

- package.json
- Dependency lock file
- Environment configuration
- Build configuration

Examples:

package.json

package-lock.json or pnpm-lock.yaml

.env.example

---

## 2 — Docker Support

The starter must support container execution.

Required files:

Dockerfile

docker-compose.yml

The system must run using:

docker compose up

---

## 3 — Database Configuration

The starter must define a working database configuration.

Examples:

PostgreSQL

SQLite (for beginner environments)

Required artifacts:

Database connection configuration

Migration or initialization script

---

## 4 — Basic API Endpoint

The backend must expose at least one working endpoint.

Example:

GET /health

Expected response:

200 OK

---

## 5 — Logging Output

The system must produce visible logs during startup.

Examples:

Server started

Database connected

Application ready

---

# Required Documentation

Every starter branch must contain documentation that allows a student to begin without external assistance.

---

## README.md

Must explain:

- What the project is
- What stack is used
- Who the branch is for
- How to start the project

---

## Getting Started Instructions

Must include step-by-step commands.

Example:

npm install

npm run dev

or

docker compose up

---

## Training Context

The README must clearly state:

Target level:

Beginner

Intermediate

Pleno

---

# Required Training Structure

Each starter branch must contain the training scaffolding.

---

## Tasks Directory

Example:

docs/tasks

Purpose:

Provide guided implementation steps.

---

## Definition of Done

File:

docs/checklists/DEFINITION_OF_DONE.md

Purpose:

Define completion criteria for tasks.

---

## Code Review Checklist

File:

docs/checklists/CODE_REVIEW_CHECKLIST.md

Purpose:

Standardize code quality expectations.

---

# Stability Rules

Starter branches must be stable.

They must not change frequently.

They must not contain unfinished experiments.

If major changes are required:

Create a new version.

---

# Versioning Rule

Never modify a starter branch that is actively used by students.

Instead:

Create a new version.

Examples:

starter-react-beginner-v1

starter-react-beginner-v2

---

# Validation Checklist

Before publishing a starter branch, verify:

[ ] Project installs dependencies

[ ] Project starts successfully

[ ] Docker environment runs

[ ] Database connects

[ ] Health endpoint responds

[ ] README instructions work

[ ] Tasks are available

[ ] No runtime errors

---

# Final Rule

A starter branch is ready only when a student can clone the repository and start working without assistance.
