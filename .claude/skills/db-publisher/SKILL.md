# db-publisher

Supabase 아카이브 테이블에 처리된 아이템을 저장하고, agent_state 테이블에서 텔레그램 offset을 관리합니다.

## 스크립트

- `save_item.ts` — archive 테이블에 아이템 INSERT
- `manage_offset.ts` — agent_state 테이블에서 telegram_offset 읽기/쓰기

## 환경변수

- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

## 주의

- service_role 키 사용 (RLS 우회)
- offset은 마지막 처리한 update_id + 1 값
