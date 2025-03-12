// cypress/page-objects/BasePage.js
class BasePage {
    constructor() {
        this.url = '/';
    }

    navigate() {
        cy.visit(this.url);
    }

    getElement(selector) {
        return cy.get(selector);
    }

    waitForPageLoad() {
        cy.document().should('have.property', 'readyState', 'complete');
    }
}

export default BasePage;