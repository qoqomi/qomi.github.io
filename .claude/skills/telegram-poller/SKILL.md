# telegram-poller

텔레그램 봇 API의 getUpdates를 호출해 새 메시지를 가져오고, 처리 완료 후 응답을 전송합니다.

## 스크립트

- `poll_messages.ts` — getUpdates(offset) 호출, 새 메시지 배열 반환
- `send_response.ts` — 지정된 chat_id로 텍스트 메시지 전송

## 환경변수

- `TELEGRAM_BOT_TOKEN` — BotFather에서 발급받은 봇 토큰

## 주의

- offset은 Supabase agent_state 테이블에서 읽어 전달해야 함
- 모든 처리가 끝난 뒤 마지막 update_id + 1을 offset으로 저장해야 중복 처리 방지
