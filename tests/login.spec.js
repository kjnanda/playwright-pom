const { test, expect } = require('@playwright/test');
import { LoginPage } from '../page/login';

test('Testing Login using POM', async ({ page }) => {

  const usernNameValue = process.env.USERNAME;
  const passwordValue = process.env.PASSWORD;

  const loginPage = new LoginPage(page);

  await loginPage.navigateToURL(process.env.TESTURL);

  await loginPage.clickOnLoginLink();

  await loginPage.doLogin(usernNameValue, passwordValue);

});
