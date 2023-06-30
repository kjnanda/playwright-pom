import { expect } from "@playwright/test";

export class LoginPage {

    constructor(page) {

        this.page = page;

        this.username_texbox = page.getByLabel('Username or Email Address');
        this.password_textbox = page.getByLabel('Password', { exact: true });
        this.login_button = page.getByRole('button', { name: 'Log In' });
        this.loginLink_cssLocator = page.getByRole('link', { name: 'Log In' });
        this.loginForm_cssLocator = '#loginform';
    }

    async doLogin(userName_value, password_value) {

        await this.username_texbox.fill(userName_value);
        await this.password_textbox.fill(password_value);
        await this.login_button.click();
        await expect(this.page.getByText('Howdy, ')).toBeVisible();

    }

    async navigateToURL(strURL) {
        await this.page.goto(strURL);
    }

    async clickOnLoginLink() {
        await this.loginLink_cssLocator.click();
    }

}