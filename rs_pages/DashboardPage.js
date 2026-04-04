class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator('div.card-body');
    }

    async selectProduct(product_name) {
        await this.products.first().waitFor({ state: 'visible' });
        let price;
        for (let i = 0; i < await this.products.count(); i++) {
            //div.card-body b
            let productName = await this.products.nth(i).locator('b').textContent();
            if (productName == product_name) {
                // let Price = await products.nth(i).locator('div:nth-child(1):has-text("$")').textContent();
                price = await this.products.nth(i).getByText('$').textContent();
                // let Price = await products.nth(i).locator('div:nth-child(1)').filter({hasText:"$"}).textContent();
                // let Price = await products.nth(i).locator('.text-muted').textContent()
                await this.products.nth(i).locator('[class*="cart"]').click();
                return price.replaceAll(' ', '');
            }
        }
    }

    async navigateToCartPage(){
        await this.page.locator('[routerlink$="cart"]').click();
    }
}
export {DashboardPage}