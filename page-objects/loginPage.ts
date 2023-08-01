import { Page,Locator, expect } from "@playwright/test";
import {AbstractPage} from './AbstractPage'

export class LoginPage extends AbstractPage {
      // Define selectors
  
    readonly usernameInput :Locator
    readonly passwordInput :Locator
    readonly submitButton :Locator
    readonly errorMessage :Locator
    readonly loginForm :Locator

      // Init selctors using constructor
   constructor(page:Page){
    super(page)
    this.usernameInput = page.locator('#user_login')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')
    this.loginForm = page.locator('#login_form')
  }
  //methold 
  
  
  async login(userName:string,password:string){
    await this.usernameInput.type(userName)
    await this.passwordInput.type(password)
    await this.submitButton.click()
  }
  async errorMessageIsShowed(userName:string,password:string){
    await expect(this.errorMessage).toContainText('Login and/or password are wrong.')
   
  }
  async snapLoginForm(){
    await expect(await this.loginForm.screenshot()).toMatchSnapshot('login_form.png')
   
  }
  async snapLogin(){
     expect( await this.errorMessage.screenshot()).toMatchSnapshot('errorMessage.png')
   
  }
  
}
