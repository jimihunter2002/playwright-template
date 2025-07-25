import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  //   globalSetup: require.resolve('./tests/utils/auth.ts'),
  use: {
    testIdAttribute: 'data-test',
    headless: process.env.HEADLESS !== 'false',
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  timeout: 30000,
  retries: 1,
  testDir: './tests/specs',
  reporter: [['html', { open: 'never' }], ['allure-playwright']],
});
