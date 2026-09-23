import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:4321',
    trace: 'on-first-retry',
  },
  webServer: process.env.BASE_URL ? undefined : {
    command: 'node node_modules/astro/bin/astro.mjs dev --host 127.0.0.1 --port 4321',
    env: { ASTRO_TELEMETRY_DISABLED: '1', ASTRO_DEV_BACKGROUND: '0' },
    url: 'http://127.0.0.1:4321/',
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [
    {
      name: 'chromium-desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium-mobile',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
