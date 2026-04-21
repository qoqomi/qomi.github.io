import type { AppProps } from 'next/app';

import { DarkModeProvider } from '@/contexts/DarkModeContext';
import Layout from '@/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}
