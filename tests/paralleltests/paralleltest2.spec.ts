import test from "@playwright/test";
const timeout=0;
test("Pt2-1",async({page})=>{
    console.log("Pt2-1 started");
    await page.waitForTimeout(timeout);
})
test("Pt2-2",async({page})=>{
    console.log("Pt2-2 started");
    await page.waitForTimeout(timeout);
})
test("Pt2-3",async({page})=>{
    console.log("Pt2-3 started");
    await page.waitForTimeout(timeout);
})
test("Pt2-4",async({page})=>{
    console.log("Pt2-4 started");
    await page.waitForTimeout(timeout);
})