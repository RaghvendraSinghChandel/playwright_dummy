import {expect} from "@playwright/test"
import CalanderEvent from "./calanderEventHandle"
class API extends CalanderEvent {
    constructor(page, isMobile) {
        super(page, isMobile)
        this.page = page
        this.isMobile = isMobile
    }

    async validateLandingAPI() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const response = await this.page.waitForResponse('https://opensource-demo.orangehrmlive.com/*',{
            predicate: response => response.ok(),
        });
          response
          expect(response.status()).toEqual(200)
    }

}
export default API