import type { Metadata } from 'next';

import NotFound from '@/components/404/NotFound';

export const metadata: Metadata = { title: '404' };

export default function NotFoundPage() {
  return <NotFound />;
}
