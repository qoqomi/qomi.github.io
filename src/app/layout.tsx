import React from 'react';
import LayoutClient from './layout-client';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
