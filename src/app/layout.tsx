import './globals.css';
import { Work_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const worksans = Work_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'River City Leaders Forum',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={worksans.className}>{children}</body>
      <Analytics />
    </html>
  );
}
