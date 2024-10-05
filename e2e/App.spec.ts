import { test, expect } from '@playwright/test';

test.describe('Allow Me Application Tests', () => {
  test('should verify the page title', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page).toHaveTitle(/Allow me new/);
  });

  test('should verify that at least one article was loaded', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('article');
    const articles = page.locator('article');
    const articleCount = await articles.count();
    expect(articleCount).toBeGreaterThanOrEqual(1);
  });

  test('should verify filtering by author', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const filterButton = page.locator('button', {
      hasText: 'Filtrar por autor',
    });
    await filterButton.click();
    const authorOption = page.locator('ul >> text=João Silva');
    await authorOption.click();
    const articles = page.locator('article');
    const articleCount = await articles.count();
    expect(articleCount).toBeGreaterThanOrEqual(1);
  });

  test('should verify the display of the latest news', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const newsSection = page.locator('[data-testid="news-section"]');
    await expect(newsSection).toBeVisible();
    const newsItems = newsSection.locator('[data-testid="news-item"]');
    await expect(newsItems).toHaveCount(4);
  });
});
