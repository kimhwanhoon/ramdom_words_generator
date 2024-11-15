import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Random Words Generator',
  description: 'Get random words for your project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
