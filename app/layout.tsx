import type { Metadata } from 'next';
import { Geist_Mono, Roboto_Slab } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';
import { Separator } from '@/components/ui/separator';

const robotoSlab = Roboto_Slab({ variable: '--font-roboto-slab', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HistoQuiz — Made for Salyna 💜',
  description: 'Interactive histology quiz platform built with love for Salyna — MMS2200 ECU.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Separator />
        <footer className="bg-white/70 px-4 py-6 text-center text-sm text-muted-foreground">
          Made with <span className="text-rose-500">♥</span> for Salyna · HistoQuiz · MMS2200 · ECU Medical Laboratory Science
        </footer>
      </body>
    </html>
  );
}
