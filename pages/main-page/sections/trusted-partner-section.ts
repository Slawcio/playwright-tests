import { Page, Locator } from "@playwright/test";
import BasePage from "../../base-page";

export default class TrustedPartnerSection extends BasePage {

    constructor(protected readonly page: Page) {
        super(page);
    }

    get section(): Locator { return this.page.locator("article[class='stepper-block py-4 py-xl-8'] div[class='row']"); }
    get label(): Locator { return this.page.locator("(//h2[normalize-space()='Innovate with a trusted partner on your side'])[1]"); }
    get sellingPointsContainer(): Locator { return this.page.locator("ul.list-reset.d-flex.flex-column.gap-4"); }

    async sellingPoints(): Promise<SellingPoint[]>{
        const listContainer = this.sellingPointsContainer;
        const listItems = listContainer.locator('li');
        const count = await listItems.count();
        const sellingPointList: SellingPoint[] = [];

        for (let i = 0; i < count; i++) {
          sellingPointList.push(new SellingPoint(this.page, listItems.nth(i)));
        }

        return sellingPointList;
    }
}

class SellingPoint extends BasePage {
  constructor(page: Page, private readonly sellingPoint: Locator) {
    super(page);
  }

  get button(): Locator { return this.sellingPoint.locator("button"); }
  get description(): Locator { return this.sellingPoint.locator("p"); }
  get picture(): Locator { return this.sellingPoint.locator("img"); }
}