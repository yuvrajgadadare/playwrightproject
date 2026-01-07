import {test} from "@playwright/test";
test("dashboard",async({page})=>{
    await page.goto("https://ciitstudent.com/dashboard");
    await page.waitForTimeout(10000);
})