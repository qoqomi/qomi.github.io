import * as cheerio from 'cheerio';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';

export interface ArticleData {
  title: string;
  content: string;
  author?: string;
}

export async function fetchArticle(url: string): Promise<ArticleData | null> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ArchiveBot/1.0)' },
      signal: AbortSignal.timeout(15000),
    });
    const html = await res.text();

    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (!article || (article.textContent?.length ?? 0) < 200) {
      // Readability 실패 시 cheerio로 단순 텍스트 추출 시도
      const $ = cheerio.load(html);
      $('script, style, nav, header, footer, aside').remove();
      const text = $('body').text().replace(/\s+/g, ' ').trim();
      if (text.length < 200) return null;
      return {
        title: $('title').text().trim(),
        content: text,
      };
    }

    return {
      title: article.title ?? '',
      content: article.textContent ?? '',
      author: article.byline ?? undefined,
    };
  } catch {
    return null;
  }
}
