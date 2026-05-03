# Sprint 12 — Deployment

## Objective

Deploy the full-stack application to a production environment and make it accessible via a public URL.

---

## What You Will Learn

- How to prepare an app for production
- Environment variables in production
- Docker build basics
- How deployment platforms work

---

## Prerequisites

- Sprint 0 to Sprint 11 completed
- Application running locally without errors

---

## Step-by-Step Tasks

### 1) Prepare environment variables

Ensure all required variables exist in production:

- DATABASE_URL
- PORT
- NODE_ENV

---

### 2) Build the application

Backend:

```bash
npm run build
```

Frontend:

```bash
npm run build
```

---

### 3) Create Docker configuration (if not exists)

Prepare Dockerfile(s) for backend and frontend.

---

### 4) Choose a deployment platform

Examples:

- Fly.io
- Render
- Railway

---

### 5) Deploy the backend

- Configure environment variables
- Connect database
- Deploy service

---

### 6) Deploy the frontend

- Configure API URL
- Build and deploy

---

### 7) Test production

- Open the public URL
- Create data
- Verify data persistence

---

## Expected Result

- Application is accessible via public URL
- Backend and frontend communicate correctly
- Data persists in production

---

## Verification Checklist

- [ ] Backend deployed
- [ ] Frontend deployed
- [ ] Environment variables configured
- [ ] Application accessible online
- [ ] System works end-to-end

---

## Definition of Done

- Application is live
- Student understands deployment flow

---

## Common Mistakes

- Missing environment variables
- Incorrect API URL
- Database not accessible

---

## Reflection Questions

- What changes between local and production?
- Why are environment variables important?
- What are the risks in deployment?

---

## Mentor Notes

Celebrate this milestone — this is the first real deployment.
