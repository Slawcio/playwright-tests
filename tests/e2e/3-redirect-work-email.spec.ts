import { test, expect } from '@playwright/test';
import commonSteps from '../common-steps/common-steps';
import Header from '../../pages/header/header';
import DATA from '../data/data';
import LandingSection from '../../pages/main-page/sections/landing-section';
import ContactUsForm from '../../pages/contact-sales-page/sections/contact-us-form';

test.describe('e2e flow redirect + work email validation', () => {
  
  test.beforeEach(async ({ page }) => {
    await commonSteps.openPage(page);
  });

  test('verify get in touch redirect and work email', async ({ page }) => {
    const landingSection = new LandingSection(page);
    await landingSection.getInTouchButton.click();
    await expect(page).toHaveURL(DATA.REDIRECTS.GET_IN_TOUCH);
    
    // contact sale page
    const contactUsForm = new ContactUsForm(page);
    for(const invalidEmails of DATA.INVALID_EMAILS) {
      await test.step(`verify email validation: ${invalidEmails}`, async () => {
        await contactUsForm.emailInput.fill(invalidEmails);
        await expect(contactUsForm.emailError).toBeVisible();
        await page.reload();
      });
    }
  });

});
