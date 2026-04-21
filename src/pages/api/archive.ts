import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { queue, type } = req.query;
    let query = supabase
      .from('archive')
      .select('*')
      .order('created_at', { ascending: false });

    if (queue && queue !== 'all') query = query.eq('queue', queue);
    if (type && type !== 'all') query = query.eq('type', type);

    const { data, error } = await query;
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'PATCH') {
    const { id, queue, memo } = req.body as {
      id: string;
      queue?: string;
      memo?: string;
    };
    if (!id) return res.status(400).json({ error: 'id is required' });

    const updates: Record<string, unknown> = {};
    if (queue !== undefined) updates.queue = queue;
    if (memo !== undefined) updates.memo = memo;

    const { data, error } = await supabase
      .from('archive')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
