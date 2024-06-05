const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev';
dotenv.config({path: `./.env.${env}`});
const { testdata } = require(`../../po/data/test.data.${env}`);

class EstimatedPage {
    constructor() {
        this.summarySelectors = {
            machineType: '//span[text()="Machine type"]/following-sibling::span',
            gpuModel: '//span[text()="GPU Model"]/following-sibling::span',
            localSSD: '//span[text()="Local SSD"]/following-sibling::span',
            region: '//span[text()="Region"]/following-sibling::span',
            committedUse: '//span[text()="Committed use discount options"]/following-sibling::span',
            numberOfInstances: '//span[text()="Number of Instances"]/following-sibling::span',
            osSoftware: '//span[text()="Operating System / Software"]/following-sibling::span',
            provisioningModel: '//span[text()="Provisioning Model"]/following-sibling::span',
            totalcost: '//div[contains(@class, "fbc2ib")]//h6'
        };

        
    }

    async OpenEstimatedWindow() { 
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await browser.pause(1000);
    }
    async verifyElement(key, selector) {
        const element = await $(selector);
        await element.waitForExist({ timeout: 5000 });
        const text = await element.getText();
        expect(text).toEqual(testdata.summary[key]);
    }

    async verifySummaryValues() {
        for (const [key, selector] of Object.entries(this.summarySelectors)) {
            await this.verifyElement(key, selector);
        }
    }
}

module.exports = new EstimatedPage();