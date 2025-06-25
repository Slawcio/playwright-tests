import { Locator, Page } from "@playwright/test";
import BasePage from "../../base-page";

export default class ProductsSection extends BasePage {

    private readonly financeAndESG: FinanceAndESG;
    
    constructor(protected readonly page: Page) {
        super(page);
        this.financeAndESG = new FinanceAndESG(page);
    }

    get financeAndESGButton(): Locator { return this.page.locator("(//span[contains(text(),'Finance & ESG')])[1]"); }
    get financeAndESGPage(): FinanceAndESG { return this.financeAndESG;  }
  
  }

  class FinanceAndESG extends BasePage {
    constructor(protected readonly page: Page, ) {
        super(page);
    }

    get ESGKPIEngine(): Locator { return this.page.locator("ul[class='list-reset mb-0 d-flex flex-column flex-wrap gap-1-5'] a[aria-label='ESG KPI Engine']") };
  }