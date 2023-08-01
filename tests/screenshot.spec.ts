import {test,expect} from '@playwright/test'


test.describe('@screenshot test suite for screenshot',()=>{
    test('screenshot for a screen ',async ({page})=>{
        await page.goto ('https://example.com/')
        const pageTitle = await page.locator('h1')
        await expect(pageTitle).toContainText('Example Domain')
       page.screenshot({path:'image/fullpage.png',fullPage:true})

    } )
    test('screenshot for a elemment ',async ({page})=>{
        await page.goto ('https://example.com/')
        const pageTitle = await page.locator('h1')
        await pageTitle.screenshot({path:'image/single.png'})
     
    } )
})