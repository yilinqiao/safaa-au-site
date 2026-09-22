import { expect, test } from '@playwright/test';

test('English home is the default route', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Driven');
  await expect(page.locator('a[href="/events/"]')).toHaveCount(3);
});

test('Chinese home is available and links to the bilingual activity index', async ({ page }) => {
  await page.goto('/zh/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('积极进取');
  const menuButton = page.getByRole('button', { name: 'Open menu' });
  if (await menuButton.isVisible()) {
    await menuButton.click();
    await page.locator('[data-mobile-menu] a[href="/zh/events/"]').click();
  } else {
    await page.locator('nav a[href="/zh/events/"]').click();
  }
  await expect(page).toHaveURL(/\/zh\/events\/$/);
  await expect(page.locator('.event-card')).toHaveCount(12);
});

test('mobile home has no horizontal overflow', async ({ page }) => {
  await page.goto('/');
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
});
