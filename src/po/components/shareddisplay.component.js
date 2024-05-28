class SharedWindowDisplay {
    get sharedWindow() { return $('//div[contains(@jsaction, "JIbuQc:qsxFwf")]//button[contains(@aria-label, "Open Share Estimate dialog")]'); }
    get TotalSharedPrice() { return $('[class="ZgevAb"]'); }
    get closeSharedButton() { return $('//div[contains(@class, "bwApif-P5QLlc")]//button'); }

    async OpenSharedWindow() {
        await this.sharedWindow.waitForExist({ timeout: 10000 });
        await browser.pause(500);
        await this.sharedWindow.click();
        
    }
    async SharedTotalPrice() {
        await this.TotalSharedPrice.waitForExist({ timeout: 10000 });
        await browser.pause(500);
        await this.TotalSharedPrice.getText();
    }
    async closeSharedWindow() {
        await this.closeSharedButton.waitForExist({ timeout: 2000 });
        await browser.pause(500);
        await this.closeSharedButton.click();
    }
    
}
module.exports = new SharedWindowDisplay()