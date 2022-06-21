import {run, stop} from "../lib/browser";
import chai from 'chai';
const assert = chai.assert;


describe('UI-тесты для проекта TimeWeb', () => {
    let page
    beforeEach(async () => {
        page = await run ('https://timeweb.com/ru/services/hosting/');
    });
    afterEach(async () => {
        await stop();
    });
    const tarifYearBtn = '#formOpt';
    const fioField = '.double > .left:nth-child(14) > .label > div > .suggestions-input';
    const emailField = '.left:nth-child(14) > .columns > .c5-5 > .label > div > .suggestions-input';
    const phoneField = '.c1-2 > .label > .label > div > .phone-mask';
    const registerBtn = '.form > form > .double > .left > .hosting-items__button';
    const exitCross = '.k-widget > .k-window-titlebar > .k-window-actions > .k-window-action > .k-icon';
    const timewebMainMenu = '#default-layout > .grid__content > .layout-cnt-w > #p0 > .page-start'
    const createSite = '.layout-cnt-w > #p0 > .page-start > .quick-actions-panel > .quick-actions-panel-item:nth-child(3)';

    it ('Регистрация нового пользователя', async () => {
        await page.waitForSelector(tarifYearBtn);
        await page.click(tarifYearBtn);
        await page.waitForSelector(fioField);
        await page.click(fioField);
        await page.fill(fioField, 'Шугаев Алексей');
        await page.waitForSelector(emailField);
        await page.click(emailField);
        await page.fill(emailField, 'saturn98@gmail.com');
        await page.waitForSelector(phoneField);
        await page.click(phoneField);
        await page.fill(phoneField, '79666666666');
        await page.waitForSelector(registerBtn);
        await page.click(registerBtn);
        await page.waitForSelector(exitCross);
        await page.click(exitCross);
        await page.waitForSelector(timewebMainMenu);
        await page.click(timewebMainMenu);
        const createSiteText = await page.textContent(createSite);
        assert.strictEqual(createSiteText.trim(), 'Создать сайт', 'Пользователь не зарегистрирован')
    });

    it ('Создание сайта', async () => {

    })
})
