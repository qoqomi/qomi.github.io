---
date: '2026-04-27'
title: 'SQL 기본 문법과 Oracle 특이사항 정리'
category: 'TIL'
summary: 'SELECT, DISTINCT, COUNT 등 SQL 기본 문법과 Oracle 전용 문법(ROWNUM, 계층형 쿼리)을 정리했다.'
---

## SQL 기본

```sql
SELECT 컬럼 FROM 테이블 WHERE 조건
```

- `DISTINCT` — 중복 제거
- `COUNT()` — 개수

---

## Oracle 특이사항

| 일반 SQL | Oracle |
|---|---|
| `LIMIT 5` | `ROWNUM <= 5` |
| `DESC 테이블명` | `user_tab_columns` |
| 테이블 목록 | `user_tables` |

---

## 테이블 구조 파악

| 조건 | 의미 |
|---|---|
| NOT NULL (NN/TRUE) | 필수 컬럼 |
| DEFAULT 있음 | 생략 가능 |
| AUTO_INCREMENT | 자동 생성 |

---

## INSERT 순서

1. 구조 확인 (`user_tab_columns`)
2. 중복 확인 (`SELECT`)
3. `INSERT`
4. 결과 확인 (`SELECT`)

---

## 계층형 쿼리 (Oracle)

```sql
SELECT *
FROM 테이블
START WITH 조건        -- 시작점
CONNECT BY PRIOR 부모 = 자식  -- 부모-자식 연결
ORDER SIBLINGS BY 컬럼  -- 같은 레벨 정렬
```

---

## 실무 INSERT 순서

```
부모 테이블 INSERT
→ 자식 테이블 INSERT
→ 매핑 테이블 INSERT
```
