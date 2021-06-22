# CYPRESS-TODOIST

Test repository for experimenting with [Cypress.io](https://docs.cypress.io/)

## Install dependencies

Simply run `npm i` based on the root of the project

## Run tests

### Running tests using the Cypress interactive UI:

Run `npm run cypress:open` to open the cypress UI runner and click on the test file that you whish to run.

### Running the tests headless:

Run `npm run cypress:run` and it will run all the available tests.

## Environment variables

The following environment variables are needed in your System Environment Variables (**.profile** file in case of Mac OS), in order for the execution to work:

- **CYPRESS_TODOIST_BASE_URL**
- **CYPRESS_TODOIST_EMAIL**
- **CYPRESS_TODOIST_PASSWORD**

**NOTE:** The `CYPRESS_` prefix is needed as if it is not included in the name of the environment variable, Cypress will not recognize it during execution time.

## Github Actions

A github action is currently being used for executing the tests on every pull request. The Action can be found under `.github/workflows/tests.yml`.

Also, the three Environment Variables mentioned above are defined under the repositoryu secrets, inside the `todoist_env` Environment.
