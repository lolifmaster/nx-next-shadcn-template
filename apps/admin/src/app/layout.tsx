import './global.css';
import { Providers } from '@mono/ui';
import { cn } from '@mono/util';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Welcome to admin',
  description: 'Generated by create-nx-workspace',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn('relative h-full font-sans antialiased', inter.className)}
      >
        <Providers>
          <main className="relative flex min-h-screen flex-col">
            <div className="flex-1 flex-grow">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
