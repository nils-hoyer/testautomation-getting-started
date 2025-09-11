# Playwright Cheat Sheet

Übersichtliche Referenz der wichtigsten Playwright-Befehle.

## Test-Struktur

#### Grundlegender Test
```typescript
import { test, expect } from '@playwright/test'

test('Test-Beschreibung', async ({ page }) => {
  await page.goto('https://test-boutique.vercel.app')
  await page.getByTestId('product-1').click()
  await expect(page).toHaveTitle('Test-Boutique')
})
```

#### Test deaktivieren
```typescript
// Test überspringen
test.skip('defekter Test', async ({ page }) => {
  // ...
})
```

## Locators

#### Grundlegende Locators
Das sind die empfohlenen Selektoren. Priorität in der angegebenen Reihenfolge.

```typescript
// Nach TestId
page.getByTestId('login-form')

// Nach Role
page.getByRole('button', { name: 'Senden' })
page.getByRole('link', { name: 'Startseite' })

// Nach Text
page.getByText('Willkommen')
page.getByText(/willkommen/i) // Groß-/Kleinschreibung ignorieren

```

#### CSS Locators
Falls notwendig könnt ihr auf CSS Selektoren zurückgreifen.

```typescript
// CSS-Selektoren
page.locator('.class-name')
page.locator('#id-name')
page.locator('input[type="email"]')

// Locators kombinieren
page.locator('#container >> .item')
page.locator('.form').locator('input[type="submit"]')
```

#### Locators filtern
```typescript
// Nach Text filtern
page.locator('.items').filter({ hasText: 'Item 3' })

// Nach Child-Element filtern
page.locator('.items').filter({ has: page.locator('.selected') })

// Erstes/letztes/n-tes Element abrufen
page.locator('.item').first()
page.locator('.item').last()
page.locator('.item').nth(2)
```

Weitere Informationen zu Locators: [Playwright Locators Dokumentation](https://playwright.dev/docs/locators)

## Actions

#### Navigation
```typescript
// Zu URL navigieren
await page.goto('https://example.com')
await page.goto('/relativer-pfad')
```

#### Klicks und Interaktionen
```typescript
// Klicken
await page.locator('button').click()
await page.locator('button').dblclick() // Doppelklick

// Hover 
await page.locator('.menu').hover()

// Drag & Drop
await page.locator('#source').dragTo(page.locator('#target'))
```

#### Formular-Interaktionen
```typescript
// Eingabefeld ausfüllen
await page.locator('input').fill('text')

// Eingabefeld leeren
await page.locator('input').clear()

// Dropdown-Option auswählen
await page.selectOption('select', 'value')
await page.selectOption('select', { label: 'Options-Text' })
await page.selectOption('select', 2) // Auswahl nach Index

// Checkbox an-/abwählen
await page.locator('input[type="checkbox"]').check()
await page.locator('input[type="checkbox"]').uncheck()

// Datei hochladen
await page.setInputFiles('input[type="file"]', 'path/to/file.txt')
```

#### Tastatur und Maus
```typescript
// Tastenkombinationen
await page.keyboard.press('Enter')
await page.keyboard.press('Control+A')
```

Weitere Informationen zu Actions: [Playwright Input Dokumentation](https://playwright.dev/docs/input)

## Assertions

#### Seiten-Überprüfungen
```typescript
// Seiten-URL
await expect(page).toHaveURL('https://example.com')
await expect(page).toHaveURL(/.*beispiel.*/)

// Seitentitel
await expect(page).toHaveTitle('Seitentitel')
await expect(page).toHaveTitle(/teil.*titel/)
```

#### Element-Überprüfungen
```typescript
// Sichtbarkeit
await expect(locator).toBeVisible()
await expect(locator).toBeHidden()

// Textinhalt
await expect(locator).toHaveText('exakter text')
await expect(locator).toContainText('teil-text')
await expect(locator).toHaveText(/regex.*muster/)
await expect(page.locator('ul > li')).toHaveText(['Text 1', 'Text 2', 'Text 3']);

// Element-Eigenschaften
await expect(locator).toBeEnabled()
await expect(locator).toBeDisabled()
await expect(locator).toBeChecked()
await expect(locator).toBeEmpty()

// Formular-Werte
await expect(locator).toHaveValue('input-value')
await expect(page.locator('select option')).toHaveValues(['red', 'green', 'blue']);

// Anzahl
await expect(locator).toHaveCount(5)
```

#### Negationen
```typescript
// .not für negative Überprüfungen verwenden
await expect(locator).not.toBeEmpty()
await expect(locator).not.toContainText('unerwünschter text')
```

Weitere Informationen zu Assertions: [Playwright Test Assertions Dokumentation](https://playwright.dev/docs/test-assertions)


## Page Object Pattern

#### Page Object
```typescript
// pages/login-page.ts
export class LoginPage {

  // Locators
  constructor(page) {
    this.page = page;
    this.emailInput = this.page.getByTestId('login-email');
    this.passwordInput = this.page.getByTestId('login-password');
    this.loginButton = this.page.getByTestId('login-button');
  }

  // Actions
  async goto() {
    await this.page.goto('/login')
  }
  async login(email, password) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }

}
```

#### Page Object im Test verwenden
```typescript
import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'

test('Login mit Page Object', async ({ page }) => {
  const loginPage = new LoginPage(page)
  
  await loginPage.goto()
  await loginPage.login('max@mail.de', '12345')
  
  await expect(page).toHaveURL('/')
})
```

Weitere Informationen zu Page Object: [Playwright Test Page Object Dokumentation](https://playwright.dev/docs/pom)

#### CLI-Befehle

```bash
# Alle Tests ausführen
npx playwright test

# Mit verschiedenen Browsern ausführen
npx playwright test --project=webkit

# Spezifischen Test ausführen
npx playwright test login.spec.ts

# Test-Report öffnen
npx playwright show-report
```

Weitere Informationen zur Playwright CLI: [Playwright Test CLI Dokumentation](https://playwright.dev/docs/test-cli)

## Nützliche Links

- [Playwright Dokumentation](https://playwright.dev/)
- [Test Debugging](https://playwright.dev/docs/debug)
- [HTML Aria Roles](https://www.w3.org/TR/html-aria/#docconformance)
- [Best Practices](https://playwright.dev/docs/best-practices)