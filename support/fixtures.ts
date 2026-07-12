import { test as base, expect } from "@playwright/test";
import { CommonPage } from "../pageobjects/CommonPage";
import { SavedNewsPage } from "../pageobjects/SavedNewsPage";
import { UkgcommonsPage } from "../pageobjects/UkgcommonsPage";

type AppFixtures = {
  commonPage: CommonPage;
  savedNewsPage: SavedNewsPage;
  ukgcommonsPage: UkgcommonsPage;
};

export const test = base.extend<AppFixtures>({
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
  savedNewsPage: async ({ page }, use) => {
    await use(new SavedNewsPage(page));
  },
  ukgcommonsPage: async ({ page }, use) => {
    await use(new UkgcommonsPage(page));
  },
});

export { expect };
