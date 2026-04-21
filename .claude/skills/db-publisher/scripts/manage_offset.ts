import { createClient } from '@supabase/supabase-js';

function getClient() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}

export async function getOffset(): Promise<number> {
  const { data } = await getClient()
    .from('agent_state')
    .select('value')
    .eq('key', 'telegram_offset')
    .single();
  return data ? parseInt(data.value as string, 10) : 0;
}

export async function setOffset(offset: number): Promise<void> {
  await getClient()
    .from('agent_state')
    .upsert(
      {
        key: 'telegram_offset',
        value: String(offset),
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'key' },
    );
}
