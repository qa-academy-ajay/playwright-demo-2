class ConfirmatioPage {
    constructor(page) {
        this.page = page;
    }


    async confirmOrderAndGrabOrderId() {
        await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
        let orderid = await page.getByText("|").textContent();
        return orderid.replaceAll("|", "").trim();
    }
}

export { ConfirmatioPage }