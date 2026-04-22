# DB Schema

Supabase SQL Editor에서 아래 SQL을 순서대로 실행합니다.

---

## 1. archive 테이블

```sql
create type content_type as enum ('youtube', 'article');
create type queue_type as enum ('Later', 'Shortlist', 'Archive');

create table archive (
  id          uuid primary key default gen_random_uuid(),
  url         text not null unique,
  type        content_type not null,
  title       text not null,
  summary     text not null,
  tags        text[] not null default '{}',
  queue       queue_type not null default 'Later',
  memo        text,
  created_at  timestamptz not null default now(),
  read_at     timestamptz
);
```

## 2. agent_state 테이블

```sql
create table agent_state (
  key         text primary key,
  value       text not null,
  updated_at  timestamptz not null default now()
);

-- 초기 offset 삽입
insert into agent_state (key, value) values ('slack_last_ts', '0');
```

## 3. RLS 설정

```sql
-- archive: anon은 SELECT만, service_role은 모두
alter table archive enable row level security;

create policy "anon read" on archive
  for select using (true);

create policy "service insert" on archive
  for insert with check (auth.role() = 'service_role');

create policy "service update" on archive
  for update using (auth.role() = 'service_role');

-- agent_state: service_role만 접근
alter table agent_state enable row level security;

create policy "service all" on agent_state
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
```

## 4. 인덱스 (선택)

```sql
create index on archive (queue);
create index on archive (type);
create index on archive (created_at desc);
create index on archive using gin (tags);
```
