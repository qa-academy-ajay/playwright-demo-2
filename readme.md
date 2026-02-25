https://shop.qaautomationlabs.com/
https://demo.nopcommerce.com/
https://rahulshettyacademy.com/client/#/auth/login
https://shop.qaautomationlabs.com/index.php
https://demo.guru99.com/V4/
https://demoqa.com/



#CSS

Here’s a **Playwright CSS Locator Cheat Sheet** you can use when writing automation tests. It’s structured for quick reference and includes examples in Playwright syntax:

---

## 🎯 Basic Selectors
| Selector | Example | Playwright Usage |
|----------|---------|------------------|
| **ID** | `#loginBtn` | `await page.click('#loginBtn');` |
| **Class** | `.btn-primary` | `await page.click('.btn-primary');` |
| **Tag** | `button` | `await page.click('button');` |
| **Attribute** | `input[type="text"]` | `await page.fill('input[type="text"]', 'Ajay');` |

---

## 📂 Combinators
| Selector | Example | Playwright Usage |
|----------|---------|------------------|
| **Descendant** | `div.container p` | `await page.locator('div.container p').first();` |
| **Child** | `ul > li` | `await page.locator('ul > li').nth(0);` |
| **Adjacent Sibling** | `h1 + p` | `await page.locator('h1 + p');` |
| **General Sibling** | `h1 ~ p` | `await page.locator('h1 ~ p');` |

---

## 🔢 Pseudo-classes
| Selector | Example | Playwright Usage |
|----------|---------|------------------|
| **First Child** | `ul li:first-child` | `await page.locator('ul li:first-child');` |
| **Nth Child** | `ul li:nth-child(2)` | `await page.locator('ul li:nth-child(2)');` |
| **Last Child** | `ul li:last-child` | `await page.locator('ul li:last-child');` |
| **Not** | `button:not(.disabled)` | `await page.locator('button:not(.disabled)');` |

---

## 🔍 Attribute Matching
| Selector | Example | Playwright Usage |
|----------|---------|------------------|
| **Starts With** | `input[name^="user"]` | `await page.locator('input[name^="user"]');` |
| **Ends With** | `input[name$="id"]` | `await page.locator('input[name$="id"]');` |
| **Contains** | `input[name*="email"]` | `await page.locator('input[name*="email"]');` |

---

## ⚡ Best Practices in Playwright
- Use **data-test attributes** for stable selectors:  
  ```js
  await page.locator('[data-test="login-button"]').click();
  ```
- Chain locators for precision:  
  ```js
  await page.locator('form#loginForm >> input[type="password"]').fill('mypassword');
  ```
- Prefer **locator()** over direct `page.click()` for reusability and readability.  

---

## 🚀 Example Test Flow

import { test, expect } from '@playwright/test';

test('Login form test', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  // Fill email
  await page.locator('input[name="email"]').fill('test@example.com');
  
  // Fill password
  await page.locator('input[type="password"]').fill('mypassword');
  
  // Click login
  await page.locator('#loginBtn').click();
  
  // Assert navigation
  await expect(page).toHaveURL(/dashboard/);
});



