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


test.only('e2e order product', async ({ page }) => {
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
