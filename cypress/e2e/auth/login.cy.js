import LoginPage from '../../page-objects/LoginPage';
import ProductsPage from '../../page-objects/ProductsPage';

describe('Авторизация', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();

    beforeEach(() => {
        loginPage.navigate();
    });

    it('Успешная авторизация с валидными данными', () => {
        // Используем стандартные учетные данные из saucedemo.com
        loginPage.login('standard_user', 'secret_sauce');

        // Проверяем, что мы на странице Products
        productsPage.isLoaded();
    });

    it('Ошибка при вводе неверного пароля', () => {
        loginPage.login('standard_user', 'wrong_password');

        // Проверяем наличие сообщения об ошибке
        loginPage.getErrorMessage().should('be.visible')
            .and('contain.text', 'Epic sadface: Username and password do not match');
    });

    it('Ошибка при вводе заблокированного пользователя', () => {
        loginPage.login('locked_out_user', 'secret_sauce');

        // Проверяем наличие сообщения об ошибке блокировки
        loginPage.getErrorMessage().should('be.visible')
            .and('contain.text', 'Epic sadface: Sorry, this user has been locked out');
    });
});