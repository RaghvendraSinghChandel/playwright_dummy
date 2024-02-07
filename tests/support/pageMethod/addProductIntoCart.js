import {expect} from "@playwright/test"

class AddProduct {
    constructor(page,isMobile) {
        this.page = page;
        this.isMobile = isMobile
        this.addProductLabPack = page.getByTestId('add-to-cart-sauce-labs-backpack')
        this.cartProductCount = page.locator('.shopping_cart_badge')
    }

    async selectProductAddIntoCart() {
        const product =  await this.page.getByText('Sauce Labs Backpack')
        await expect(product).toBeVisible()
        await product.click()
        await expect(this.addProductLabPack).toBeVisible()
        await this.addProductLabPack.click()
        await expect(this.cartProductCount).toHaveText('1')

 
     }
}
export default AddProduct