# Playwright Cheat Sheet 📋

Quick reference guide for the most commonly used Playwright commands and patterns.

## 🔍 Locators

### Basic Locators
```typescript
// By role (recommended - most reliable)
page.getByRole('button', { name: 'Submit' })
page.getByRole('textbox', { name: 'Username' })
page.getByRole('link', { name: 'Home' })

// By text content
page.getByText('Welcome')
page.getByText(/welcome/i) // case insensitive

// By label (for form fields)
page.getByLabel('Password')

// By placeholder
page.getByPlaceholder('Enter your email')

// By test ID (add data-testid="..." to your HTML)
page.getByTestId('login-form')

// By alt text (for images)
page.getByAltText('Company logo')

// By title attribute
page.getByTitle('Close dialog')
```

### CSS and XPath Locators
```typescript
// CSS selectors
page.locator('.class-name')
page.locator('#id-name')
page.locator('[data-test="value"]')
page.locator('input[type="email"]')

// XPath (use sparingly)
page.locator('//button[contains(text(), "Submit")]')

// Combining locators
page.locator('.form').locator('input[type="text"]')
page.locator('#container >> .item')
```

### Filtering Locators
```typescript
// Filter by text
page.locator('button').filter({ hasText: 'Submit' })

// Filter by child element
page.locator('.card').filter({ has: page.locator('.badge') })

// Get first/last/nth element
page.locator('.item').first()
page.locator('.item').last()
page.locator('.item').nth(2)

// Count elements
await page.locator('.item').count()
```

## 🎯 Actions

### Navigation
```typescript
// Go to URL
await page.goto('https://example.com')
await page.goto('/relative-path')

// Go back/forward
await page.goBack()
await page.goForward()

// Reload page
await page.reload()
```

### Clicks and Interactions
```typescript
// Click
await page.locator('button').click()
await page.locator('button').click({ button: 'right' }) // right click
await page.locator('button').dblclick() // double click

// Hover
await page.locator('.menu').hover()

// Focus
await page.locator('input').focus()

// Drag and drop
await page.locator('#source').dragTo(page.locator('#target'))
```

### Form Interactions
```typescript
// Fill input (clears first)
await page.locator('input').fill('text')

// Type (doesn't clear, simulates typing)
await page.locator('input').type('text')

// Clear input
await page.locator('input').clear()

// Select dropdown option
await page.selectOption('select', 'value')
await page.selectOption('select', { label: 'Option Text' })

// Check/uncheck checkbox
await page.locator('input[type="checkbox"]').check()
await page.locator('input[type="checkbox"]').uncheck()

// Upload file
await page.setInputFiles('input[type="file"]', 'path/to/file.txt')
```

### Keyboard and Mouse
```typescript
// Keyboard shortcuts
await page.keyboard.press('Enter')
await page.keyboard.press('Control+A')
await page.keyboard.press('Meta+C') // Cmd+C on Mac

// Type text
await page.keyboard.type('Hello World')

// Mouse actions
await page.mouse.click(100, 200)
await page.mouse.move(100, 200)
```

## ✅ Assertions

### Page Assertions
```typescript
// Page title
await expect(page).toHaveTitle('Page Title')
await expect(page).toHaveTitle(/partial.*title/)

// Page URL
await expect(page).toHaveURL('https://example.com')
await expect(page).toHaveURL(/.*example.*/)

// Page screenshot
await expect(page).toHaveScreenshot('homepage.png')
```

### Element Assertions
```typescript
// Visibility
await expect(locator).toBeVisible()
await expect(locator).toBeHidden()

// Text content
await expect(locator).toHaveText('exact text')
await expect(locator).toContainText('partial text')
await expect(locator).toHaveText(/regex.*pattern/)

// Element properties
await expect(locator).toBeEnabled()
await expect(locator).toBeDisabled()
await expect(locator).toBeFocused()
await expect(locator).toBeChecked() // for checkboxes/radio
await expect(locator).toBeEmpty()

// Attributes
await expect(locator).toHaveAttribute('class', 'active')
await expect(locator).toHaveClass('active')
await expect(locator).toHaveId('my-id')

// Form values
await expect(locator).toHaveValue('input value')

// Count
await expect(locator).toHaveCount(5)

// Screenshot
await expect(locator).toHaveScreenshot('element.png')
```

