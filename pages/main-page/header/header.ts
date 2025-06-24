import { Locator, Page } from "@playwright/test";

export default class Header {
    
    constructor(private readonly page: Page) {}
  
    get header(): Locator { return this.page.locator("header"); }
    get logo(): Locator { return this.page.locator("div[class='row gx-xl-8 align-items-center'] a[aria-label='Homepage'] svg"); }
    get product(): Locator { return this.page.locator("//span[contains(text(),'Products')])[1]"); }
    get solution(): Locator { return this.page.locator("//span[contains(text(),'Solutions')])[1]"); }    
    get resources(): Locator { return this.page.locator("//span[contains(text(),'Resources')])[1]"); }    
    get company(): Locator { return this.page.locator("//span[contains(text(),'Company')])[1]"); }   
  
  }