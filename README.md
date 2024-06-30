
Hi there! 👋 🙂

## ⚙️ Requirements

1. [Git](https://git-scm.com/) and a GitHub account
   ([Github](https://github.com/))
2. [Node.js](https://nodejs.org/) (version 18.x recommended). Earlier versions
   may not be compatible.
3. [Npm](https://www.npmjs.com/get-npm)

## 👩‍💻 Setup

1. Fork and clone this repository.
2. Navigate (`cd`) to the project's root directory.
3. Install the project's dependencies using `npm install`.
4. If needed run `npm audit fix`.

## 🏁 Getting Started

1. Execute `npm run cypress:open` to launch
   [Cypress.io](https://www.cypress.io/).

## 📂 Directory Structure

The `cypress` directory contains all the end-to-end (e2e) test files.

## 🎯 PLEASE READ !!!!!!!!
## 🎯 Instead of doing excersie 1 and/or excersize 2 I have combine the TWO as following (I have used two similar sites... but different ... one acting as staging and one acting as non-staging):
   ## THe same login tests cases can be executed for both staging/non staging environment, by running same script with different env
   ## There is a happy flow -> login with valid credential and expect to land on my profile page ... and validate one item from that page IS present
   ## There is 1/2 negative flow -> login with valid email credential and invalid password ... expect NOT to land on my profile page ... and validate one item from that page is NOT present, and check for the error message displayed on screen triggered at invalid login
   ## There is 2/2 negative flow -> login with valid email credential and invalid password ... expect NOT to land on my profile page ... during last action intercept ALL api calls and expect to have at least one 4XX code

## 🎯 NOTE: for non-staging there is a bug that no error message is displayed 
## 🎯 NOTE: for staging there is a bug that back-end calls do not treat invalid login ... meaning all is 2XX 


1. Tests are under login-tests.spec.cy.ts 
   - [ ] Depending on what you want to run you can run either     
    "cypress:open:default": "CYPRESS_API_URL_ENV=base npx cypress open",
    "cypress:open:staging": "CYPRESS_API_URL_ENV=staging npx cypress open",
    "cypress:run:default": "CYPRESS_API_URL_ENV=base npx cypress run",
    "cypress:run:staging": "CYPRESS_API_URL_ENV=staging npx cypress run",
   - [ ] This will run the same login tests either for staging env or for non-staging env, beeing two different sites, two different locator sets, etc ... but will re-use the same code block.   
2. There might be issues with captcha .... run it several times if captcha problems occur
3. There is a universal method to close all kind of pop-ups ....   closeAllModals(); ... I had to use multiple sites and expand this method to find possible pop-ups that might appear ... some might not be relevant at the moment of running