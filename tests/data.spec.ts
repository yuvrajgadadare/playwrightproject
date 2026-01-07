  import * as fs from 'fs';
    import { test, expect } from '@playwright/test';
    import * as path from 'path';
    // Read the JSON file and parse its content
    
    const testData = JSON.parse(fs.readFileSync('./testData.json', 'utf-8'));
    test('should use data from JSON file', async ({ page }) => {
      // Access data fields using dot notation
      console.log('Username:', testData.username);
      console.log('Password:', testData.password);
      console.log('First item:', testData.items[0]);

      // Example usage in a test
      await page.goto('https://example.com/login');
      await page.locator('#username').fill(testData.username);
      await page.locator('#password').fill(testData.password);
      await page.locator('#loginButton').click();

      // Assertions based on data
      await expect(page.locator('.welcomeMessage')).toContainText(`Welcome, ${testData.username}`);
    });