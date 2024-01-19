describe("SigmaSwapBridge Content Test", () => {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/')
  })

  it("Wallet Connect", () => {

    cy.url().should('include', '/en');
    cy.contains('Transfer your tokens across blockchains');
    cy.contains('Securely transfer tokens between the LUKSO and Ethereum blockchains');
    cy.contains('History');
    cy.contains('Connect Wallet');

    //For RaibowKit
    cy.contains('Connect Wallet').click();

    //Wallet Check
    cy.contains('MetaMask').click();

    cy.contains('Wallet');
    cy.contains('0x');
    cy.contains('Swap');

  });

  it("Exchange Arrow Button Test", () => {

    cy.url().should('include', '/en');

    //For RaibowKit
    cy.contains('Connect Wallet').click();

    //Wallet Check
    cy.contains('MetaMask', { timeout: 10000 }).click();
    cy.get('#exchange_token_form', { timeout: 10000 }).click();
    cy.contains('Switch network', { timeout: 10000 });
    cy.get('#display_recive_amount', { timeout: 10000 }).should('have.value', 1)
  });
});