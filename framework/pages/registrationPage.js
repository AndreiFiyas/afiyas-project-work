const tarifYearBtn = '#formOpt';
const fioField = '.double > .left:nth-child(14) > .label > div > .suggestions-input';
const emailField = '.left:nth-child(14) > .columns > .c5-5 > .label > div > .suggestions-input';
const phoneField = '.c1-2 > .label > .label > div > .phone-mask';
const registerBtn = '.form > form > .double > .left > .hosting-items__button';
const exitCross = '.k-widget > .k-window-titlebar > .k-window-actions > .k-window-action > .k-icon';
const timewebMainMenu = '#default-layout > .grid__content > .layout-cnt-w > #p0 > .page-start'
const createSite = '.layout-cnt-w > #p0 > .page-start > .quick-actions-panel > .quick-actions-panel-item:nth-child(3)';
const loginField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(2) > .input--3M8Ak';
const passwordField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(3) > .input--3M8Ak';
const loginBtn = '.login-form-container > .login > form > .formButtonRow--2JbPt > .button--9XBxA';
const accountName = '.acc-name';

const RegisterPage = {
    registerNewUser: async (page, registerFioValue, registerEmailValue, registerPhoneValue) => {
        await page.waitForSelector(tarifYearBtn);
        await page.click(tarifYearBtn);
        await page.waitForSelector(fioField);
        await page.click(fioField);
        await page.fill(fioField, registerFioValue);
        await page.waitForSelector(emailField);
        await page.click(emailField);
        await page.fill(emailField, registerEmailValue);
        await page.waitForSelector(phoneField);
        await page.click(phoneField);
        await page.fill(phoneField, registerPhoneValue);
        await page.waitForSelector(registerBtn);
        await page.click(registerBtn);
        await page.waitForSelector(exitCross);
        await page.click(exitCross);
        await page.waitForSelector(timewebMainMenu);
        await page.click(timewebMainMenu);
        const createSiteText = await page.textContent(createSite);
        console.log(createSiteText)
        return createSiteText;
    },
    loginUser: async (page, loginValue, passwordValue) => {
        await page.click(loginField);
        await page.fill(loginField, loginValue);
        await page.click(passwordField);
        await page.fill(passwordField, passwordValue);
        await page.click(loginBtn);
        const accountNameText = await page.textContent(accountName);
        return accountNameText;
    }
}

export default RegisterPage;