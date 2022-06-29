const loginField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(2) > .input--3M8Ak';
const passwordField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(3) > .input--3M8Ak';
const loginBtn = '.login-form-container > .login > form > .formButtonRow--2JbPt > .button--9XBxA';
const accountName = '.acc-name';

const LoginPage = {
    loginUser: async (page, loginValue, passwordValue) => {
        await page.click(loginField);
        await page.fill(loginField, loginValue);
        await page.click(passwordField);
        await page.fill(passwordField, passwordValue);
        await page.click(loginBtn);
        await page.waitForTimeout(3000);
        const accountNameText = await page.textContent(accountName);
        return accountNameText;
    }
}

export default LoginPage;