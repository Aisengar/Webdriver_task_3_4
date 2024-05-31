
const PricingCalculatorPage = require('../../po/page/cloud_google_add.page');
const environment = process.env.NODE_ENV || 'dev';
const { testdata } = require(`../../po/data/test.data.${environment}`);

describe('Smoke Test for Google Cloud Pricing Calculator', () => {
    beforeEach(async () => {
        await browser.url(testdata.smokeUrl);
    });

    describe('Check the existence of elements on the Google Cloud Platform Pricing Calculator page', () => {

        it('verify the existence of the # of Instance input field', async () => {
            await PricingCalculatorPage.addToEstimate();
            await PricingCalculatorPage.computeEngineClick();
            await PricingCalculatorPage.SelectionMenue();
            await expect(PricingCalculatorPage.numberOfInstances).toBeExisting();
        });

        it('verify the existence of the software dropdown', async () => {
            await PricingCalculatorPage.addToEstimate();
            await PricingCalculatorPage.computeEngineClick();
            await PricingCalculatorPage.SelectionMenue();
            await expect(PricingCalculatorPage.softwareDropDown).toBeExisting();
        });

        it('verify the existence of the machine type dropdown', async () => {
            await PricingCalculatorPage.addToEstimate();
            await PricingCalculatorPage.computeEngineClick();
            await PricingCalculatorPage.SelectionMenue();
            await expect(PricingCalculatorPage.machineType).toBeExisting();
        });

        it('verify the existence of the Add GPUs button and click on it, the GPU model and local SSD dropdown dropdowns', async () => {
            await PricingCalculatorPage.addToEstimate();
            await PricingCalculatorPage.computeEngineClick();
            await PricingCalculatorPage.SelectionMenue();
            await expect(PricingCalculatorPage.addGPUsButton).toBeExisting();
            await PricingCalculatorPage.addGPUsButtonClick();
            await expect(PricingCalculatorPage.gpuModelDropdown).toBeExisting();
            await expect(PricingCalculatorPage.localSSDDropdown).toBeExisting();
        });

        it('verify the existence of the region dropdown', async () => {
            await PricingCalculatorPage.addToEstimate();
            await PricingCalculatorPage.computeEngineClick();
            await PricingCalculatorPage.SelectionMenue();
            await expect(PricingCalculatorPage.regionDropdown).toBeExisting();
        });

        it('verify the existence of the price side menu', async () => {
            await PricingCalculatorPage.addToEstimate();
            await PricingCalculatorPage.computeEngineClick();
            await PricingCalculatorPage.SelectionMenue();
            await expect(PricingCalculatorPage.priceSideMenu).toBeExisting();
            await expect(PricingCalculatorPage.PriceTopMenu).toBeExisting();
        });
    });    
});