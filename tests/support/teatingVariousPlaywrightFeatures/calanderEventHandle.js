import {expect} from "@playwright/test"

let monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
  ];

const displayDayOfMonth = ()=> {
    const currentDate = new Date();

    // const year = currentDate.getFullYear();
    // const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = currentDate.getDate();
  
    // const formattedDate = `${year}${month}${day}`;
    return day;
}

const displayMonthOfYear = ()=> {
    const currentDate = new Date()
    const month = currentDate.getMonth()
    return month
} 

class CalanderEvent {
    constructor(page, isMobile) {
        this.page = page
        this.isMobile = isMobile
        this.signIn = page.locator(`[aria-label="Sign in"]`).first()
        this.email = page.locator(`[aria-label="Email or phone"]`)
        this.nextButton = page.locator(`#identifierNext`)
        this.password = page.locator(`[aria-label="Enter your password"]`)
        this.passNextbutton = page.locator(`#passwordNext`)
        this.googleApp = page.locator(`a[aria-label="Google apps"]`)
        this.iframe = page.frameLocator(`[name="app"]`)
        this.calander = page.locator("#drawerMiniMonthNavigator")
        this.createButton = page.locator(`[aria-label="Create"]`)
        this.keyEvent = page.locator(`[role="menu"] [data-key="event"]`).last()
        this.startDate = page.locator(`[data-key="startDate"]`).first()
        this.dateRow = page.locator(`[role="rowgroup"]`).nth(1)
        this.monthYear = page.locator(`[data-is-not-tabbable="true"] [jsname="B1A7Xe"]`).first()
        this.nextMonth = page.locator(`[aria-label="Next month"]`).nth(1)
        this.previousMonth = page.locator(`[aria-label="Previous month"]`).nth(1)
    }

    async signinGoogleAccount() {
        await this.page.goto("https://www.google.com/")
        await this.signIn.waitFor({state:"visible"})
        await this.signIn.click()
        await this.email.waitFor({state:"visible"})
        await this.email.type('rchandel@clanap.com')
        await this.nextButton.click()
        await this.password.waitFor({state:"visible"})
        await this.password.type("Raghvendra@#1")
        await this.passNextbutton.click()
        await this.page.waitForTimeout(1000)
        await this.page.goto("https://www.google.com/")

        await this.googleApp.waitFor({state:"visible"})

    }

    async navigateCalanderPage() {
        
        await this.googleApp.click()
        await this.iframe.locator(`[data-text="Calendar"]`).click()
        await this.calander.waitFor({state:"visible"})
    }

    async createEvent() {
        await this.page.waitForTimeout(2000)
        await this.createButton.waitFor({state:"visible"})
        await this.createButton.click()
        await this.page.waitForTimeout(1000)
        await this.keyEvent.waitFor({state:"visible"})
        await this.keyEvent.click()
        await this.startDate.click()
        await this.dateRow.waitFor({state:"visible"})

    }

    async selectDate(n) {
        const day = displayDayOfMonth()
        let date = day + (n)
        await this.page.evaluate((date) => {
            const element = document.querySelector(`[aria-label="${date}}, today"]`);
            if (element) {
                element.click();
              }
            }, date);
          console.log('Clicked on day:', date);

    }

    async selectMonthForUpcoming(n) { // n here denote which month you want in count number like 1,2,3 etc
        const month = displayMonthOfYear()
        for (let i=0;i<n;i++) {
            await this.nextMonth.click()
        }
            const text = await this.monthYear.textContent()
            const textMonth = text.split(2)
            expect(textMonth[0].trim()).toEqual(monthNames[month+n])
    }

    async selectMonthForPrevious(n) { // n here denote which month you want in count number like 1,2,3 etc
        const month = displayMonthOfYear()
        for (let i=0;i<n;i++) {
            await this.previousMonth.click()
        }
    }

}
export default CalanderEvent