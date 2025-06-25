import { Locator, Page } from "@playwright/test";
import BasePage from "../../base-page";

export default class FinalServicesSection extends BasePage {
    
    constructor(protected readonly page: Page) {
        super(page);
    }
    
    get container(): Locator { return this.page.locator("article[class='cards-block py-4 py-xl-8 overflow-hidden'] div[class='container-fluid']"); }
    get subheading(): Locator { return this.page.locator("//h2[normalize-space()='End-to-end solutions for financial services']"); }
    get cardsContainer(): Locator { return this.page.locator(".row.gy-4.gy-lg-6.d-none.d-md-flex"); }
  

    async getCardsList(): Promise<Card[]> {
        const cardContainer = this.cardsContainer;
        const cardList = cardContainer.locator('a');
        const count = await cardList.count();
        const cardObjects: Card[] = [];
        
         for (let i = 0; i < count; i++) {
          cardObjects.push(new Card(this.page, cardList.nth(i)));
        }

        return cardObjects;
    }
}
  
class Card extends BasePage {

      constructor(page: Page, private readonly card: Locator) {
          super(page);
      }
  
      get cardElement(): Locator { return this.card; }
      get title(): Locator { return this.card.locator("h3"); }
      get description(): Locator { return this.card.locator("p"); }
      get button(): Locator { return this.card.locator(".btn"); }
      get icon(): Locator { return this.card.locator("img"); }
  }