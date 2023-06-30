[![Playwright Tests](https://github.com/kjnanda/playwright-pom/actions/workflows/playwright.yml/badge.svg)](https://github.com/kjnanda/playwright-pom/actions/workflows/playwright.yml)

# playwright-pom
This repo is created to demonstrate the use of POM(Page Object Model) and env vars

# playwright-pom
This repo is created to demonstrate the use of POM(Page Object Model) and env vars

**1. How to create the POM file**

- Create a page dir inside the project's root
- Create a class with appropriate name
- Use `export` keyword before class name as we want to use this class into our testcase file
- Make a constructor and initiate the page object and Declare the selectors here
- Create an action/function where the actual logic needs to be added

    ```constructor(page) {
        this.page = page;
        this.username_texbox = page.getByLabel('Username or Email Address');
        this.password_textbox = page.getByLabel('Password', { exact: true });
        this.login_button = page.getByRole('button', { name: 'Log In' });
    }

    //function
     async doLogin(userName_value, password_value) {

        await this.username_texbox.fill(userName_value);
        await this.password_textbox.fill(password_value);
        await this.login_button.click();
        await expect(this.page.getByText('Howdy, ')).toBeVisible();
    }

**2. How to use POM to testcase file**

- First, we need to import pom class to our testcase file

`import { LoginPage } from '../page/login';`

- Create an object of page class so that we can call the functions from that class

```
const loginPage = new LoginPage(page);
await loginPage.doLogin(usernNameValue, passwordValue);
```

# env vars

1. How to setup your project to use env vars
- Install the package for to dotenv - `npm install dotenv --save`

2. Create .env file at the root of your project and add it to your .gitignore file
   
3. Update playwright.config.js file with below code
   
```
import * as dotenv from 'dotenv';
dotenv.config({
  path:'.env'
});
```

4. In .env file add your variables

```
USERNAME=demoUser
PASSWORD=demoPassword
```

5. How to use it in testcase file

```
const usernNameValue = process.env.USERNAME;
const passwordValue = process.env.PASSWORD;
```
