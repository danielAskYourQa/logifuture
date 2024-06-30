import { NonStaging, StagingEnv } from "../pageObjects/home";

export function closeAllModals() {
  // Define a selector for the close button, commonly found in modals
  const closeButtonSelectors = [
    '.GeofencingShopSelector__content .close-button-selector', 
    '.modal .close', 
    '.popup .close', 
    '.pop-in__close-button', 
    '.GeofencingShopSelector__content', 
    '.CloseIcon',
    '#shopify-pc__banner__btn-accept', 
    '.recommendation-modal__button',
    '.recommendation-modal__close-button-container',
    '.recommendation-modal__button',
    '#consent-banner-accept-all',
    '.pop-in__close-button',
    'div[data-testid="POPUP"] button[data-uw-cer-popup-close]',
    '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    '#button[aria-label="Close Modal"]',
    '.GeofencingShopSelector__flag--EU > .GeofencingShopSelector__flag-icon',
    '#onetrust-accept-btn-handler',
  ];
  // Iterate over each selector and attempt to close the modal
  closeButtonSelectors.forEach((selector) => {
    cy.get('body').then(($body) => {
      if ($body.find(selector).length > 0) {
        cy.get(selector).click({multiple: true, force: true});
      }
    });
  });
}

export const getBaseUrl = () => {
  const apiUrlBase = Cypress.env('API_URL_BASE');
  const apiUrlStaging = Cypress.env('API_URL_STAGING');
  return Cypress.env('API_URL_ENV') === 'staging' ? apiUrlStaging : apiUrlBase;
};

export const getLoginPage = () => {
  return Cypress.env('API_URL_ENV') === 'staging'
    ? new StagingEnv()
    : new NonStaging();
};

export const visitBaseUrlAndCloseModals = () => {
  cy.visit(getBaseUrl());
  cy.wait(2000)
  closeAllModals();
};
