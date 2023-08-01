export async function loadHomePage(page) {

    await page.goto ('https://example.com/')
}
export async function assertTitle(page) {

    await await page.waitForSelector('h1')
}