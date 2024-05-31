

describe("Ensure the existence of selectors and sections of the page " , ()=>{
    beforeEach(async () =>{
        await GoogleHomePage.open();
    })

    afterEach(async () =>{
        await browser.deleteCookies();
        await browser.reloadSession();
    })

    describe ("Cheking the right url and the selectors of the home page",() => {
        it("Get the right url",()=>{
            expect(GoogleHomePage.open).toBeExisting()
            expect(GoogleHomePage.open.getUrl()).toEqual("https://cloud.google.com/?hl=es")
        })

        it("Serch selector and input field exist",()=>{
            expect(GoogleHomePage.serchInput).toBeExisting()
            expect(GoogleHomePage.serchClick).toBeExisting()
        })
    describe("making sure the serch is working",async () =>{
        it("serch for 'Google Cloud Platform Pricing Calculator'",async () =>{
            await GoogleHomePage.serch("Google Cloud Platform Pricing Calculator")
            expect(GoogleSerchPage.openCalculatorLink).toBeExisting()
        })
        it("looking for the add to estimate button",()=>{
            expect(PricingCalculatorPage.addToEstimate).toBeExisting()
            expect(PricingCalculatorPage.computeEngineClick).toBeExisting()
        })
        it("Ensure that the selection menu is displayed",()=>{
            expect(PricingCalculatorPage.SelectionMenue).toBeExisting()
        })
    describe
    })
    })

})