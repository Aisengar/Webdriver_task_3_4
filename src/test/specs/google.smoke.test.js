
const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./.env.${env}` });
const { testdata } = require(`../../po/data/test.data.${env}`);
const PricingCalculatorPage = require('../../po/page/cloud_google_add.page');


describe('Smoke Test for Google Cloud Pricing Calculator', () => {
    beforeEach(async () => {
        await browser.url(testdata.urls.smokeUrl);
        await PricingCalculatorPage.addToEstimate();
        await PricingCalculatorPage.computeEngineClick();
        await PricingCalculatorPage.SelectionMenue();
    });

    describe('Check the existence of elements on the Google Cloud Platform Pricing Calculator page', () => {

        it('verify the existence of the # of Instance input field', async () => {
            await expect(PricingCalculatorPage.numberOfInstances).toBeExisting();
        });

        it('verify the existence of the software dropdown', async () => {
            await expect(PricingCalculatorPage.softwareDropDown).toBeExisting();
        });

        it('verify the existence of the machine type dropdown', async () => {
            await expect(PricingCalculatorPage.machineType).toBeExisting();
        });

        it('verify the existence of the Add GPUs button and click on it, the GPU model and local SSD dropdown dropdowns', async () => {
            await expect(PricingCalculatorPage.addGPUsButton).toBeExisting();
            await PricingCalculatorPage.addGPUsButtonClick();
            await expect(PricingCalculatorPage.gpuModelDropdown).toBeExisting();
            await expect(PricingCalculatorPage.localSSDDropdown).toBeExisting();
        });

        it('verify the existence of the region dropdown', async () => {
            await expect(PricingCalculatorPage.regionDropdown).toBeExisting();
        });

        it('verify the existence of the price side menu', async () => {
            await expect(PricingCalculatorPage.priceSideMenu).toBeExisting();
            await expect(PricingCalculatorPage.PriceTopMenu).toBeExisting();
        });
    });    
});