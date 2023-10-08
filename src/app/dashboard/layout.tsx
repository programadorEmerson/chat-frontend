import Menu from '@/components/menu';

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Menu>
      {children}
    </Menu>
  );
}
