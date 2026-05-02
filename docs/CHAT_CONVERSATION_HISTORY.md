# Conversation History — Training Platform Design and Branch Strategy

This document consolidates the key decisions, architectural reasoning, and evolution of the training platform discussed during the design sessions.

The purpose of this file is to preserve context for future reference, onboarding, and architectural continuity.

---

# Phase 1 — Vision Definition

Initial objective:

Create a structured training platform where students learn software development using AI-assisted guidance.

Key goals defined:

- Teach real-world development workflow
- Use modern stack
- Provide structured learning progression
- Support beginner-level developers
- Provide deployable production experience

Initial stack decision:

React

Vite

TypeScript

NestJS

PostgreSQL

Docker

---

# Phase 2 — Training Model Definition

The system evolved from a simple project into a full training program.

Core components created:

Training schedule

Student guide

Mentor guide

Evaluation checklist

Sprint-based task system

Definition of Done

Code review checklist

---

# Phase 3 — Sprint-Based Learning Structure

The training program was defined using progressive sprints.

Sprint sequence:

Sprint 11 — Accounts UI

Sprint 12 — Transactions

Sprint 13 — Feedback

Sprint 14 — Validation

Sprint 15 — Pagination

Sprint 16 — Filters

Sprint 17 — Custom Hooks

Sprint 18 — Context

Sprint 19 — RBAC

Sprint 20 — Logging

Sprint 21 — Security

Sprint 22 — Deploy

Sprint 23 — CI/CD

Purpose of the sprint model:

Simulate real development workflow.

---

# Phase 4 — Training Operationalization

The system transitioned from documentation into an operational training platform.

Operational artifacts created:

TRAINING_SCHEDULE.md

STUDENT_GUIDE.md

MENTOR_GUIDE.md

EVALUATION_CHECKLIST.md

BRANCH_STRATEGY.md

---

# Phase 5 — Branch Strategy Evolution

The repository required separation of contexts due to multiple stacks and learning levels.

Key architectural decision:

Branches represent learning environments.

---

# Current Branch Model

main

Reference implementation.

Used to test architecture and patterns.

Currently using Angular for experimentation.

---

starter-angular-pleno

Starting point for developers with prior experience.

Focus:

Architecture

Best practices

System structure

---

starter-react-beginner

Starting point for intern-level developers.

Focus:

Framework fundamentals

Development workflow

Guided learning

---

experimental

Safe environment for testing new ideas.

Examples:

New frameworks

New architecture

New tools

---

# Branch Naming Convention

starter-<stack>-<level>

Examples:

starter-react-beginner

starter-angular-pleno

starter-react-intermediate

starter-angular-beginner

---

# Core Architectural Principles

Branches represent learning context.

Training environments must remain stable.

Reference implementation may evolve.

Experiments must be isolated.

---

# Current System Architecture Status

Training model:

Fully defined

Branch strategy:

Defined

Documentation system:

Established

Learning progression:

Structured

Deployment workflow:

Planned

CI/CD workflow:

Defined

---

# Strategic Direction

Short-term goals:

Stabilize starter branches

Validate training flow

Run pilot student

---

Medium-term goals:

Support multiple stacks

Add intermediate level

Improve automation

---

Long-term goals:

Create scalable training platform

Support multiple learning tracks

Enable enterprise onboarding

---

# Key Insight

This repository is not just a codebase.

It is a training infrastructure.

---

# Maintenance Rule

This document should be updated whenever major architectural or pedagogical decisions are made.
