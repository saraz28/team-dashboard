# Team Dashboard App

## Project overview

Is an Angular-based web application designed to display and manage team member information, including their roles, statuses, and key performance indicators (KPIs).

## Architecture overview

- The project follows a modular structure to improve maintainability:

- Backend API calls are mocked using hardcoded JSON or service stubs.

- Each team member has KPI metrics and avatar images displayed dynamically.

- Sidebar and navigation layout across views.

- Member statuses like "Active","In Active" are styled using Angular's ngClass.

## Challenges

- Unit testing for components that depend on asynchronous services.
- Cypress tool.

---

## Tech Stack

- Angular V20
- Angular Material
- PrimeNG
- Bootstrap 5

---

## Setup instructions

1. **Clone the project:**

```git clone https://github.com/saraz28/team-dashboard.git
 cd team-dashboard```

2. **Install dependencies:**
 Open a terminal in the project folder and run: `npm install`

3. **Run the application:**
 Start the development server with either: `npm start ` or `ng serve`

#### Running Test

- Run unit tests with: `npm test`
- Cypress test with: `npm run cypress:open`

---
````
