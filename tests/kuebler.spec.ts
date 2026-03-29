import { test, expect } from '@playwright/test';

// ─── HOMEPAGE & HERO ─────────────────────────────────────────────────────────
test.describe('Homepage', () => {
  test('Seite lädt erfolgreich', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('Hero-Überschrift ist sichtbar', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Ihr Partner für sichere Gerüstlösungen')).toBeVisible();
  });

  test('Subline "in Nienburg & Umgebung" ist sichtbar', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('in Nienburg & Umgebung')).toBeVisible();
  });

  test('CTA-Button "Jetzt Angebot anfordern" verlinkt zu Kontakt', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const btn = page.locator('a[href="#contact"]').first();
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute('href', '#contact');
  });

  test('Keine JS-Konsolenfehler auf der Startseite', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto('/');
    await page.waitForTimeout(1500);
    expect(errors).toHaveLength(0);
  });
});

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
test.describe('Navbar', () => {
  test('Logo ist sichtbar und verlinkt auf /', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('header a[href="/"] img').first();
    await expect(logo).toBeVisible();
  });

  test('Alle Desktop-Navigationslinks sind vorhanden', async ({ page, viewport }) => {
    test.skip((viewport?.width ?? 1280) < 768, 'Nur Desktop');
    await page.goto('/');
    await page.waitForTimeout(1500);
    for (const [label, href] of [
      ['Leistungen', '/#services'],
      ['Projekte', '/#gallery'],
      ['Über Uns', '/#about'],
      ['Kontakt', '/#contact'],
    ]) {
      await expect(page.locator(`header a[href="${href}"]`).first()).toBeVisible();
    }
  });

  test('Mobile: Hamburger-Button ist sichtbar', async ({ page, viewport }) => {
    test.skip((viewport?.width ?? 1280) >= 768, 'Nur Mobile');
    await page.goto('/');
    await page.waitForTimeout(1500);
    const hamburger = page.getByLabel('Menü öffnen');
    await expect(hamburger).toBeVisible();
  });
});

// ─── FOOTER ──────────────────────────────────────────────────────────────────
test.describe('Footer', () => {
  test('Footer-Logo ist sichtbar', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('footer img[alt="Kübler Gerüstbau"]');
    await expect(logo).toBeVisible();
  });

  test('Footer-Link Impressum ist korrekt', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer a[href="/impressum"]')).toBeVisible();
  });

  test('Footer-Link AGB ist korrekt', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer a[href="/agb"]')).toBeVisible();
  });

  test('Footer-Link Datenschutz ist korrekt', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer a[href="/privacy"]')).toBeVisible();
  });
});

// ─── KONTAKTFORMULAR (Auf der Startseite) ────────────────────────────────────
test.describe('Kontakt-Sektion', () => {
  test('Überschrift "Kontaktieren Sie Uns" ist sichtbar', async ({ page }) => {
    await page.goto('/#contact');
    await expect(page.getByText('Kontaktieren Sie Uns')).toBeVisible();
  });

  test('Name-Feld ist vorhanden und ausfüllbar', async ({ page }) => {
    await page.goto('/');
    const input = page.getByPlaceholder('Vollständiger Name');
    await expect(input).toBeVisible();
    await input.fill('Test User');
    await expect(input).toHaveValue('Test User');
  });

  test('E-Mail-Feld ist vorhanden und ausfüllbar', async ({ page }) => {
    await page.goto('/');
    const input = page.getByPlaceholder('E-Mail Adresse');
    await expect(input).toBeVisible();
    await input.fill('test@example.com');
    await expect(input).toHaveValue('test@example.com');
  });

  test('Submit-Button ist sichtbar', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });
});

// ─── RECHTLICHE SEITEN ───────────────────────────────────────────────────────
test.describe('Rechtliche Seiten', () => {
  for (const [name, path] of [
    ['Impressum', '/impressum'],
    ['AGB', '/agb'],
    ['Datenschutz', '/privacy'],
  ]) {
    test(`${name} lädt mit Status 200`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
    });

    test(`${name}: Keine JS-Konsolenfehler`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', err => errors.push(err.message));
      await page.goto(path);
      await page.waitForTimeout(1500);
      expect(errors).toHaveLength(0);
    });
  }
});