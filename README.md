# Interview Scheduler

This is a single page application (SPA) built using React. The data is retrieved from the [Scheduler API server](https://github.com/Emeka-asogwa/scheduler-api) using a PostgreSQL database, and the client communicates with the API server over HTTP, using the JSON format.

For the tests, Storybook is used to test components. Jest and Cypress are used throughout the development of the project to test the development.

## Final Product

### Git showing the functionality of the app

!["Git showing the functionality of the app"](https://github.com/Emeka-asogwa/scheduler/blob/master/docs/scheduler.gif)

### Home page

!["Home page"](https://github.com/Emeka-asogwa/scheduler/blob/master/docs/home_page.png)

- Page responsive to screen size

!["Page responsive to screen size"](https://github.com/Emeka-asogwa/scheduler/blob/master/docs/one_page.png)

- Empty field/Validation feature

["Empty field"](https://github.com/Emeka-asogwa/scheduler/blob/master/docs/empty_field.png)

- Saving changes

["Saving changes"](https://github.com/Emeka-asogwa/scheduler/blob/master/docs/saving.png)

- Delete confirmation before final delete

["Delete confirmation before final delete"](https://github.com/Emeka-asogwa/scheduler/blob/master/docs/delete_warning.png)

- Deleting process

["deleting"](https://github.com/Emeka-asogwa/scheduler/blob/master/docs/deleting1.png)

- Server error when the API server is inaccessible while deleting schedule

["Server error when the API server is inaccessible"](https://github.com/Emeka-asogwa/scheduler/blob/master/docs/server_error_delete.png)

- Server error when the API server is inaccessible while saving schedule

["Server error when the API server is inaccessible while saving schedule"](https://github.com/Emeka-asogwa/scheduler/blob/master/docs/server_error_save.png)

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
