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

//how to handle dropdown/selectbox/multi select
//fixture : browser, page
test("how to handle dropdown/selectbox/multi select", async({browser})=>{
  //test steps
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://demo.nopcommerce.com/camera-photo');
  await page.locator('#products-orderby').selectOption({value:"10"});
  await page.locator('#products-orderby').selectOption("6");
  await page.locator('#products-orderby').selectOption({label:"Price: Low to High"});
  await page.locator('#products-orderby').selectOption("Price: High to Low");
  await page.pause()
})

test.only("how to handle non select tag dropdown", async({browser})=>{
  //test steps
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.makemytrip.com/flights/');
  await page.locator('#fromCity').click();
  await page.locator('[placeholder="From"]').pressSequentially("New Delhi");
  await page.locator('ul[role="listbox"] li').first().waitFor({state: 'visible'});

  // await page.locator('#react-autowhatever-1-section-0-item-6').click();

  const list= page.locator('ul[role="listbox"] li span.revampedCityName');

  for(let i = 0; i<await list.count(); i++){
    let text = await list.nth(i).textContent();
    if(text=='Agra, India'){
      await list.nth(i).click();
      break;
    }
  }

})
