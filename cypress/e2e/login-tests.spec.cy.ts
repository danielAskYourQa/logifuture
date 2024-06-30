import {
  MyAccountNonStagingEnv,
  MyAccountStagingEnv,
} from "../pageObjects/home";
import {
  closeAllModals,
  getLoginPage,
  visitBaseUrlAndCloseModals,
} from "../support/utils";

describe("Login Page Tests", () => {
  beforeEach(() => {
    // Ignore uncaught exceptions
    Cypress.on("uncaught:exception", (err, runnable) => {
      // return false to prevent Cypress from failing the test
      return false;
    });
  });

  it("should navigate to the correct login URL based on the environment and perform a valid login regardless of env", () => {
    visitBaseUrlAndCloseModals();

    const loginPage = getLoginPage();

    // Use .env email and password
    const email =
      Cypress.env("API_URL_ENV") === "staging"
        ? Cypress.env("EMAIL_STAGING")
        : Cypress.env("EMAIL");
    const password = Cypress.env("PASS");

    loginPage.emailField().click({ force: true }).type(email);
    loginPage.passwrodField().click({ force: true }).type(password);
    loginPage.signInButton().click({ force: true });

    // Add assertions to verify successful login or expected behavior
    cy.url().should("include", "/account");

    closeAllModals();
    const myAccountPage =
      Cypress.env("API_URL_ENV") === "staging"
        ? new MyAccountStagingEnv()
        : new MyAccountNonStagingEnv();
    myAccountPage.name().should("be.visible");
  });

  it("should not be able to login using incorrect password using Error Messages", () => {
    visitBaseUrlAndCloseModals();
    const loginPage = getLoginPage();

    // Use .env email and password
    const email =
      Cypress.env("API_URL_ENV") === "staging"
        ? Cypress.env("EMAIL_STAGING")
        : Cypress.env("EMAIL");

    loginPage.emailField().click({ force: true }).type(email);
    loginPage.passwrodField().click({ force: true }).type("INCORRECT PASSWORD");
    loginPage.signInButton().click();

    closeAllModals();
    const myAccountPage =
      Cypress.env("API_URL_ENV") === "staging"
        ? new MyAccountStagingEnv()
        : new MyAccountNonStagingEnv();
    myAccountPage.name().should("not.exist");
    myAccountPage.errorMessage().should("be.visible");
  });

  it("should not be able to login using incorrect password USING intercept", () => {
    visitBaseUrlAndCloseModals();

    const loginPage = getLoginPage();

    // Use .env email and password
    const email =
      Cypress.env("API_URL_ENV") === "staging"
        ? Cypress.env("EMAIL_STAGING")
        : Cypress.env("EMAIL");
    cy.intercept("POST", "/login").as("loginRequest");

    loginPage.emailField().click({ force: true }).type(email);
    loginPage.passwrodField().click({ force: true }).type("INCORRECT PASSWORD");
    loginPage.signInButton().click();
    closeAllModals();
    cy.checkFor4xxResponse(() => {
      loginPage.emailField().click({ force: true }).type(email);
      loginPage
        .passwrodField()
        .click({ force: true })
        .type("INCORRECT PASSWORD");
      loginPage.signInButton().click({ force: true });
    });
  });
});
