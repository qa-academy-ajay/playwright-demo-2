import { test, expect } from '@playwright/test';

test('User Login', async ({ page }) => {
  await page.goto('https://shop.qaautomationlabs.com/');
  let username = (await page.locator('.help-block').nth(0).textContent()).split(':')[1];//Email: demo@demo.com
  //["Email:", "demo@demo.com"]
  let password = (await page.locator('.help-block').nth(1).textContent()).split(':')[1];
  await page.locator('input#email').fill(username);
  await page.locator('input#password').fill(password);
  await page.locator('button#loginBtn').click();
  //assertion
  await expect(page.locator('button#logoutBtn')).toBeVisible();
});

test('User Login negative test', async ({ page }) => {
  await page.goto('https://shop.qaautomationlabs.com/');
  let username = (await page.locator('.help-block').nth(0).textContent()).split(':')[1];//Email: demo@demo.com
  //["Email:", "demo@demo.com"]
  // let password = (await page.locator('.help-block').nth(1).textContent()).split(':')[1];
  await page.locator('input#email').fill(username);
  await page.locator('input#password').fill("pass123");
  await page.locator('button#loginBtn').click();
  //assertion
  await expect(page.locator('p#errorMsg')).toHaveText('Invalid email or password!');
});


test('e2e order product', async ({ page }) => {
  await page.goto('https://shop.qaautomationlabs.com/');
  let username = (await page.locator('.help-block').nth(0).textContent()).split(':')[1];
  let password = (await page.locator('.help-block').nth(1).textContent()).split(':')[1];
  await page.locator('input#email').fill(username);
  await page.locator('input#password').fill(password);
  await page.locator('button#loginBtn').click();
  await expect(page.locator('button#logoutBtn')).toBeVisible();
  await page.locator('.offer-text a[href^="kids-wear"]').click();
  await page.getByText('Formal', { exact: true }).click();
  await page.getByText('$101 - $').click();
  await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: 'Proceed To Checkout' }).click();
  await page.pause();
});

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
  await orderrow.first().waitFor({state: 'visible'});
  for (let i = 0; i < await orderrow.count(); i++) {
    let orderidtemp = await orderrow.nth(i).locator('th').textContent();
    if (orderid == orderidtemp) {
      await orderrow.nth(i).locator('button:has-text("View")').click();
    }
  }
  await page.locator("div.email-container [class$='main']").waitFor({state:'visible'});
  await expect(page.locator("div.email-container [class$='main']")).toHaveText(orderid);
  console.log(orderid)
  await page.pause()
})
