import {run, stop} from "../lib/browser";

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
    const helloMessage = '#p0 > .k-widget > .k-window-content > .welcome-window > .welcome-window__header';


    it ('Регистрация нового пользователя', async () => {
        await page.waitForSelector(tarifYearBtn);
        await page.click(tarifYearBtn);
        await page.waitForSelector(fioField);
        await page.click(fioField);
        await page.fill(fioField, 'Тест Тест');
        await page.waitForSelector(emailField);
        await page.click(emailField);
        await page.fill(emailField, 'amail@mail.ru');
        await page.waitForSelector(phoneField);
        await page.click(phoneField);
        await page.fill(phoneField, '79888888888');
        await page.waitForSelector(registerBtn);
        await page.click(registerBtn);
        await page.waitForSelector(helloMessage);
        const helloMessageText = await page.textContent(helloMessage);
        assert(helloMessageText).strictEqual('Поздравляем!', 'Пользователь не зарегистрирован')
    })
})
