class CheckoutPage {
    constructor(page) {
        this.page = page;
    }

    async selectCountryAndCheckout() {
        await page.locator('[placeholder="Select Country"]').pressSequentially('India');
        const country = page.locator('section.ta-results span');
        await country.first().waitFor({ state: 'visible' });
        for (let i = 0; i < await country.count(); i++) {
            let countryname = await country.nth(i).textContent();
            if (countryname == " India") {
                await country.nth(i).click();
            }
        }
        await page.locator('.action__submit').click();
    }
}

export { CheckoutPage }