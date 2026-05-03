# Sprint 0 — Run the System

## Objective

Run the full system locally and verify that all services start correctly.

This sprint ensures the development environment is working before writing any code.

---

## What You Will Learn

- How to install dependencies
- How to start Docker services
- How to run backend and frontend applications
- How to verify system health

---

## Prerequisites

Before starting, make sure you have installed:

- Node.js (LTS version)
- Docker Desktop
- Git

---

## Step-by-Step Tasks

### 1) Clone the repository

```bash
git clone <repository-url>
cd banking-pj
```

### 2) Checkout the correct branch

```bash
git checkout starter-react-beginner
```

### 3) Install dependencies

```bash
npm install
```

### 4) Copy environment variables

```bash
cp .env.example .env
```

### 5) Start the database

```bash
npm run db:up
```

Expected result:

- PostgreSQL container is running
- Port 5432 is available

### 6) Start the backend

```bash
npm run dev:api
```

Expected result:

- Server starts without errors
- Console shows application running

### 7) Start the frontend

Open a new terminal and run:

```bash
npm run dev:web
```

Expected result:

- Vite server starts
- Browser opens automatically

---

## Verification Checklist

Confirm the following:

- [ ] Database container is running
- [ ] Backend server started successfully
- [ ] Frontend application started successfully
- [ ] No runtime errors appear

---

## Definition of Done

This sprint is complete when:

- The system runs locally
- All services start successfully
- The student understands how to start the environment

---

## Troubleshooting

If the database does not start:

```bash
docker ps
```

If dependencies fail to install:

```bash
rm -rf node_modules
npm install
```

If ports are already in use:

- Stop other running services
- Restart Docker

---

## Mentor Notes

Do not fix errors for the student immediately.

Guide them to read logs and diagnose problems.
