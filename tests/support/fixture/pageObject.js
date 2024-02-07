import {test as baseTest} from "@playwright/test";

import Login from "../pageMethod/loginPage";
import AddProduct from "../pageMethod/addProductIntoCart";
import CheckOut from "../pageMethod/checkoutProduct";
import HandleAttribute from "../teatingVariousPlaywrightFeatures/handleAttribute";
import CalanderEvent from "../teatingVariousPlaywrightFeatures/calanderEventHandle";
import API from "../teatingVariousPlaywrightFeatures/apiValidate";


const test = baseTest.extend({
    login: async({page,isMobile}, use)=> {
        const login = new Login(page, isMobile)
        await use(login)
    },
    addProduct: async ({page,isMobile}, use) => {
        const addProduct = new AddProduct(page, isMobile)
        await use (addProduct)
    },
    checkout: async ({page, isMobile}, use) => {
        const checkout = new CheckOut(page, isMobile)
        await use(checkout)
    },
    handleAttr: async({page,isMobile}, use)=> {
        const handleAttr = new HandleAttribute(page,isMobile)
        await use (handleAttr)
    },
    calEvent: async ({page,isMobile}, use)=> {
        const calEvent = new CalanderEvent(page, isMobile)
        await use(calEvent)
    },
    api: async ({page, isMobile}, use)=> {
        const api = new API(page, isMobile)
        await use(api)
    }
})
export default test