import {test as setup} from '@playwright/test';
import path from 'path';
const STORAGE_STATE=path.join(__dirname, '../playwright/.auth/user.json');
setup("Authenticate",async({page})=>{
    await page.goto("https://ciitstudent.com/");
    await page.locator("id=email_address").fill("yuvraj.gadadare@gmail.com");
    await page.locator("id=password").fill("pp");
    await page.locator("xpath=//*[@type='submit']").click();
    await page.waitForURL("https://ciitstudent.com/dashboard");
    // await page.context().storageState({path:STORAGE_STATE});
    await page.context().storageState({path:"playwright/.auth/user.json"});
});