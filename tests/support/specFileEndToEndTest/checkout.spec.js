import test from "../fixture/pageObject";
import * as userData from "../testData/userInfo.json"

test.describe("checkout product",()=> {
    test.beforeEach(async({login,addProduct})=> {
        await login.loginWithValidCredential("standard_user","secret_sauce")
        await addProduct.selectProductAddIntoCart()
    })

    test("checkout product",async({checkout})=> {
        await checkout.checkoutProduct(userData.firstName, userData.lastName, userData.postalCode)

    })
})