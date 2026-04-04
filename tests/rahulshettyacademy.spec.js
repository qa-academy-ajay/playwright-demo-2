import {test, expect} from '@playwright/test'

test.only("order product", async ({ browser }) => {
  //write all test steps
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator('#userEmail').fill("ajaykr.mailbox@gmail.com");
  await page.locator("#userPassword").fill("Automation@123");
  await page.locator('#login').click();


  const products = page.locator('div.card-body');
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
  await page.locator('[routerlink$="cart"]').click();
  let totalPrice = await page.locator('li.totalRow .value').nth(1).textContent();
  expect(totalPrice).toEqual(price);
  await page.getByText('Checkout').click();


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


  await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
  let orderid = await page.getByText("|").textContent();
  orderid = orderid.replaceAll("|", "").trim();


  
  // await page.locator('[routerlink$="myorders"]').click();
  await page.getByText('Orders History Page').click();
  const orderrow = page.locator('tbody tr');
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