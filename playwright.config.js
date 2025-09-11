import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://test-boutique.vercel.app',
  },
  timeout: 5_000,
  projects: [
    {
      name: 'Chrome Desktop',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});