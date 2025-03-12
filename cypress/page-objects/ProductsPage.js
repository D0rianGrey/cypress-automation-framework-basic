// cypress/page-objects/ProductsPage.js
import BasePage from './BasePage';

class ProductsPage extends BasePage {
    constructor() {
        super();
        this.url = '/inventory.html';
        this.title = '.title';
        this.inventoryItems = '.inventory_item';
        this.addToCartButton = button => `[data-test="add-to-cart-${button}"]`;
        this.shoppingCartBadge = '.shopping_cart_badge';
        this.shoppingCartLink = '.shopping_cart_link';
    }

    isLoaded() {
        this.getElement(this.title).should('have.text', 'Products');
        return this;
    }

    getProductCount() {
        return this.getElement(this.inventoryItems).its('length');
    }

    addProductToCart(productId) {
        this.getElement(this.addToCartButton(productId)).click();
        return this;
    }

    getCartItemCount() {
        return this.getElement(this.shoppingCartBadge).invoke('text');
    }

    goToCart() {
        this.getElement(this.shoppingCartLink).click();
    }
}

export default ProductsPage;