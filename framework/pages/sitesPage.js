import DomainOperations from "./domainPage";

const loginField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(2) > .input--3M8Ak';
const passwordField = '.login-form-container > .login > form > .formRow--1LwmF:nth-child(3) > .input--3M8Ak';
const loginBtn = '.login-form-container > .login > form > .formButtonRow--2JbPt > .button--9XBxA';
const accountName = '.acc-name';
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
    createNewSite: async (page) => {

    },
    changeCommentSite: async (page) => {

    },
    changeSettingSite: async (page) => {

    }
}

export default SitesOperations