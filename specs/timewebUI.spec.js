import {run, stop} from "../lib/browser";
import chai from 'chai';
const assert = chai.assert;


describe('UI-тесты для проекта TimeWeb', () => {
    let page
    beforeEach(async () => {
        page = await run('https://hosting.timeweb.ru/login');
    });
    afterEach(async () => {
        await stop();
    });
    //register page
    const tarifYearBtn = '#formOpt';
    const fioField = '.double > .left:nth-child(14) > .label > div > .suggestions-input';
    const emailField = '.left:nth-child(14) > .columns > .c5-5 > .label > div > .suggestions-input';
    const phoneField = '.c1-2 > .label > .label > div > .phone-mask';
    const registerBtn = '.form > form > .double > .left > .hosting-items__button';
    const exitCross = '.k-widget > .k-window-titlebar > .k-window-actions > .k-window-action > .k-icon';
    const timewebMainMenu = '#default-layout > .grid__content > .layout-cnt-w > #p0 > .page-start'
    const createSite = '.layout-cnt-w > #p0 > .page-start > .quick-actions-panel > .quick-actions-panel-item:nth-child(3)';
    //login page
    const loginField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(2) > .input--3M8Ak';
    const passwordField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(3) > .input--3M8Ak';
    const loginBtn = '.login-form-container > .login > form > .formButtonRow--2JbPt > .button--9XBxA';
    const accountName = '.acc-name';
    //site page
    const addNewSite = 'tr > .element__block > #create_site_block > #create_site_no_all_used > .link';
    const nameSiteField = '#site_dir';
    const commentSiteField = '#site_comment';
    const applyBtn = '#save_button';
    const newSiteName = '.ui-table > tbody > #trow_2 > .simplecell > .site_directory_name';
    const siteSettingMenu = '#php-select';
    const phpSettingValue = '.l-decor-bg > .ui-dialog > #php-menu > #ui-id-16 > .ui-menu-item-caption';
    const siteSettingBtn = '#trow_0 > .simplecell > .help-icons-wrap > .ui-link-btn-icon > .icon-config';
    const siteComment = '.ui-table > tbody > #trow_0 > .simplecell > .ui-overflow-wrap:nth-child(3)';
    const siteSettingValue = '.ui-table > tbody > #trow_0 > .simplecell > .ui-overflow-wrap:nth-child(4)';

    //domain page
    const addDomain = '.layout-cnt-w > #p0 > .page-start > .quick-actions-panel > .quick-actions-panel-item:nth-child(2)';
    const moveDomain = '.layout-cnt-w > #layout-pjax > .page-domains > .operation-menu > .operation-menu__item:nth-child(2)';
    const moveDomainField = '.move-domain__row > .move-domain__input > .input > .input__wrapper > .input__field';
    const moveDomainBtn = '.js-region-form > div > .content-block > .content-block__actions > .tw-button-primary';
    const movedDomainName = '.cpS-table-accordion > tbody > .domain-row:nth-child(2) > .domain-list-table__description > .cpS-lk-simple-one-line';
    const domainValidationMessage = '.move-domain__item > .move-domain__row > .move-domain__input > .input > .input__help';





    // it ('Регистрация нового пользователя', async () => {
    //     await page.goto('https://timeweb.com/ru/services/hosting/')
    //     await page.waitForSelector(tarifYearBtn);
    //     await page.click(tarifYearBtn);
    //     await page.waitForSelector(fioField);
    //     await page.click(fioField);
    //     await page.fill(fioField, 'Шугаев Алексей');
    //     await page.waitForSelector(emailField);
    //     await page.click(emailField);
    //     await page.fill(emailField, 'saturn98@gmail.com');
    //     await page.waitForSelector(phoneField);
    //     await page.click(phoneField);
    //     await page.fill(phoneField, '79666666666');
    //     await page.waitForSelector(registerBtn);
    //     await page.click(registerBtn);
    //     await page.waitForSelector(exitCross);
    //     await page.click(exitCross);
    //     await page.waitForSelector(timewebMainMenu);
    //     await page.click(timewebMainMenu);
    //     const createSiteText = await page.textContent(createSite);
    //     assert.strictEqual(createSiteText.trim(), 'Создать сайт', 'Пользователь не зарегистрирован')
    // });
    it ('Авторизация пользователя', async () => {
        await page.click(loginField);
        await page.fill(loginField, 'cr51484');
        await page.click(passwordField);
        await page.fill(passwordField, 'RO7hz8p6b1Uv');
        await page.click(loginBtn);
        const accountNameText = await page.textContent(accountName);
        assert.strictEqual(accountNameText, 'cr51484', 'Пользователь не авторизован');
    })
    // it ('Проверка свободного домена', async () => {
    //     await page.click(loginField);
    //     await page.fill(loginField, 'cr51484');
    //     await page.click(passwordField);
    //     await page.fill(passwordField, 'RO7hz8p6b1Uv');
    //     await page.click(loginBtn);
    //     await page.click(addDomain)
    //     await page.click(moveDomain)
    //     await page.click(moveDomainField)
    //     await page.fill(moveDomainField, 'gattaka.ru')
    //     await page.click(moveDomainBtn)
    //     const movedDomainNameText = await page.textContent(movedDomainName)
    //     assert.strictEqual(movedDomainNameText, 'gattaka.ru', 'Домен не добавлен')
    // })
    it ('Проверка занятого домена', async () => {
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
        assert.strictEqual(domainValidationMessageText.trim(), 'Неправильное имя домена.', 'Ошибка в валидации домена');
    })
    // it('Создание сайта', async () => {
    //     await page.click(loginField);
    //     await page.fill(loginField, 'cr51484');
    //     await page.click(passwordField);
    //     await page.fill(passwordField, 'RO7hz8p6b1Uv');
    //     await page.click(loginBtn);
    //     await page.click(createSite);
    //     await page.click(addNewSite);
    //     await page.click(nameSiteField);
    //     await page.type(nameSiteField, 'test02');
    //     await page.click(commentSiteField);
    //     await page.type(commentSiteField, 'New Comment');
    //     await page.click(applyBtn);
    //     const newSiteNameText = await page.textContent(newSiteName);
    //     assert.strictEqual(newSiteNameText.trim(), 'test02', 'Сайт не создан')
    // });
    // it ('Изменение комментария сайта', async () => {
    //     await page.click(loginField);
    //     await page.fill(loginField, 'cr51484');
    //     await page.click(passwordField);
    //     await page.fill(passwordField, 'RO7hz8p6b1Uv');
    //     await page.click(loginBtn);
    //     await page.click(createSite);
    //     await page.click(siteSettingBtn);
    //     await page.click(commentSiteField);
    //     await page.type(commentSiteField, 'New Comment');
    //     await page.click(applyBtn);
    //     await page.waitForTimeout(3000);
    //     const siteCommentText = await page.textContent(siteComment);
    //     assert.strictEqual(siteCommentText, 'New Comment', 'Комментарий не изменен');
    // });
    // it ('Изменение настроек сайта', async () => {
    //     await page.click(loginField);
    //     await page.fill(loginField, 'cr51484');
    //     await page.click(passwordField);
    //     await page.fill(passwordField, 'RO7hz8p6b1Uv');
    //     await page.click(loginBtn);
    //     await page.click(createSite);
    //     await page.click(siteSettingBtn);
    //     await page.click(siteSettingMenu);
    //     await page.click(phpSettingValue);
    //     await page.click(applyBtn);
    //     await page.waitForTimeout(3000);
    //     const siteSettingValueText = await page.textContent(siteSettingValue);
    //     assert.strictEqual(siteSettingValueText, 'PHP 7.2 - Python 3.4 - HTTP', 'Настройка сайта не изменена');
    // })
})
