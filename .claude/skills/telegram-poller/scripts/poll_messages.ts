export interface TelegramMessage {
  text: string;
  chat: { id: number };
  message_id: number;
}

export interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
}

export async function pollMessages(offset: number): Promise<TelegramUpdate[]> {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/getUpdates?offset=${offset}&timeout=0`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Telegram API error: ${res.status}`);
  const data = (await res.json()) as { ok: boolean; result: TelegramUpdate[] };
  return data.result ?? [];
}
