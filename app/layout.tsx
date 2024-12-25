import ClientLayout from '../components/ClientLayout/ClientLayout';
import StyledComponentsRegistry from '../components/registry';
import { fontVariables } from '@/lib/fonts';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wini & Valentin - 1st March 2025',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
