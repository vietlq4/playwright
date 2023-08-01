import {test,expect} from '@playwright/test'
import{loadHomePage,assertTitle}from '../helper'

test.describe('@example my first test suite',()=>{
    test ('just first test case ',async ({page})=>{
        
        const pageTitle = await page.locator('h1')
        await expect(pageTitle).toContainText('Example Domain')
    
    })
    test ('@regression just first test case a',async ({page})=>{
        await page.goto ('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.click('text=Sign in')
        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong.')
    
    })
    test (' working with input @reg',async ({page})=>{
        await page.goto ('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button')
        await page.type('#user_login','some user_login')
        await page.type('#user_password','user_password')
        await page.click('text=Sign in')
        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong.')
    
    })
    test ('test case custom helper',async ({page})=>{
        
     await loadHomePage(page)
     await assertTitle(page)
    
    })
    test.only ('@regressiontest case  Playwright Inspector',async ({page})=>{
        await page.goto ('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_buttonz')
        // await page.pause()
        await page.click('text=Sign in')
        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong.')
    
    })
})
