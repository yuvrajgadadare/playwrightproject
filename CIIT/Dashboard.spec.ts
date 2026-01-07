import {test,expect} from '@playwright/test';


test("Login",async({page})=>{
    await page.goto("https://ciitstudent.com/dashboard");
    await page.waitForTimeout(5000);
})