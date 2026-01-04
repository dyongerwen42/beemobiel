#!/usr/bin/env node

/**
 * Visual Regression Testing Setup for BeeMobiel
 * Sets up Playwright for visual consistency testing
 */

const fs = require('fs')
const path = require('path')

console.log('🎨 Setting up visual regression testing for consistency monitoring...')

// Create visual regression test configuration
const playwrightConfig = `
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],

  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
`

// Create visual test for consistency
const visualTest = `
import { test, expect } from '@playwright/test';

test.describe('BeeMobiel Visual Consistency Tests', () => {
  test('Homepage button consistency', async ({ page }) => {
    await page.goto('/');
    
    // Test primary buttons
    const primaryButtons = page.locator('a[href="/tarieven"]');
    await expect(primaryButtons).toHaveScreenshot('primary-button.png');
  });

  test('Pricing cards consistency', async ({ page }) => {
    await page.goto('/tarieven');
    
    // Test pricing card layout
    const pricingCards = page.locator('.grid').first();
    await expect(pricingCards).toHaveScreenshot('pricing-cards.png');
  });

  test('Form input consistency', async ({ page }) => {
    await page.goto('/contact');
    
    // Test form inputs
    const contactForm = page.locator('form').first();
    await expect(contactForm).toHaveScreenshot('contact-form.png');
  });

  test('Hero sections consistency', async ({ page }) => {
    const heroPages = ['/', '/lessen', '/tarieven', '/contact', '/over-ons'];
    
    for (const path of heroPages) {
      await page.goto(path);
      const hero = page.locator('section').first();
      await expect(hero).toHaveScreenshot(\`hero-\${path.replace('/', '') || 'home'}.png\`);
    }
  });

  test('Card shadows and borders consistency', async ({ page }) => {
    await page.goto('/');
    
    // Check feature cards
    const featureCards = page.locator('[class*="shadow"]').first();
    await expect(featureCards).toHaveScreenshot('card-shadows.png');
  });
});

test.describe('Responsive Consistency Tests', () => {
  test('Mobile button consistency', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const mobileButton = page.locator('a[href="/tarieven"]').first();
    await expect(mobileButton).toHaveScreenshot('mobile-button.png');
  });

  test('Tablet card layout consistency', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/tarieven');
    
    const tabletCards = page.locator('.grid').first();
    await expect(tabletCards).toHaveScreenshot('tablet-cards.png');
  });
});
`

// Create directory structure
const testsDir = path.join(process.cwd(), 'tests', 'visual')
fs.mkdirSync(testsDir, { recursive: true })

// Write files
fs.writeFileSync('playwright.config.ts', playwrightConfig.trim())
fs.writeFileSync(path.join(testsDir, 'consistency.spec.ts'), visualTest.trim())

// Update package.json with new scripts
const packageJsonPath = 'package.json'
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

packageJson.scripts = {
  ...packageJson.scripts,
  'test:visual': 'playwright test',
  'test:visual:ui': 'playwright test --ui',
  'test:visual:update': 'playwright test --update-snapshots'
}

packageJson.devDependencies = {
  ...packageJson.devDependencies,
  '@playwright/test': '^1.40.0'
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

console.log('✅ Visual regression testing setup complete!')
console.log('📝 Run: npm install && npx playwright install')
console.log('🎭 Run tests: npm run test:visual')
console.log('📸 Update snapshots: npm run test:visual:update')




