import type { Metadata } from 'next';

import NotFound from '@/domains/404/NotFound';

export const metadata: Metadata = { title: '404' };

export default function NotFoundPage() {
  return <NotFound />;
}
