import {test} from '@playwright/test';
import {expect} from '@playwright/test';
[
  { email: 'yuvraj.gadadare@gmail.com',pass:"pp", expected: 'Pass' },
  { email: 'yuvraj.gadadare@gmail.com',pass:"pp", expected: 'fail' },
  { email: 'yuvraj.gadadare@gmail.com',pass:"pp", expected: 'ss' },
].forEach(({ email,pass, expected }) => {
//   test.describe(() => {
    // test.beforeEach(async ({ page }) => {
     

    // });
    var title="test"+expected;
    test(title, async ({ page }) => {
     await page.goto(`https://ciitstudent.com/`);
      await page.locator("id=email_address").fill(email);
      await page.locator("id=password").fill(pass);
      await page.locator("xpath=//*[@type='submit']").click();
    });
  });
// });