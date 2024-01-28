import { locators } from "./locators/common";

Cypress.Commands.add('clickBetButton', (bet: string) => {
    cy.get('button').contains(bet).click();
  });
  
  Cypress.Commands.add('validateBetInputField', (bet: string) => {
      cy.get(locators.betInputField).should('have.value', bet);
  });