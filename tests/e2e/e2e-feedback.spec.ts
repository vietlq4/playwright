import {test,expect} from '@playwright/test'
import { FeedbackPage } from '../../page-objects/feedbackPage'
import { HomePage } from '../../page-objects/homePage'

test.describe('@e2efeedback test suit for feedback form  tests case',()=> {
let homePage:HomePage
let feedbackPage:FeedbackPage

    test.beforeEach( async ({page}) =>{
      homePage = new HomePage(page)
      feedbackPage = new FeedbackPage(page)
       await homePage.visit()
        await homePage.clickOnFeedbackLink()

})
// Reset feedback form
test('Reset feedback form', async ({ page }) => {
  await feedbackPage.fillForm('some name','some email@email.com','some subject','some nice comment about the application')

    await feedbackPage.resetForm()
    await feedbackPage.assertReset()
  })

  // Submit feedback form
  test('Submit feedback form', async ({ page }) => {
    await feedbackPage.fillForm('some name','some email@email.com','some subject','some nice comment about the application')
    await feedbackPage.submitForm()
    await feedbackPage.feedbackFormSent()
  })
})  