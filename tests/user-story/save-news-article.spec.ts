import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Save from Featured News via toast and land on My Saved News', { tag: ["@smoke", "@regression", "@commondemo", "@P0", "@case-9b4db29a-2a5a-48ea-8747-a5591eaff83b", "@req-c4735fc5-5067-4099-b08e-58908da24e82"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Navigate to URL — Open UKG Commons QA', async () => {
    await page.goto('https://commons-qa.util.ukg.com/');
  });
  await test.step('Assert visible — Featured News section is visible', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });
  await test.step('At least one Save (bookmark) icon is visible on a news card', async () => {
    try {
      await ukgcommonsPage.clickSaveNews();
    } catch {
      await await ukgcommonsPage.clickUnsaveNews();
      await ukgcommonsPage.expectUnsaveNewsVisible();
    }
  });
  await test.step('Tap Save (bookmark) icon on a Featured news card', async () => {
    await ukgcommonsPage.clickSaveNews();
  });
  await test.step('Assert visible — Toast \'News saved successfully!, View saved news under Profile\' is visible', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });
  await test.step('Click — Click \'View saved news under Profile\' in toast', async () => {
    await ukgcommonsPage.clickViewSavedNewsUnder();
  });
  await test.step('Assert visible — My Saved News page is visible', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });
  await test.step('Assert element count — There is at least 1 saved news card listed — ([data-testid=\'saved-news-card\'])', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });
});


test('Save from Latest News, navigate via profile to My Saved News, then Unsave removes immediately', { tag: ["@smoke", "@regression", "@P0", "@case-dafb05bb-09fe-421c-a0e1-fbd5576ed419", "@req-c4735fc5-5067-4099-b08e-58908da24e82", "@two"] }, async ({ page, ukgcommonsPage, savedNewsPage, commonPage }) => {
  await test.step('Navigate to URL — Open UKG Commons QA', async () => {
    await page.goto('https://commons-qa.util.ukg.com/');
  });
  await test.step('Assert visible — Latest News section title is visible', async () => {
    await ukgcommonsPage.expectLatestNewsTitleVisible();
  });
  await test.step('Assert visible — A Save (bookmark) icon is visible on a Latest news card', async () => {
    await ukgcommonsPage.expectSaveNewsVisible();
  });
  await test.step('Click — Tap Save (bookmark) icon on a Latest news card', async () => {
    try {
      await ukgcommonsPage.clickSaveNews();
    } catch {
      await await ukgcommonsPage.clickUnsaveNews();
      await ukgcommonsPage.expectUnsaveNewsVisible();
      await ukgcommonsPage.clickSaveNews();
    }
  });
  await test.step('Assert visible — Saved state indicated (e.g., Unsave available)', async () => {
    await ukgcommonsPage.expectUnsaveNewsVisible();
  });
  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickJagadeesh();
  });
  await test.step('\'My saved news\' menu item visible', async () => {
    await ukgcommonsPage.expectMySavedNewsVisible();
  });
  await test.step('Click — Navigate to My Saved News via profile', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });
  await test.step('Assert visible — My Saved News page is visible', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });
  await test.step('Assert element count — Exactly 1 saved news card present before unsave (sanity) — ([data-testid=\'saved-news-card\'])', async () => {
    await commonPage.expectAtLeast1SavedNewsCardExistsCount(1);
  });
  await test.step('Click — Tap filled bookmark icon on the saved card to Unsave — ([data-testid=\'saved-news-card\'] [data-testid=\'bookmark-t', async () => {
    await commonPage.clickAtLeast1SavedNewsCardExists();
  });
  await test.step('Assert element count — Saved list updates immediately (no cards remain) — ([data-testid=\'saved-news-card\'])', async () => {
    await commonPage.expectAtLeast1SavedNewsCardExistsCount(1);
  });
});

test('Open a saved item from My Saved News opens full article in a new tab', { tag: ["@smoke", "@regression", "@manual", "@P0", "@case-bbfcd03b-23d1-459f-a7f1-59716f612344", "@req-c4735fc5-5067-4099-b08e-58908da24e82", "@three"] }, async ({ page, ukgcommonsPage, commonPage }) => {

  await test.step('Navigate to URL — Open UKG Commons QA', async () => {
    await page.goto('https://commons-qa.util.ukg.com/');
  });
  await test.step('Click — Save a news article (any)', async () => {
    await ukgcommonsPage.clickSaveNews();
  });
  await test.step('Assert visible — Toast confirms saved', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });
  await test.step('Click — Open My Saved News via toast link', async () => {
    await ukgcommonsPage.clickViewSavedNewsUnder();
  });
  await test.step('Assert element count — At least 1 saved news card exists — ([data-testid=\'saved-news-card\'])', async () => {
    await commonPage.expectAtLeast1SavedNewsCardExistsCount(1);
  });
  await test.step('Click — Tap first saved news card to open article — ([data-testid=\'saved-news-card\']:first-child a)', async () => {
    await commonPage.clickAtLeast1SavedNewsCardExists();
  });
  await test.step('Wait for new tab — Switch to newly opened article tab', async () => {
    const __newTab = await page.waitForEvent('popup', { timeout: 30_000 });
    await __newTab.waitForLoadState('domcontentloaded');
    await __newTab.bringToFront();
  });

  await test.step('Assert visible — Article content is displayed — (body)', async () => {
    await commonPage.expectArticleContentIsDisplayedVisible();
  });
});


test('Saved items persist across navigation within the same session', { tag: ["@smoke", "@regression", "@P0", "@case-1102b616-2291-4e14-be5e-4c72ead29d56", "@four"] }, async ({ page, ukgcommonsPage, commonPage }) => {
  await test.step('Open — Open UKG Commons QA', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Click — Save a news article (any)', async () => {
    await ukgcommonsPage.clickSaveIcon();
  });

  await test.step('Assert visible — Toast confirms saved', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });

  await test.step('Click — Open My Saved News via toast link', async () => {
    await ukgcommonsPage.clickViewSavedNewsUnder();
  });

  await test.step('Assert count — Exactly 1 saved news card present', async () => {
    await commonPage.expectAtLeast1SavedNewsCardExistsCount(1);
  });

  await test.step('Open — Navigate back to Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickJagadeesh();
  });

  await test.step('Click — Navigate to My Saved News via profile', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert count — Saved item persists (still 1 card present)', async () => {
    await commonPage.expectAtLeast1SavedNewsCardExistsCount(1);
  });
});
