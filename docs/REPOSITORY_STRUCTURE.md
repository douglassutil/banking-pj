# Repository Structure — Training Platform

This document defines the standard folder and file organization for projects in this training platform.

The goal is to ensure consistency across different stacks (React, Angular, future stacks) and make it easier for students to understand project structure.

---

# Purpose

A consistent repository structure provides:

- Predictability
- Easier navigation
- Faster onboarding
- Better maintainability
- Transferable knowledge between stacks

Students should be able to switch between stacks without relearning how projects are organized.

---

# Core Principle

Structure should be consistent.

Implementation may vary by stack.

---

# Top-Level Repository Structure

The repository must follow this base layout.

```
project-root/

apps/

docs/

scripts/

infrastructure/

README.md

.gitignore

```

---

# apps/

This directory contains the runnable applications.

Examples:

```
apps/

frontend/

backend/

```

---

## frontend/

Contains the user interface application.

Examples:

React application

Angular application

---

### Standard Frontend Structure

```
frontend/

src/

components/

pages/

services/

hooks/ (React only)

models/

utils/

styles/

assets/

index.tsx or main.ts

```

---

## backend/

Contains the API application.

Examples:

NestJS application

Node API

.NET API

---

### Standard Backend Structure

```
backend/

src/

controllers/

services/

repositories/

entities/

dto/

config/

middlewares/

utils/

main.ts

```

---

# docs/

Contains all training and architecture documentation.

Examples:

```
docs/

BRANCH_STRATEGY.md

LEVEL_DEFINITION.md

STACK_STRATEGY.md

STARTER_REQUIREMENTS.md

STARTER_CONTENT_MATRIX.md

BRANCH_CREATION_WORKFLOW.md

REPOSITORY_STRUCTURE.md

```

---

# scripts/

Contains automation scripts used during development or setup.

Examples:

```
scripts/

setup.sh

seed-db.ts

reset-db.ts

```

---

# infrastructure/

Contains environment and deployment configuration.

Examples:

```
infrastructure/

docker/

docker-compose.yml

nginx/

ci/

fly.io/

```

---

# Naming Conventions

Folders must follow these rules.

---

## General Rules

Use lowercase

Use hyphen-separated names

Avoid spaces

Avoid abbreviations

---

Examples:

```
user-service

auth-controller

payment-module

```

---

# File Organization Rules

---

## One Responsibility per File

Each file should contain a single logical responsibility.

Examples:

One controller per file

One service per file

One component per file

---

## Keep Files Small

Recommended size:

Under 300 lines

---

# Stack Independence Rule

The structure must remain recognizable across stacks.

---

React Example:

```
apps/frontend/src/components

```

---

Angular Example:

```
apps/frontend/src/app/components

```

---

The location changes slightly, but the concept remains the same.

---

# Environment Files

Environment configuration must follow this pattern.

```
.env

.env.example

.env.local

```

---

# Docker Files

Docker configuration must exist in the infrastructure directory.

```
infrastructure/docker/

Dockerfile

```

---

# Database Files

Database-related files must be organized under backend.

```
backend/

migrations/

seeds/

```

---

# Logging Location

Logs should be written to:

```
logs/

```

This directory should be ignored by Git.

---

# Test Structure (Future)

Tests should follow this pattern.

```
tests/

unit/

integration/

e2e/

```

---

# Rule — Do Not Create Deep Nesting

Avoid excessive folder nesting.

Bad example:

```
src/modules/user/services/internal/helpers/utils/

```

Good example:

```
src/user/services/

```

---

# Migration Rule

When refactoring structure:

Move files gradually.

Avoid large structural changes in a single commit.

---

# Final Principle

Structure teaches architecture.
