import {test, expect} from '@playwright/test';
import { LoginPage } from '../rs_pages/LoginPage';
import { DashboardPage } from '../rs_pages/DashboardPage';
import { CartPage } from '../rs_pages/CartPage';
import { CheckoutPage } from '../rs_pages/CheckoutPage';
import { ConfirmatioPage } from '../rs_pages/ConfirmationPage';

test("Login test", async ({page}) => {
    const loginPage = new LoginPage(page)
    const dasboardPage = new DashboardPage(page);
    const carPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const confrimationPage = new ConfirmatioPage(page);

    await loginPage.launchApplication();
    let price = await dasboardPage.selectProduct('ZARA COAT 3');
    await dasboardPage.navigateToCartPage();
    await carPage.validatePriceAndNavigateToCheckoutPage(price)
    await checkoutPage.selectCountryAndCheckout();
    let orderid = await confrimationPage.confirmOrderAndGrabOrderId();
    await page.pause()
});