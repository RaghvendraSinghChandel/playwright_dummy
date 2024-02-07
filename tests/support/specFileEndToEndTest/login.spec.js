import test from "../fixture/pageObject";

test.describe("login functionality",()=> {
    test("login with valid credential",async ({login})=> {
        await login.loginWithValidCredential("standard_user","secret_sauce")
    })
})