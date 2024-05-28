class EstimatedPage {
    constructor(testdata) {
        this.summarySelectors = {
            serviceType: '//span[text()="Service type"]/following-sibling::span',
            instanceTime: '//span[text()="Instance-time"]/following-sibling::span',
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

        this.testdata = {
            serviceType: 'Instances',
            instanceTime: '2920 Hours',
            machineType: 'n1-standard-8, vCPUs: 8, RAM: 30 GB',
            gpuModel: 'NVIDIA TESLA P100',
            numberOfGPUs: '1',
            localSSD: '2x375 GB',
            region: 'Oregon (us-west1)',
            committedUse: '1 year',
            numberOfInstances: '4',
            osSoftware: 'Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)',
            provisioningModel: 'Regular'
        };
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