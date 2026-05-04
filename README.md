> **You are on the `starter-react-beginner` branch — the beginner learning track.**
> This is the recommended starting point for new developers.
> The `main` branch is an advanced reference implementation and is NOT intended for beginners.

---

# starter-react-beginner

Base project for the Beginner training track.

Stack:

- React + Vite + TypeScript
- NestJS
- PostgreSQL
- Docker

---

## Purpose

Provide a minimal, predictable, runnable environment for students with limited experience.

---

## How to start

```bash
cp .env.example .env
cp .env.example apps/backend/.env
npm install
```

The project does NOT run with a single command. Start each process separately:

```bash
npm run db:up          # 1. Start PostgreSQL (Docker)
npm run dev:backend    # 2. Start NestJS backend (port 3000)
npm run dev:frontend   # 3. Start React frontend (port 5173)
```

---

## Training

Follow the sprint sequence starting here:

[docs/sprints/sprint-0-run-the-system.md](docs/sprints/sprint-0-run-the-system.md)
