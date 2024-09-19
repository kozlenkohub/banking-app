import type { Metadata } from 'next';
import { Inter, IBM_Plex_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
});

export const metadata: Metadata = {
  title: 'January Bank – The best bank for your financial needs',
  icons: '/icons/logo.svg',
  description:
    'January Bank is the best bank for your financial needs. We offer a wide range of services, including checking and savings accounts, credit cards, loans, and more. Our goal is to help you achieve your financial goals and live a better life. Join January Bank today and experience the difference!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
