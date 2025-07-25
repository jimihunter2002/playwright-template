import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartBtn: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartBtn = this.page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.cartIcon = this.page.locator('[data-test="shopping-cart-link"]');
  }

  async addItemToCart() {
    await this.addToCartBtn.click();
  }

  async goToCart() {
    await this.cartIcon.click();
    await expect(this.page).toHaveURL('/cart.html');
  }
}
