import React from 'react';
import type { Metadata } from 'next';

import LayoutClient from './layout-client';

export const metadata: Metadata = {
  title: {
    default: 'My Blog',
    template: '%s - My Blog',
  },
  description: '개인 기술 블로그입니다.',
  keywords: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'FrontEnd'],
  authors: [{ name: '유승연' }],
  openGraph: {
    type: 'website',
    siteName: '유승연 블로그',
  },
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    other: {
      'naver-site-verification': ['2cc40621eb11418be5791db057b14a2d2cc2800c'],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
