import { Page, Locator } from '@playwright/test';
import BasePage from '../base-page';
import ContactUsForm from './sections/contact-us-form';

export default class ContactSales extends BasePage {

    private readonly contactUsForm: ContactUsForm;

    constructor(page: Page) {
        super(page);
        this.contactUsForm = new ContactUsForm(page);
    }

    get contactSalesPage(): ContactUsForm { return this.contactUsForm; }

}
