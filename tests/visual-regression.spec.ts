import { test, expect, type Page } from '@playwright/test';

// Visual-Regression nur auf Chromium → stabile, vergleichbare Baselines.
// (Firefox/WebKit rendern minimal anders und würden ständig False-Positives liefern.)
test.skip(({ browserName }) => browserName !== 'chromium', 'Visual nur auf Chromium');

// Seite in stabilen Zustand bringen: alles geladen, Fonts da, Lazy-Bilder getriggert.
async function preparePage(page: Page, path: string) {
  await page.goto(path, { waitUntil: 'networkidle' });

  // Durch die Seite scrollen, damit lazy geladene Bilder erscheinen
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let total = 0;
      const distance = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        total += distance;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  await page.evaluate(() => document.fonts.ready);
  await page.waitForLoadState('networkidle');
}

const pages: [string, string][] = [
  ['startseite', '/'],
  ['impressum', '/impressum'],
  ['agb', '/agb'],
  ['datenschutz', '/privacy'],
];

test.describe('Visual-Regression', () => {
  for (const [name, path] of pages) {
    test(`${name} entspricht der Baseline`, async ({ page }) => {
      await preparePage(page, path);
      await expect(page).toHaveScreenshot(`${name}.png`, {
        fullPage: true,
        animations: 'disabled',
        maxDiffPixelRatio: 0.01, // 1% Toleranz gegen Mini-Rendering-Unterschiede
      });
    });
  }
});