# Sprint 0 — Environment Setup

This sprint introduces the student to the development environment and ensures the system runs locally.

---

# Objective

Run the application successfully and understand the basic structure of the project.

---

# Concepts Introduced

Docker

Frontend and backend separation

Local development workflow

Project structure

---

# Why This Matters

Every professional developer must be able to run a project locally.

Understanding how to start the system is the first step toward building and maintaining real applications.

---

# Prerequisites

Git installed

Node.js installed

Docker installed

Basic terminal usage

---

# Tasks

Clone the repository

Navigate to the project folder

Run the following command:

npm run dev

Wait for the containers to start

Open the frontend in the browser

---

# Expected Result

The application starts successfully.

The frontend loads in the browser.

The backend starts without errors.

---

# Verification Steps

Check terminal output for:

Server started

Database connected

Application ready

Open browser and access:

http://localhost:3000

Call the health endpoint:

GET /health

---

# Common Mistakes

Docker not running

Port already in use

Missing environment variables

Dependencies not installed

---

# Troubleshooting

Restart Docker

Run:

npm install

Run:

npm run dev:reset

Check if ports 3000 or 5432 are already in use

---

# Code Quality Checklist

[ ] Project starts without errors

[ ] No warnings in terminal

[ ] Logs are readable

---

# Definition of Done

The sprint is complete when:

The system starts successfully

The student understands how to run the application

The health endpoint responds correctly

---

# Optional Challenge

Stop the containers and restart them.

Observe how logs change during startup.

---

# Reflection Questions

What happens if Docker is not running?

Why is the health endpoint useful?

---

# Mentor Notes

Observe whether the student can run the project independently.

Do not fix environment issues immediately.

Encourage the student to investigate logs first.
