// cypress/e2e/cart/shoppingCart.cy.js
import LoginPage from '../../page-objects/LoginPage';
import ProductsPage from '../../page-objects/ProductsPage';

describe('Корзина покупок', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();

    beforeEach(() => {
        // Авторизация перед каждым тестом
        loginPage.navigate();
        loginPage.login('standard_user', 'secret_sauce');
        productsPage.isLoaded();
    });

    it('Добавление товара в корзину', () => {
        // Добавляем товар в корзину
        productsPage.addProductToCart('sauce-labs-backpack');

        // Проверяем, что счетчик корзины увеличился
        productsPage.getCartItemCount().should('eq', '1');
    });

    it('Добавление нескольких товаров в корзину', () => {
        // Добавляем несколько товаров
        productsPage.addProductToCart('sauce-labs-backpack');
        productsPage.addProductToCart('sauce-labs-bike-light');

        // Проверяем, что счетчик корзины равен 2
        productsPage.getCartItemCount().should('eq', '2');
    });
});