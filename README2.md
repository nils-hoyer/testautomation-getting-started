
### Prerequisites
- Node.js (version 16 or higher)
- VS Code (recommended)

### Installation Steps

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd testautomation-getting-started
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Run your first test**
   ```bash
   npm test
   ```

5. **Open Playwright UI Mode (recommended for beginners)**
   ```bash
   npm run test:ui
   ```

### VS Code Setup (Recommended)

Install the recommended extension:
- **Playwright Test for VS Code** - Provides test discovery, running, and debugging capabilities

## 📁 Project Structure

```
├── tests/                    # Test files
│   ├── example.spec.ts      # Hello World example
│   ├── login.spec.ts        # Login flow example
│   └── assertions.spec.ts   # Assertions examples
├── pages/                   # Page Object Model
│   └── LoginPage.ts        # Example page class
├── fixtures/               # Test fixtures
│   └── baseTest.ts        # Custom test fixtures
├── utils/                  # Helper functions
│   └── testHelpers.ts     # Common utilities
├── docs/                   # Documentation
│   ├── cheatsheet.md      # Quick reference
│   ├── troubleshooting.md # Common issues
│   └── resources.md       # External resources
├── .github/workflows/      # GitHub Actions
│   └── playwright.yml     # CI pipeline
├── playwright.config.ts    # Playwright configuration
├── package.json           # Project dependencies
├── .env.example          # Environment variables template
└── .gitignore           # Git ignore rules
```

## 🧪 Available Test Scripts

```bash
# Run all tests in headless mode
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Open Playwright UI Mode
npm run test:ui

# Run tests and generate report
npm run test:report

# Debug tests
npm run test:debug
```

## 🔧 Configuration

The main configuration is in `playwright.config.ts`. Key settings include:
- Browser configurations (Chromium, Firefox, WebKit)
- Test directories and patterns
- Reporter configurations
- Global setup and teardown

## 📖 Learning Path

1. **Start Here**: Run the example test to verify your setup
2. **Basic Testing**: Explore `tests/example.spec.ts` for basic concepts
3. **Page Objects**: Learn about POM in `pages/LoginPage.ts`
4. **Advanced Features**: Check out fixtures and utilities
5. **CI/CD**: Understand the GitHub Actions workflow
6. **Documentation**: Use the docs folder for reference

## 🎓 Course Modules

### Module 1: Fundamentals
- Setting up Playwright
- Writing your first test
- Understanding selectors and locators

### Module 2: Core Features
- Assertions and expectations
- Handling different element types
- Working with async operations

### Module 3: Best Practices
- Page Object Model implementation
- Test organization and structure
- Data management with fixtures

### Module 4: Advanced Topics
- Custom fixtures
- Debugging techniques
- Performance testing basics

### Module 5: CI/CD Integration
- GitHub Actions setup
- Test reporting
- Deployment strategies

## 🔗 Resources

- [Official Playwright Documentation](https://playwright.dev/)
- [Playwright Community Discord](https://discord.com/invite/playwright-807756831384403968)
- [Course Documentation](./docs/)

## 🤝 Contributing

This is a learning repository. Feel free to:
- Submit issues for questions or problems
- Propose improvements via pull requests
- Share your learning experience

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Happy Testing! 🚀

*This repository is part of the Playwright Test Automation Course. For questions or support, please refer to the course materials or create an issue.*