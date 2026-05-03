# Sprint 7 — Frontend Account List

This sprint introduces frontend-backend integration.

The student will connect the frontend application to the backend API and display a list of accounts on the screen.

This is the moment where the system becomes a complete full-stack application.

---

# Objective

Display the list of accounts in the frontend by calling the backend API.

---

# Concepts Introduced

API integration

HTTP requests from frontend

useEffect

Component state

Loading state

Rendering lists

---

# Why This Matters

Most modern applications are full-stack systems where the frontend communicates with APIs.

Understanding how to fetch and display data is essential for building user interfaces that reflect real system data.

This sprint connects the visual interface to the business logic.

---

# Prerequisites

Sprint 0 completed

Sprint 1 completed

Sprint 2 completed

Sprint 3 completed

Sprint 4 completed

Sprint 5 completed

Sprint 6 completed

GET /accounts endpoint works correctly

Frontend application runs successfully

---

# Tasks

Open the frontend project

Create a new page called AccountsList

Create a service function to call the API:

GET /accounts

Use useEffect to fetch data when the page loads

Store the response in component state

Render the list of accounts on the screen

Display a loading message while data is being fetched

---

# Expected Result

The frontend displays a list of accounts retrieved from the backend.

The page loads without errors.

The data matches the database records.

---

# Verification Steps

Run the application

Open the browser

Navigate to the accounts page

Verify the list of accounts is displayed

Refresh the page and confirm data reloads

---

# Common Mistakes

Forgetting to call the API inside useEffect

Incorrect API URL

State not updated correctly

Component not re-rendering

---

# Troubleshooting

If no data appears:

Check browser console

Verify API endpoint is running

Check network requests in developer tools

Restart the application

---

# Code Quality Checklist

[ ] API call executes successfully

[ ] Loading state is displayed

[ ] Data renders correctly

[ ] No console errors appear

---

# Definition of Done

The sprint is complete when:

The frontend displays account data from the API

The student understands how frontend and backend communicate

The page loads without runtime errors

---

# Optional Challenge

Display additional account information (for example: balance or creation date).

Format numbers or dates for better readability.

---

# Reflection Questions

Why should data fetching occur inside useEffect?

What happens if the API is unavailable?

Why is loading feedback important for users?

---

# Mentor Notes

Encourage the student to inspect network requests using browser developer tools.

Explain how frontend state reflects backend data.
