# 링크 아카이빙 에이전트

## 역할 및 목적

Slack에서 URL을 수신하여 콘텐츠를 자동 분석·요약한 뒤 Supabase DB에 저장합니다.  
Next.js 블로그의 `/archive` 탭에서 저장된 아이템을 확인할 수 있습니다.

## 실행 방법

GitHub Actions (`archive-agent.yml`)가 스케줄에 따라 자동 실행합니다.

```bash
# 수동 실행
npx ts-node -p tsconfig.agent.json agent/index.ts
```

## 워크플로우 (9단계)

1. **Slack 폴링** — `conversations.history` 호출, `slack_last_ts` 이후 메시지만 수신. 새 메시지 없으면 즉시 종료
2. **URL 유효성 검사** — 형식 정규식 + HTTP 접근 확인
3. **중복 URL 확인** — Supabase archive 테이블 조회
4. **콘텐츠 타입 판별** — youtube.com/youtu.be → `youtube`, 나머지 → `article`
5-A. **YouTube 수집** — YouTube Data API v3 + youtube-transcript (없으면 description 폴백)
5-B. **웹 크롤링** — Cheerio + @mozilla/readability → 실패 시 Playwright 폴백 (timeout: 30s)
6. **AI 처리** — gpt-4o-mini: 제목 정제 + 3~5문장 요약 + 태그 3~5개
7. **스키마 검증** — title/summary/tags 전부 존재, tags 1개 이상
8. **DB 저장** — archive 테이블 INSERT (queue: Later)
9. **Slack 완료 응답** — 제목 + 태그 + /archive 링크

## 스킬 호출 순서

| 단계 | 스킬 파일 |
|------|----------|
| 시작 시 | `slack-poller/scripts/poll_messages.ts` |
| URL 수신 후 | `content-fetcher/scripts/validate_url.ts` |
| 검증 통과 후 | `content-fetcher/scripts/check_duplicate.ts` |
| youtube | `content-fetcher/scripts/fetch_youtube.ts` |
| article | `content-fetcher/scripts/fetch_article.ts` → 실패 시 `fetch_article_playwright.ts` |
| AI 처리 후 | `db-publisher/scripts/save_item.ts` |
| 완료 | `slack-poller/scripts/send_response.ts` |
| 마지막 | `db-publisher/scripts/manage_offset.ts` (setOffset) |

## 에러 처리 원칙

| 단계 | 실패 시 동작 |
|------|------------|
| URL 유효성 | Slack 에러 응답 후 스킵 (재시도 없음) |
| 중복 확인 | Slack 알림 후 스킵 |
| 콘텐츠 수집 | Playwright 폴백 1회 |
| AI 처리 | 최대 2회 재시도 후 스킵 |
| DB 저장 | 1회 재시도 후 Slack 알림 |

## 출력 JSON 형식 (AI 처리 결과)

```json
{
  "title": "정제된 제목",
  "summary": "핵심 인사이트 3~5문장 요약",
  "tags": ["태그1", "태그2", "태그3"]
}
```

## 환경변수 목록

### GitHub Actions Secrets
```
SLACK_BOT_TOKEN
SLACK_CHANNEL_ID
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
YOUTUBE_API_KEY
OPENAI_API_KEY
SITE_URL
```

### Vercel Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## offset 관리

Slack `conversations.history`의 중복 처리 방지를 위해 마지막 처리한 메시지의 `ts` 값을 Supabase `agent_state` 테이블에 저장합니다.

```sql
-- agent_state 테이블
key: "slack_last_ts"
value: "1234567890.123456"
```
