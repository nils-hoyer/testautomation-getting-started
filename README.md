# Playwright Test Automation - Getting Started

Dieses Repository ist die Basis für die Kurse auf https://www.codesurfer.io/kurse

## 🚀 Schnellstart

Folge diesen Schritten, um deine Playwright-Testumgebung einzurichten:

### Voraussetzungen

1. **Visual Studio Code installieren**
   - Download: https://code.visualstudio.com/download
   - Installiere VS Code auf deinem System

2. **Playwright Extension installieren**
   - Öffne VS Code
   - Gehe zu Extensions (Strg+Shift+X / Cmd+Shift+X)
   - Suche nach "Playwright Test for VS Code" und installiere die Extension
   
   ![Playwright Extension](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Playwright+Extension+Installation)

3. **Node.js installieren**
   - Benötigt: Node.js Version 20 oder neuer
   - Download: https://nodejs.org/en/download

### Repository Setup

4. **Repository herunterladen**
   - Klicke auf den grünen "Code" Button und dann "Download ZIP"
   - Oder nutze Git: `git clone <repository-url>`
   
   ![Repository Download](https://via.placeholder.com/800x300/28A745/FFFFFF?text=Repository+Download+Button)

5. **Projekt in VS Code öffnen**
   - Öffne VS Code
   - Datei > Ordner öffnen... und wähle den heruntergeladenen Ordner
   - Die NPM-Skripte findest du links im Explorer unter "NPM SCRIPTS"
   
   ![VS Code NPM Scripts](https://via.placeholder.com/600x400/6F42C1/FFFFFF?text=NPM+Scripts+Panel)

### Installation und Setup

**Wichtig**: Die Ausgaben der folgenden Befehle siehst du im Terminal-Tab im unteren Bereich von VS Code.

6. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```
   - Installiert Playwright und alle benötigten Pakete

7. **Browser installieren**
   ```bash
   npx playwright install
   ```
   - Lädt die Test-Browser herunter (Chromium, Firefox, WebKit)

8. **Setup überprüfen**
   ```bash
   npm run test
   ```
   - Führt die Beispiel-Tests aus
   - Wenn alle Tests erfolgreich sind ✅, ist dein Setup korrekt!

## ✅ Fertig!

Wenn alle Tests erfolgreich durchgelaufen sind, bist du bereit für den Kurs!

Happy Testing! 🎭🚀