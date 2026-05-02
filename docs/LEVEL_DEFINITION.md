# Level Definition — Training Platform

This document defines the official meaning of each developer level used in the training platform.

The goal is to remove ambiguity when designing starters, tasks, and expectations.

Levels are defined by behavior and capability — not years of experience.

---

# Why Level Definition Matters

Without clear level definitions, common problems occur:

- Tasks become too difficult
- Tasks become too easy
- Expectations become inconsistent
- Training becomes frustrating
- Evaluation becomes subjective

This document prevents those issues.

---

# Official Levels

The training platform currently defines three levels:

Beginner

Intermediate

Pleno

Future levels may include:

Senior

Specialist

Architect

---

# Level 1 — Beginner

Typical profile:

Intern or developer with limited experience.

Has basic programming knowledge but limited exposure to frameworks and real systems.

---

## What a Beginner Already Knows

Basic programming concepts

Variables

Functions

Conditionals

Loops

Basic Git usage

Basic terminal usage

---

## What a Beginner Is Still Learning

Framework structure

Project organization

API communication

Error handling

Debugging workflow

Professional development practices

---

## What a Beginner Should Be Able to Do After Training

Run a project locally

Implement simple features

Read and understand basic code

Fix simple bugs

Follow instructions reliably

Use Git consistently

---

## Complexity Guidelines

Beginner environments should prioritize:

Clarity

Simplicity

Guided learning

Fast feedback

---

## Example Starter

starter-react-beginner

---

# Level 2 — Intermediate

Typical profile:

Developer with some experience building applications.

Comfortable working independently on small features.

---

## What an Intermediate Developer Already Knows

Framework basics

Component structure

API requests

Basic debugging

Git workflow

---

## What an Intermediate Developer Is Still Learning

Code organization

Reusability

Testing strategy

Performance awareness

System structure

---

## What an Intermediate Developer Should Be Able to Do After Training

Implement medium-complexity features

Refactor existing code

Write maintainable components

Debug non-trivial issues

Follow project architecture

---

## Complexity Guidelines

Intermediate environments should prioritize:

Consistency

Maintainability

Code reuse

Structured design

---

## Example Starter (Future)

starter-react-intermediate

---

# Level 3 — Pleno

Typical profile:

Developer with solid experience building production systems.

Understands development workflow and can reason about architecture.

---

## What a Pleno Developer Already Knows

Framework structure

System architecture basics

API design

Error handling

Logging

Configuration management

Git workflow

---

## What a Pleno Developer Is Still Learning

Scalability

System design trade-offs

Observability

Performance optimization

Reliability

---

## What a Pleno Developer Should Be Able to Do After Training

Design modular architecture

Implement structured services

Handle production errors

Improve system maintainability

Explain system behavior

---

## Complexity Guidelines

Pleno environments should prioritize:

Structure

Reliability

Separation of responsibilities

Maintainability

---

## Example Starter

starter-angular-pleno

---

# How Levels Affect Starter Design

Level determines:

Architecture complexity

Task difficulty

Documentation detail

Required abstractions

Testing expectations

---

# Mapping — Level to Starter

Beginner

starter-react-beginner

---

Intermediate

starter-react-intermediate (future)

---

Pleno

starter-angular-pleno

---

# Rule — Never Mix Levels

A single starter branch must serve only one level.

If requirements increase significantly:

Create a new level instead of expanding the existing one.

---

# Final Principle

Level is defined by capability.

Not by time.
