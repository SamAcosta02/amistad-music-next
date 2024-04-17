import React, { ReactNode } from 'react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Navbar from '@/components/navbar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default Layout;
