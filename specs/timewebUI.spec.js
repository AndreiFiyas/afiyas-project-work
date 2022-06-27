import {run, stop} from "../lib/browser";
import chai from 'chai';
const assert = chai.assert;
import app from '../framework/pages'
import {stringify} from "mocha/lib/utils";


describe('UI-тесты для проекта TimeWeb', () => {
    let page

    beforeEach(async () => {
        page = await run('https://hosting.timeweb.ru/login');
    });

    afterEach(async () => {
        await stop();
    });

    it ('Регистрация нового пользователя', async () => {
        await page.goto('https://timeweb.com/ru/services/hosting/')
        const createSiteText = await app().RegisterPage().registerNewUser(page);
        assert.strictEqual(createSiteText.trim(), 'Создать сайт', 'Пользователь не зарегистрирован')
    });
    // it ('Авторизация пользователя', async () => {
    //     assert.strictEqual(accountNameText, 'cr51484', 'Пользователь не авторизован');
    // })
    // it ('Проверка свободного домена', async () => {
    //     assert.strictEqual(movedDomainNameText, 'gattaka.ru', 'Домен не добавлен')
    // })
    // it ('Проверка занятого домена', async () => {
    //     assert.strictEqual(domainValidationMessageText.trim(), 'Неправильное имя домена.', 'Ошибка в валидации домена');
    // })
    // it('Создание сайта', async () => {
    //     assert.strictEqual(newSiteNameText.trim(), 'test02', 'Сайт не создан')
    // });
    // it ('Изменение комментария сайта', async () => {
    //     assert.strictEqual(siteCommentText, 'New Comment', 'Комментарий не изменен');
    // });
    // it ('Изменение настроек сайта', async () => {
    //     assert.strictEqual(siteSettingValueText, 'PHP 7.2 - Python 3.4 - HTTP', 'Настройка сайта не изменена');
    // })
})
