
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("See All Bots button shows when page loads", async() => {
    const button1 = await driver.findElement(By.id("see-all"))
    const presented1 = await button1.isDisplayed()
    expect(presented1).toBe(true)
})

test("Draw button shows up when page loads", async() => {
    const button2 = await driver.findElement(By.id("draw"))
    const presented2 = await button2.isDisplayed()
    expect(presented2).toBe(true)
})