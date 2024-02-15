import type { Metadata } from 'next';
import { Noto_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import Providers from '@providers/providers';
import '@styles/globals.css';

import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';

const inter = Noto_Sans({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    default: "Moonbami",
    template: "Moonbami | %s"
  },
  description: 'An aspiring full-stack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-rich-black ${inter.className}`}>
        <Providers >
          <Header />
          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  )
}
