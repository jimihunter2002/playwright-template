import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly errorMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.locator('[data-test="username"]');
    this.password = this.page.locator('[data-test="password"]');
    this.loginBtn = this.page.locator('[data-test="login-button"]');
    this.errorMsg = this.page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL('/inventory.html');
  }

  async assertLoginFailed() {
    await expect(this.errorMsg).toBeVisible();
  }
}
