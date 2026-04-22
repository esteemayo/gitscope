import type { Metadata } from 'next';
import { Poppins, Roboto_Mono } from 'next/font/google';

import MainLayout from '@/components/layout/MainLayout';
import './globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GitScope',
  description: 'A GitHub analytics dashboard for visualizing developer repository insights.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${poppins.className} ${roboto.className}`}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
