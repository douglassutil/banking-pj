# Sprint 23 — CI/CD with GitHub Actions (Training Tasks)

This document converts Sprint 23 into structured, executable tasks for an intern-level developer.

---

## Sprint Objective

Automate the build and deployment process using Continuous Integration and Continuous Deployment (CI/CD).

The system should:

- Automatically run checks when code changes
- Validate builds before deployment
- Deploy application automatically
- Provide feedback about build status

---

## Why This Sprint Matters

Manual deployments are error-prone and inconsistent.

With CI/CD:

- Deployments become reliable
- Errors are detected early
- Teams move faster
- Software quality improves

This sprint introduces automation — the final step in modern software delivery.

---

## Task 1 — Understand CI/CD Concepts

### Objective

Learn the purpose of Continuous Integration and Continuous Deployment.

### Steps

1. Research what CI means

2. Research what CD means

3. Write a short explanation in your own words

### Expected Result

Developer understands the CI/CD workflow.

### Manual Test

Explain the difference between CI and CD.

### Estimated Time

30 minutes

### Difficulty

Easy

---

## Task 2 — Create GitHub Actions Workflow Folder

### Objective

Prepare the repository structure for automation.

### Steps

1. Create folder:

.github/workflows

2. Verify folder exists

### Expected Result

Repository supports GitHub Actions workflows.

### Manual Test

Confirm folder appears in repository tree.

### Estimated Time

15 minutes

### Difficulty

Easy

---

## Task 3 — Create CI Workflow File

### Objective

Run automated checks when code changes.

### Steps

1. Create file:

ci.yml

2. Configure workflow to run on push

3. Install dependencies

4. Build project

### Expected Result

Workflow executes automatically after commit.

### Manual Test

Push code and verify workflow starts in GitHub Actions tab.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 4 — Add Build Validation Step

### Objective

Ensure code builds successfully before deployment.

### Steps

1. Add build command to workflow

2. Fail workflow if build fails

### Expected Result

Broken code cannot be deployed.

### Manual Test

Introduce build error and verify workflow fails.

### Estimated Time

45 minutes

### Difficulty

Medium

---

## Task 5 — Configure Deployment Step

### Objective

Deploy application automatically after successful build.

### Steps

1. Add deployment command to workflow

2. Use secure environment variables

3. Trigger deployment after successful build

### Expected Result

Application deploys automatically when code passes checks.

### Manual Test

Push code and verify deployment runs automatically.

### Estimated Time

1 hour

### Difficulty

Medium

---

## Task 6 — Monitor Workflow Status

### Objective

Understand how to read CI/CD results.

### Steps

1. Open GitHub Actions dashboard

2. Review workflow logs

3. Identify success or failure status

### Expected Result

Developer can interpret automation results.

### Manual Test

Open workflow run and read log output.

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

- Workflow file created
- Build runs automatically
- Deployment runs automatically
- Build failures stop deployment
- Workflow status visible in GitHub
- No runtime errors

---

## Estimated Total Time

Approximately:

3 to 4 hours
