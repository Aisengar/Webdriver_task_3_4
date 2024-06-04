const environment = process.env.NODE_ENV || 'dev';
const {testdata} = require(`../data/test.data.${environment}.js`);
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