const addNewSite = 'tr > .element__block > #create_site_block > #create_site_no_all_used > .link';
const nameSiteField = '#site_dir';
const commentSiteField = '#site_comment';
const applyBtn = '#save_button';
const newSiteName = '.ui-table > tbody > #trow_2 > .simplecell > .site_directory_name';
const siteSettingMenu = '#php-select';
const phpSettingValue = '.l-decor-bg > .ui-dialog > #php-menu > #ui-id-16 > .ui-menu-item-caption';
const createSite = '.layout-cnt-w > #p0 > .page-start > .quick-actions-panel > .quick-actions-panel-item:nth-child(3)';
const siteSettingBtn = '#trow_0 > .simplecell > .help-icons-wrap > .ui-link-btn-icon > .icon-config';
const siteComment = '.ui-table > tbody > #trow_0 > .simplecell > .ui-overflow-wrap:nth-child(3)';
const siteSettingValue = '.ui-table > tbody > #trow_0 > .simplecell > .ui-overflow-wrap:nth-child(4)';

const SitesOperations = {
    createNewSite: async (page, testSiteValue) => {
        await page.click(createSite);
        await page.click(addNewSite);
        await page.click(nameSiteField);
        await page.type(nameSiteField, testSiteValue);
        await page.click(applyBtn);
        const newSiteNameText = await page.textContent(newSiteName);
        return newSiteNameText;
    },
    changeCommentSite: async (page, testCommentValue) => {
        await page.click(createSite);
        await page.click(siteSettingBtn);
        await page.click(commentSiteField);
        await page.type(commentSiteField, testCommentValue);
        await page.click(applyBtn);
        await page.waitForTimeout(3000);
        const siteCommentText = await page.textContent(siteComment);
        return siteCommentText;
    },
    changeSettingSite: async (page) => {
        await page.click(createSite);
        await page.click(siteSettingBtn);
        await page.click(siteSettingMenu);
        await page.click(phpSettingValue);
        await page.click(applyBtn);
        await page.waitForTimeout(3000);
        const siteSettingValueText = await page.textContent(siteSettingValue);
        return siteSettingValueText;
    }
}

export default SitesOperations