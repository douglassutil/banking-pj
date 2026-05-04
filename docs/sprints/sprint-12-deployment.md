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

### 3) Review Docker configuration

Dockerfiles are already prepared in this project:

```
infrastructure/docker/Dockerfile.backend
infrastructure/docker/Dockerfile.frontend
```

Review them to understand what each step does.

---

### 4) Deploy with Fly.io (Step by Step)

Fly.io is recommended for beginners — it handles databases, secrets, and containers without complex configuration.

**Install the Fly CLI:**

```bash
curl -L https://fly.io/install.sh | sh
```

**Login:**

```bash
fly auth login
```

**Create the app (run from project root):**

```bash
fly launch
```

Use the example configuration as a starting point:

```
infrastructure/fly.toml
```

**Set environment variables (secrets):**

```bash
fly secrets set DATABASE_URL="postgresql://..."
fly secrets set NODE_ENV="production"
fly secrets set CORS_ORIGIN="https://your-frontend-url"
```

**Deploy:**

```bash
fly deploy
```

**Run migrations in production:**

```bash
fly ssh console
npx prisma migrate deploy
```

---

### 5) Test production

- Open the public URL provided by Fly.io
- Create data via the API
- Verify data persists after page refresh

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
