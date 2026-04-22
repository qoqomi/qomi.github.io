# Gatsby → Next.js 마이그레이션 노트

## 주요 변경 사항

| 항목 | Gatsby | Next.js |
|------|--------|---------|
| 데이터 페칭 | `useStaticQuery` / GraphQL | `getStaticProps` / `getStaticPaths` |
| 이미지 | `gatsby-plugin-image` / `GatsbyImage` | `next/image` (`fill` + `position: relative` 컨테이너) |
| 링크 | `gatsby/link` | `next/link` |
| 마크다운 | `gatsby-remark-*` | `gray-matter` + `next-mdx-remote` |
| Emotion SSR | `gatsby-plugin-emotion` | `_document.tsx` + `extractCritical` |
| 404 | `src/pages/404.js` | `src/pages/404.tsx` |
| 라우팅 | `gatsby-node.js` `createPage` | `pages/blog/[slug].tsx` |

## 이미지 처리

마크다운 frontmatter의 `thumbnail: './thumbnail.jpeg'`는 `src/lib/posts.ts`에서 `/images/thumbnail.jpeg`로 정규화됨.

실제 이미지 파일 위치: `public/images/`

## 환경변수

`.env.local` 파일 생성 후 아래 값 설정:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

## Supabase 초기화

`docs/db-schema.md` SQL을 Supabase SQL Editor에서 순서대로 실행.

## 삭제된 파일

- `gatsby-config.js`
- `gatsby-node.js`
- `gatsby-browser.js`
- `gatsby-ssr.js`
- `src/gatsby-types.d.ts`
- `src/templates/post_template.tsx`
- `contents/` (→ `content/` 으로 이동)
