const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `./.env.${env}` });
const { testdata } = require(`../../po/data/test.data.${env}`);
const GoogleHomePage = require('../../po/page/cloud_google.page');
const GoogleSerchPage = require('../../po/page/cloud_google_serch.page');
const PricingCalculatorPage = require('../../po/page/cloud_google_add.page');
const EstimatedPage = require('../../po/page/cloud_google_estimate.page');


describe('Task 3 from QA auto testing', () => {
    beforeEach(async () => {
        await GoogleHomePage.open();
    })
    afterEach(async () => {
        await browser.deleteCookies()
        await browser.reloadSession()
    })
    describe('Task 3 for google cloud test', () => {
        it('Acces to google Google Cloud Platform Pricing Calculator and serch for the google cloud calculator link', async () => {
            await GoogleHomePage.serch(testdata.searchInputs.googleInputWord);
        }),
        it('Acces the Google Cloud Link on the serch page',async () =>{
            await GoogleSerchPage.openCalculatorLink();
        }),
        it('Oppen the Products Menu for the Google Cloud Selecction',async()=>{
            await PricingCalculatorPage.addToEstimate();
        }),
        it('',async()=>{

        }),
        it('',async() =>{
            await PricingCalculatorPage.computeEngineClick();
            await PricingCalculatorPage.SelectionMenue();
            await PricingCalculatorPage.numberOfInstancesOption(testdata.options.numberOfInstancesOption);
            await PricingCalculatorPage.softwareDropDownClick(testdata.options.osSoftwareOption);
            await PricingCalculatorPage.provisioningModelClick(testdata.options.provisioningModelOption);
            await PricingCalculatorPage.machineTypeClick(testdata.options.machineTypeOption);
            await PricingCalculatorPage.addGPUsButtonClick();
            await PricingCalculatorPage.gpuTypeDropdownClick(testdata.options.gpuModelOption);
            await PricingCalculatorPage.localSSDDropdownClick(testdata.options.data_value, testdata.options.localSSDOption);
            await PricingCalculatorPage.regionDropdownClick(testdata.options.regionOption);
            await PricingCalculatorPage.committedButtonSelect(testdata.options.committedUseOption);
            await PricingCalculatorPage.pagePricesTotal();
            await PricingCalculatorPage.shareButtonOpener();
            await PricingCalculatorPage.OpenEstimatedCost();
            await EstimatedPage.OpenEstimatedWindow();
            await EstimatedPage.verifySummaryValues();

        });
    })
})




