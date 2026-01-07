import {test,expect} from '@playwright/test';
test("ciit test",async({page})=>{
    await page.goto("https://ciitstudent.com")
    const email=await page.locator("id=email_address")
    await email.fill("yuvraj.gadadare@gmil.com")
    const pass=await page.locator("id=password")
     await pass.fill("pp")
     await email.getAttribute("value");
     console.log("Email value:",email);
});