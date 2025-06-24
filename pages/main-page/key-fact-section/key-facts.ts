import { Page, Locator } from "@playwright/test";
import BasePage from "../../base-page";

export default class KeyFactSection extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    get section(): Locator { return this.page.locator("article[class='stepper-block py-4 py-xl-8'] div[class='row']"); }
    get label(): Locator { return this.page.locator("(//h2[normalize-space()='Innovate with a trusted partner on your side'])[1]"); }
    get keyFactsList(): Promise<KeyFact[]> { return this.getKeyFactList(); }

    async getKeyFactList(): Promise<KeyFact[]>{
        const listItems = this.page.locator("ul.list-reset.d-flex.flex-column.gap-4 > li");
        const count = await listItems.count();
        const keyFactList: KeyFact[] = [];

        for (let i = 0; i < count; i++) {
          keyFactList.push(new KeyFact(this.page, listItems.nth(i)));
        }

        return keyFactList;
    }
}

class KeyFact extends BasePage {
  constructor(page: Page, private readonly keyFact: Locator) {
    super(page);
  }

  get button(): Locator { return this.keyFact.locator("button"); }
  get description(): Locator { return this.keyFact.locator("p"); }
  get picture(): Locator { return this.keyFact.locator("img"); }
}