const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./.env.${env}` });
const { testdata } = require(`../../po/data/test.data.${env}`);
class GoogleHomePage {

    get sherchInput() { return $('[class="mb2a7b"]') }
    get serchClick() { return $('[class="YSM5S"]') }
    async open() {
        await browser.url(testdata.urls.googleUrl);
    }

    async serch(text) {
        await this.serchClick.waitForExist({ timeout: 10000 })
        await this.serchClick.click()
        await this.sherchInput.setValue(text)
        await browser.keys('Enter')
    }
}

module.exports = new GoogleHomePage();