# Sprint 22 — Deploy to Production (Training Tasks)

This document converts Sprint 22 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Deploy the application to a real production environment using Docker and Fly.io.

The system should:

- Build Docker images
- Configure environment variables
- Deploy the backend to the cloud
- Access the application through a public URL

---

## Why This Sprint Matters

This is the moment when the project stops being only a local exercise and becomes a real system available on the internet.

Deployment introduces real-world responsibilities such as:

- Environment configuration
- Infrastructure awareness
- Production readiness

This sprint is often the most motivating milestone for beginners.

---

## Task 1 — Install Docker

### Objective

Ensure Docker is installed and running locally.

### Steps

1. Install Docker Desktop

2. Start Docker service

3. Verify installation

### Expected Result

Docker is available on the system.

### Manual Test

Run command:

Docker version

Verify version information appears.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 2 — Build Docker Image

### Objective

Create a container image for the application.

### Steps

1. Locate Dockerfile

2. Run build command

3. Verify image creation

### Expected Result

Application image is successfully built.

### Manual Test

Run command:

docker images

Verify new image appears in list.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 3 — Run Application Using Docker

### Objective

Start the application inside a container.

### Steps

1. Run container using docker-compose

2. Verify application starts

3. Check logs for errors

### Expected Result

Application runs successfully in container.

### Manual Test

Open browser and access:

http://localhost:3000

Verify application responds.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 4 — Create Fly.io Account and Install CLI

### Objective

Prepare the environment for cloud deployment.

### Steps

1. Create Fly.io account

2. Install Fly CLI

3. Authenticate with Fly

### Expected Result

Developer can interact with Fly platform.

### Manual Test

Run command:

fly auth login

Verify login succeeds.

### Estimated Time

45 minutes

### Difficulty

Easy

---

## Task 5 — Deploy Application to Fly.io

### Objective

Publish the application to a live environment.

### Steps

1. Initialize Fly configuration

2. Run deploy command

3. Wait for deployment completion

### Expected Result

Application is accessible through a public URL.

### Manual Test

Open generated URL in browser.

Verify application loads successfully.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 6 — Verify Health Endpoint

### Objective

Confirm the deployed application is operational.

### Steps

1. Access health endpoint

2. Confirm status response

### Expected Result

System returns status indicating successful operation.

### Manual Test

Open:

/health

Verify response contains status OK.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Sprint Definition of Done

All tasks must satisfy the Definition of Done checklist.

Refer to:

/docs/checklists/DEFINITION_OF_DONE.md

---

## Sprint Completion Criteria

- Docker installed and working
- Application runs in container
- Fly.io account configured
- Application deployed successfully
- Public URL accessible
- Health endpoint responding
- No runtime errors

---

## Estimated Total Time

Approximately:

3 to 4 hours
