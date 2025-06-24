import { test, expect } from '@playwright/test';
import MainPage from '../../pages/main-page/main-page';
import KeyFactSection from '../../pages/main-page/key-fact-section/key-facts';

test.describe('SAP QA assesment', () => {
  
  test.beforeEach(async ({ page }) => {
      await page.goto('https://www.sapfioneer.com/');
  });

  test('verify if main page is visible', async ({ page }) => {
    const mainPage: MainPage = new MainPage(page);
    await mainPage.assertAllLocatorsVisible();  
  });

  test('all key elements should be visible', async ({ page }) => {
    const keyFactsSection = new KeyFactSection(page);
    await keyFactsSection.assertAllLocatorsVisible();
  });

});
