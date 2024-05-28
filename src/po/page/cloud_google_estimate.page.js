const {testdata} = require('../../po/data/test.data.js');

class EstimatedPage {
    constructor() {
        this.summarySelectors = {
            machineType: '//span[text()="Machine type"]/following-sibling::span',
            gpuModel: '//span[text()="GPU Model"]/following-sibling::span',
            numberOfGPUs: '//span[text()="Number of GPUs"]/following-sibling::span',
            localSSD: '//span[text()="Local SSD"]/following-sibling::span',
            region: '//span[text()="Region"]/following-sibling::span',
            committedUse: '//span[text()="Committed use discount options"]/following-sibling::span',
            numberOfInstances: '//span[text()="Number of Instances"]/following-sibling::span',
            osSoftware: '//span[text()="Operating System / Software"]/following-sibling::span',
            provisioningModel: '//span[text()="Provisioning Model"]/following-sibling::span'
        };

        this.testdata = testdata;
    }

    async OpenEstimatedWindow() { 
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await browser.pause(1000);
    }

    async verifySummaryValues() {
        for (const [key, selector] of Object.entries(this.summarySelectors)) {
            const element = await $(selector);
            await expect(element).toHaveText(this.testdata[key]);
        }
    }
}

module.exports = new EstimatedPage();