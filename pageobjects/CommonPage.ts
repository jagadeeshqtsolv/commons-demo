import type { Locator, Page } from "@playwright/test";
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

export class CommonPage {
  private static readonly L = {
    atLeast1SavedNewsCardExists: { strategy: 'testId' as const, value: 'saved-news-card', actionKind: 'generic' as const },
    articleContentIsDisplayed: { strategy: 'css' as const, value: 'body', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) { }


  async clickAtLeast1SavedNewsCardExists(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists));
  }

  async doubleClickAtLeast1SavedNewsCardExists(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists));
  }

  async longPressAtLeast1SavedNewsCardExists(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists));
  }

  async expectAtLeast1SavedNewsCardExistsVisible(timeoutMs = 10_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsHidden(timeoutMs = 10_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsText(expected: string, timeoutMs = 10_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), expected, timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsContainsText(substring: string, timeoutMs = 10_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), substring, timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsValue(value: string, timeoutMs = 10_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), value, timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsEnabled(timeoutMs = 10_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsDisabled(timeoutMs = 10_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsChecked(timeoutMs = 10_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsUnchecked(timeoutMs = 10_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsFocused(timeoutMs = 10_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), timeoutMs);
  }

  async expectAtLeast1SavedNewsCardExistsCount(count: number, timeoutMs = 10_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists), count, timeoutMs);
  }

  async scrollAtLeast1SavedNewsCardExistsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.atLeast1SavedNewsCardExists));
  }


  async clickArticleContentIsDisplayed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.articleContentIsDisplayed));
  }

  async doubleClickArticleContentIsDisplayed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.articleContentIsDisplayed));
  }

  async longPressArticleContentIsDisplayed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.articleContentIsDisplayed));
  }

  async expectArticleContentIsDisplayedVisible(timeoutMs = 10_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), timeoutMs);
  }

  async expectArticleContentIsDisplayedHidden(timeoutMs = 10_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), timeoutMs);
  }

  async expectArticleContentIsDisplayedText(expected: string, timeoutMs = 10_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), expected, timeoutMs);
  }

  async expectArticleContentIsDisplayedContainsText(substring: string, timeoutMs = 10_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), substring, timeoutMs);
  }

  async expectArticleContentIsDisplayedValue(value: string, timeoutMs = 10_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), value, timeoutMs);
  }

  async expectArticleContentIsDisplayedEnabled(timeoutMs = 10_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), timeoutMs);
  }

  async expectArticleContentIsDisplayedDisabled(timeoutMs = 10_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), timeoutMs);
  }

  async expectArticleContentIsDisplayedChecked(timeoutMs = 10_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), timeoutMs);
  }

  async expectArticleContentIsDisplayedUnchecked(timeoutMs = 10_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), timeoutMs);
  }

  async expectArticleContentIsDisplayedFocused(timeoutMs = 10_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), timeoutMs);
  }

  async expectArticleContentIsDisplayedCount(count: number, timeoutMs = 10_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.articleContentIsDisplayed), count, timeoutMs);
  }

  async scrollArticleContentIsDisplayedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.articleContentIsDisplayed));
  }

}
