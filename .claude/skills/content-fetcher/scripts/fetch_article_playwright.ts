import { chromium } from 'playwright';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';

import { ArticleData } from './fetch_article';

export async function fetchArticlePlaywright(
  url: string,
): Promise<ArticleData | null> {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    const html = await page.content();

    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (!article || (article.textContent?.length ?? 0) < 200) return null;

    return {
      title: article.title ?? '',
      content: article.textContent ?? '',
      author: article.byline ?? undefined,
    };
  } finally {
    await browser.close();
  }
}
