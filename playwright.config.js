// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
        {
      name: 'Chrome Desktop',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});

