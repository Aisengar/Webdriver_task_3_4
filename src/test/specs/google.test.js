describe('Task 3 and 4 for google cloud', () => {
    beforeEach(async () => {
        await browser.url('https://cloud.google.com/?hl=es')
        
    })
    afterEach(async () => {
        await browser.deleteCookies()
        await browser.reloadSession()
    })

    describe('Task 3 and 4 for google cloud', () => {
        
        it('test the selection options for the dropdown', async () => {
            // Opening the Google search application on the web
            const googleSearchClick = await $('[class="YSM5S"]');
            await googleSearchClick.waitForExist();
            await googleSearchClick.click();

            // Placing the input in the search field and pressing enter
            const googleSearchInput = await $('[class="mb2a7b"]');
            await googleSearchInput.waitForExist();
            await googleSearchInput.setValue('Google Cloud Platform Pricing Calculator');
            await browser.keys('Enter');

            // Find an element on the list that has the text "Google Cloud Platform Pricing Calculator"
            const calculatorLink = await browser.$("//a[contains(@href, 'products/calculator') and contains(@class, 'gs-title')]");
            await calculatorLink.waitForExist();
            await calculatorLink.click();

            // Click on the "Add to estimate" button 
            const addToEstimate = await $('[class="AeBiU-LgbsSe AeBiU-LgbsSe-OWXEXe-Bz112c-M1Soyc AeBiU-LgbsSe-OWXEXe-dgl2Hf VVEJ3d"]');
            await addToEstimate.waitForExist();
            await addToEstimate.click();

            // Click on the "Compute engine" section button
            const computeEngine = await $('//div[contains(@class, "wrzENe")]//div[contains(@class, "d5NbRd-EScbFb-JIbuQc PtwYlf")]');
            await computeEngine.waitForClickable({ timeout: 2000 });
            await computeEngine.click();

            // Wait for the menu to be displayed and add the number of instances to 4
            const waitDisplayedMenu = await $('[class="vHartc"]');
            await waitDisplayedMenu.waitForDisplayed({ timeout: 2000 });
            const numberOfInstances = await $('[id="c11"]');
            await numberOfInstances.setValue(4);

            // Checking that the operating system is free
            const dropdownOpener = await $('//div[contains(@data-field-input-type, "2")]');
            await dropdownOpener.waitForExist();
            await dropdownOpener.click();

            const optionElement = await $(`//li[contains(@data-708c49e2-dcf0-4d62-b457-88577bfe3081, "Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)")]`);
            await optionElement.waitForExist();
            await optionElement.click();

            // Click on the "regular" radio button
            const regularLabel = await $('//label[text()="Regular"]');
            await regularLabel.waitForExist();
            await regularLabel.click();

            // Click on the machine type and select n1-standard-8
            const machineType = await $('(//div[contains(@class,"O1htCb-H9tDt PPUDSe t8xIwc")])[4]//div[contains(@class, "VfPpkd-TkwUic")]');
            await machineType.waitForExist();
            await machineType.click();
            const machineTypeOption = await $('//li[contains(@data-value, "n1-standard-8")]');
            await machineTypeOption.waitForExist();
            await machineTypeOption.click();

            // Click on the "Add GPUs" button
            const addGPUsButton = await $('(//div[@class="AsBIyb"]//div[@jscontroller="hAACQ"])[3]//button[@jsname="DMn7nd"]');
            await addGPUsButton.waitForExist();
            await addGPUsButton.click();
            await browser.pause(2000);

            // Interact with the GPU model dropdown
            const gpuModelDropdown = await $('(//div[contains(@jsaction,"bITzcd:KRVFmb;iFFCZc:Y0y4c;Rld2oe:gDkf4c;EDR5Je:QdOKJc;FzgWvd:RFVo1b")])[8]');
            await gpuModelDropdown.waitForClickable({ timeout: 1000 });
            await gpuModelDropdown.click();
            const gpuModelTypeOption = await $('//li[contains(@data-value, "nvidia-tesla-p100")]');
            await gpuModelTypeOption.waitForExist();
            await gpuModelTypeOption.click();

            // Test the selection options for the dropdown
            const localSSDDropdownOpener = await $('(//div[contains(@data-field-input-type,"2")])[4]');
            await localSSDDropdownOpener.waitForExist();
            await localSSDDropdownOpener.click();

            await browser.pause(1000);

            // Check if the dropdown option is visible and clickable
            const SSDOption = await $('//li[@data-value="2" and contains(.//span[@jsname="K4r5Ff"], "2x375 GB")]');
            await SSDOption.scrollIntoView();
            await SSDOption.waitForClickable({ timeout: 10000 });
            await SSDOption.click();

            // Open the region dropdown options by clicking on the dropdown opener
            const regionDropdownOpener = await $('[data-field-type="115"]');
            await regionDropdownOpener.waitForExist();
            await regionDropdownOpener.click();

            await browser.pause(1000);

            // Select the "us-west1" region
            const regionOption = await $('//li[@data-value = "us-west1"]');
            await regionOption.waitForClickable({ timeout: 10000 });
            await regionOption.click();

            // Click on the Committed use "1 Year" button
            const commitedUsedbutton = await $('(//div[contains(@class, "e2WL2b") and .//input[@name="116"]])[2]');
            await commitedUsedbutton.waitForClickable({ timeout: 10000 });
            await commitedUsedbutton.click();

            await browser.pause(1000);

            // Check if the price is calculated in the correct section
            const pricerightmenu = await $('//div[contains(@class,"fbc2ib")]//label').getText();
            const priceTopMenuText = await $('//div[contains(@class,"egBpsb")]//span').getText();

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


