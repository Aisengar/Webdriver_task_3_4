class SerchProductDisplay{

    get computeEngine() { return $('(//div[contains(@data-idx,"0")])[1]'); }

    async clickComputeEngine() {
        await this.computeEngine.waitForExist({ timeout: 10000 });
        await this.computeEngine.click();
    }
}

module.exports = new SerchProductDisplay()