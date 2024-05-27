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
            await browser.deleteCookies();
            const googleSearchClick = await $('[class="YSM5S"]');
            await googleSearchClick.click();
    
            // Placing the input in the search field and pressing enter
            const googleSearchInput = await $('[class="mb2a7b"]');
            await googleSearchInput.setValue('Google Cloud Platform Pricing Calculator');
            await browser.keys('Enter');
    
            // Find an element on the list that has the text "Google Cloud Platform Pricing Calculator"
            const calculatorLink = await browser.$("//a[contains(@href, 'products/calculator') and contains(@class, 'gs-title')]");
            await calculatorLink.click();
    
            // Click on the "Add to estimate" button
            const addToEstimate = await $('[class="AeBiU-LgbsSe AeBiU-LgbsSe-OWXEXe-Bz112c-M1Soyc AeBiU-LgbsSe-OWXEXe-dgl2Hf VVEJ3d"]');
            await addToEstimate.click();
    
            // Click on the "Compute engine" section button
            const computeEngine = await $('//div[contains(@class, "wrzENe")]//div[contains(@class, "d5NbRd-EScbFb-JIbuQc PtwYlf")]');
            await computeEngine.waitForClickable({ timeout: 2000 });
            await computeEngine.click();
    
            // Add the number of instances to 4
            const waitDisplayedMenu = await $('[class="vHartc"]');
            await waitDisplayedMenu.waitForDisplayed({ timeout: 2000 });
    
            const numberOfInstances = await $('[id="c11"]');
            await numberOfInstances.setValue(4);
    
            // Checking that operating system is free
            const dropdownOpener = await $('//div[contains(@data-field-input-type, "2")]');
            await dropdownOpener.click();
    
            const optionElement = await $(`//li[contains(@data-708c49e2-dcf0-4d62-b457-88577bfe3081, "Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)")]`);
            await optionElement.click();
    
            // Click on the "regular" radio button
            const regularLabel = await $('//label[text()="Regular"]');
            await regularLabel.click();
    
            // Click on the machine type and select n1-standard-8
            const machineType = await $('(//div[contains(@class,"O1htCb-H9tDt PPUDSe t8xIwc")])[4]//div[contains(@class, "VfPpkd-TkwUic")]');
            await machineType.click();
            const machineTypeOption = await $('//li[contains(@data-value, "n1-standard-8")]');
            await machineTypeOption.click();
    
            // Click on the "Add GPUs" button
            const addGPUsButton = await $('(//div[@class="AsBIyb"]//div[@jscontroller="hAACQ"])[3]//button[@jsname="DMn7nd"]');
            await addGPUsButton.click();
            await browser.pause(2000)

            // Interact with the GPU model dropdown
            const gpuModelDropdown = await $('(//div[contains(@jsaction,"bITzcd:KRVFmb;iFFCZc:Y0y4c;Rld2oe:gDkf4c;EDR5Je:QdOKJc;FzgWvd:RFVo1b")])[8]');
            await gpuModelDropdown.waitForClickable({ timeout: 1000 })
            await gpuModelDropdown.click();
            const gpuModelTypeOption = await $('//li[contains(@data-value, "nvidia-tesla-p100")]');
            await gpuModelTypeOption.click();
    
            // Test the selection options for the dropdown
            const localSSDDropdownOpener = await $('(//div[contains(@data-field-input-type,"2")])[4]');
            await localSSDDropdownOpener.click();
            
            // Ensure the dropdown is fully open
            await browser.pause(1000);

            // Check if the dropdown option is visible and clickable
            const SSDOption = await $('//li[@data-value="2" and contains(.//span[@jsname="K4r5Ff"], "2x375 GB")]');
            await SSDOption.scrollIntoView(); // Scroll the element into view if necessary
            await SSDOption.waitForClickable({ timeout: 10000 });
            await SSDOption.click();

            
            //Open the region dropdown options by clicking on the dropdown opener
            const regionDropdownOpener = await $('[data-field-type="115"]');
            await regionDropdownOpener.click();

            // Add a small pause to ensure the dropdown options are fully loaded
            await browser.pause(1000);

            // Select the "us-west1" region
            //const regionOption = await $('//li[@data-value = "europe-west3"]');
            const regionOption = await $('//li[@data-value = "us-west1"]');
            await regionOption.waitForClickable({ timeout: 10000 });
            await regionOption.click();


            //Click on the Committed use "1 Year" button
            const commitedUsedbutton = await $('(//div[contains(@class, "e2WL2b") and .//input[@name="116"]])[2]');
            await commitedUsedbutton.waitForClickable({ timeout: 10000 });
            await commitedUsedbutton.click();

            await browser.pause(1000);

            //cheking the praice is caclulated in the correct section
            const pricerightmenu = await $('//div[contains(@class,"fbc2ib")]//label').getText();
            const pricepriceTopMenuText = await await $('//div[contains(@class,"egBpsb")]//span').getText();
            //console.log(pricerightmenu);
            //console.log(pricepriceTopMenuText);

            // press the share button and check the total price
            const sharedisplayed = await $('//div[contains(@jsaction, "JIbuQc:qsxFwf")]//button[contains(@aria-label, "Open Share Estimate dialog")]');
            await sharedisplayed.click();

            //get the total from the share menue
            await $('[class="ZgevAb"]').waitForDisplayed({ timeout: 2000 });
            totalsharedprice = await $('[class="ZgevAb"]').getText();
            console.log(totalsharedprice);

            //close the share button
            const closeSharedButton = await $('//div[contains(@class, "bwApif-P5QLlc")]//button');
            await closeSharedButton.click();

            //open the Total estimated cost section
            const totalEstimatedCost = await $('[aria-label="Open detailed view"]');
            await totalEstimatedCost.click();

            const handles = await browser.getWindowHandles()
            await browser.switchToWindow(handles[1])

            //validating the infromation provided

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
/*
        it("test the selection options for the dropdawn",async()=>{

            // press the share button and check the total price
            const sharedisplayed = await $('//div[contains(@jsaction, "JIbuQc:qsxFwf")]//button[contains(@aria-label, "Open Share Estimate dialog")]');
            await sharedisplayed.click();

            //get the total from the share menue
            await $('[class="ZgevAb"]').waitForDisplayed({ timeout: 2000 });
            totalsharedprice = await $('[class="ZgevAb"]').getText();
            console.log(totalsharedprice);

            //close the share button
            const closeSharedButton = await $('//div[contains(@class, "bwApif-P5QLlc")]//button');
            await closeSharedButton.click();

            await browser.pause(8000);
            

        })*/
    })
})


