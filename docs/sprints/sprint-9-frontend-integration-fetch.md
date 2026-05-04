# Sprint 9 — Frontend Integration (Fetch API)

## Objective

Connect the frontend application to the backend API and display real data on the screen.

---

## What You Will Learn

- How to call an API from the frontend
- How to use fetch
- How to manage state in React
- How to render dynamic data

---

## Prerequisites

- Sprint 0 completed
- Sprint 1 completed
- Sprint 2 completed
- Sprint 3 completed
- Sprint 4 completed
- Sprint 5 completed
- Sprint 6 completed
- Sprint 7 completed
- Sprint 8 completed

---

## Step-by-Step Tasks

### 1) Update App component

Open:

```text
apps/frontend/src/App.tsx
```

---

### 2) Create state

Create a state variable to store accounts.

---

### 3) Fetch data from API

Use fetch to call the accounts endpoint you built in earlier sprints:

```text
http://localhost:3000/accounts
```

---

### 4) Use useEffect

Fetch data when the component loads.

---

### 5) Render the data

Display the list of accounts on the screen.
Show at least the account `name` and `balance` for each item.

---

### 6) Handle loading state

Show a loading message while data is being fetched.

---

## Expected Result

- The frontend displays data from the backend
- The UI updates dynamically

---

## Verification Checklist

- [ ] API call works
- [ ] Data is stored in state
- [ ] Data is rendered correctly
- [ ] No console errors

---

## Definition of Done

- Frontend displays real backend data
- Student understands API integration

---

## Common Mistakes

- Incorrect API URL
- Forgetting useEffect dependency array
- Not handling async properly

---

## Reflection Questions

- How does the frontend communicate with the backend?
- What happens if the API fails?
- Why is state needed?

---

## Mentor Notes

This is a major milestone — full stack integration.
