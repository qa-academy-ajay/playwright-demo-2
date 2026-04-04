import { expect } from "@playwright/test";
class CartPage {
    constructor(page) {
        this.page = page;
    }

    async validatePriceAndNavigateToCheckoutPage(price) {
        let totalPrice = await this.page.locator('li.totalRow .value').nth(1).textContent();
        expect(totalPrice).toEqual(price);
        await this.page.getByText('Checkout').click();
    }
}
export {CartPage}