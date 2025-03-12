Cypress.Commands.add('loginToApp', (username, password) => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('addProductToCart', (productId) => {
    cy.get(`[data-test="add-to-cart-${productId}"]`).click();
});

Cypress.Commands.add('waitForPageLoad', () => {
    cy.document().should('have.property', 'readyState', 'complete');
});