import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class SavedNewsPage {
  private static readonly L = {
    mySavedNews: { strategy: 'role' as const, value: 'My saved news', role: 'button', actionKind: 'button' as const },
    ukgHomeQa: { strategy: 'role' as const, value: 'UKG Home QA', role: 'link', actionKind: 'link' as const },
    ai: { strategy: 'role' as const, value: 'AI', role: 'link', actionKind: 'link' as const },
    latestNews: { strategy: 'role' as const, value: 'Latest news', role: 'heading', level: 3, actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async clickUkgHomeQa(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa));
  }

  async expectUkgHomeQaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs, soft);
  }

  async clickAi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs, soft);
  }

  async getInnerTextLatestNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'UKG Commons', timeoutMs);
  }


  async longPressMySavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.mySavedNews), expected, timeoutMs);
  }

  async expectMySavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.mySavedNews), substring, timeoutMs);
  }

  async expectMySavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.mySavedNews), value, timeoutMs);
  }

  async expectMySavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.mySavedNews), count, timeoutMs);
  }

  async scrollMySavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickUkgHomeQa(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa));
  }

  async longPressUkgHomeQa(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa));
  }

  async expectUkgHomeQaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), expected, timeoutMs);
  }

  async expectUkgHomeQaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), substring, timeoutMs);
  }

  async expectUkgHomeQaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), value, timeoutMs);
  }

  async expectUkgHomeQaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), timeoutMs);
  }

  async expectUkgHomeQaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ukgHomeQa), count, timeoutMs);
  }

  async scrollUkgHomeQaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ukgHomeQa));
  }

  async doubleClickAi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async longPressAi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ai), expected, timeoutMs);
  }

  async expectAiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ai), substring, timeoutMs);
  }

  async expectAiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ai), value, timeoutMs);
  }

  async expectAiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ai), count, timeoutMs);
  }

  async scrollAiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async clickLatestNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async doubleClickLatestNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async longPressLatestNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.latestNews), expected, timeoutMs);
  }

  async expectLatestNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.latestNews), substring, timeoutMs);
  }

  async expectLatestNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.latestNews), value, timeoutMs);
  }

  async expectLatestNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.latestNews), count, timeoutMs);
  }

  async scrollLatestNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

}
