class GoogleHomePage {

    get sherchInput() { return $('[class="mb2a7b"]') }
    get serchClick() { return $('[class="YSM5S"]') }
    async open() {
        await browser.url('https://cloud.google.com/?hl=es')
    }

    async serch(text) {
        await this.serchClick.waitForExist({ timeout: 2000 })
        await this.serchClick.click()
        await this.sherchInput.setValue(text)
        await browser.keys('Enter')
    }
}

module.exports = new GoogleHomePage();