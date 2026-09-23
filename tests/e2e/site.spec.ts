import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home is bilingual and features three distinct cities', async ({ page, isMobile }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-AU');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Driven');
  await expect(page.locator('.event-card')).toHaveCount(3);
  expect(await page.locator('.event-card').evaluateAll((cards) => new Set(cards.map((card) => card.getAttribute('data-city'))).size)).toBe(3);
  await expect(page.getByRole('link', { name: 'Switch to Chinese' })).toHaveAttribute('href', '/zh/');
  if (isMobile) {
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.locator('#mobile-menu')).toBeVisible();
    await page.locator('#mobile-menu a[href="/events/"]').click();
  } else {
    await page.locator('nav[aria-label="Primary navigation"] a[href="/events/"]').click();
  }
  await expect(page).toHaveURL(/\/events\/$/);
});

test('archive spans five cities, online and multiple years', async ({ page }) => {
  await page.goto('/events/');
  await expect(page.locator('.event-card')).toHaveCount(17);
  for (const city of ['Sydney', 'Melbourne', 'Adelaide', 'Perth', 'Brisbane', 'Online']) {
    await expect(page.locator(`.event-card[data-city="${city}"]`).first()).toBeVisible();
  }
  await page.getByRole('button', { name: 'Perth' }).click();
  await expect(page.getByRole('button', { name: 'Perth' })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.event-card:visible')).toHaveCount(3);
  await expect(page.locator('[data-result-count]')).toContainText('3');
  await page.getByRole('button', { name: 'All' }).click();
  await expect(page.locator('.event-card:visible')).toHaveCount(17);
  await page.locator('a[href="/events/sydney-financial-planning/"]').click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Financial & Retirement Planning');
  await expect(page.locator('a[href*="notion.site"]')).not.toHaveCount(0);
});

test('Chinese routes and language switch preserve page context', async ({ page }) => {
  await page.goto('/zh/events/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect(page.locator('.event-card')).toHaveCount(17);
  await page.locator('a[href="/zh/events/brisbane-pilates-august/"]').click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('普拉提');
  await page.getByRole('link', { name: 'Switch to English' }).click();
  await expect(page).toHaveURL(/\/events\/brisbane-pilates-august\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Pilates Together');
});

test('mobile pages do not overflow horizontally', async ({ page, isMobile }) => {
  test.skip(!isMobile);
  for (const route of ['/', '/zh/', '/events/', '/about/']) {
    await page.goto(route);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  }
});

test('core pages have no serious accessibility violations', async ({ page }) => {
  for (const route of ['/', '/zh/', '/events/', '/about/']) {
    await page.goto(route);
    const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(violations.filter((item) => item.impact === 'serious' || item.impact === 'critical'), route).toEqual([]);
  }
});
