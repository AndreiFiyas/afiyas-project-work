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


const RegisterElement = {
    registerUserElement: async (page) => {
        await page.click(tarifYearBtn);
        await page.click(fioField);
        await page.fill(fioField, 'Габидуллин Руслан');
        await page.click(emailField);
        await page.fill(emailField, 'gabby@gads.com');
        await page.click(phoneField);
        await page.fill(phoneField, '79666666666');
        await page.click(registerBtn);
        await page.click(exitCross);
        return;
    },
    checkRegisterElement: async (page) => {
        await page.waitForTimeout(3000);
        await page.click(timewebMainMenu);
        const createSiteText = await page.textContent(createSite);
        return createSiteText;
    },
    loginElement: async (page) => {
        await page.click(loginField);
        await page.fill(loginField, 'cr51484');
        await page.click(passwordField);
        await page.fill(passwordField, 'RO7hz8p6b1Uv');
        await page.click(loginBtn);
        await page.waitForTimeout(3000);
        return;
    },
    checkLoginElement: async (page) => {
        const accountNameText = await page.textContent(accountName);
        return accountNameText;
    }
}

export default RegisterElement;