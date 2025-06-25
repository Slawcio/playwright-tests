import { Page, Locator, expect, test } from "@playwright/test";

export default abstract class BasePage {
    [key: string]: unknown;

    protected readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async assertAllPageLocatorsVisible(): Promise<void> {
        const props = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(this));
    
        for (const [locatorName, descriptor] of Object.entries(props)) {
            if (typeof descriptor.get === 'function') {
                const locator = this[locatorName] as Locator;

                
                if (locator && typeof locator === 'object' && typeof locator.isVisible === 'function') {
                        await test.step(`Checking visibility of locator: ${locatorName}`, async () => {
                            await expect(locator).toBeVisible();
                        });   
                }       
            }
        }
  }
    
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

}
