const ComputeEngine = require('../../po/components/computeEnging.component')
class PricingCalculatorPage {

    get addToEstimateButton() { return $('[class="AeBiU-LgbsSe AeBiU-LgbsSe-OWXEXe-Bz112c-M1Soyc AeBiU-LgbsSe-OWXEXe-dgl2Hf VVEJ3d"]'); }
    get waitDisplayedMenu() { return $('[class="vHartc"]'); }
    get numberOfInstances() { return $('[id="c11"]'); }
    get softwareDropDown() { return $('//div[contains(@data-field-input-type, "2")]'); }
    get softwareOption() { return $('//li[contains(@data-708c49e2-dcf0-4d62-b457-88577bfe3081, "Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)")]'); }
    get regularRadio() { return $('//label[text()="Regular"]'); }
    get machineType() { return $('(//div[contains(@class,"O1htCb-H9tDt PPUDSe t8xIwc")])[4]//div[contains(@class, "VfPpkd-TkwUic")]'); }
    get machineTypeOption() { return $('//li[contains(@data-value, "n1-standard-8")]'); }
    get addGPUsButton() { return $('(//div[@class="AsBIyb"]//div[@jscontroller="hAACQ"])[3]//button[@jsname="DMn7nd"]'); }
    get gpuModelDropdown() { return $('(//div[contains(@jsaction,"bITzcd:KRVFmb;iFFCZc:Y0y4c;Rld2oe:gDkf4c;EDR5Je:QdOKJc;FzgWvd:RFVo1b")])[8]'); }
    get gpuModelTypeOption() { return $('//li[contains(@data-value, "nvidia-tesla-p100")]'); }
    get localSSDDropdown() { return $('(//div[contains(@data-field-input-type,"2")])[4]'); }
    get localSSDTypeOption() { return $('//li[@data-value="2" and contains(.//span[@jsname="K4r5Ff"], "2x375 GB")]'); }
    get regionDropdown() { return $('[data-field-type="115"]'); }
    get regionTypeOption() { return $('//li[@data-value = "us-west1"]'); }
    get committedUseButton() { return $('(//div[contains(@class, "e2WL2b") and .//input[@name="116"]])[2]'); }
    get priceSideMenu() { return $('//div[contains(@class,"fbc2ib")]//label'); }
    get PriceTopMenu() { return $('//div[contains(@class,"egBpsb")]//span'); }
    

    async addToEstimate() {
        await this.addToEstimateButton.waitForExist( { timeout: 2000 } );
        await this.addToEstimateButton.click()        
    }
    async computeEngineClick() {
        await ComputeEngine.clickComputeEngine()
    }
    async SelectionMenue() {
        await this.waitDisplayedMenu.waitForExist({ timeout: 2000 })
    }
    async numberOfInstancesOption(number) {
        await this.numberOfInstances.setValue(number)
    }
    async softwareDropDownClick() {
        await this.softwareDropDown.waitForExist({ timeout: 2000 })
        await this.softwareDropDown.click()
    }
    async softwareOptionClick() {
        await this.softwareOption.waitForExist({ timeout: 2000 })
        await this.softwareOption.click()
    }
    async regularRadioClick() {
        await this.regularRadio.waitForExist({ timeout: 2000 })
        await this.regularRadio.click()
    }
    async machineTypeClick() {
        await this.machineType.waitForExist({ timeout: 2000 })
        await this.machineType.click()
    }
    async machineTypeOptionClick() {
        await this.machineTypeOption.waitForExist({ timeout: 2000 })
        await this.machineTypeOption.click()
    }
    async addGPUsButtonClick() {
        await this.addGPUsButton.waitForExist({ timeout: 2000 })
        await this.addGPUsButton.click()
        await browser.pause(1500)
    }
    async gpuTypeDropdownClick() {
        await this.gpuModelDropdown.waitForExist({ timeout: 2000 })
        await this.gpuModelDropdown.click()
        await this.gpuModelTypeOption.waitForExist({ timeout: 2000 })
        await this.gpuModelTypeOption.click()
    }
    async localSSDDropdownClick() {
        await this.localSSDDropdown.waitForExist({ timeout: 2000 })
        await this.localSSDDropdown.click()
        await browser.pause(1000)
        await this.localSSDTypeOption.waitForExist({ timeout: 2000 })
        await this.localSSDTypeOption.click()
    }
    async regionDropdownClick() {
        await this.regionDropdown.waitForExist({ timeout: 2000 })
        await this.regionDropdown.click()
        await browser.pause(1000);
        await this.regionTypeOption.waitForExist({ timeout: 2000 })
        await this.regionTypeOption.click()
    }
    async committedButtonSelect() {
        await this.committedUseButton.waitForExist({ timeout: 2000 })
        await this.committedUseButton.click()
        
    }
    async pagePricesTotal() {
        await this.priceSideMenu.getText();
        await this.PriceTopMenu.getText();
        if(this.PriceTopMenu!==this.priceSideMenu){
            console.log("Prices are not equal")
        }
    }
    

}

module.exports = new PricingCalculatorPage()