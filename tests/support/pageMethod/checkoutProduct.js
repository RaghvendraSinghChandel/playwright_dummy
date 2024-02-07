import {expect} from "@playwright/test";
import AddProduct from "./addProductIntoCart";

class CheckOut extends AddProduct {
    constructor (page, isMobile) {
        super(page, isMobile);
        this.page = page
        this.isMobile = isMobile
        this.checkout = page.getByTestId('checkout')
        this.firstName = page.getByTestId('firstName')
        this.lastName = page.getByTestId('lastName')
        this.postalCode = page.getByTestId('postalCode')
        this.continue = page.getByTestId('continue')
    }

    async checkoutProduct(firstName, lastName, postalCode) {
        await this.cartProductCount.click()
        await expect(this.checkout).toBeVisible()
        await this.checkout.click()
        await this.firstName.type(firstName)
        await expect(this.firstName).toHaveValue(firstName)
        await this.lastName.type(lastName)
        await expect(this.lastName).toHaveValue(lastName)
        await this.postalCode.type(postalCode)
        await expect(this.postalCode).toHaveValue(postalCode)
        await this.continue.click()


    }
}
export default CheckOut