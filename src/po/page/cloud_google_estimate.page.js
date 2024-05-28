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
            await element.waitForExist({ timeout: 5000 });
            const text = await element.getText();

            // Special handling for total cost comparison
            if (key === 'totalCost') {
                const totalCostValue = text.match(/USD (\d+\.\d+)/)[1];
                if (totalCostValue !== testdata.totalcost) {
                    throw new Error(`Expected total cost to be "${testdata.totalcost}" but found "${totalCostValue}"`);
                }
            } else {
                if (text !== testdata[key]) {
                    throw new Error(`Expected ${key} to be "${testdata[key]}" but found "${text}"`);
                }
            }
        }
    }
}


module.exports = new EstimatedPage();