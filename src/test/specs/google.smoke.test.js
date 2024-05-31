const GoogleHomePage = require('../../po/page/cloud_google.page');
const GoogleSerchPage = require('../../po/page/cloud_google_serch.page');
const PricingCalculatorPage = require('../../po/page/cloud_google_add.page');
const EstimatedPage = require('../../po/page/cloud_google_estimate.page');
const environment = process.env.NODE_ENV || 'dev';
const { testdata } = require(`../../po/data/test.data.${environment}`);

describe('Smoke Test for Google Cloud Pricing Calculator', () => {
    beforeEach(async () => {
        await browser.url(testdata.smokeUrl);
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.reloadSession();
    });

    describe('Check the existence of elements on the Google Cloud Platform Pricing Calculator page', () => {
        it('Should verify all main elements exist', async () => {
            
            // Verify the existence of elements on the Pricing Calculator Page
            await expect(PricingCalculatorPage.addToEstimateButton).toBeExisting();
            await PricingCalculatorPage.addToEstimate();
            await expect(PricingCalculatorPage.computeEngine).toBeExisting();
            await PricingCalculatorPage.addToEstimate();

            await PricingCalculatorPage.computeEngineClick();

            await PricingCalculatorPage.SelectionMenue();
            await expect(PricingCalculatorPage.waitDisplayedMenu).toBeExisting();
            await expect(PricingCalculatorPage.numberOfInstances).toBeExisting();
            await expect(PricingCalculatorPage.softwareDropDown).toBeExisting();
            await expect(PricingCalculatorPage.machineType).toBeExisting();
            await expect(PricingCalculatorPage.addGPUsButton).toBeExisting();
            await PricingCalculatorPage.addGPUsButtonClick();
            await expect(PricingCalculatorPage.gpuModelDropdown).toBeExisting();
            await expect(PricingCalculatorPage.localSSDDropdown).toBeExisting();
            await expect(PricingCalculatorPage.regionDropdown).toBeExisting();
            await expect(PricingCalculatorPage.priceSideMenu).toBeExisting();
            await expect(PricingCalculatorPage.PriceTopMenu).toBeExisting();
            await expect(PricingCalculatorPage.OpenEstimatedCostButton).toBeExisting();

            // Verify the existence of elements in the Shared Window Display component
            await expect(SharedWindowDisplay.sharedWindow).toBeExisting();
            await expect(SharedWindowDisplay.TotalSharedPrice).toBeExisting();
            await expect(SharedWindowDisplay.closeSharedButton).toBeExisting();

            // Verify the existence of elements in the Estimated Page
            for (const selector of Object.values(EstimatedPage.summarySelectors)) {
                const element = await $(selector);
                await expect(element).toBeExisting();
            }

            // Verify the existence of elements in the Google Search Page
            await expect(GoogleSerchPage.calculatorLink).toBeExisting();

            // Verify the existence of elements in the Google Home Page
            await expect(GoogleHomePage.sherchInput).toBeExisting();
            await expect(GoogleHomePage.serchClick).toBeExisting();
        });
    });
});