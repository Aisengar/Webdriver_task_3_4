const ComputeEngine = require('../../po/components/serchproductdisplay.component')
const SharedWindowDisplay = require('../../po/components/shareddisplay.component')
const environment = process.env.NODE_ENV || 'dev';
const { testdata } = require(`../data/test.data.${environment}`);
class PricingCalculatorPage {

    get addToEstimateButton() { return $(`[class="AeBiU-LgbsSe AeBiU-LgbsSe-OWXEXe-Bz112c-M1Soyc AeBiU-LgbsSe-OWXEXe-dgl2Hf VVEJ3d"]`); }
    get waitDisplayedMenu() { return $(`[class="vHartc"]`); }
    get numberOfInstances() { return $(`[id="c11"]`); }
    get softwareDropDown() { return $(`//div[contains(@data-field-input-type, "2")]`); }
    get machineType() { return $(`(//div[contains(@class,"O1htCb-H9tDt PPUDSe t8xIwc")])[4]//div[contains(@class, "VfPpkd-TkwUic")]`); }
    get addGPUsButton() { return $(`(//div[@class="AsBIyb"]//div[@jscontroller="hAACQ"])[3]//button[@jsname="DMn7nd"]`); }
    get gpuModelDropdown() { return $(`(//div[contains(@jsaction,"bITzcd:KRVFmb;iFFCZc:Y0y4c;Rld2oe:gDkf4c;EDR5Je:QdOKJc;FzgWvd:RFVo1b")])[8]`); }
    get localSSDDropdown() { return $(`(//div[contains(@data-field-input-type,"2")])[4]`); }
    get regionDropdown() { return $(`[data-field-type="115"]`); }
    get priceSideMenu() { return $(`//div[contains(@class,"fbc2ib")]//label`); }
    get PriceTopMenu() { return $(`//div[contains(@class,"egBpsb")]//span`); }
    get OpenEstimatedCostButton() { return $(`[aria-label="Open detailed view"]`); }

    async addToEstimate() {
        await this.addToEstimateButton.waitForExist( { timeout: 2000 } );
        await this.addToEstimateButton.click()        
    }
    async computeEngineClick() {
        await ComputeEngine.clickComputeEngine()
    }
    async SelectionMenue() {
        await this.waitDisplayedMenu.waitForExist({ timeout: 10000 })
    }
    async numberOfInstancesOption(number) {
        await this.numberOfInstances.waitForExist({ timeout: 2000 })
        await this.numberOfInstances.setValue(number)
    }
    async softwareDropDownClick(osSoftwareOption) {
        await this.softwareDropDown.waitForExist({ timeout: 2000 })
        await this.softwareDropDown.click()
        await browser.pause(500)
        const softwareOption = $(`//li[contains(@data-value,"${osSoftwareOption}")]`);
        await softwareOption.waitForExist({ timeout: 2000 })
        await softwareOption.click()
    }
    async provisioningModelClick(provisioningModelOption) {
        const provisioningModel = $(`//label[text()="${provisioningModelOption}"]`);
        await provisioningModel.waitForExist({ timeout: 2000 })
        await provisioningModel.click()
    }
    async machineTypeClick(machineTypeOption) {
        await this.machineType.waitForExist({ timeout: 2000 })
        await this.machineType.click()
        await browser.pause(500)
        const machineTypeModel = $(`//li[contains(@data-value, "${machineTypeOption}")]`);
        await machineTypeModel.waitForExist({ timeout: 2000 })
        await machineTypeModel.click()
    }

    async addGPUsButtonClick() {
        await this.addGPUsButton.waitForExist({ timeout: 2000 })
        await this.addGPUsButton.click()
        await browser.pause(1500)
    }
    async gpuTypeDropdownClick(gpuModelTypeOption) {
        await this.gpuModelDropdown.waitForExist({ timeout: 2000 })
        await this.gpuModelDropdown.click()
        await browser.pause(500)
        const gpuModelType = $(`//li[contains(@data-value, "${gpuModelTypeOption}")]`);
        await gpuModelType.waitForExist({ timeout: 2000 })
        await gpuModelType.click()
    }
    async localSSDDropdownClick(number, localSSDOption) {
        await this.localSSDDropdown.waitForExist({ timeout: 2000 })
        await this.localSSDDropdown.click()
        await browser.pause(1000)
        const localSSDTypeOption = $(`//li[@data-value="${number}" and contains(.//span[@jsname="K4r5Ff"], "${localSSDOption}")]`);;
        await localSSDTypeOption.waitForExist({ timeout: 2000 })
        await localSSDTypeOption.click()
    }
    async regionDropdownClick(regionTypeOption) {
        await this.regionDropdown.waitForExist({ timeout: 2000 })
        await this.regionDropdown.click()
        await browser.pause(1000);
        const regionType = $(`//li[@data-value = "${regionTypeOption}"]`);
        await regionType.waitForExist({ timeout: 2000 })
        await regionType.click()
    }
    async committedButtonSelect(buttonOption) {
        const committedUseButton = $(`(//div[contains(@class, "e2WL2b") and .//input[@name="116"]])[${buttonOption}]`);
        await committedUseButton.waitForExist({ timeout: 2000 })
        await committedUseButton.click()
        
    }
    async pagePricesTotal() {
        await browser.pause(1000);
        await this.PriceTopMenu.getText();
        await this.PriceTopMenu.waitForExist({ timeout: 5000 });
        const totalCostText = await this.PriceTopMenu.getText();
        testdata.summary.totalcost = totalCostText;
    }
    async shareButtonOpener() {
        await SharedWindowDisplay.OpenSharedWindow();
        await SharedWindowDisplay.SharedTotalPrice();
        await SharedWindowDisplay.closeSharedWindow();
    }
    async OpenEstimatedCost() {
        await this.OpenEstimatedCostButton.waitForExist({ timeout: 2000 })
        await this.OpenEstimatedCostButton.click()
    }
}
module.exports = new PricingCalculatorPage()