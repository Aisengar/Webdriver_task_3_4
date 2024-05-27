class GoogleCloudPage {


    async open() {
        await browser.url('https://cloud.google.com/?hl=es')
    }

    async openSearch() {
        await $(`[class="YSM5S"]`).click()
    }
    async serch(text) {
        await $('[class="mb2a7b"]').setValue(text)
    }
}