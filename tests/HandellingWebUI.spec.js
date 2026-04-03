import {test, expect} from '@playwright/test'

test("Handelling Text field", async({page})=>{
    await page.goto('https://qamatters.github.io/demoautomationWebSite/fields.html');
    await page.getByText('Text Field').click();
    await expect(page.getByPlaceholder('Disabled input')).toBeDisabled();
    await expect(page.locator('[placeholder="Disabled input"]')).toBeDisabled();

})