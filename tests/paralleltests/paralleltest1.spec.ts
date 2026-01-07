import test from "@playwright/test";
const timeout=0;
test("Pt1-1",async({page})=>{
    console.log("Pt1-1 started");
    await page.waitForTimeout(timeout);
})
test("Pt1-2",async({page})=>{
    console.log("Pt1-2 started");
    await page.waitForTimeout(timeout);
})
test("Pt1-3",async({page})=>{
    console.log("Pt1-3 started");
    await page.waitForTimeout(timeout);
})
test("Pt1-4",async({page})=>{
    console.log("Pt1-4 started");
    await page.waitForTimeout(timeout);
})