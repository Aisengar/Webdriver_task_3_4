const GoogleHomePage = require('../../po/page/cloud_google.page')
const GoogleSerchPage = require('../../po/page/cloud_google_serch.page')
const PricingCalculatorPage = require('../../po/page/cloud_google_estimate.page')

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
            await PricingCalculatorPage.softwareOptionClick();

            // Click on the "regular" radio button
            await PricingCalculatorPage.regularRadioClick();

            // Click on the machine type and select n1-standard-8
            await PricingCalculatorPage.machineTypeClick();
            await PricingCalculatorPage.machineTypeOptionClick();

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
            const sharedisplayed = await $('//div[contains(@jsaction, "JIbuQc:qsxFwf")]//button[contains(@aria-label, "Open Share Estimate dialog")]');
            await sharedisplayed.waitForExist();
            await sharedisplayed.click();

            // Get the total from the share menu
            await $('[class="ZgevAb"]').waitForDisplayed({ timeout: 2000 });
            const totalsharedprice = await $('[class="ZgevAb"]').getText();
            console.log(totalsharedprice);

            // Close the share button
            const closeSharedButton = await $('//div[contains(@class, "bwApif-P5QLlc")]//button');
            await closeSharedButton.waitForExist();
            await closeSharedButton.click();

            // Open the Total estimated cost section
            const totalEstimatedCost = await $('[aria-label="Open detailed view"]');
            await totalEstimatedCost.waitForExist();
            await totalEstimatedCost.click();

            // Switch to the new window
            const handles = await browser.getWindowHandles();
            await browser.switchToWindow(handles[1]);

            await browser.pause(1000);

            const summarySelectors = {
                serviceType:'//span[text()="Service type"]/following-sibling::span',
                instanceTime:'//span[text()="Instance-time"]/following-sibling::span',
                machineType:'//span[text()="Machine type"]/following-sibling::span',
                gpuModel:'//span[text()="GPU Model"]/following-sibling::span',
                numberOfGPUs:'//span[text()="Number of GPUs"]/following-sibling::span',
                localSSD:'//span[text()="Local SSD"]/following-sibling::span',
                region:'//span[text()="Region"]/following-sibling::span',
                committedUse:'//span[text()="Committed use discount options"]/following-sibling::span',
                numberOfInstances:'//span[text()="Number of Instances"]/following-sibling::span',
                osSoftware:'//span[text()="Operating System / Software"]/following-sibling::span',
                provisioningModel:'//span[text()="Provisioning Model"]/following-sibling::span'
            };
            console.log(summarySelectors)
    
            const expectedValues = {
                
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
            
            for(const [key, selector] of Object.entries(summarySelectors)){
                const element = await $(selector);
                await expect(element).toHaveText(expectedValues[key]);
            }
            
        });
    })
})


