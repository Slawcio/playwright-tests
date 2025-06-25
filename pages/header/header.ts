import { Locator, Page } from "@playwright/test";
import BasePage from "../base-page";
import ProductsSection from "./products-section/products-section";

export default class Header extends BasePage {

    readonly productsSection: ProductsSection

    constructor(protected readonly page: Page) {
        super(page);
        this.productsSection = new ProductsSection(page);
    }
  
    get header(): Locator { return this.page.locator("header"); }
    get logo(): Locator { return this.page.locator("div[class='row gx-xl-8 align-items-center'] a[aria-label='Homepage'] svg"); }
    get product(): Locator { return this.page.locator("//span[@class='py-4 d-inline-flex align-items-center']//span[contains(text(),'Products')]"); }
    get solution(): Locator { return this.page.locator("//span[@class='py-4 d-inline-flex align-items-center']//span[contains(text(),'Solutions')]"); }    
    get resources(): Locator { return this.page.locator("//span[@class='py-4 d-inline-flex align-items-center']//span[contains(text(),'Resources')]"); }    
    get company(): Locator { return this.page.locator("//span[@class='py-4 d-inline-flex align-items-center']//span[contains(text(),'Company')]"); }   
  
    get productsSectionPage(): ProductsSection { return this.productsSection; }
}