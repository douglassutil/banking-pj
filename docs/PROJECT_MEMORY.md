# Project Memory — AI-Assisted Beginner Training System

This document preserves the current state of planning so development can resume at any time without losing context.

---

## Project Goal

Create a structured learning environment where a beginner or intern learns professional software development using AI (Claude) as a mentor.

Focus:

- Real-world stack
- Step-by-step progression
- Professional practices
- Production-ready workflow
- Maintain motivation and clarity

---

## Target Student Profile

- Internship-level developer
- Basic programming knowledge
- Little or no framework experience
- Learning to work in a professional team environment

---

## Technology Stack

Frontend:

- React
- Vite
- TypeScript

Backend:

- NestJS
- PostgreSQL

Infrastructure:

- Docker
- Fly.io
- GitHub Actions

---

## Teaching Philosophy

1) Simplicity first
2) Real-world practices
3) Incremental complexity
4) Clear tasks
5) Visible progress
6) Avoid unnecessary abstraction

---

## Current Project Status

The system is considered **feature-complete for intern-level training**.

Implemented learning areas:

- CRUD
- Authentication (JWT)
- Authorization (RBAC)
- Validation
- Pagination
- Filtering
- Global state
- Logging
- Security hardening
- Docker
- Cloud deployment
- CI/CD
- Professional documentation

No additional technical features are required at this stage.

---

## Strategic Decision

Do NOT add more technical complexity.

Next improvements focus on pedagogy and workflow simulation.

---

## Next Evolution Focus

Add structured workflow elements:

1) Tasks per sprint
2) Definition of Done
3) Code Review Checklist
4) Time estimation per task
5) Manual testing steps

---

## Directory Structure Recommendation

/docs

/sprints

/tasks

/checklists

---

## Required New Documents

Definition of Done:

/docs/checklists/DEFINITION_OF_DONE.md

Code Review Checklist:

/docs/checklists/CODE_REVIEW_CHECKLIST.md

Task Template:

/docs/tasks/TASK_TEMPLATE.md

---

## Definition of Done (Baseline)

A task is complete when:

- Code runs
- No console errors
- Feature works as expected
- Manual test executed
- Commit created

---

## Code Review Checklist (Baseline)

- Names are clear
- Code is readable
- No duplication
- Errors handled
- Validation exists
- No debug logs

---

## Task Template

Task Title:

Objective:

Steps:

Expected Result:

Estimated Time:

Status:

---

## Important Constraint

Do not introduce intentional bugs in early stages.

Maintain student confidence and motivation.

---

## Resume Instructions

When returning to this project:

1) Review this file
2) Continue from workflow improvements
3) Do not expand technical scope
4) Keep intern-level complexity

---

## Project State

The curriculum is stable.

Future work should focus on:

- Teaching clarity
- Workflow discipline
- Developer habits

Not on adding new technologies.
