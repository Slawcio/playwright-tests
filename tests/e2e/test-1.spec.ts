import { test, expect } from '@playwright/test';
import MainPage from '../../pages/main-page/main-page';
import TrustedPartnerSection from '../../pages/main-page/trusted-partner-section/trusted-partner-section';
import FinalServicesSection from '../../pages/main-page/financial-services-section/financial-services-section';
import data from '../data/data';

test.describe('verify financial-services-section', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('verify financial-services-section elements are visible', async ({ page }) => {
    const financialServicesSection = new FinalServicesSection(page);
    await financialServicesSection.assertAllPageLocatorsVisible();
    const financialCards = await financialServicesSection.getCardsList();
    for (const card of financialCards) {
      await card.assertAllPageLocatorsVisible();
    };
  });

  test('verify financial-services-section cards are redirecting', async ({ page }) => {
    const financialServicesSection = new FinalServicesSection(page);
    const financialCards = await financialServicesSection.getCardsList();
    for (const card of financialCards) {
      await card.assertAllPageLocatorsVisible();
    };
  });

  test.only('verify financial-services-section buttons are redirecting', async ({ page }) => {
    const financialServicesSection = new FinalServicesSection(page);
    const financialCards = await financialServicesSection.getCardsList();

      for(const [index, card] of financialCards.entries()) {
        await test.step(`${await card.title.textContent()} card redirect to ${data.CARD_REDIRECT_URLS[index]}`, async () => {
          await card.button.click();
          await expect(page).toHaveURL(data.CARD_REDIRECT_URLS[index]);
          await page.goBack();
        });
      } 
  });

});
