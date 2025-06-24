import { test, expect } from '@playwright/test';
import commonSteps from '../common-steps/common-steps';
import Header from '../../pages/header/header';
import data from '../data/data';

test.describe('header redirects', () => {
  
  test.beforeEach(async ({ page }) => {
    await commonSteps.openPage(page);
  });

  test('verify redirect from ESG KPI Engine', async ({ page }) => {
    const header = new Header(page);
    await header.product.click();
    await header.productsSection.financeAndESGButton.click();
    await header.productsSection.financeAndESGPage.ESGKPIEngine.click();
    await expect(page).toHaveURL(data.HEADER_REDIRECT.FINANCE_ESG.ESG_KPI_ENGINE);
  });

});
