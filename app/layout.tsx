import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mashcole Property Management, Inc.',
  description: 'Property Management in Los Angeles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body role="document">{children}</body>
    </html>
  )
}
