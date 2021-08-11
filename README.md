# Interview Scheduler

This is a single page application (SPA) built using React. The data is retrieved from the API server ([Scheduler API server](https://github.com/Emeka-asogwa/scheduler-api)) using a PostgreSQL database, and the client communicates with the API server over HTTP, using the JSON format.

For the tests, Storybook is used to test components. Jest and Cypress are used throughout the development of the project to test the development.

## Final Product

![]()
![]()
![]()

## Functionalities

- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Technical Specifications

- React
- Webpack, Babel
- Axios, WebSockets
- Storybook, Webpack Dev Server
- Jest

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

- Axios
- Classnames
- Cypress
- Normalize.css
- React
- React-dom
- React-scripts

## Dev-dependencies

- @babel/core
- @storybook/addon-actions
- @storybook/addon-backgrounds
- @storybook/addon-link
- @storybook/addons

- @storybook/react
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/react-hooks
- babel-loader
- node-sass
- prop-types
- react-test-renderer
