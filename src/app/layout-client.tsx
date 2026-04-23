'use client';

import React from 'react';

import EmotionRegistry from '@/lib/emotion-registry';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import Layout from '@/components/Layout/Layout';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <EmotionRegistry>
      <DarkModeProvider>
        <Layout>{children}</Layout>
      </DarkModeProvider>
    </EmotionRegistry>
  );
}
