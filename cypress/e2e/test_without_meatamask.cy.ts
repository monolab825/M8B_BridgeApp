describe("SigmaSwapBridge Content Test", () => {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/')
  })

  it("Localization Test", () => {

    //English check
    cy.url().should('include', '/en');
    cy.contains('Transfer your tokens across blockchains');
    cy.contains('Securely transfer tokens between the LUKSO and Ethereum blockchains');
    cy.contains('History');
    cy.contains('Connect Wallet');

    //For RaibowKit
    cy.contains('Connect Wallet').click();

    //Wallet Check
    cy.contains('MetaMask');
    cy.contains('Rainbow');
    cy.contains('Coinbase Wallet');
    cy.contains('WalletConnect');
    cy.contains('Ledger');

    //localization check
    cy.contains('What is a Wallet?');

    cy.contains('MetaMask').click();
    cy.contains('What is a Wallet?');

    //Chinese check
    cy.visit("/zh");
    cy.url().should('include', '/zh');
    cy.contains('跨區塊鏈轉移您的代幣');
    cy.contains('在 LUKSO 和以太坊區塊鏈之間安全地轉移代幣');
    cy.contains('歷史');
    cy.contains('連接錢包');

    //For RaibowKit
    cy.contains('連接錢包').click();

    //Wallet check
    cy.contains('MetaMask');
    cy.contains('Rainbow');
    cy.contains('Coinbase Wallet');
    cy.contains('WalletConnect');
    cy.contains('Ledger');

    //localization check
    cy.contains('什么是钱包？');

    cy.visit("/ja");
    cy.url().should('include', '/ja');
    cy.contains('ブロックチェーン間でトークンを転送する');
    cy.contains('LUKSO ブロックチェーンとイーサリアム ブロックチェーン間でトークンを安全に転送する');
    cy.contains('歴史');
    cy.contains('ウォレットを接続する');

    //For RaibowKit
    cy.contains('ウォレットを接続する').click();

    //Wallet check
    cy.contains('MetaMask');
    cy.contains('Rainbow');
    cy.contains('Coinbase Wallet');
    cy.contains('WalletConnect');
    cy.contains('Ledger');

    //For RaibowKit
    cy.contains('ウォレットとは何ですか？').click();

  });

  it("Input Test", () => {

    cy.url().should('include', '/en');
    cy.get('#input_send_amount').type("1");
    cy.get('#display_recive_amount').should('have.value', 0.001)
  });

  it("Wallet Connect", () => {

    //English check
    cy.visit("/");
    cy.url().should('include', '/en');
    cy.contains('Transfer your tokens across blockchains');
    cy.contains('Securely transfer tokens between the LUKSO and Ethereum blockchains');
    cy.contains('History');
    cy.contains('Connect Wallet');

    //For RaibowKit
    cy.contains('Connect Wallet').click();

    //Wallet Check
    cy.contains('MetaMask').click();
    if (cy.contains("Don't have MetaMask?")) {
      cy.contains('GET').click();
      cy.contains('Add to Chrome');
      cy.contains('Get the app');
    }
  });
});