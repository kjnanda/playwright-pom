const { test, expect } = require('@playwright/test');
import { LoginPage } from '../page/login';

test('Testing Login using POM', async ({ page }) => {

  const usernNameValue = process.env.username;
  const passwordValue = process.env.password;

  const loginPage = new LoginPage(page);

  await loginPage.navigateToURL(process.env.url);

  await loginPage.clickOnLoginLink();

  await loginPage.doLogin(usernNameValue, passwordValue);

});
