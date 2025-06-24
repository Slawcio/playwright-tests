import { Locator, Page } from "@playwright/test";
import BasePage from "../../base-page";

export default class FinalServicesSection extends BasePage {
    
    constructor(protected readonly page: Page) {
        super(page);
    }
    
    get container(): Locator { return this.page.locator("article[class='cards-block py-4 py-xl-8 overflow-hidden'] div[class='container-fluid']"); }
    get label(): Locator { return this.page.locator("h2.fs-24 lh-32 fs-md-32 lh-md-40 ff-medium mb-5 mb-xl-6"); }
    get cardsContainer(): Locator { return this.page.locator("ul[class='list-reset d-flex flex-column flex-md-row flex-wrap gap-4 gap-md-5']"); }
  

    async getCardsList(): Promise<Card[]> {
        const cardContainer = this.cardsContainer;
        const listItems = cardContainer.locator('a');
        const count = await listItems.count();
        const cardsList: Card[] = [];
        
         for (let i = 0; i < count; i++) {
          cardsList.push(new Card(this.page, listItems.nth(i)));
        }

          return cardsList;
      }
}
  
  class Card extends BasePage {
      constructor(page: Page, private readonly card: Locator) {
          super(page);
      }
  
      get title(): Locator { return this.card.locator("h3"); }
      get description(): Locator { return this.card.locator("p"); }
      get button(): Locator { return this.card.locator(".btn"); }
      get icon(): Locator { return this.card.locator("img"); }
  }