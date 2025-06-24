import { Page, Locator } from "@playwright/test";
import BasePage from "../../base-page";

export default class LandingSection extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    get mainTextCenter(): Locator { return this.page.locator("//h1[contains(text(),'Next generation')]"); }
    get getInTouchButton(): Locator { return this.page.locator("//div[@class='col-auto']//a[@aria-label='Get in touch']"); }
}