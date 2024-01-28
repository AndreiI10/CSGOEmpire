import { locators } from "@support/locators/common";

describe('Roulette tests', () => {

  beforeEach(() => {
    cy.visit('/roulette');
  });

  it('should adjust the bet size correctly using bet option buttons', () => {
    const betOptions = [
      { bet: '+ 0.01', expectedValue: '1.01' },
      { bet: '+ 0.1', expectedValue: '1.11' },
      { bet: '+ 1', expectedValue: '2.11' },
      { bet: '+ 10', expectedValue: '12.11' },
      { bet: '+ 100', expectedValue: '112.11' },
      { bet: '1/ 2', expectedValue: '56.06' },
      { bet: 'x 2', expectedValue: '112.11' }, // Should be 112.22, bug or hidden decimals from the previous bet?
    ]

    cy.get(locators.betInputField).type('1') // Set initial bet value

    // Click on each bet option and validate the bet value
    betOptions.forEach((betOption) => {
      cy.get('button').contains(betOption.bet).click()
      cy.get(locators.betInputField).should('have.value', betOption.expectedValue)
    });
  })

  it('should check the Rules Modal can be displayed and dismissed', () => {
    cy.get('p').contains('Race rules').click()
    .get(locators.rulesModal).should('be.visible')
    .get('button').contains('Close').click()
    .get(locators.rulesModal).should('not.exist')
  });
})