import {test} from "@playwright/test"
test("First-Test",async({browser})=>{

    const studentcontext=await browser.newContext();
    // const institutecontext=await browser.newContext();
    const studentpage=await studentcontext.newPage();
    // const institutepage=await institutecontext.newPage();
    await studentpage.goto("https://ciitstudent.com/")
    // await institutepage.goto("https://ciitinstitute.com/")
    await studentpage.waitForTimeout(3000);
    // await institutepage.waitForTimeout(3000);
})


// test("first",async({page,context})=>{
  
// })
// test("second",async({page,context})=>{

// })
