class GoogleSerchPage {

    get calculatorLink() { return $("//a[contains(@href, 'products/calculator') and contains(@class, 'gs-title')]"); } 

    async openCalculatorLink() {
        await this.calculatorLink.waitForExist({ timeout: 10000 })
        await this.calculatorLink.click()
        await browser.pause(500)
    }
}

module.exports = new GoogleSerchPage()