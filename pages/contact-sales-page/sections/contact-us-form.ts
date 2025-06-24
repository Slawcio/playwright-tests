import { Page, Locator } from '@playwright/test';
import BasePage from '../../base-page';

export default class ContactUsForm extends BasePage {

    constructor(page: Page) {
      super(page);
    }

    get emailInput(): Locator { return this.page.locator("[name=email]"); }
    get emailError(): Locator { return this.page.locator(".inputs-list[role=alert] label"); }
}
