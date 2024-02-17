import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Noto_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import Providers from '@providers/providers';
import '@styles/globals.css';

const Header = dynamic(() => import('@components/header/Header'));

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
    <html lang="en" className="dark" style={{"colorScheme": "dark"}} suppressHydrationWarning>
      <body className={`${inter.className}`}>
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
