import {test,expect} from "@playwright/test"
test("SampleTest",async({page})=>{
    await page.goto("https://ciitstudent.com/Enquiry/Index");
   
    const e= await page.locator("xpath=//*[@value='Male']")
    await e.check();
    await expect(e).toBeChecked();
     await page.waitForTimeout(4000);
    
})