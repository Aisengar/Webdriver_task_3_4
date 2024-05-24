
describe('Task 3 and 4 for google cloud', () => {
    beforeEach(async () => {
        await browser.url('https://cloud.google.com/?hl=es')
        await browser.throttleCPU(2)
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
   
            await browser.pause(8000);
        });
/*
        it("test the selection options for the dropdawn",async()=>{
                        // click to open the localSSD Dropdawn
            const localSSDDropdownOpener = await $('(//div[contains(@data-field-input-type,"2")])[4]');
            await localSSDDropdownOpener.click();
            
            // Ensure the dropdown is fully open
            await browser.pause(1000); // Add a small pause to ensure the dropdown is fully open
            
            // Check if the dropdown option is visible and clickable
            const SSDOption = await $('//li[@data-value="2" and contains(.//span[@jsname="K4r5Ff"], "2x375 GB")]');
            await SSDOption.scrollIntoView(); // Scroll the element into view if necessary
            await SSDOption.waitForClickable({ timeout: 10000 }); // Extend the timeout for ensuring it's clickable
            await SSDOption.click();

        await browser.pause(8000);
            
            await browser.pause(8000)

        })
        */
    })
})


