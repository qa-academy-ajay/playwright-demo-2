import { test, expect } from '@playwright/test'
test("order product", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  
  const products = page.locator('div.card-body');
  const cart = page.locator('[routerlink$="cart"]')
  const checkout = page.getByText('Checkout');
  const select_country = page.locator('[placeholder="Select Country"]')
  const country = page.locator('section.ta-results span');
  const submit = page.locator('.action__submit');
  const hero_primary = page.locator('.hero-primary')
  const orderidLoc = page.getByText("|");
  const orderhistory = page.getByText('Orders History Page');
  const orderrow = page.locator('tbody tr');


  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  await username.fill("ajaykr.mailbox@gmail.com");
  await password.fill("Automation@123");
  await login.click();

  await products.first().waitFor({ state: 'visible' });
  let price;
  for (let i = 0; i < await products.count(); i++) {
    //div.card-body b
    let productName = await products.nth(i).locator('b').textContent();
    if (productName == 'iphone 13 pro') {
      // let Price = await products.nth(i).locator('div:nth-child(1):has-text("$")').textContent();
      price = await products.nth(i).getByText('$').textContent();
      // let Price = await products.nth(i).locator('div:nth-child(1)').filter({hasText:"$"}).textContent();
      // let Price = await products.nth(i).locator('.text-muted').textContent()
      price = price.replaceAll(' ', '');
      await products.nth(i).locator('[class*="cart"]').click();
      break;
    }
  }
  await cart.click();
  let totalPrice = await page.locator('li.totalRow .value').nth(1).textContent();
  expect(totalPrice).toEqual(price);
  await checkout.click();
  await select_country.pressSequentially('India');
  await country.first().waitFor({ state: 'visible' });
  for (let i = 0; i < await country.count(); i++) {
    let countryname = await country.nth(i).textContent();
    if (countryname == " India") {
      await country.nth(i).click();
    }
  }
  await submit.click();
  await expect(hero_primary).toHaveText(' Thankyou for the order. ');
  let orderid = orderidLoc.textContent();
  orderid = orderid.replaceAll("|", "").trim();
  // await page.locator('[routerlink$="myorders"]').click();
  await orderhistory.click();
  await orderrow.first().waitFor({ state: 'visible' });
  for (let i = 0; i < await orderrow.count(); i++) {
    let orderidtemp = await orderrow.nth(i).locator('th').textContent();
    if (orderid == orderidtemp) {
      await orderrow.nth(i).locator('button:has-text("View")').click();
    }
  }
  await page.locator("div.email-container [class$='main']").waitFor({ state: 'visible' });
  await expect(page.locator("div.email-container [class$='main']")).toHaveText(orderid);
  console.log(orderid)
  await page.pause()
})

test("", async({page})=>{
  LoginPage.login();
  ProductPage.selectProduct();
  
})