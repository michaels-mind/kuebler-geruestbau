import { test, expect, type Page } from '@playwright/test';

// ─── Hilfsfunktion: Formular gültig ausfüllen ────────────────────────────────
async function fillContactForm(page: Page) {
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="phone"]', '+49 123 456789');
  await page.fill('input[name="project"]', 'Malergerüst');
  await page.fill('textarea[name="message"]', 'Testnachricht für den Smoke-Test.');
  await page.check('input[name="privacy-consent"]');
}

// ─── SMOKE: Seiten erreichbar ────────────────────────────────────────────────
test.describe('Smoke: Seiten erreichbar', () => {
  const pages: [string, string][] = [
    ['Startseite', '/'],
    ['AGB', '/agb'],
    ['Impressum', '/impressum'],
    ['Datenschutz', '/privacy'],
  ];

  for (const [name, path] of pages) {
    test(`${name} lädt mit Status 200 und ohne JS-Fehler`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (err) => errors.push(err.message));

      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(1000);
      expect(errors).toHaveLength(0);
    });
  }
});

// ─── SMOKE: Kontaktformular ──────────────────────────────────────────────────
test.describe('Smoke: Kontaktformular', () => {
  test('Happy-Path: Absenden zeigt Erfolgsmeldung (gemockt)', async ({ page }) => {
    await page.goto('/');

    await page.route('**/api/contact', (route) =>
      route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Anfrage erfolgreich versendet.' }),
      })
    );

    await fillContactForm(page);
    await page.click('button[type="submit"]');

    await expect(
      page.getByText('Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.')
    ).toBeVisible();
  });

  test('Negativpfad: Serverfehler (500) zeigt Fehler-Dialog', async ({ page }) => {
    await page.goto('/');

    await page.route('**/api/contact', (route) =>
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Interner Serverfehler.' }),
      })
    );

    // Dialog-Handler VOR dem Klick registrieren und sofort schließen,
    // sonst blockiert alert() die Seite (Deadlock auf Chromium).
    let dialogMessage: string | null = null;
    page.once('dialog', async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.dismiss();
    });

    await fillContactForm(page);
    await page.click('button[type="submit"]');

    await expect.poll(() => dialogMessage ?? '').toContain('Server-Fehler');

    await expect(
      page.getByText('Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.')
    ).toHaveCount(0);
  });

  test('Negativpfad: Leeres Formular wird nicht abgeschickt', async ({ page }) => {
    let apiCalled = false;
    await page.route('**/api/contact', (route) => {
      apiCalled = true;
      return route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    await page.goto('/');
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(800);

    expect(apiCalled).toBe(false);
    await expect(
      page.getByText('Vielen Dank! Ihre Anfrage wurde erfolgreich versendet.')
    ).toHaveCount(0);
  });
});