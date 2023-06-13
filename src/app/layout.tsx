import '../styles/globals.css'
import { Providers } from './providers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Public Assembly - Caisson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
