import { Locator, Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly confirmaton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = this.page.locator('[data-test="firstName"]');
    this.lastName = this.page.locator('[data-test="lastName"]');
    this.postalCode = this.page.locator('[data-test="postalCode"]');
    this.continueBtn = this.page.locator('[data-test="continue"]');
    this.finishBtn = this.page.locator('[data-test="finish"]');
    this.confirmaton = this.page.locator('.complete-header');
  }
  async fillCheckoutInfo(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueBtn.click();
    await expect(this.page).toHaveURL('/checkout-step-two.html');
  }

  async completeOrder() {
    await this.finishBtn.click();
    await expect(this.confirmaton).toHaveText('Thank you for your order!');
    await expect(this.page).toHaveURL('/checkout-complete.html');
  }
}
