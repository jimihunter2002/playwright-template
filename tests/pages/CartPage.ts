import { Locator, Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = this.page.locator('[data-test="checkout"]');
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
    await expect(this.page).toHaveURL('/checkout-step-one.html');
  }
}
