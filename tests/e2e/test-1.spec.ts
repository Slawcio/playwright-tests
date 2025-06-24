import { test, expect } from '@playwright/test';
import MainPage from '../../pages/main-page/main-page';
import KeyFactSection from '../../pages/main-page/trusted-partner-section/trusted-partner-section';

test.describe('SAP QA assesment', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('verify if main page is visible', async ({ page }) => {
    const mainPage: MainPage = new MainPage(page);
    await mainPage.assertAllPageLocatorsVisible();  
  });

  test('all key elements should be visible', async ({ page }) => {
    const keyFactsSection = new KeyFactSection(page);
    await keyFactsSection.assertAllPageLocatorsVisible();
  });

});
