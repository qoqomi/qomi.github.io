'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import GlobalStyle from 'styles/GlobalStyle';
import Footer from './Footer';
import Header from './Header';
import { LayoutWrap, Main } from './Layout.style';

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <LayoutWrap>
      <GlobalStyle />
      <Header />
      <Main key={pathname}>{children}</Main>
      <Footer />
    </LayoutWrap>
  );
}

export default Layout;
