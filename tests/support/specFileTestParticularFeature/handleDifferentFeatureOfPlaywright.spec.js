import test from "../fixture/pageObject";

test.describe("handle different feature in playwright",()=> {
    test("handle attribute",async({handleAttr})=> {
        await handleAttr.handleAttributeBasedOnRequirement()
    })
})

test.describe.skip("Select Different date",()=> {
    test("select today", async({calEvent})=> {
        await calEvent.signinGoogleAccount()
        await calEvent.navigateCalanderPage()
        await calEvent.createEvent()
        await calEvent.selectDate(0)
    })
    test("select yesterday", async({calEvent})=> {
        await calEvent.signinGoogleAccount()
        await calEvent.navigateCalanderPage()
        await calEvent.createEvent()
        await calEvent.selectDate(-1)
    })
    test("select tomorrow", async({calEvent})=> {
        await calEvent.signinGoogleAccount()
        await calEvent.navigateCalanderPage()
        await calEvent.createEvent()
        await calEvent.selectDate(1)
    })

    test("select date based on requirement (past 5 days)", async({calEvent})=> {
        await calEvent.signinGoogleAccount()
        await calEvent.navigateCalanderPage()
        await calEvent.createEvent()
        await calEvent.selectDate(-5)
    })

    test("select date based on requirement (next 5 days)", async({calEvent})=> {
        await calEvent.signinGoogleAccount()
        await calEvent.navigateCalanderPage()
        await calEvent.createEvent()
        await calEvent.selectDate(5)
    })
    test("select month based on requirement", async({calEvent})=> {
        await calEvent.signinGoogleAccount()
        await calEvent.navigateCalanderPage()
        await calEvent.createEvent()
        await calEvent.selectMonthForUpcoming(4)
    })
    test("select month based on requirement for previous month", async({calEvent})=> {
        await calEvent.signinGoogleAccount()
        await calEvent.navigateCalanderPage()
        await calEvent.createEvent()
        await calEvent.selectMonthForPrevious(4)
    })

    test("select month and then date based on requirement", async({calEvent})=> {
        await calEvent.signinGoogleAccount()
        await calEvent.navigateCalanderPage()
        await calEvent.createEvent()
        await calEvent.selectMonthForPrevious(13) // select past 13 month start from current
        await calEvent.selectDate(25)
    })
})

test.describe("mock api",()=> {

    test("validate landing page api of google",async({api})=> {
        await api.validateLandingAPI()
    })
})