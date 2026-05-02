# Technical Decisions — Training Platform

This document records explicit technical decisions for the training platform.

The goal is to remove ambiguity and ensure consistency across starter branches and future evolution of the project.

These decisions are intentionally pragmatic and pedagogical.

They balance realism with learning simplicity.

---

# Decision Philosophy

We do not optimize for trends.

We optimize for:

Clarity

Stability

Transferable skills

Real-world relevance

Predictable learning progression

---

# Decision 1 — Database Strategy

Status:

Approved

---

## Decision

All official starters will use PostgreSQL.

SQLite will not be used as the primary database in official training environments.

---

## Rationale

PostgreSQL reflects real production environments.

Using the same database in development and production prevents hidden complexity later.

Simplification should occur in tooling, not in infrastructure realism.

---

## Implementation Rule

Every starter must include:

Docker support

PostgreSQL container

Database migrations

Seed script

---

## Example

npm run dev

This command must:

Start Docker

Start PostgreSQL

Run migrations

Run seed

Start application

---

# Decision 2 — Setup Automation

Status:

Approved

---

## Decision

Every starter must provide automated setup scripts.

Students should not manually manage infrastructure steps during initial onboarding.

---

## Required Scripts

npm run dev

Start the full environment

---

npm run dev:reset

Reset database and environment

---

npm run seed

Populate initial data

---

## Rationale

Setup friction is the most common early blocker for beginners.

Automation increases confidence and reduces support overhead.

---

# Decision 3 — State Management Progression

Status:

Approved

---

## Decision

State management libraries must not be introduced at the beginning of the training.

They are introduced only after students understand core React concepts.

---

## Learning Progression

Phase 1 — Fundamentals

useState

props

component communication

---

Phase 2 — Shared State

React Context

---

Phase 3 — State Management Library

Zustand

---

## Rationale

Students must first understand how state works before abstracting it.

Premature abstraction increases confusion.

---

# Decision 4 — Backend Architecture

Status:

Approved

---

## Decision

Backend structure must always include core architectural layers.

Even in beginner environments.

---

## Required Layers

Controller

Service

Repository

Entity

DTO

---

## Rule

Simplify implementation.

Do not simplify architecture.

---

# Decision 5 — ORM Selection

Status:

Approved

---

## Decision

Prisma is the default ORM for beginner environments.

---

## Rationale

Clear schema definition

Reliable migrations

Lower configuration complexity

Better developer experience for beginners

---

## Scope

Applies to:

starter-react-beginner

---

---

# Decision 6 — CSS Strategy

Status:

Approved

---

## Decision

CSS fundamentals must be taught before introducing utility-first frameworks.

Tailwind may be introduced later in the training.

---

## Learning Progression

Phase 1

Basic CSS

Layout fundamentals

Flexbox

Spacing

---

Phase 2

Component styling patterns

---

Phase 3

Optional Tailwind usage

---

# Decision 7 — AI Configuration Per Branch

Status:

Approved

---

## Decision

Each starter branch must contain its own CLAUDE.md configuration.

---

## Beginner Behavior

Explain concepts

Provide examples

Suggest next steps

Encourage experimentation

Avoid unnecessary abstraction

---

## Pleno Behavior

Focus on architecture

Encourage best practices

Expect autonomy

Provide concise guidance

---

## Rationale

AI behavior must match the student's experience level.

---

# Decision 8 — README Structure

Status:

Approved

---

## Decision

The root README must act as a navigation map.

It must not contain full setup instructions.

---

## Responsibilities of Root README

Explain the purpose of the repository

Describe available training paths

Direct users to the correct starter branch

---

# Final Principle

Consistency beats cleverness.

Predictability beats flexibility.

Learning clarity beats technical sophistication.
