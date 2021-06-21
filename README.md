# CYPRESS-TODOIST

Test repository for experimenting with [Cypress.io](https://docs.cypress.io/)

## Install dependencies

Simply run `npm i` based on the root of the project

## Run tests

Run `npm run cypress:open` to open the cypress UI runner and click on the test file that you whish to run.

## Environment variables

The following environment variables are needed in your System Environment Variables (.profile file in case of Mac OS), in order for the execution to work:

- **CYPRESS_TODOIST_BASE_URL**
- **CYPRESS_TODOIST_EMAIL**
- **CYPRESS_TODOIST_PASSWORD**

**NOTE:** The `CYPRESS_` prefix is needed as if it is not included in the name of the environment variable, Cypress will not recognize it during execution time.