import { createClient } from '@supabase/supabase-js';

export interface DuplicateCheckResult {
  isDuplicate: boolean;
  existingTitle?: string;
}

export async function checkDuplicate(
  url: string,
): Promise<DuplicateCheckResult> {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { data } = await supabase
    .from('archive')
    .select('title')
    .eq('url', url)
    .single();

  return { isDuplicate: !!data, existingTitle: data?.title };
}
