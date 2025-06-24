import { Page, Locator, expect, test } from "@playwright/test";
import path from "path";

export default abstract class BasePage {
    protected readonly page: Page;
    
    constructor(page: any) {
        this.page = page;
    }

    async assertAllPageLocatorsVisible(): Promise<void> {
        const props = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(this));
    
        for (const [locatorName, descriptor] of Object.entries(props)) {
            if (typeof descriptor.get === 'function') {
                const locator: Locator = (this as BasePage)[locatorName];

                
                if (locator && typeof locator === 'object' && typeof locator.isVisible === 'function') {
                    try {
                        await test.step(`Checking visibility of locator: ${locatorName}`, async () => {
                            await expect(locator).toBeVisible();
                        });
                    } catch (error) {
                        const timestamp = `${new Date().toISOString().replace(/[:.]/g, '-')}`;
                        const pageName = this.constructor.name;
                        const logMessage = [
                            `❌ → Error: ${error.message}`,
                            `📖 - Page:         ${this.constructor.name}`,
                            `👁️ - Locator name: ${locatorName}`,
                            `🕒 - Timestamp:    timestamp}`,
                            `🌐 - URL:          ${this.page.url()}`,
                        ].join('\n');
                        console.error(logMessage);
                        throw error;
                    }        
                }       
            }
        }
  }
    
    async waitForPageLoad(): Promise<void> {
    
        await this.page.waitForLoadState('networkidle');
    }
    
    async close(): Promise<void> {
        await this.page.close();
    }

}
