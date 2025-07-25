import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoginSuccess();
  });
  test('should fail to login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_user', 'wrong_password');
    await loginPage.assertLoginFailed();
  });
  test('Visual snapshot of login page', async ({ page }) => {
    await page.goto('/');
    expect(await page.screenshot()).toMatchSnapshot('login-page.png', {
      threshold: 0.2,
    });
  });
});
