const GoogleHomePage = require('../../po/page/cloud_google.page')
const GoogleSerchPage = require('../../po/page/cloud_google_serch.page')
const PricingCalculatorPage = require('../../po/page/cloud_google_add.page')
const EstimatedPage = require('../../po/page/cloud_google_estimate.page')
const environment = process.env.NODE_ENV || 'dev';
const { testdata } = require(`../../po/data/test.data.${environment}`);

describe('Task 3 from QA auto testing', () => {
    beforeEach(async () => {
        await GoogleHomePage.open();
    })
    afterEach(async () => {
        await browser.deleteCookies()
        await browser.reloadSession()
    })
    describe('Task 3 for google cloud test', () => {
        it('Acces to google Google Cloud Platform Pricing Calculator page and fill all the data, check the total cost and the summary of the selections', async () => {
            await GoogleHomePage.serch(testdata.serchInputWord);
            await GoogleSerchPage.openCalculatorLink();
            await PricingCalculatorPage.addToEstimate();
            await PricingCalculatorPage.computeEngineClick();
            await PricingCalculatorPage.SelectionMenue();
            await PricingCalculatorPage.numberOfInstancesOption(testdata.numberOfInstancesOption);
            await PricingCalculatorPage.softwareDropDownClick(testdata.osSoftwareOption);
            await PricingCalculatorPage.provisioningModelClick(testdata.provisioningModelOption);
            await PricingCalculatorPage.machineTypeClick(testdata.machineTypeOption);
            await PricingCalculatorPage.addGPUsButtonClick();
            await PricingCalculatorPage.gpuTypeDropdownClick(testdata.gpuModelOption);
            await PricingCalculatorPage.localSSDDropdownClick(testdata.data_value, testdata.localSSDOption);
            await PricingCalculatorPage.regionDropdownClick(testdata.regionOption);
            await PricingCalculatorPage.committedButtonSelect(testdata.committedUseOption);
            await PricingCalculatorPage.pagePricesTotal();
            await PricingCalculatorPage.shareButtonOpener();
            await PricingCalculatorPage.OpenEstimatedCost();
            await EstimatedPage.OpenEstimatedWindow();
            await EstimatedPage.verifySummaryValues();

        });
    })
})




