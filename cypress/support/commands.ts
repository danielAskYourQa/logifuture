/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkFor4xxResponse', (actionCallback) => {
  let intercepted4xx = false;

  cy.intercept('**/*', (req) => {
    req.on('response', (res) => {
      if (res.statusCode >= 400 && res.statusCode < 500) {
        intercepted4xx = true;
        cy.log(`4XX response intercepted: ${res.statusCode} - ${res.body}`);
      }
    });
  });

  // Perform the action
  actionCallback();

  // Wait for a reasonable amount of time to ensure all requests are captured
  cy.wait(2000).then(() => {
    expect(intercepted4xx).to.be.true;
  });
});
