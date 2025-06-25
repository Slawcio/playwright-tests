import { test, expect } from '@playwright/test';
import FinalServicesSection from '../../pages/main-page/sections/financial-services-section';
import TEST_DATA from '../data/data';
import commonSteps from '../common-steps/common-steps';

test.describe('financial-services-section', { tag: '@smoke' }, () => {
  
  test.beforeEach(async ({ page }) => {
    await commonSteps.openPage(page);
  });

  test('verify elements are visible', async ({ page }) => {
    const financialServicesSection = new FinalServicesSection(page);
    await financialServicesSection.assertAllPageLocatorsVisible();
    await expect(financialServicesSection.length).toEqual(3);
    const financialCards = await financialServicesSection.getCardsList();
    for (const card of financialCards) {
      await card.assertAllPageLocatorsVisible();
    };
  });

  test('verify cards are redirecting', async ({ page }) => {
    const financialServicesSection = new FinalServicesSection(page);
    const financialCards = await financialServicesSection.getCardsList();

      for(const [index, card] of financialCards.entries()) {
        await test.step(`${await card.title.textContent()} card redirect to ${TEST_DATA.REDIRECTS.CARD[index]}`, async () => {
          await card.cardElement.click();
          await expect(page).toHaveURL(TEST_DATA.REDIRECTS.CARD[index]);
          await page.goBack();
        });
      } 
  });

  test('verify buttons are redirecting', async ({ page }) => {
    const financialServicesSection = new FinalServicesSection(page);
    const financialCards = await financialServicesSection.getCardsList();

      for(const [index, card] of financialCards.entries()) {
        await test.step(`${await card.title.textContent()} card redirect to ${TEST_DATA.REDIRECTS.CARD[index]}`, async () => {
          await card.button.click();
          await expect(page).toHaveURL(TEST_DATA.REDIRECTS.CARD[index]);
          await page.goBack();
        });
      } 
  });

});
