# Sprint 1 — Understanding the Backend

This sprint introduces the student to the internal flow of the backend application.

The goal is not to write code yet.

The goal is to understand how requests move through the system.

---

# Objective

Understand how an HTTP request travels through the backend layers and produces a response.

---

# Concepts Introduced

HTTP request lifecycle

Controller

Service

Repository

Logging

Separation of responsibilities

---

# Why This Matters

Most bugs in real systems are not caused by syntax errors.

They are caused by misunderstanding how the system behaves.

Understanding the request flow makes debugging faster and development safer.

---

# Prerequisites

Sprint 0 completed

Application runs successfully

Basic understanding of HTTP requests

---

# Tasks

Open the backend project

Locate the main entry file

Observe the application startup logs

Find the health endpoint implementation

Identify the controller responsible for the endpoint

Identify the service used by the controller

Identify the repository used by the service

---

# Expected Result

The student can describe the flow of a request from the controller to the database and back.

---

# Verification Steps

Run the application

Call the health endpoint

Observe the logs

Trace the execution path in the code

Explain the flow using simple steps

---

# Common Mistakes

Jumping directly into coding

Ignoring logs

Confusing controller and service responsibilities

Trying to memorize instead of understanding

---

# Troubleshooting

If the application does not start:

Run:

npm run dev

If logs are unclear:

Restart the application

Read logs slowly from the beginning

---

# Code Quality Checklist

[ ] Application starts successfully

[ ] Logs are readable

[ ] Endpoint responds correctly

---

# Definition of Done

The sprint is complete when:

The student can explain the request flow

The student can identify each layer in the backend

The system runs without errors

---

# Optional Challenge

Add a new log message in the controller.

Restart the application and verify the log appears.

---

# Reflection Questions

What is the responsibility of a controller?

What is the responsibility of a service?

Why should business logic not be placed in the controller?

---

# Mentor Notes

Encourage the student to read code slowly.

Avoid explaining everything immediately.

Ask the student to describe what they observe.
