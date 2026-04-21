# content-fetcher

URL 유효성 검사, 중복 확인, 콘텐츠 타입 판별, 웹/YouTube 콘텐츠 수집을 담당합니다.

## 스크립트

- `validate_url.ts` — URL 형식 검사 + HTTP 접근 가능 여부 확인 + 타입 판별
- `check_duplicate.ts` — Supabase archive 테이블에서 URL 중복 여부 확인
- `fetch_article.ts` — Cheerio + @mozilla/readability로 본문 추출
- `fetch_article_playwright.ts` — JS 렌더링 필요 시 Playwright 폴백 (timeout: 30s)
- `fetch_youtube.ts` — YouTube Data API v3 + youtube-transcript로 메타데이터 수집

## 환경변수

- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- `YOUTUBE_API_KEY`

## 성공 기준

- article: 본문 텍스트 200자 이상
- youtube: title 필드 존재
