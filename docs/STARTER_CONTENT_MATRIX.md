# Starter Content Matrix — What Each Starter Must Contain

This document defines the exact content differences between starter branches.

The goal is to make the expectations explicit and prevent ambiguity when creating or reviewing new starter environments.

---

# Purpose

Different learning levels require different complexity levels.

This matrix defines:

- What MUST exist
- What MAY exist
- What MUST NOT exist

for each starter type.

---

# Starter Types Covered

Current official starters:

starter-react-beginner

starter-angular-pleno

---

# Comparison Matrix

| Component | React Beginner | Angular Pleno |
|-----------|----------------|---------------|
| Project Runs | REQUIRED | REQUIRED |
| Docker Support | REQUIRED | REQUIRED |
| Database | SIMPLE | FULL |
| Authentication | BASIC | FULL |
| Architecture Layers | MINIMAL | STRUCTURED |
| Validation | BASIC | COMPLETE |
| Error Handling | BASIC | COMPLETE |
| Logging | BASIC | COMPLETE |
| Tests | OPTIONAL | RECOMMENDED |
| CI/CD | OPTIONAL | RECOMMENDED |
| Performance Optimization | NOT REQUIRED | OPTIONAL |
| Advanced Patterns | NOT REQUIRED | OPTIONAL |

---

# starter-react-beginner — Content Definition

Target audience:

Intern / Beginner developer

Focus:

Learning fundamentals

Understanding workflow

Building confidence

---

## Must Contain

Working project setup

Docker configuration

Simple database configuration

Basic CRUD functionality

Simple API integration

Clear folder structure

Guided tasks

README with step-by-step instructions

---

## Should Contain

Simple validation

Basic error messages

Minimal logging

Environment configuration example

---

## Must NOT Contain

Complex architecture patterns

Microservices

Message queues

Advanced caching

Heavy abstractions

Complex dependency injection

Multiple environments

Advanced performance tuning

---

# starter-angular-pleno — Content Definition

Target audience:

Developer with prior experience

Focus:

Architecture

Maintainability

Best practices

System design

---

## Must Contain

Modular architecture

Clear separation of responsibilities

Service layer

Repository or data access layer

Centralized configuration

Structured error handling

Validation strategy

Logging system

Environment configuration

---

## Should Contain

Authentication and authorization

Reusable components

Shared utilities

Basic test coverage

Documentation of architecture

---

## May Contain

Caching strategy

Feature flags

Performance optimizations

Monitoring hooks

---

## Must NOT Contain

Unnecessary experimental features

Incomplete architecture

Hidden configuration

Unstable dependencies

---

# Complexity Guidelines

Beginner starter should optimize for:

Clarity

Predictability

Fast feedback

Confidence building

---

Pleno starter should optimize for:

Structure

Maintainability

Scalability

Professional workflow

---

# Evolution Rule

When adding new features to a starter branch:

Always evaluate complexity impact.

If complexity increases significantly:

Create a new level instead of modifying the existing starter.

Example:

starter-react-intermediate

---

# Final Principle

A starter branch is not defined by technology.

It is defined by learning complexity.
