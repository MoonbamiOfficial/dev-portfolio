
import type { Metadata } from 'next';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'Moonbami',
  description: 'An aspiring full-stack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-rich-black">
        {children}
      </body>
    </html>
  )
}
