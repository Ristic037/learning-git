import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.carescout.com/');
  await page.getByRole('link', { name: 'Terms of Use' }).click();
  await page.getByRole('link', { name: 'here' }).click();
});


