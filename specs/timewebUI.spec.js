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
    it ('Авторизация пользователя', async () => {
        const accountNameText = await app().RegisterPage().loginUser(page);
        assert.strictEqual(accountNameText.trim(), 'cr51484', 'Пользователь не авторизован');
    });
    it ('Проверка свободного домена', async () => {
        const movedDomainNameText = await app().DomainOperations().checkFreeDomain(page);
        assert.strictEqual(movedDomainNameText, 'gattaka.ru', 'Домен не добавлен')
    });
    it ('Проверка занятого домена', async () => {
        const domainValidationMessageText = await app().DomainOperations().checkBusyDomain(page);
        assert.strictEqual(domainValidationMessageText.trim(), 'Неправильное имя домена.', 'Ошибка в валидации домена');
    })
    it('Создание сайта', async () => {
        const newSiteNameText = await app().SitesOperations().createNewSite(page);
        assert.strictEqual(newSiteNameText.trim(), 'test02', 'Сайт не создан')
    });
    it ('Изменение комментария сайта', async () => {
        const siteCommentText = await app().SitesOperations().changeCommentSite(page);
        assert.strictEqual(siteCommentText, 'New Comment', 'Комментарий не изменен');
    });
    it ('Изменение настроек сайта', async () => {
        const siteSettingValueText = await app().SitesOperations().changeSettingSite(page);
        assert.strictEqual(siteSettingValueText, 'PHP 7.2 - Python 3.4 - HTTP', 'Настройка сайта не изменена');
    })
})
