import ClientLayout from '../components/ClientLayout/ClientLayout';
import StyledComponentsRegistry from '../components/registry';
import { fontVariables } from '@/lib/fonts';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
