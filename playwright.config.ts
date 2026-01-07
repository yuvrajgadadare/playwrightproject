import { defineConfig, devices } from '@playwright/test';
import path from 'path'
export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');
// export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/employee.json');
export default defineConfig({
  testDir: './CIIT',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // reporter: process.env.CI ? 'blob' : 'html',
  reporter: 'html',
    use: {
      trace: 'on-first-retry',
  },
  //  webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  //   stdout: 'ignore',
  //   stderr: 'pipe',
  // },
  projects: [
    {
      name:"setup",
       testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      storageState:STORAGE_STATE
      },
      dependencies: ['setup']
    },
  ],
});
