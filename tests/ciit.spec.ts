import {test,expect} from '@playwright/test';
test("ciit test",async({page})=>{
    await page.goto("https://ciitstudent.com/Accountant/Student/StudentRegistrationForm")
    // await expect(page).toHaveTitle("Student Management System")
  //   const email=await page.locator("id=email_address")
  //  await email.fill("yuvraj.gadadare@gmil.com")
  //    var txt=await email.inputValue();
  //    console.log("Email value:",txt);
    const dd=await page.locator("id=qualification");
    await dd.selectOption("BE");
   var txt=await dd.inputValue();
     console.log("Email value:",txt);
     await page.waitForTimeout(5000);
});
 