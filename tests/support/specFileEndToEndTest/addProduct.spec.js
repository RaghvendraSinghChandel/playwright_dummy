import test from "../fixture/pageObject";

test.describe("add product into cart",()=> {
    test.beforeEach(async({login})=> {
        await login.loginWithValidCredential("standard_user","secret_sauce")
    })

    test("add product into cart",async({addProduct})=> {
        await addProduct.selectProductAddIntoCart()
    })

})