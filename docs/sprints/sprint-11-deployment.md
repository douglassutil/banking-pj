# Sprint 11 — Deployment

This sprint introduces production deployment and environment configuration.

The student will deploy the application to a real hosting platform and make it accessible through a public URL.

This is the moment where the system becomes a real, running product.

---

# Objective

Deploy the full-stack application to a production environment using Docker.

---

# Concepts Introduced

Environment variables

Production configuration

Docker image build

Container deployment

Public URL

Production logs

---

# Why This Matters

Software is only valuable when it runs in a real environment.

Deployment transforms development work into a usable product.

Understanding deployment is a core professional skill for modern developers.

---

# Prerequisites

Sprint 0 completed

Sprint 1 completed

Sprint 2 completed

Sprint 3 completed

Sprint 4 completed

Sprint 5 completed

Sprint 6 completed

Sprint 7 completed

Sprint 8 completed

Sprint 9 completed

Sprint 10 completed

Application runs successfully locally

Docker configuration exists

---

# Tasks

Create a production environment configuration file

Define environment variables:

DATABASE_URL

PORT

NODE_ENV

Build the Docker image

Test the Docker container locally

Create an account on the deployment platform (for example: Fly.io)

Configure the application for deployment

Deploy the application

Obtain the public URL

Open the application in a browser

Verify the system works in production

---

# Expected Result

The application is accessible through a public URL.

The system runs without errors in production.

Data can be created and retrieved successfully.

---

# Verification Steps

Open the deployed application URL

Create a new account

List accounts

Verify data persistence

Check production logs

---

# Common Mistakes

Missing environment variables

Incorrect database configuration

Docker build errors

Port configuration issues

---

# Troubleshooting

If deployment fails:

Check platform logs

Verify environment variables

Rebuild the Docker image

Restart the deployment

---

# Code Quality Checklist

[ ] Application builds successfully

[ ] Environment variables are configured

[ ] Deployment completes without errors

[ ] Application responds to requests

---

# Definition of Done

The sprint is complete when:

The application is deployed successfully

The system is accessible via a public URL

The student understands the deployment process

---

# Optional Challenge

Configure automatic redeployment when code changes.

Add basic monitoring or logging configuration.

---

# Reflection Questions

What is the difference between development and production environments?

Why should environment variables not be hardcoded?

What happens if the production database becomes unavailable?

---

# Mentor Notes

Celebrate this milestone with the student.

Deployment is a major achievement and should reinforce confidence.
