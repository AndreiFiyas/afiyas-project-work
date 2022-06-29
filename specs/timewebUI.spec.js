import {run, stop} from "../lib/browser";
import chai from 'chai';
const assert = chai.assert;
import urls from "../framework/config";
import app from '../framework/pages'


describe('UI-тесты для проекта TimeWeb', () => {
    let page
    const loginValue = 'cr51484';
    const passwordValue = 'RO7hz8p6b1Uv';

    beforeEach(async () => {
        page = await run(urls.timeweb);
    });

    afterEach(async () => {
        await stop();
    });
    it ('Проверка перехода в ПУА после регистрации нового пользователя', async () => {
        const registerFioValue = 'Расторгуев Федор';
        const registerEmailValue = 'frast@mnm.com';
        const registerPhoneValue = '79666666666';
        await page.goto('https://timeweb.com/ru/services/hosting/')
        const createSiteText = await app().RegisterPage().registerNewUser(page, registerFioValue, registerEmailValue, registerPhoneValue);
        assert.strictEqual(createSiteText.trim(), 'Создать сайт', 'Переход в ПУА не произошел')
    });
    it ('Проверка успешной авторизации пользователя', async () => {
        const accountNameText = await app().RegisterPage().loginUser(page, loginValue, passwordValue);
        assert.strictEqual(accountNameText.trim(), 'cr51484', 'Пользователь не авторизован');
    });
    it ('Проверка добавления в ПУА пользователя свободного домена', async () => {
        const testDomainName = 'gattaka.ru'
        const movedDomainNameText = await app().DomainOperations().checkFreeDomain(page, loginValue, passwordValue, testDomainName);
        assert.strictEqual(movedDomainNameText, 'gattaka.ru', 'Домен не добавлен')
    });
    it ('Проверка валидации на добавление в ПУА пользователя занятого домена', async () => {
        const wrongDomainName = 'google'
        const domainValidationMessageText = await app().DomainOperations().checkBusyDomain(page, loginValue, passwordValue, wrongDomainName);
        assert.strictEqual(domainValidationMessageText.trim(), 'Неправильное имя домена.', 'Ошибка в валидации домена');
    })
    it('Проверка создания нового сайта в ПУА пользователя', async () => {
        const testSiteValue = 'test02';
        const newSiteNameText = await app().SitesOperations().createNewSite(page, loginValue, passwordValue, testSiteValue);
        assert.strictEqual(newSiteNameText.trim(), 'test02', 'Сайт не создан')
    });
    it ('Проверка возможности изменения комментария сайта', async () => {
        const testCommentValue = 'New Comment';
        const siteCommentText = await app().SitesOperations().changeCommentSite(page, loginValue, passwordValue, testCommentValue);
        assert.strictEqual(siteCommentText, 'New Comment', 'Комментарий не изменен');
    });
    it ('Проверка возможности изменения настроек сайта', async () => {
        const siteSettingValueText = await app().SitesOperations().changeSettingSite(page, loginValue, passwordValue);
        assert.strictEqual(siteSettingValueText, 'PHP 7.2 - Python 3.4 - HTTP', 'Настройка сайта не изменена');
    })
})
