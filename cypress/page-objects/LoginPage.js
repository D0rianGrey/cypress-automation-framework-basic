import BasePage from './BasePage';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.url = '/';
        this.usernameInput = '[data-test="username"]';
        this.passwordInput = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
        this.errorMessage = '[data-test="error"]';
    }

    typeUsername(username) {
        this.getElement(this.usernameInput).type(username);
        return this;
    }

    typePassword(password) {
        this.getElement(this.passwordInput).type(password);
        return this;
    }

    clickLogin() {
        this.getElement(this.loginButton).click();
    }

    login(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }

    getErrorMessage() {
        return this.getElement(this.errorMessage);
    }
}

export default LoginPage;