import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ContextsProvider from '@/contexts';

const inter = Inter({ subsets : ['latin'] });

export const metadata: Metadata = { title : 'Chat App', description : 'Projeto de estudos Next13' };

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang='en'>
      <body className={inter.className}>
        <ContextsProvider>
          {children}
        </ContextsProvider>
      </body>
    </html>
  );
}
