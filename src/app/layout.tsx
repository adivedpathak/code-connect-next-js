// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { SocketProvider } from '@/providers/socketProvider';
import { ClerkProvider } from '@clerk/nextjs';

// Inter font
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Code Connect - Real-time Collaborative Coding',
  description: 'Join a room, share your code, and build amazing projects together.',
  icons: [
    { rel: 'icon', url: '/main.svg' },
    { rel: 'icon', url: '/main.svg', sizes: '32x32', type: 'image/png' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ClerkProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SocketProvider>
              {children}
              <Toaster expand={false} position="top-center" richColors theme="dark" />
            </SocketProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
