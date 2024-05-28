class ComputeEngine{

    get computeEngine() { return $('//div[contains(@class, "wrzENe")]//div[contains(@class, "d5NbRd-EScbFb-JIbuQc PtwYlf")]'); }

    async clickComputeEngine() {
        await this.computeEngine.waitForExist({ timeout: 10000 });
        await this.computeEngine.click();
    }
}

module.exports = new ComputeEngine()