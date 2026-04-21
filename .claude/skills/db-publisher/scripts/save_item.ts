import { createClient } from '@supabase/supabase-js';

export interface ArchivePayload {
  url: string;
  type: 'youtube' | 'article';
  title: string;
  summary: string;
  tags: string[];
  queue: 'Later';
}

export async function saveItem(item: ArchivePayload): Promise<void> {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { error } = await supabase.from('archive').insert({
    ...item,
    created_at: new Date().toISOString(),
  });

  if (error) throw new Error(`DB 저장 실패: ${error.message}`);
}
