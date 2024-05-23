
describe('Task 3 and 4 for google cloud', () => {
    beforeEach(async () => {
        await browser.url('https://cloud.google.com/?hl=es')
    })
    afterEach(async () => {
        await browser.reloadSession()
    })

    describe('Task 3 and 4 for google cloud', () => {
        it('serch for Google Cloud Platform Pricing Calculator ', async () => {
            //Opening the Google search aplication on the web
            const googleSerchClick = await $('[class="YSM5S"]');
            await googleSerchClick.click();
            // placing the input in the search field and pressing enter
            const googleSerchInput = await $('[class="mb2a7b"]');
            await googleSerchInput.setValue('Google Cloud Platform Pricing Calculator');
            await browser.keys('Enter');
            
            //find an element on the list that has the text "Google Cloud Platform Pricing Calculator"
            const calculatorLink = await browser.$("//a[contains(@href, 'products/calculator') and contains(@class, 'gs-title')]");
            await calculatorLink.click();

            // click on the "Add to estimate" button
            const addToEstimate = await $('[class="AeBiU-LgbsSe AeBiU-LgbsSe-OWXEXe-Bz112c-M1Soyc AeBiU-LgbsSe-OWXEXe-dgl2Hf VVEJ3d"]')
            await addToEstimate.click()

            // click om the "Compute engine" section button
            const computeEngine = await $('//div[contains(@class, "wrzENe")]//div[contains(@class, "d5NbRd-EScbFb-JIbuQc PtwYlf")]')
            await computeEngine.click()

            // add the number of instances to 4
            const waitdisplayedMenu = await $('[class="vHartc"]')
            await waitdisplayedMenu.waitForDisplayed(1000)

            const numberOfInstances = await $('[id="c11"]')
            await numberOfInstances.setValue(4)
            

             //cheking that operating sistem is free
             const dropdownOpener = await $('//div[contains(@data-field-input-type, "2")]');
             await dropdownOpener.click();
             await browser.pause(5000)

        })
    })
})


