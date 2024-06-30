export class StagingEnv {
  public emailField = () =>  cy.get('#email');
  public passwrodField = () => cy.get('#pass');
  public signInButton = () => cy.get('.flex-col > .btn')
}

export class MyAccountStagingEnv {
  public name = () => cy.get('.base')
  public errorMessage = () => cy.get('.message')
}

export class MyAccountNonStagingEnv {
  public name = () => cy.get('.name')
  public errorMessage = () => cy.get('.message-error')
}

export class NonStaging {
  public emailField = () => cy.get('#CustomerEmail');
  public passwrodField = () => cy.get('#CustomerPassword')
  public signInButton = () => cy.get('#customer_login > .btn')
}