const GoogleHomePage = require('../../po/page/cloud_google.page')
const GoogleSerchPage = require('../../po/page/cloud_google_serch.page')
const PricingCalculatorPage = require('../../po/page/cloud_google_add.page')
const EstimatedPage = require('../../po/page/cloud_google_estimate.page')

describe('Task 3 and 4 for google cloud', () => {
    beforeEach(async () => {
        await GoogleHomePage.open();
    })
    afterEach(async () => {
        await browser.deleteCookies()
        await browser.reloadSession()
    })
    describe('Task 3 and 4 for google cloud', () => {
        it('Task 3 for google cloud page', async () => {
            // Opening the Google search application on the home page
            await GoogleHomePage.serch('Google Cloud Platform Pricing Calculator');
            // Find an element on the list that has the text "Google Cloud Platform Pricing Calculator"
            await GoogleSerchPage.openCalculatorLink();
            // Click on the "Add to estimate" button
            await PricingCalculatorPage.addToEstimate();
            // Click on the "Compute engine" section button
            await PricingCalculatorPage.computeEngineClick();
            // Wait for the menu to be displayed
            await PricingCalculatorPage.SelectionMenue();
            //add the number of instances to 4
            await PricingCalculatorPage.numberOfInstancesOption(4);
            // Checking that the operating system is free
            await PricingCalculatorPage.softwareDropDownClick();
            // Click on the "regular" radio button
            await PricingCalculatorPage.regularRadioClick();
            // Click on the machine type and select n1-standard-8
            await PricingCalculatorPage.machineTypeClick();
            // Click on the "Add GPUs" button
            await PricingCalculatorPage.addGPUsButtonClick();
            // Interact with the GPU model dropdown
            await PricingCalculatorPage.gpuTypeDropdownClick();
            //the selection options for the dropdown and select the "2x375" option
            await PricingCalculatorPage.localSSDDropdownClick();
            // Open the region dropdown options by clicking on the dropdown opener
            await PricingCalculatorPage.regionDropdownClick();
            // Click on the Committed use "1 Year" button
            await PricingCalculatorPage.committedButtonSelect();
            // Check if the price is calculated in the correct section
            await PricingCalculatorPage.pagePricesTotal();
            // Press the share button and check the total price
            await PricingCalculatorPage.shareButtonOpener();
            console.log(PricingCalculatorPage.shareButtonOpener()+"buscame aqui");
            // Open the Total estimated cost section
            await PricingCalculatorPage.OpenEstimatedCost();
            // Switch to the new window
            await EstimatedPage.OpenEstimatedWindow();
            // Verify the summary values
            await EstimatedPage.verifySummaryValues();

        });
    })
})


