import { test, expect } from '@playwright/test';
import MainPage from '../../pages/main-page/main-page';
import TrustedPartnerSection from '../../pages/main-page/sections/trusted-partner-section';
import FinalServicesSection from '../../pages/main-page/sections/financial-services-section';
import data from '../data/data';
import commonSteps from '../common-steps/common-steps';

test.describe('financial-services-section', () => {
  
  test.beforeEach(async ({ page }) => {
    await commonSteps.openPage(page);
  });

  test('verify elements are visible', async ({ page }) => {
    const financialServicesSection = new FinalServicesSection(page);
    await financialServicesSection.assertAllPageLocatorsVisible();
    const financialCards = await financialServicesSection.getCardsList();
    for (const card of financialCards) {
      await card.assertAllPageLocatorsVisible();
    };
  });

  test('verify cards are redirecting', async ({ page }) => {
    const financialServicesSection = new FinalServicesSection(page);
    const financialCards = await financialServicesSection.getCardsList();

      for(const [index, card] of financialCards.entries()) {
        await test.step(`${await card.title.textContent()} card redirect to ${data.CARD_REDIRECTS[index]}`, async () => {
          await card.cardElement.click();
          await expect(page).toHaveURL(data.CARD_REDIRECTS[index]);
          await page.goBack();
        });
      } 
  });

  test('verify buttons are redirecting', async ({ page }) => {
    const financialServicesSection = new FinalServicesSection(page);
    const financialCards = await financialServicesSection.getCardsList();

      for(const [index, card] of financialCards.entries()) {
        await test.step(`${await card.title.textContent()} card redirect to ${data.CARD_REDIRECTS[index]}`, async () => {
          await card.button.click();
          await expect(page).toHaveURL(data.CARD_REDIRECTS[index]);
          await page.goBack();
        });
      } 
  });

});
