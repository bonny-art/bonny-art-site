import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(manrope.variable)}>{children}</body>
    </html>
  );
}
