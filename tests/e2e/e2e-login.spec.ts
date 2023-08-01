import {test,expect} from '@playwright/test'
import { LoginPage } from '../../page-objects/loginPage'
import { HomePage } from '../../page-objects/homePage'

test.describe('@e2elogin test suit for login tests case',()=>{
  let  loginPage:LoginPage
  let homePage:HomePage

  test.beforeEach( async ({page}) =>{
   loginPage = new LoginPage(page)
   homePage = new HomePage(page)
        await homePage.visit()
        await homePage.clickOnSigninButton()
  })
  test('Verify login successfully',async ({page},testInfo)=>{

    await loginPage.login('username','password')
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
    const accountSummaryTab = await page.locator('#account_summary_tab')
    await expect(accountSummaryTab).toBeVisible()
    console.log(testInfo)
})
  test('Verify login unsuccessfully by wrong user name ',async({page})=>{

    await loginPage.login('wrong user_login','pasword')
    await expect(loginPage.errorMessageIsShowed).toBeTruthy
  })
  test('Verify login unsuccessfully by wrong password ',async({page})=>{
   
    await loginPage.login('username','wrong password') 
    await expect(loginPage.errorMessageIsShowed).toBeTruthy
  })
  test('Verify login form snapshot ',async({page})=>{
   
    await loginPage.snapLoginForm()
    
  })
  test('Verify error message snapshot ',async({page})=>{
    await loginPage.login('username','wrong password') 
    await loginPage.snapLoginForm()
    
  })
})