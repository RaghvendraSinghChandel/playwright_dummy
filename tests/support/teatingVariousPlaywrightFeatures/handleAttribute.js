import {expect} from "@playwright/test"
class HandleAttribute {
    constructor(page,isMobile) {
        this.page = page
        this.isMobile = isMobile
        this.urlToTest = "https://www.techbeamers.com/websites-to-practice-selenium-webdriver-online/#h-3-orangehrm-demo-site-for-practice"
        this.linkText = page.locator("#h-3-orangehrm-demo-site-for-practice a")
        this.userName = page.locator(`[name="username"]`)
        this.close = page.getByText("Close")
    }

    async handleAttributeBasedOnRequirement() {
        await this.page.goto(this.urlToTest)
        await this.page.evaluate(()=> {
            const element = document.querySelector(`#h-3-orangehrm-demo-site-for-practice a`)
            if (element) {

           
            element.removeAttribute("target")
        }
    })
            await expect(this.linkText).not.toHaveAttribute("target")
            await this.linkText.click()
            await this.page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            await this.userName.type("test")
    }

}
export default HandleAttribute