### Negation
```typescript
// Use .not for negative assertions
await expect(locator).not.toBeVisible()
await expect(locator).not.toContainText('unwanted text')
```

## ⏱️ Waits

### Automatic Waiting
Playwright automatically waits for elements to be actionable before performing actions.

### Explicit Waits
```typescript
// Wait for element state
await page.waitForSelector('.element')
await page.waitForSelector('.element', { state: 'visible' })
await page.waitForSelector('.element', { state: 'hidden' })

// Wait for page events
await page.waitForLoadState('networkidle')
await page.waitForLoadState('domcontentloaded')

// Wait for URL
await page.waitForURL('**/dashboard')
await page.waitForURL(/.*dashboard.*/)

// Wait for response
await page.waitForResponse('**/api/data')

// Wait for timeout
await page.waitForTimeout(1000) // avoid if possible

// Wait for function
await page.waitForFunction(() => document.title === 'New Title')
```

## 🐛 Debugging

### Debug Commands
```typescript
// Pause test execution
await page.pause()

// Step-by-step debugging
await page.step('Login user', async () => {
  await page.fill('#username', 'user')
  await page.fill('#password', 'pass')
  await page.click('#login')
})

// Console logs
console.log('Debug info:', await page.textContent('.status'))
```

### Screenshots and Videos
```typescript
// Take screenshot
await page.screenshot({ path: 'screenshot.png' })
await page.screenshot({ path: 'full-page.png', fullPage: true })

// Element screenshot
await page.locator('.component').screenshot({ path: 'component.png' })
```

### Browser DevTools
```typescript
// Open browser with DevTools
await page.pause() // Will open browser with DevTools
```

## 🎭 Test Structure

### Basic Test
```typescript
import { test, expect } from '@playwright/test'

test('test description', async ({ page }) => {
  await page.goto('https://example.com')
  await expect(page).toHaveTitle('Expected Title')
})
```

### Test Groups
```typescript
test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login')
  })

  test('should do something', async ({ page }) => {
    // test implementation
  })

  test('should do something else', async ({ page }) => {
    // test implementation
  })
})
```

### Test Configuration
```typescript
// Skip test
test.skip('broken test', async ({ page }) => {
  // This test will be skipped
})

// Skip conditionally
test.skip(process.platform === 'win32', 'Not supported on Windows')

// Only run this test
test.only('focus on this test', async ({ page }) => {
  // Only this test will run
})

// Slow test
test.slow() // Triples the timeout

// Custom timeout
test.setTimeout(60000) // 60 seconds
```

## 🔧 Configuration Tips

### Common Config Options
```typescript
// playwright.config.ts
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  }
})
```

### Environment Variables
```bash
# Run with different browsers
npx playwright test --project=webkit

# Run in headed mode
npx playwright test --headed

# Run specific test
npx playwright test login.spec.ts

# Run with UI mode
npx playwright test --ui

# Debug mode
npx playwright test --debug
```

## 📱 Mobile Testing

```typescript
// Use mobile device
import { devices } from '@playwright/test'

const iPhone = devices['iPhone 13']
await page.setViewportSize(iPhone.viewport)
```

## 🌐 API Testing

```typescript
test('API test', async ({ request }) => {
  const response = await request.get('/api/users')
  expect(response.status()).toBe(200)
  
  const users = await response.json()
  expect(users).toHaveLength(10)
})
```

## ⚡ Quick Commands Reference

```bash
# Install Playwright
npm init playwright@latest

# Install browsers
npx playwright install

# Run tests
npx playwright test

# Run with UI
npx playwright test --ui

# Show report
npx playwright show-report

# Generate code
npx playwright codegen https://example.com

# Run specific test
npx playwright test tests/login.spec.ts

# Run in headed mode
npx playwright test --headed

# Debug tests
npx playwright test --debug
```

---

> 💡 **Pro Tip**: Use `page.getByRole()` locators whenever possible - they're the most reliable and accessible way to find elements!
