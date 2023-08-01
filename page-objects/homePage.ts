import { Page,Locator } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";

export class HomePage extends AbstractPage {
      // Define selectors
    readonly signinButton :Locator
    readonly searchBox: Locator
    readonly linkFeedback: Locator
    

    constructor(page:Page){
       super(page)
       this.signinButton= page.locator('#signin_button') 
       this.searchBox= page.locator('#searchTerm')
       this.linkFeedback = page.locator('#feedback')
    }

    async clickOnSigninButton(){
      await this.signinButton.click()
    }
    async visit(){
        await this.page.goto('http://zero.webappsecurity.com/index.html')
      }
    async searchFor (phrase:string){
        await this.searchBox.type(phrase,{delay:200});
        await this.page.keyboard.press('Enter')

    }  
    async clickOnFeedbackLink() {
        await this.linkFeedback.click()
      }
}