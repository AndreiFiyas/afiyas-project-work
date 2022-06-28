const loginField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(2) > .input--3M8Ak';
const passwordField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(3) > .input--3M8Ak';
const loginBtn = '.login-form-container > .login > form > .formButtonRow--2JbPt > .button--9XBxA';
const addDomain = '.layout-cnt-w > #p0 > .page-start > .quick-actions-panel > .quick-actions-panel-item:nth-child(2)';
const moveDomain = '.layout-cnt-w > #layout-pjax > .page-domains > .operation-menu > .operation-menu__item:nth-child(2)';
const moveDomainField = '.move-domain__row > .move-domain__input > .input > .input__wrapper > .input__field';
const moveDomainBtn = '.js-region-form > div > .content-block > .content-block__actions > .tw-button-primary';
const movedDomainName = '.cpS-table-accordion > tbody > .domain-row:nth-child(2) > .domain-list-table__description > .cpS-lk-simple-one-line';
const domainValidationMessage = '.move-domain__item > .move-domain__row > .move-domain__input > .input > .input__help';

const DomainOperations = {
    checkFreeDomain: async (page) => {
        await page.click(loginField);
        await page.fill(loginField, 'cr51484');
        await page.click(passwordField);
        await page.fill(passwordField, 'RO7hz8p6b1Uv');
        await page.click(loginBtn);
        await page.click(addDomain)
        await page.click(moveDomain)
        await page.click(moveDomainField)
        await page.fill(moveDomainField, 'gattaka.ru')
        await page.click(moveDomainBtn)
        const movedDomainNameText = await page.textContent(movedDomainName)
        return movedDomainNameText;
    },
    checkBusyDomain: async (page) => {
        await page.click(loginField);
        await page.fill(loginField, 'cr51484');
        await page.click(passwordField);
        await page.fill(passwordField, 'RO7hz8p6b1Uv');
        await page.click(loginBtn);
        await page.click(addDomain);
        await page.click(moveDomain);
        await page.click(moveDomainField);
        await page.fill(moveDomainField, 'google',);
        await page.waitForTimeout(3000);
        const domainValidationMessageText = await page.textContent(domainValidationMessage);
        return domainValidationMessageText;
    }
}

export default DomainOperations