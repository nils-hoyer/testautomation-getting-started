import { test, expect } from '@playwright/test';

test('should login successfully', async ({ page }) => {
  //GIVEN
  await page.goto('https://test-boutique.vercel.app/');
  
  //WHEN
  await page.getByTestId('login-icon').click();
  await page.getByTestId('login-email').fill('max@mail.de');
  await page.getByTestId('login-password').fill('12345');
  await page.getByTestId('login-button').click();

  //THEN
  await expect(page.getByTestId('user-avatar')).toContainText('MM');
});
