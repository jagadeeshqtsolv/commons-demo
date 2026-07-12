import { test as base, expect } from "@playwright/test";
import { SavedNewsPage } from "../pageobjects/SavedNewsPage";
import { UkgcommonsPage } from "../pageobjects/UkgcommonsPage";

type AppFixtures = {
  savedNewsPage: SavedNewsPage;
  ukgcommonsPage: UkgcommonsPage;
};

export const test = base.extend<AppFixtures>({
  savedNewsPage: async ({ page }, use) => {
    await use(new SavedNewsPage(page));
  },
  ukgcommonsPage: async ({ page }, use) => {
    await use(new UkgcommonsPage(page));
  },
});

export { expect };
