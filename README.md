# Q/A Software Developer - Test Assignment

Hi there! 👋 🙂

Thank you for participating in the testing of our website today.

- Aim to **complete this exercise in less than 1 hour.** However, taking longer
  is acceptable.
- Feel free to use any search engines or AI tools, such as ChatGPT, as needed.
- After completing the exercise, please submit your solutions via a Pull Request
  (PR) on GitHub.

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

## 🏁 Getting Started

1. Execute `npm run cypress:open` to launch
   [Cypress.io](https://www.cypress.io/).
2. You will be testing one of our staging environments:
   https://cypress-test.eplay.com

## 📂 Directory Structure

The `cypress` directory contains all the end-to-end (e2e) test files.

## 🎯 Objectives

1. Modify the home test file `cypress/e2e/1-home.cy.ts` to confirm that the home
   page prompts users to verify their age.

   - [ ] Verify that a terms and conditions prompt appears when accessing the
         page for the first time.
   - [ ] Ensure redirection to `google.com` when selecting the _"No thanks, I'll
         leave"_ link.
   - [ ] Confirm redirection to the index page after clicking the _"I am over
         18"_ button.
   - [ ] Check that a cookie named `first-visit` with the value `false` is set
         after clicking the _"I am over 18"_ button.

2. Develop a Cypress command to bypass the age verification prompt for
   subsequent tests. Make sure to use it.

3. Update the login test file `cypress/e2e/3-login.cy.ts` to validate login
   functionality using these credentials:

```json
{
  "username": "alison_broadcaster",
  "password": "alison"
}
```

- [ ] Test that the "Login" button is disabled when either username or password
      fields are empty.

4. Update the test file `cypress/e2e/4-live.cy.ts` to verify the chat button's
   position on the `/live` page (e.g., `/cypress_live_test/live`). Ensure that
   the chat button appears at the bottom in portrait mode and on the right side
   in landscape mode when viewed on a mobile device viewport.

![CleanShot 2023-12-04 at 15 29 45@2x](https://github.com/jlison/qa-test/assets/8662071/55a02054-6683-429e-8ff5-91aeb6fb3421)

5. Revise the test file `cypress/e2e/5-search.cy.ts` to validate the number of
   live streamers displayed on the index page `/`. This should be compared
   against the data from the endpoint:
   `https://search-cf-development.eplay.com/channels?size=48&from=0`. Implement
   a Cypress task (using Node.js) to confirm that the displayed count in the
   front-end UI matches the number of streamers marked as `"live": true` in the
   endpoint's response (back-end response).
