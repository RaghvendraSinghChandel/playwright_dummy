import {expect} from "@playwright/test"

class Login {
    constructor(page, isMobile) {
        this.page = page
        this.isMobile = isMobile
        this.userNameInput = page.getByTestId('username')
        this.password = page.getByTestId('password')
        this.loginButton = page.getByTestId('login-button')
    }

    async loginWithValidCredential(username, password) {
        await this.page.goto('/')
        await this.userNameInput.clear()
        await this.userNameInput.type(username)
        await expect (this.userNameInput).toHaveValue(username)
        await this.password.clear()
        await this.password.type(password)
        await expect (this.password).toHaveValue(password)
        await this.loginButton.click()
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html')
    }

    

}
export default Login