# Conversation History — Real Design Discussion Log

This document preserves the REAL conversation flow and reasoning that led to the current architecture of the training platform.

Unlike a summary, this file captures the actual evolution of decisions, doubts, validations, and refinements made during the design process.

The goal is to maintain architectural memory and prevent loss of context over time.

---

# Context — Initial Situation

The project started as a technical system but evolved into a structured learning platform intended to train beginner and intermediate developers using real-world practices.

The focus shifted from building software to building a **training infrastructure**.

The user identified that different levels of developers require different starting points and that the repository must support multiple learning paths.

---

# Core Concern Raised

The user asked to review whether the repository branches were correctly structured to support:

- Different learning levels
- Different technology stacks
- Different training contexts
- Long-term scalability

At that time, the repository contained only two branches:

main

starter

The user recognized that multiple levels were being proposed and that branch separation might become necessary.

This triggered the architectural discussion about branch strategy.

---

# Key Decision — Keep Reference Code in main

The user explicitly decided:

Keep the reference implementation in the main branch.

Reasoning:

The project is still evolving.

The main branch is being used to test architectural patterns using Angular.

The goal is experimentation and validation, not stability yet.

Therefore:

main represents a living reference implementation.

Not a frozen production system.

---

# Key Decision — Rename starter Branch

The user proposed renaming the existing starter branch to:

starter-angular-pleno

Reasoning:

This branch is intended for developers who already have some experience.

The goal is to teach architecture and structured development using Angular.

The branch represents a starting point for learning — not the reference implementation.

---

# Key Decision — Create New Beginner Branch

The user proposed creating a new branch:

starter-react-beginner

Purpose:

Provide a simplified starting point for intern-level developers.

Characteristics:

Minimal setup

Guided learning structure

Reduced complexity

Clear progression

This branch will serve as the primary entry point for beginners.

---

# Insight — Branches Represent Learning Context

A major architectural principle emerged during the discussion:

Branches are not just code variations.

Branches represent learning environments.

This became the foundation for the branch strategy.

---

# Naming Convention Established

The conversation defined a consistent naming pattern:

starter-<stack>-<level>

Examples:

starter-react-beginner

starter-angular-pleno

starter-react-intermediate

starter-angular-beginner

This pattern ensures predictability and scalability.

---

# Decision — Add Experimental Branch

The need for experimentation was identified.

A dedicated branch type was introduced:

experimental

Purpose:

Test new tools

Evaluate architecture

Try new stacks

Prototype features

This prevents instability in training branches.

---

# Architectural Clarification — Separation of Responsibilities

Each branch type was assigned a clear role.

main

Reference implementation

Architecture experimentation

Active development

---

starter-<stack>-<level>

Training environment

Stable starting point

Structured learning path

---

experimental

Testing environment

Unstable by design

Exploration space

---

student-<name> (optional future)

Individual learner workspace

Temporary branch

Practice environment

---

# Important Design Philosophy

The repository is not organized by feature.

It is organized by learning context.

This is a fundamental architectural choice.

---

# Strategic Direction Identified

Short-term focus:

Stabilize starter branches

Validate training methodology

Run first student pilot

---

Medium-term focus:

Support multiple stacks

Support multiple learning levels

Improve automation

---

Long-term vision:

Create a scalable developer training platform

Support onboarding workflows

Enable structured skill progression

---

# Key Realization

The repository is no longer just a software project.

It has become:

A training system

A learning framework

A developer formation pipeline

---

# Maintenance Rule

This document must be updated whenever a major architectural or pedagogical decision is made.
