import { Page, Locator } from '@playwright/test';
import Header from './header/header';
import BasePage from '../base-page';

export default class MainPage extends BasePage {

  readonly header: Header;

    constructor(page: Page) {
      super(page);
    }

    get mainPage(): Locator { return this.page.locator(".main"); }
    get mainTextCenter(): Locator { return this.page.locator("//h1[contains(text(),'Next generation')]"); }
  }
