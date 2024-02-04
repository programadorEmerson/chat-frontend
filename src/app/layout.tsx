import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AppBarApplication from '@/components/AppBar';

import ContextsProvider from '@/contexts';

import './_app.css';

import { StyledDefaultLayout } from '@/styles/pages/home';
import { StyledContainerLimit } from '@/styles/shared';

const inter = Inter({ subsets : ['latin'] });

export const metadata: Metadata = { title : 'Chat App', description : 'Projeto de estudos Next13' };

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <ContextsProvider>
          <AppBarApplication />
          <StyledDefaultLayout className='bg-slate-50'>
            <StyledContainerLimit>
              {children}
            </StyledContainerLimit>
          </StyledDefaultLayout>
        </ContextsProvider>
      </body>
    </html>
  );
}
