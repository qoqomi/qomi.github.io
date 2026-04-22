# API Reference

Base URL: `/api`

---

## GET /api/archive

아카이브 아이템 목록 조회.

### Query Parameters

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `queue` | `Later \| Shortlist \| Archive` | 큐 필터 (생략 시 전체) |
| `type` | `youtube \| article` | 콘텐츠 타입 필터 (생략 시 전체) |
| `tag` | string | 태그 필터 (생략 시 전체) |

### Response

```json
[
  {
    "id": "uuid",
    "url": "https://...",
    "type": "article",
    "title": "제목",
    "summary": "요약 텍스트",
    "tags": ["태그1", "태그2"],
    "queue": "Later",
    "memo": null,
    "created_at": "2026-04-22T00:00:00Z",
    "read_at": null
  }
]
```

---

## PATCH /api/archive

아이템의 큐 또는 메모 수정.

### Request Body

```json
{
  "id": "uuid",
  "queue": "Shortlist",
  "memo": "나중에 다시 읽기"
}
```

| 필드 | 필수 | 설명 |
|-----|------|------|
| `id` | ✅ | 수정할 아이템 ID |
| `queue` | ❌ | 새 큐 값 |
| `memo` | ❌ | 새 메모 (빈 문자열로 삭제 가능) |

### Response

```json
{ "success": true }
```
