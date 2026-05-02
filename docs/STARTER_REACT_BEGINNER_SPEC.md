# Starter Specification — React Beginner

This document defines the exact technical and pedagogical specification for the `starter-react-beginner` branch.

It translates architectural decisions into a concrete implementation blueprint.

This is not a guideline.

This is an executable specification.

---

# Purpose

The `starter-react-beginner` branch is the primary entry point for new developers with limited experience.

Its purpose is to:

- Build confidence
- Teach fundamentals
- Establish workflow discipline
- Introduce real-world development patterns gradually

---

# Target Student Profile

Beginner developer

Typical characteristics:

- Understands basic programming logic
- Has limited framework experience
- May never have run Docker before
- May never have worked with APIs

---

# Learning Objectives

After completing this starter, the student must be able to:

Run a full-stack application locally

Understand frontend-backend communication

Use Git consistently

Implement simple CRUD features

Debug runtime errors

Follow structured tasks

---

# Technology Stack

Frontend

React

Vite

TypeScript

---

Backend

NestJS

Prisma ORM

---

Infrastructure

PostgreSQL

Docker

---

# Project Layout

The repository must follow this structure.

```
apps/

frontend/

backend/

scripts/

infrastructure/

logs/

```

---

# Frontend Requirements

The frontend must include:

Basic routing

API service layer

Form handling

Basic validation

Error handling

Loading states

---

# Frontend Folder Structure

```
frontend/

src/

components/

pages/

services/

models/

utils/

styles/

```

---

# Backend Requirements

The backend must include core architectural layers.

Required layers:

Controller

Service

Repository

Entity

DTO

---

# Backend Folder Structure

```
backend/

src/

controllers/

services/

repositories/

entities/

prisma/

config/

```

---

# Database Requirements

The database must be PostgreSQL.

Required:

Docker container

Migration support

Seed script

---

# Required Scripts

Every starter must include these scripts.

---

## Development

npm run dev

Start the full environment.

---

## Reset Environment

npm run dev:reset

Reset database and containers.

---

## Seed Database

npm run seed

Populate initial data.

---

# Example Script Behavior

npm run dev must:

Start Docker

Start PostgreSQL

Run migrations

Run seed

Start backend

Start frontend

---

# Initial Feature Set

The starter must include a minimal working system.

---

## Entities

User

Account

Transaction

---

## Core Features

Create account

List accounts

Create transaction

List transactions

---

# Health Check Endpoint

The backend must expose:

GET /health

Response:

200 OK

---

# Logging Requirements

The system must log:

Server started

Database connected

Application ready

---

# Error Handling

The system must handle:

Invalid input

Server errors

Database errors

---

# State Management Strategy

Initial state management must use:

useState

Props

---

Later progression:

React Context

Zustand

---

# Styling Strategy

Initial styling must use:

Basic CSS

Flexbox

Spacing

---

Tailwind may be introduced later.

---

# Documentation Requirements

The branch must include:

README.md

Getting Started section

Task list

Definition of Done

Code Review Checklist

---

# Required Documentation Files

```
docs/

STUDENT_GUIDE.md

MENTOR_GUIDE.md

EVALUATION_CHECKLIST.md

```

---

# Performance Requirements

The system does not need advanced optimization.

Focus on correctness and clarity.

---

# Forbidden Complexity

The starter must NOT include:

Microservices

Message queues

Caching layers

Complex architecture patterns

Advanced security features

Performance tuning

---

# Completion Criteria

The starter is considered ready when:

The project runs with a single command

The database initializes automatically

The frontend loads successfully

The backend responds to requests

No runtime errors occur

---

# Final Principle

The beginner environment must feel safe, predictable, and understandable.
