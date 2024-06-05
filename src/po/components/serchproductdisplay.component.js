class SerchProductDisplay{

    get computeEngine() { return $('(//div[contains(@data-idx,"0")])[1]'); }
    get serchProductMenu() { return $('[class="wrzENe"]'); }

    async clickComputeEngine() {
        await this.serchProductMenu.waitForExist({ timeout: 10000 });
        await browser.pause(500);
        await this.computeEngine.waitForClickable({ timeout: 10000 });
        await this.computeEngine.click();
    }
}

module.exports = new SerchProductDisplay()