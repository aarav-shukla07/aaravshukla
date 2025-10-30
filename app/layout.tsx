// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Or your chosen font
import './globals.css';
import Header from '@/components/header'; // Adjust path if needed

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My new portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Your new header is here! */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}